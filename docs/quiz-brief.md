# Cyberpsychology Quiz — Claude Code Brief
## ucahub.ie/quiz

**Date:** 2026-03-21  
**Repo:** todd427/ucahub  
**Deploy:** Cloudflare Pages (static — no build step, files serve as-is)  
**Author:** Todd McCaffrey, MSc Cyberpsychology, ATU Letterkenny

---

## What We're Building

A self-contained, publishable cyberpsychology quiz system living at `ucahub.ie/quiz/`.

Two modes in one interface:

1. **Public quiz** — Open educational resource. Visitors test their knowledge of cyberpsychology concepts: cyber-aggression, moral disengagement, online disinhibition, AI trust, anonymity effects, research methods. Shareable, citable, useful for students and researchers.

2. **Viva prep mode** — Unlocked via a simple passphrase. Generates harder, dissertation-specific questions drawn from Todd's actual findings (β values, ΔR², specific constructs, examiner-style challenge questions). Private but same codebase.

---

## Tech Constraints

- **Pure static** — HTML + CSS + vanilla JS only. No Node, no build step, no framework.
- **Single file preferred** — `quiz.html` is the target. Inline CSS and JS as needed.
- **No backend** — Question bank is a JS object/array in the file or a companion `quiz-data.js`.
- **Claude API** for dynamic question generation (optional stretch goal — see below).
- **Matches existing site style** — see `assets/style.css` and `index.html` for design reference. Dark navy + teal accent (`#1a9e8c`) + white text. Clean, academic.

---

## File Structure

```
quiz.html              ← main quiz page
quiz-data.js           ← question bank (separate file, easy to update)
quiz-viva.js           ← viva-prep questions (gitignored or passphrase-gated)
```

---

## Question Bank Format

Questions are JS objects. The bank is an array. Each question:

```js
{
  id: "ca_001",
  category: "cyber-aggression",          // see categories below
  difficulty: 1,                          // 1=basic, 2=intermediate, 3=advanced
  mode: "public",                         // "public" | "viva" | "both"
  type: "mcq",                            // "mcq" | "truefalse" | "shortanswer"
  question: "According to moral disengagement theory, which mechanism involves reframing harmful behaviour as serving a higher purpose?",
  options: [                              // MCQ only
    "Displacement of responsibility",
    "Moral justification",
    "Diffusion of responsibility",
    "Euphemistic labelling"
  ],
  correct: 1,                             // index into options
  explanation: "Moral justification reframes harmful behaviour as serving a worthy cause (Bandura, 1999). It is distinct from displacement/diffusion (which concern who is responsible) and euphemistic labelling (which concerns how the act is described).",
  reference: "Bandura, A. (1999). Moral disengagement in the perpetuation of inhumanities.",
  tags: ["moral-disengagement", "Bandura", "mechanism"]
}
```

**Categories:**
- `cyber-aggression` — definitions, types, prevalence, predictors
- `moral-disengagement` — Bandura's mechanisms, applications to online behaviour
- `online-disinhibition` — Suler's typology, toxic vs benign, anonymity effects
- `ai-psychology` — AI trust, AI disinhibition, human-AI interaction
- `research-methods` — regression, PLS-SEM, effect sizes, multiple imputation
- `personality` — Big Five, impulsivity, emotional detachment in online contexts
- `viva-specific` — dissertation findings, examiner-style challenge questions

---

## Starting Question Bank

Seed with at least **40 questions** spread across categories and difficulties. Include:

### Must-have public questions (samples — write the full set):

**cyber-aggression:**
- Define cyber-aggression vs cyberbullying — what's the key distinction?
- Which personality trait shows the largest gender difference in cyber-aggression research? (emotional detachment, d=1.20 in McCaffrey 2026)
- What does CAI stand for and how is it typically measured?

**moral-disengagement:**
- Name Bandura's eight mechanisms of moral disengagement
- Which mechanism is most consistently associated with cyber-aggression? (moral justification / normalization of aggression)
- What is the "anonymity paradox" and why is it theoretically puzzling?

**online-disinhibition:**
- What are the six factors in Suler's online disinhibition model?
- Distinguish toxic disinhibition from benign disinhibition with examples
- Does perceived anonymity reliably increase aggression online? (Answer: evidence is mixed; see McCaffrey 2026 negative β)

