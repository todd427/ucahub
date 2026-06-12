// UCA Thesis Map — nodes and edges from the actual dissertation spine.
// Layered left-to-right: THEORY -> CONSTRUCTS -> OUTCOME/ANALYSIS -> FINDINGS -> SYNTHESIS/FUTURE.
// Each node: what it IS (own), and `say` = what Todd should be able to articulate cold.
// Each edge carries a `claim` = the connective sentence (the "knowing it backwards" move).

const MAP = {
  layers: ["Theory", "Constructs", "Outcome & Analysis", "Findings", "Synthesis & Future"],
  nodes: [
    // ---- THEORY (col 0) ----
    {id:"gam", layer:0, label:"GAM", full:"General Aggression Model",
      say:"The additive person-plus-situation baseline. My classic predictor block instantiates it. I give GAM its due first, then pivot — not replace.",
      tag:"theory"},
    {id:"i3", layer:0, label:"I³", full:"Finkel's I-cubed",
      say:"Reorganises aggression by functional role — instigation, impellance, inhibition — rather than sequence. Predicts inhibition-failure dominance where inhibiting factors are infrastructurally attenuated. Developed for face-to-face IPV, which is exactly its limitation here.",
      tag:"theory"},
    {id:"suler", layer:0, label:"Disinhibition", full:"Suler / SIDE / deindividuation",
      say:"Classical disinhibition predicts anonymity raises aggression. SIDE refines it: anonymity amplifies the salient group norm. Under cooperative norms SIDE predicts the opposite — which is what I found.",
      tag:"theory"},
    {id:"bandura", layer:0, label:"Moral disengagement", full:"Bandura's mechanisms",
      say:"Selective disengagement of moral self-regulation — moral justification, euphemistic labelling, advantageous comparison, displacement. The intrapsychic operation that strips internal restraint.",
      tag:"theory"},
    {id:"casa", layer:0, label:"CASA / HMC", full:"Computers Are Social Actors; Human-Machine Communication",
      say:"Reeves & Nass: people apply social rules to machines automatically — a System 1 social-presence response. The mechanism my AI scales failed to capture, which is the hinge of the AI null.",
      tag:"theory"},

    // ---- CONSTRUCTS (col 1) ----
    {id:"md", layer:1, label:"Moral disengagement", full:"MD composite (α≈.79)",
      say:"My dominant predictor. Standardised β ≈ .466. Operationalises Bandura. The cognitive gateway: strips regulation.",
      tag:"classic"},
    {id:"anon", layer:1, label:"Anonymity", full:"Perceived anonymity (α≈.68)",
      say:"The anomaly. β ≈ −.214 — negative, opposite to disinhibition theory. Effect is DIRECT, not via MD. Anonymity scaffolds regulation rather than stripping it.",
      tag:"classic"},
    {id:"empathy", layer:1, label:"Empathy deficit", full:"Empathy (α≈.75)",
      say:"Predicts hostility when entered alone, but mediated/washed out in the full model. A contributor, not a dominant driver.",
      tag:"classic"},
    {id:"norm", layer:1, label:"Normalisation", full:"Aggression normalisation (α≈.67)",
      say:"Environmental belief that hostility is routine. Fully mediated by MD — norms raise hostility by enabling disengagement, not directly. Note the marginal alpha (.67), so I treat it with caution.",
      tag:"classic"},
    {id:"aitrust", layer:1, label:"AI trust", full:"Trust in AI (α≈.84)",
      say:"Reliable scale — alpha above MD's. But null. Indexes System 2 attitudes ABOUT AI (Lee & See), not the System 1 mechanism. Reliability is not validity.",
      tag:"ai"},
    {id:"aidis", layer:1, label:"AI disinhibition", full:"AI disinhibition (incl. AD5 venting)",
      say:"Block null overall, but carries a negative trend (β≈−.18, p≈.065) hinting at outlet-not-amplifier. The AD5 venting item is the one AI signal that survives controls.",
      tag:"ai"},
    {id:"aihabit", layer:1, label:"Habitual AI use", full:"AI use frequency",
      say:"Null at zero-order (r≈.04). One isolated multivariate signal (daily users lower hostility in the 18-24 band) but does not rescue the block.",
      tag:"ai"},

    // ---- OUTCOME & ANALYSIS (col 2) ----
    {id:"hrl", layer:2, label:"HRL", full:"Hostile Response Likelihood (single-item, 1–10)",
      say:"The sole DV. Scenario-anchored behavioural intention. Replaced the pre-registered CAI BEFORE data collection — no CAI data ever existed, so no outcome-switching. Single-item is the reliability limitation I concede.",
      tag:"outcome"},
    {id:"hier", layer:2, label:"Hierarchical blocks", full:"Classic → AI → personality",
      say:"Blocked entry so ΔR² answers the real question directly: does AI add anything over established predictors? Classic block first (baseline), then AI, then personality.",
      tag:"method"},
    {id:"sample", layer:2, label:"Sample", full:"170→164 valid; n=142 AI; n=136 regression",
      say:"170 raw, 164 after attention check, 142 on AI scales (branching), 136 complete cases for regression. 65.9% women, 86.6% aged 18-24, single institution.",
      tag:"method"},

    // ---- FINDINGS (col 3) ----
    {id:"f_md", layer:3, label:"MD dominates", full:"H1 partially supported",
      say:"MD the strongest predictor in every specification. The robust, theory-consistent core finding.",
      tag:"find-strong"},
    {id:"f_anon", layer:3, label:"Anonymity reversal", full:"β negative, direct",
      say:"Significant negative coefficient against theory, and direct rather than MD-mediated. The interesting anomaly, not a failure.",
      tag:"find-anom"},
    {id:"f_mediation", layer:3, label:"AN→MD mediation", full:"Normalisation fully mediated by MD",
      say:"Normalisation's effect runs entirely through MD (indirect significant, direct null). Environmental belief becomes hostility only by enabling the intrapsychic disengagement.",
      tag:"find-strong"},
    {id:"f_ainull", layer:3, label:"AI block null", full:"H2 not supported (ΔR²≈.016)",
      say:"AI block adds negligible variance. But power for that small effect was .243 vs .997 classic, and the scales are reliable — so measurement-validity gap, not confirmed absence. End open.",
      tag:"find-null"},
    {id:"f_venting", layer:3, label:"Venting trace", full:"AD5 dissociates from MD",
      say:"Venting survives cognitive-script controls (classic-model β≈−.17, p≈.03) but is fragile (ns in full composite). State fragility first. Human venting rehearses; AI venting may discharge.",
      tag:"find-trace"},
    {id:"f_age", layer:3, label:"Age effect", full:"18-24 vs 25+ (largest effect)",
      say:"Younger cohort markedly higher hostility (d≈0.78), the single largest effect — but n=22 older, so caution. Theme: situated cognition over stable disposition.",
      tag:"find-strong"},

    // ---- SYNTHESIS & FUTURE (col 4) ----
    {id:"mirm", layer:4, label:"MIRM", full:"Mediated I³ with Regulatory Modulation",
      say:"My proposed extension: MD strips regulation, anonymity scaffolds it; AI as a regulatory substrate. The data are CONSISTENT WITH it, never confirm it. One genuine independent leg: the venting dissociation. Earns a test, not a verdict.",
      tag:"synth"},
    {id:"hinge", layer:4, label:"Reliability ≠ validity", full:"The AI-null hinge",
      say:"The load-bearing line. The AI scales are reliable but measure the wrong thing — attitudes about AI, not the social-presence mechanism. This is why the null is generative, not terminal.",
      tag:"synth"},
    {id:"lag", layer:4, label:"Theory lags reality", full:"Boundary-condition framing",
      say:"Both anomalies — anonymity reversal and AI null — are inherited theory and measures lagging the phenomenon. Deindividuation predates the engagement economy; trust-in-automation predates conversational AI. Pre-stated in Ch2, so not a post-hoc rescue.",
      tag:"synth"},
    {id:"future", layer:4, label:"Three-study programme", full:"Validate → experiment → ESM",
      say:"Each study pinned to a limitation: (1) validate the three AI construct families [measurement gap]; (2) experimental venting manipulation [causal gap]; (3) experience sampling [temporal gap, tests MIRM modulation].",
      tag:"future"},
    {id:"constructs3", layer:4, label:"New construct families", full:"Proposals, not validated",
      say:"AI Social Presence, AI Interaction Function (incl. venting), Perceived AI Quasi-Agency. What the right instrument would measure — the answer to the reliability-not-validity gap.",
      tag:"future"}
  ],
  edges: [
    // theory -> constructs
    {from:"bandura", to:"md", claim:"MD operationalises Bandura's disengagement mechanisms."},
    {from:"suler", to:"anon", claim:"Disinhibition/SIDE motivates the anonymity hypothesis — and SIDE explains why it reversed."},
    {from:"gam", to:"hier", claim:"GAM's additive logic is what the classic block instantiates."},
    {from:"i3", to:"mirm", claim:"MIRM extends I³ by adding a regulatory substrate to the inhibition term."},
    {from:"casa", to:"aitrust", claim:"CASA is the mechanism the trust scale FAILS to capture — System 1 vs System 2."},
    {from:"casa", to:"aidis", claim:"CASA predicts AI social presence; venting-as-discharge is the trace of it."},

    // constructs -> outcome/analysis
    {from:"md", to:"hier", claim:"Enters the classic block."},
    {from:"anon", to:"hier", claim:"Enters the classic block."},
    {from:"empathy", to:"hier", claim:"Enters the classic block."},
    {from:"norm", to:"hier", claim:"Enters the classic block."},
    {from:"aitrust", to:"hier", claim:"Enters the AI block (tests incremental ΔR²)."},
    {from:"aidis", to:"hier", claim:"Enters the AI block."},
    {from:"aihabit", to:"hier", claim:"Enters the AI block."},
    {from:"hier", to:"hrl", claim:"All blocks predict the single DV, HRL."},
    {from:"sample", to:"hier", claim:"n=136 complete cases carry the regression; branching gives n=142 on AI scales."},

    // outcome/analysis -> findings
    {from:"md", to:"f_md", claim:"MD is the dominant predictor — β≈.466."},
    {from:"anon", to:"f_anon", claim:"Anonymity's coefficient is negative and direct."},
    {from:"norm", to:"f_mediation", claim:"Normalisation's effect is fully carried by MD."},
    {from:"md", to:"f_mediation", claim:"MD is the mediator: norms work THROUGH disengagement."},
    {from:"aitrust", to:"f_ainull", claim:"Reliable but null — the block adds ~nothing."},
    {from:"aidis", to:"f_ainull", claim:"Block null overall, but a negative trend hides inside."},
    {from:"aidis", to:"f_venting", claim:"The AD5 venting item is the signal that survives."},
    {from:"sample", to:"f_age", claim:"The 18-24 vs 25+ split yields the largest single effect."},

    // findings -> synthesis
    {from:"f_anon", to:"mirm", claim:"Anonymity scaffolds regulation — half of MIRM's core."},
    {from:"f_md", to:"mirm", claim:"MD strips regulation — the other half."},
    {from:"f_venting", to:"mirm", claim:"The venting dissociation is MIRM's one genuinely independent empirical leg."},
    {from:"f_ainull", to:"hinge", claim:"The null is reliable-but-invalid — that's the hinge."},
    {from:"f_venting", to:"hinge", claim:"Venting slips through the invalid scales — proof something real is there."},
    {from:"f_anon", to:"lag", claim:"The reversal is theory lagging the phenomenon."},
    {from:"f_ainull", to:"lag", claim:"The AI null is measures lagging conversational AI."},
    {from:"hinge", to:"constructs3", claim:"The validity gap names what the new instruments must measure."},
    {from:"hinge", to:"future", claim:"Study 1 validates the families the hinge implies."},
    {from:"mirm", to:"future", claim:"Studies 2-3 give MIRM the causal/temporal tests it earns."},
    {from:"constructs3", to:"future", claim:"The construct families are the content of Study 1."}
  ]
};
