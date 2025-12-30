(function(){
  const DEFAULT = {
    siteName: "UCAHub",
    tagline: "Understanding Cyber-Aggression through AI Use, Trust, and Personality Factors",
    isLive: false,
    lastUpdated: "",
    statusMessage: "Not live yet: awaiting Ethics approval."
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

  function applyPrelive(cfg){
    const prelive = !cfg.isLive;
    document.body.classList.toggle("prelive", prelive);

    // Update status pill and notice
    setText("statusText", prelive ? cfg.statusMessage : "Live");
    setText("lastUpdated", cfg.lastUpdated ? ("Last updated: " + cfg.lastUpdated) : "");

    // Disable elements marked as requiring live state
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

  function wireBrand(cfg){
    document.querySelectorAll("[data-site-name]").forEach(el=>el.textContent = cfg.siteName);
    document.querySelectorAll("[data-tagline]").forEach(el=>el.textContent = cfg.tagline);
    document.title = cfg.siteName;
  }

  document.addEventListener("DOMContentLoaded", async ()=>{
    const cfg = await loadConfig();
    wireBrand(cfg);
    applyPrelive(cfg);
  });
})();
