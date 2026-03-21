# Building a 1000-Question Quiz System with Claude Code

**A step-by-step walkthrough of building ucahub.ie/quiz**

This document captures the actual conversation and process used to build a cyberpsychology quiz system for [ucahub.ie](https://ucahub.ie) using [Claude Code](https://claude.com/claude-code), Anthropic's CLI tool for Claude. The core build happened in a single evening session; a separate file hierarchy scan ran in the background during the same session and is noted where it appears.

---

## Starting Point

The project already had a static site (HTML/CSS/JS, no build step) deployed on Cloudflare Pages. A brief had been written describing what we wanted: a quiz system with 40+ questions, multiple categories, viva prep mode, and matching the existing site styling.

### The Prompt

The entire starting instruction was a two-line file (`start.prompt`):

```
Read docs/quiz-brief.md and build the cyberpsychology quiz system as described.
Start with quiz.html and quiz-data.js. Minimum 40 questions, viva mode gated
by passphrase, matches existing ucahub.ie styling.
```

The `start.prompt` pattern matters: it keeps the initial instruction clean and forces you to write the real requirements down before you start. Claude Code read the brief, then **autonomously launched an agent** to explore the full codebase — reading `style.css`, `app.js`, `index.html`, and every other page to understand the design system (CSS variables, theme support, component patterns, responsive breakpoints). It wasn't told to do this; it inferred that matching the existing style required understanding the existing style.

---

## Step 1: Initial Build

Claude created two files and modified eight others:

- **`quiz/quiz-data.js`** — 51 questions across 7 categories
- **`quiz/index.html`** — Full quiz interface with four screens (home, question, feedback, results)
- **All 8 existing HTML files** — Added "Quiz" to the navigation bar

The quiz matched the site's three-theme system (dark/bright/paper), used the same CSS variables, and followed the same header/footer/nav pattern as every other page.

**Time: ~3 minutes** for the complete initial build.

---

## Step 2: "The longest answer is always right"

Looking at the quiz, I noticed a pattern: the correct answer was consistently the most detailed option. Claude identified this as a two-part problem:

1. **Option order** — Fixed by shuffling answer positions at render time (one-line code fix)
2. **Option length** — The correct answer was always more detailed than the distractors (content problem, not a code problem)

Claude rewrote the entire question bank with balanced options, where all four choices are similar in length and plausibility. This brought the count down to 132 (quality over quantity), then a background agent expanded it back to 332.

**The lesson here:** The problem wasn't in the code — it was in the content. Wrong answers need to be wrong in *substance*, not in *effort*. This distinction matters for any generated question bank.

---

## Step 3: "Can we just generate 1000 questions?"

Rather than API-based generation at runtime, I wanted a large static bank that picks randomly each session. Claude:

1. Removed the API generator it had prototyped
2. Expanded the question bank to 335 questions
3. Added a "50" option to the quiz length selector

The static bank approach turned out to be strictly better for this use case: no API key required, no latency on question load, works offline, and the question set is auditable.

---

## Step 4: Statistics Detour — "How many questions prove mastery?"

I asked: if I get questions right across multiple quizzes, how many do I need before I can assert I probably know them all?

Claude worked through the **Rule of Three**: if you answer n questions correctly with 0 wrong, you can be 95% confident your true error rate is below 3/n. Practically:

- 30 right, 0 wrong → error rate < 10% with 95% confidence
- 60 right, 0 wrong → error rate < 5%
- 100 right, 0 wrong → error rate < 3%

It also confirmed that **cumulative success across sessions counts** — three quizzes of 10 with 0 wrong is statistically equivalent to 30 consecutive correct answers, since questions are randomly drawn each session.

This analysis led directly to the next feature.

---

## Step 5: Cumulative Mastery Tracking

Claude built a localStorage-based mastery tracker that persists across sessions:

- **Correct / Attempted / Streak** — running totals
- **Unique questions** — tracks which specific questions you've answered correctly (by ID) out of the total bank
- **Progress bar** — visual coverage of the question bank
- **Rule of Three estimate** — live confidence interval based on your actual session history
- **Reset button** — clears all stats

Shown on both the home screen (after first quiz) and the results screen.

---

## Step 6: Questioning the Passphrase

The brief specified a passphrase-gated viva prep mode. I asked: "Where's the passphrase set?"

Claude showed me it was a JS constant in the HTML file. Then I asked the more important question: **"What's exposed if they get inside?"**

Claude listed what the viva questions contain (specific beta values, model answers to examiner questions, methodological defense strategies) and noted that:

- The findings will be public in the dissertation anyway
- The "security" is view-source-level regardless
- It adds friction for the main user (me)

I agreed: **"Why do we feel we need to protect it?"**

Claude confirmed we don't. I asked to keep the viva mode but make it a simple toggle button instead of a passphrase modal. Claude removed the modal HTML, CSS, JS, and passphrase constant — replaced it all with a single `toggleVivaMode()` function.

**This is the most useful thing Claude Code did in the session:** it helped me question my own requirements. The brief said "passphrase" but the conversation revealed it was unnecessary complexity. A tool that pushes back on the spec is more valuable than one that just executes it.

---

## Step 7: Expanding to 1000 Questions

Claude launched **three agents in parallel**, each writing questions for different category groups:

1. Agent 1: ~300 cyber-aggression + moral disengagement questions
2. Agent 2: ~180 online disinhibition + AI psychology questions
3. Agent 3: ~188 research methods + personality questions

Each agent was assigned a non-overlapping section of `quiz-data.js` — Agent 1 inserting at the top of its category block, Agents 2 and 3 after theirs. Claude coordinated the insertion points before dispatching them so they wouldn't write to the same lines simultaneously. The merge was clean; no manual intervention needed.

This is worth understanding: the parallelism wasn't random. Claude structured the task so each agent had exclusive ownership of its file region. If you tried this naively (three agents writing to the same file without coordination), you'd get conflicts.

---

## What Didn't Work

This document would be dishonest without this section.

**Option length crept back.** After the initial rewrite to balance option lengths, the bulk expansion (332 → 1000) reintroduced length imbalance in some categories. The parallel agents maintained the constraint better than a single agent doing sequential expansion, but it wasn't perfect. A post-generation audit pass would catch this.

**Some generated questions were too similar.** With 1000 questions across 7 categories, semantic overlap is inevitable. A handful of questions in the research methods category were near-duplicates with different surface wording. Fixable with a deduplication pass, but not done in this session.

**Time estimates were wrong, consistently.** See the timing table below.

---

## Patterns Worth Noting

### How the conversation shaped the product

The brief specified one thing. The conversation produced something different — and better:

| Brief said | We actually built | Why |
|---|---|---|
| 40 questions | 1000 questions | "Can we just generate 1000?" |
| Passphrase-gated viva | Simple toggle button | "Why do we feel we need to protect it?" |
| Static question order | Shuffled questions AND options | "Longest answer is always right" |
| No progress tracking | Cumulative mastery with statistics | "Does cumulative success count?" |
| Claude API stretch goal | Large static bank instead | More reliable, no API key needed |

### Time breakdown — and a note on estimates

| Task | Estimated | Actual |
|---|---|---|
| Initial build (quiz + 51 questions + nav links) | ~3 min | ~3 min |
| Option balancing + question bank rewrite | ~5 min | ~8 min |
| Mastery tracking feature | ~3 min | ~5 min |
| Passphrase removal | ~2 min | ~2 min |
| Expanding to 332 questions (background agent) | ~12 min | ~20 min |
| Expanding to 1000 questions (3 parallel agents) | ~15 min | ~30 min |
| **Total session** | **~40 min** | **~68 min** |

**Why the estimates were wrong:** Claude Code's timing estimates are based on per-operation latency floors, not real-world throughput. Every API call involves network round trips, rate-limit backoff, content sampling, and retry logic. A separate hierarchy scan run during the same session — 5,670 files, estimated at 19 minutes — took over 90 minutes to complete.

**The practical rule:** Take Claude's time estimate and treat it as the floor, not the mean. For bulk content generation (writing 1000 questions, processing thousands of files), plan for 3-4× the headline estimate. The work still gets done — it just takes longer than advertised.

---

## Reproducing This

A few things that are specific to this project and wouldn't be obvious going in:

**The static site constraint shapes everything.** No build step means no bundler, no transpilation, no npm. Every file Claude generates has to work as plain HTML/CSS/JS in a browser. This is a constraint worth stating explicitly in your brief — Claude Code will default to whatever tooling seems natural for the language otherwise.

**The `start.prompt` pattern works.** A two-line file pointing at a brief keeps the initial instruction focused. It also forces you to write the real requirements before you start rather than narrating them interactively. The brief took 20 minutes to write; it saved significant back-and-forth later.

**Let Claude read your codebase before it writes anything.** Don't describe your CSS variables or theme system — point Claude at the repo and let it explore. It found the three-theme system, the CSS variable naming conventions, and the component structure by reading, not by being told. The quiz matched the existing site because Claude understood the existing site.

**For bulk content tasks, assign each agent an exclusive file region.** Don't set three agents loose on the same file without coordinating insertion points first. The parallel expansion worked cleanly because Claude structured it so agents had non-overlapping ownership.

**Plan your time honestly.** If Claude says 15 minutes, block 45. For anything involving bulk generation or large file scans, block more.

---

*Built with [Claude Code](https://claude.com/claude-code), March 2026.*  
*Try the quiz: [ucahub.ie/quiz](https://ucahub.ie/quiz)*
