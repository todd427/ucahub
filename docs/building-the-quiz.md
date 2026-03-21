# Building a 1000-Question Quiz System with Claude Code

**A step-by-step walkthrough of building ucahub.ie/quiz**

This document captures the actual conversation and process used to build a cyberpsychology quiz system for [ucahub.ie](https://ucahub.ie) using [Claude Code](https://claude.com/claude-code), Anthropic's CLI tool for Claude. Every step below happened in a single session.

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

Claude Code read the brief, then **autonomously launched an agent** to explore the full codebase — reading `style.css`, `app.js`, `index.html`, and every other page to understand the design system (CSS variables, theme support, component patterns, responsive breakpoints).

---

## Step 1: Initial Build

Claude created two files and modified eight others:

- **`quiz/quiz-data.js`** — 51 questions across 7 categories
- **`quiz/index.html`** — Full quiz interface with four screens (home, question, feedback, results)
- **All 8 existing HTML files** — Added "Quiz" to the navigation bar

The quiz matched the site's three-theme system (dark/bright/paper), used the same CSS variables, and followed the same header/footer/nav pattern as every other page.

**Time: ~3 minutes** for the complete initial build.

---

## Step 2: "How come it's not on my navbar?"

I was looking at the live site, not a local preview. Claude pointed out the changes were local only and suggested running a preview server:

```
! npx serve /home/Projects/ucahub
```

(I typo'd `server` instead of `serve` — Claude caught it immediately.)

**Lesson:** Claude Code can run local servers via the `!` prefix, which executes commands in the current session.

---

## Step 3: "The longest answer is always right"

Looking at the quiz, I noticed a pattern: the correct answer was consistently the most detailed option. Claude identified this as a two-part problem:

1. **Option order** — Fixed by shuffling answer positions at render time (code fix)
2. **Option length** — The correct answer was always more detailed than the distractors (content fix)

Claude initially added answer shuffling AND a Claude API integration for dynamic question generation. But then I suggested a different approach...

---

## Step 4: "Can we just generate 1000 questions?"

Rather than API-based generation, I wanted a large static bank that picks randomly each session. Claude:

1. Removed the API generator
2. Expanded the question bank to 335 questions
3. Added a "50" option to the quiz length selector

But the length problem persisted — wrong answers were still obviously shorter. So Claude **rewrote the entire question bank** with balanced options, where all four choices are similar in length and plausibility. This brought the count down to 132 (quality over quantity), then a background agent expanded it back to 332.

**Key insight:** The problem wasn't code — it was content. Wrong answers need to be wrong in *substance*, not in *effort*.

---

## Step 5: Statistics Detour — "How many questions prove mastery?"

I asked: if I get questions right across multiple quizzes, how many do I need before I can assert I probably know them all?

Claude provided a statistical analysis using:

- **Bayesian posterior**: With uniform prior, P(ace all N) = (n+1)/(N+n+1) — meaning you need to answer nearly all questions to be >50% confident
- **Rule of Three**: If 0 wrong in n attempts, 95% confident error rate < 3/n
  - 30 right, 0 wrong → error rate < 10%
  - 60 right, 0 wrong → error rate < 5%
  - 100 right, 0 wrong → error rate < 3%

And confirmed that **cumulative success counts** — three quizzes of 10 with 0 wrong is statistically equivalent to 30 right, since questions are randomly drawn each session.

This led directly to the next feature...

---

## Step 6: Cumulative Mastery Tracking

Claude built a localStorage-based mastery tracker that persists across sessions:

- **Correct / Attempted / Streak** — running totals
- **Unique questions** — tracks which specific questions you've answered correctly (by ID) out of the total bank
- **Progress bar** — visual coverage of the question bank
- **Rule of Three estimate** — "With 30 correct and 0 wrong, you can be 95% confident you'd get at least 90% right"
- **Reset button** — clears all stats

Shown on both the home screen (after first quiz) and the results screen.

---

## Step 7: Questioning the Passphrase

The brief specified a passphrase-gated viva prep mode. I asked: "Where's the passphrase set?"

Claude showed me it was a JS constant in the HTML file. Then I asked the more important question: **"What's exposed if they get inside?"**

Claude listed what the viva questions contain (specific beta values, model answers to examiner questions, methodological defense strategies) and noted that:

- The findings will be public in the dissertation
- The "security" is view-source-level anyway
- It adds friction for the main user (me)

I agreed: **"Why do we feel we need to protect it?"**

Claude confirmed we don't. I asked to keep the viva mode but make it a simple toggle button instead of a passphrase modal. Claude removed the modal HTML, CSS, JS, and passphrase constant — replaced it all with a single `toggleVivaMode()` function.

**Lesson:** Claude Code can help you question your own requirements. The brief said "passphrase" but the conversation revealed it was unnecessary complexity.

---

## Step 8: Ship It

```
> Okay, let's push this puppy up!
```

Claude ran `git status`, `git diff --stat`, and `git log` in parallel, then committed with a descriptive message and pushed to origin. Cloudflare Pages auto-deployed.

**The commit:**
```
feat: add cyberpsychology quiz system at /quiz/

332-question bank across 7 categories. All MCQ options balanced
in length to prevent guessing by answer size.

Features:
- Category and difficulty filters, selectable quiz length
- Shuffled questions and answer options each session
- Immediate feedback with explanations and academic references
- Cumulative mastery tracking via localStorage with Rule of Three estimate
- Viva prep mode (toggle button) for dissertation-specific questions
- Results screen with category breakdown
- Quiz nav link added to all site pages
- Matches existing ucahub dark/bright/paper theme system
```

---

## Step 9: "How hard would it be to bring that up to 1000?"

Claude launched **three agents in parallel**, each handling different categories:

1. Agent 1: ~300 cyber-aggression + moral disengagement questions
2. Agent 2: ~180 online disinhibition + AI psychology questions
3. Agent 3: ~188 research methods + personality questions

All working simultaneously on the same file, each inserting before the viva section.

---

## Patterns Worth Noting

### Claude Code features used in this session

| Feature | How it was used |
|---|---|
| **start.prompt** | Kicked off the entire build from a two-line file |
| **Agent (Explore)** | Autonomously explored the codebase to understand styling |
| **Agent (general-purpose)** | Added nav links to 7 files, expanded question bank |
| **Parallel agents** | Three agents writing questions simultaneously |
| **Background agents** | Long-running tasks that notify on completion |
| **`!` commands** | Running local preview server in-session |
| **localStorage** | Persistent mastery tracking with no backend |

### How the conversation shaped the product

The brief specified one thing. The conversation produced something different — and better:

| Brief said | We actually built | Why |
|---|---|---|
| 40 questions | 1000 questions | "Can we just generate 1000?" |
| Passphrase-gated viva | Simple toggle button | "Why do we feel we need to protect it?" |
| Static question order | Shuffled questions AND options | "Longest answer is always right" |
| No progress tracking | Cumulative mastery with statistics | "Does cumulative success count?" |
| Claude API stretch goal | Large static bank instead | More reliable, no API key needed |

### Time breakdown (approximate)

- Initial build (quiz + 51 questions + nav links): **~3 minutes**
- Option balancing + rewrite: **~5 minutes**
- Mastery tracking feature: **~3 minutes**
- Passphrase removal: **~2 minutes**
- Expanding to 332 questions: **~12 minutes** (background agent)
- Expanding to 1000 questions: **~15 minutes** (3 parallel agents)
- Total conversation including discussion: **~45 minutes**

---

## Reproducing This

To build something similar with Claude Code:

1. **Write a brief first.** Put it in a markdown file. Be specific about constraints (static site, no build step, match existing style).

2. **Start with a prompt file.** A `start.prompt` that points to the brief keeps the initial instruction clean.

3. **Let Claude explore.** Don't describe your codebase — let Claude read it. It found the CSS variables, theme system, and component patterns on its own.

4. **Iterate through use.** The best improvements came from actually using the quiz and reporting what felt wrong ("longest answer is always right", "where's the preview?").

5. **Question your own requirements.** Claude can help you realise when a feature (like a passphrase) adds complexity without value.

6. **Use parallel agents for bulk work.** Expanding from 332 to 1000 questions would be tedious one-by-one but trivial with three agents working simultaneously.

---

*Built with [Claude Code](https://claude.com/claude-code) in a single session, March 2026.*
