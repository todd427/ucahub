// UCA Viva canonical bank (HRL-correct). Viva-mode only.
// Derived at load time from the shared source /quiz/viva-bank.js (window.VIVA_BANK).
// Do NOT edit question content here — edit quiz/viva-bank.js. This file only maps
// the shared {id,cat,weight,q,a,warn} schema into the site quiz's QUIZ_QUESTIONS schema.
(function(){
  if(typeof QUIZ_QUESTIONS==='undefined'){window.QUIZ_QUESTIONS=[];}
  var BANK=(typeof window!=='undefined' && window.VIVA_BANK) || [];
  function slug(c){return String(c).toLowerCase().replace(/&/g,"").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g,"-");}
  function pad(n){return String(n).padStart(3,"0");}
  var V=BANK.map(function(q,i){
    return {
      id:"vc_"+pad(i+1),
      category:"viva-canonical",
      difficulty:q.weight,
      mode:"viva",
      type:"shortanswer",
      question:q.q,
      explanation:q.warn ? (q.a+"  —  VIVA TACTIC: "+q.warn) : q.a,
      reference:"McCaffrey, T. (2026). UCA dissertation — canonical figures.",
      tags:[slug(q.cat)]
    };
  });
  Array.prototype.push.apply(QUIZ_QUESTIONS,V);
})();
