# Claude – UCA §4.1–4.2 + CAI resolution + md2 robustness – 2026-05-25

Session summary, UCA dissertation Chapter 4 drafting. Letterkenny, 25 May 2026.
Deadline: Fri 12 June 2026, 10pm.

## CAI fully resolved

CAI was pre-registered (Tennakoon adaptation: Buss-Perry / Bryant-Smith, five AGG_INC
items) but never fielded. It was dropped at instrument-build, **before** data collection,
not during analysis. HRL (single vignette likelihood item) was the sole DV from day one
(data ran 13 Jan – 2 Mar 2026).

The construct survives: Grigg (2010) "intended harm... use of technological devices",
as adopted by Tennakoon. Only the operationalisation changed — vignette HRL replaced the
multi-item scale. Because no CAI data was ever collected, the outcome choice cannot be
results-driven. This kills the outcome-switching charge.

Traces of the construct survive inside the instrument: md2 ("justified in attacking them
back") in the moral-disengagement block, and the behavioural-choice item (Q18).

§3.4.2 and §3.1 must stop claiming "two complementary instruments" / "both CAI and HRL
reported". Reframe: construct retained, operationalisation changed at instrument stage.

## md2 robustness check — committed 7a13f8e, pushed

md2 correlates with HRL at r = .49, vs .14–.33 for the other five md items — it straddles
the predictor/outcome boundary. Optional `analysis/R/00_prep_md5.R` sources 00_prep,
rebuilds moral_disengagement from five items (drops md2), refits Model 5 on the identical
n = 139 set.

Result (verified, prep_md5.out):
- moral disengagement beta .466 -> .363 (attenuation .102) — remains dominant
- anonymity beta -.214 -> -.198 — unchanged
- 5-item alpha = .785 (6-item = .815)
- model R2 .252 -> .199
- all other predictors unaffected

Footnote for §4.5. Not in the main analysis chain.

## §3.3 Participants — trimmed

Demographics paragraph deleted (moved to §4.1). Retained: recruitment method, Tennakoon
N=71 rationale, 500 -> 300 target revision, ethics 13 Jan 2026, funnel 173 -> 170 -> 164,
raw in-person counts (77/41/23/5) flagged as session tallies not retained responses.

## §3.6.1 Data screening — corrected

Verified against the CSV: the ATU filter excluded **nobody** — all 170 consented
respondents were ATU students. The full 170 -> 164 drop was the attention check (five
"Strongly disagree" + one "Strongly Agree"; strict instructed-response match per
Meade & Craig, 2012). Reworded the second-stage sentence to "attention check and ATU
eligibility... all respondents met ATU eligibility". Overlapping-marginals caveat now moot
(only one criterion did any excluding). MAR / no-imputation paragraph unchanged.

## §4.1 Overview — drafted

Three-part frame (describe / test / explore). Software: R 4.5.2 via RStudio; composite
path analysis in Python (PLS-SEM as robustness check, per §3.6.4). Script architecture
described as canonical 00_prep sourced by six modules + optional 00_prep_md5. GitHub
todd427/ucahub. Analytic-N statement up front: N=164 (outcome, personality, demographics);
n=142 (predictor + AI scales); n=140 (AI trust); n=139 (hierarchical regression).
Demographics paragraph with "spanned never (13.4%, n=22) through daily (22.6%)" — the n=22
ties 164 − 22 = 142 on the page.

## §4.2 Descriptives and reliability — drafted, numbers pipeline-verified

Recomputed against 00_prep (trust4 reversed `6 - trust4`, na.rm = FALSE, screened to 164).

Three cheat-sheet corrections caught:
- aggression normalisation alpha = **.67**, not .68 (below .70 — flag as borderline)
- AI trust alpha = **.84**, not .85
- agreeableness n = **163**, not 164 (one item-missing case)

DV (HRL): M = 4.38, SD = 2.68, n = 164, range 1–10. Confirmed.

Reliabilities / composite descriptives (n = 142 unless noted):
| Scale | Items | alpha | M | SD | n |
|---|---|---|---|---|---|
| Habitual use | 4 | .73 | 3.75 | 0.79 | 142 |
| Empathy deficit | 4 | .75 | 2.94 | 0.82 | 142 |
| Aggression normalisation | 4 | .67 | 3.20 | 0.79 | 142 |
| Perceived anonymity | 4 | .78 | 3.16 | 0.81 | 142 |
| Moral disengagement | 6 | .82 | 2.71 | 0.80 | 142 |
| AI trust | 5 | .84 | 2.88 | 0.76 | 140 |
| AI disinhibition | 5 | .84 | 2.77 | 0.94 | 142 |

Single items (kept out of the 1–5 table because of scale differences):
- AI familiarity: 1–10 scale, M = 6.40, SD = 1.73, n = 142
- Big Five (1–5, n = 164; agreeableness n = 163): E 3.30 (1.07), C 3.52 (0.97),
  N 3.73 (1.10), A 3.87 (0.92), O 3.73 (0.91)

Spelling: UK "normalisation" in prose, `normalization` in R code.

## Open / next

- §4.3 Correlations next. Lead with agreeableness r = -.22, p = .005, n = 163 — the
  full-sample personality payoff, the "Personality Factors" half of the title.
- Verify 01_descriptives.R prints the same M/SDs (pipeline is source of truth).
- Google Docs table issue: Markdown pipe tables do not render in Docs. Paste from a
  spreadsheet (or Insert > Table) for a native Doc table. Not a content problem.
- This session was NOT ingested to Mnemos — `ingest_document` did not register this
  session (read-only Mnemos toolset: query/stats/doc-count/filters). Known
  partial-registration glitch; ingest from a fresh chat. Gmail was also read-only
  (search only, no send/draft).