**research-methods:**
- What does ΔR² measure in hierarchical regression?
- What is Cohen's f² and what constitutes a small/medium/large effect?
- When would you use multiple imputation rather than listwise deletion?
- What is PLS-SEM and when is it preferred over CB-SEM?

### Viva-prep questions (passphrase-gated):

- "Your normalization β was .37 in your final model but .42 in the abstract — explain the discrepancy."
- "Why did you choose hierarchical regression over a single-step model?"
- "Your ΔR² for AI variables was .002 — how do you distinguish a true null from insufficient power?"
- "The anonymity β was negative (β = −.29). Walk me through three possible theoretical explanations."
- "If you were to replicate this study, what would you change about the sampling strategy?"
- "How would you respond to a reviewer who questions the validity of the CAI scale with this population?"
- "What is the difference between statistical significance and practical significance in your findings?"
- "Your sample was 73% female — how might this affect generalisation of the gender difference finding?"

---

## UI / UX

### Quiz flow:
1. **Home screen** — Category selector (chips/buttons), difficulty filter (All / Beginner / Advanced), question count selector (5 / 10 / 20 / All), Start button.
2. **Question screen** — Progress bar, question text, answer options (MCQ) or True/False buttons. No timer (this is for learning, not speed).
3. **Feedback screen** — After each answer: ✓/✗, explanation text, reference. "Next question" button.
4. **Results screen** — Score, breakdown by category, "Try again" and "Share score" buttons.

### Viva mode:
- Small "🎓 Viva Prep" link in footer, bottom-right.
- Clicking prompts for passphrase (simple JS check, not secure — just keeps it off the front page).
- Correct passphrase: unlocks viva-specific questions, changes header to "Viva Preparation Mode", adds a note "These questions reflect your specific dissertation findings."

### Design notes:
- Match `index.html` styling: dark navy background (`#0d1b2a`), teal accent (`#1a9e8c`), clean sans-serif.
- Large readable question text. Mobile-first.
- Correct answer = green highlight. Wrong = red highlight with correct shown.
- Explanation appears in a distinct card below the answer, with reference in smaller italic text.
- No account, no tracking, no cookies.

---

## Stretch Goal — Claude API Integration

If time allows, add a "Generate a question on this topic" feature:

```js
// User picks a category and difficulty
// POST to Anthropic API with prompt:
// "Generate a multiple-choice question about [category] at [difficulty] level
//  for a postgraduate cyberpsychology quiz. Return JSON matching this schema: {...}"
// Parse response, display as a quiz question
// Allow user to flag as good/bad (stored in localStorage for session)
```

This keeps the static architecture but adds dynamic question generation. API key is user-supplied (they paste it in a settings modal — we never store it server-side).

---

## Deployment

Push to `todd427/ucahub` on branch `main`. Cloudflare Pages auto-deploys.

Accessible at: `https://ucahub.ie/quiz/` (needs `quiz/index.html` or `quiz.html` + `_redirects` rule if needed).

Add a "Quiz" link to the main nav in `index.html`.

---

## Definition of Done

- [ ] `quiz.html` renders correctly on mobile and desktop
- [ ] Minimum 40 questions across all public categories
- [ ] Viva prep mode works with passphrase
- [ ] Category filter works
- [ ] Difficulty filter works
- [ ] Explanation + reference shows after each answer
- [ ] Results screen shows score + category breakdown
- [ ] Matches ucahub.ie visual style
- [ ] Nav link added to `index.html`
- [ ] Deployed and live at ucahub.ie/quiz

---

## Context for Claude Code

The site owner is Todd McCaffrey, completing an MSc in Cyberpsychology at ATU Letterkenny. His dissertation is titled "Understanding Cyber-Aggression through AI Use, Trust, and Personality Factors." Key findings for viva questions:

- Normalization of aggression was the dominant predictor of CAI (β = .37, f² = .22)
- AI variables (trust, disinhibition) contributed negligible variance (ΔR² ≈ .002)
- Perceived anonymity negatively predicted CAI (β = −.29) — the "anonymity paradox"
- Men showed higher emotional detachment than women (d = 1.20)
- CAI strongly predicted hostile vignette responses (β = .47)
- Sample: N = 131–167 depending on analysis, 73% female, 86% AI users, Irish university students
- Methods: hierarchical regression, multiple imputation (mice, 10 imputations), PLS-SEM validation

The quiz is intended as a genuine open educational resource for cyberpsychology students, not just a personal tool. Write questions that would be useful to any postgraduate student in the field.
