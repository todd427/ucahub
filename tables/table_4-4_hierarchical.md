# Table 4.4 — Hierarchical Regression Predicting Hostile Response Likelihood

*N = 139 (listwise complete cases). DV = Hostile Response Likelihood (HRL, 1–10).*

| Block | R² | Adj R² | ΔR² | ΔF | df | p | f² |
|---|---|---|---|---|---|---|---|
| 1. Classic (5 predictors) | .220 | .190 | — | — | — | — | — |
| 2. + AI Trust | .221 | .186 | .002 | 0.28 | 1, 132 | .595 | .002 |
| 3. + AI Disinhibition | .241 | .201 | .020 | 3.45 | 1, 131 | .065 | .026 |
| 4. + AI Familiarity | .243 | .196 | .001 | 0.24 | 1, 130 | .623 | .002 |
| 5. + Big Five | .252 | .175 | .009 | 0.32 | 5, 125 | .902 | .013 |

*Note.* The AI block as a whole (3 predictors, Classic → + AI Familiarity):
ΔR² = .023, F(3, 130) = 1.32, p = .271, f² = .030, observed power = .37 — a
null increment. The Classic block was well powered (f² = .28, power ≈ 1.00).
Generated from `analysis/python/data/uca173_anon.csv` via the `analysis/R`
model specification (00_prep → 03_hierarchical), reproduced in Python.
