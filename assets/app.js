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

  function wireBrand(cfg){
    wireText("[data-site-name]", cfg.siteName);
    wireText("[data-tagline]", cfg.tagline);
    document.title = cfg.siteName;
  }

  document.addEventListener("DOMContentLoaded", async ()=>{
    const cfg = await loadConfig();
    wireBrand(cfg);
    applyPrelive(cfg);
    applyMetric(cfg);
  });
})();
