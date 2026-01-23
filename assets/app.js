(function(){
  const DEFAULT = {
    siteName: "UCAHub",
    tagline: "Understanding Cyber-Aggression through AI Use, Trust, and Personality Factors",
    isLive: false,
    lastUpdated: "",
    statusMessage: "Not live yet: awaiting Ethics approval.",
    metricName: "Data received",
    metricUnit: "responses",
    metricCurrent: 0,
    metricTarget: 500,
    metricNote: "This thermometer reflects responses collected (not overall project completion)."
  };

  const THEMES = [
    { key: "bright", label: "Upbeat" },
    { key: "dark", label: "Dark" },
    { key: "paper", label: "Paper" }
  ];
  const THEME_STORAGE_KEY = "ucahub_theme";

  const FONT_STORAGE_KEY = "ucahub_font_scale";
  const FONT_MIN = 0.90;
  const FONT_MAX = 1.25;
  const FONT_STEP = 0.06;

  async function loadConfig(){
    try{
      const res = await fetch("/site.json", {cache:"no-store"});
      if(!res.ok) throw new Error("Bad status");
      return Object.assign({}, DEFAULT, await res.json());
    }catch(e){
      return DEFAULT;
    }
  }

  function setText(id, value){
    const el = document.getElementById(id);
    if(el) el.textContent = value;
  }

  function wireText(selector, value){
    document.querySelectorAll(selector).forEach(el=>el.textContent = value);
  }

  function clamp(n, lo, hi){ return Math.max(lo, Math.min(hi, n)); }

  function applyPrelive(cfg){
    const prelive = !cfg.isLive;
    document.body.classList.toggle("prelive", prelive);

    setText("statusText", prelive ? cfg.statusMessage : "Live");
    setText("lastUpdated", cfg.lastUpdated ? ("Last updated: " + cfg.lastUpdated) : "");

    document.querySelectorAll("[data-requires-live='true']").forEach(el=>{
      if(prelive){
        el.setAttribute("aria-disabled","true");
        el.setAttribute("tabindex","-1");
        if(el.tagName.toLowerCase()==="a"){
          el.dataset.href = el.getAttribute("href") || "";
          el.removeAttribute("href");
        }
      }else{
        el.removeAttribute("aria-disabled");
        el.removeAttribute("tabindex");
        if(el.tagName.toLowerCase()==="a" && el.dataset.href){
          el.setAttribute("href", el.dataset.href);
        }
      }
    });
  }

  function applyMetric(cfg){
    const cur = Number(cfg.metricCurrent ?? 0);
    const tgt = Number(cfg.metricTarget ?? 0);
    const pct = (tgt > 0) ? clamp((cur / tgt) * 100, 0, 100) : 0;

    wireText("[data-metric-name]", cfg.metricName || "Data received");
    wireText("[data-metric-note]", cfg.metricNote || "");
    wireText("[data-metric-current]", String(cur));
    wireText("[data-metric-target]", String(tgt));
    wireText("[data-metric-unit]", cfg.metricUnit || "");

    document.querySelectorAll(".thermo[data-kind='metric']").forEach(t=>{
      t.style.setProperty("--fill", pct + "%");
    });
  }

  function setTheme(themeKey){
    document.body.classList.toggle("theme-bright", themeKey === "bright");
    document.body.classList.toggle("theme-paper", themeKey === "paper");
    // dark = default when neither class present

    const t = THEMES.find(x=>x.key===themeKey) || THEMES[0];
    localStorage.setItem(THEME_STORAGE_KEY, t.key);

    const btn = document.getElementById("themeToggle");
    if(btn){
      btn.setAttribute("aria-label", "Theme: " + t.label + ". Click to switch.");
      const label = btn.querySelector("[data-theme-label]");
      if(label) label.textContent = t.label;
    }
  }

  function initTheme(){
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    const initial = THEMES.some(t=>t.key===saved) ? saved : "bright";
    setTheme(initial);

    const btn = document.getElementById("themeToggle");
    if(btn){
      btn.addEventListener("click", ()=>{
        const current = localStorage.getItem(THEME_STORAGE_KEY) || "bright";
        const idx = THEMES.findIndex(t=>t.key===current);
        const next = THEMES[(idx + 1) % THEMES.length].key;
        setTheme(next);
      });
    }
  }

  function setFontScale(scale){
    const s = clamp(scale, FONT_MIN, FONT_MAX);
    document.documentElement.style.setProperty("--font-scale", String(s));
    localStorage.setItem(FONT_STORAGE_KEY, String(s));
    const label = document.getElementById("fontLabel");
    if(label) label.textContent = Math.round(s * 100) + "%";
  }

  function initFontScale(){
    const saved = parseFloat(localStorage.getItem(FONT_STORAGE_KEY) || "1");
    setFontScale(isFinite(saved) ? saved : 1);

    const dec = document.getElementById("fontDec");
    const inc = document.getElementById("fontInc");
    const reset = document.getElementById("fontReset");

    if(dec) dec.addEventListener("click", ()=>{
      const s = parseFloat(localStorage.getItem(FONT_STORAGE_KEY) || "1");
      setFontScale((isFinite(s) ? s : 1) - FONT_STEP);
    });
    if(inc) inc.addEventListener("click", ()=>{
      const s = parseFloat(localStorage.getItem(FONT_STORAGE_KEY) || "1");
      setFontScale((isFinite(s) ? s : 1) + FONT_STEP);
    });
    if(reset) reset.addEventListener("click", ()=> setFontScale(1));
  }

  function wireBrand(cfg){
    wireText("[data-site-name]", cfg.siteName);
    wireText("[data-tagline]", cfg.tagline);
    document.title = cfg.siteName;
  }

  document.addEventListener("DOMContentLoaded", async ()=>{
    initTheme();
    initFontScale();
    const cfg = await loadConfig();
    wireBrand(cfg);
    applyPrelive(cfg);
    applyMetric(cfg);
  });
})();
