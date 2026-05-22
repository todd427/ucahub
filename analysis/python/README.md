# UCA — Python analysis pipeline

Structural and exploratory analyses for the dissertation *Understanding
Cyber-Aggression through AI Use, Trust, and Personality Factors*.

Hierarchical regression and reliability are conducted in R
(`R_UCA_176.R`). The structural model is implemented here in Python:
the `seminr` PLS-SEM bootstrap routine was unusable, so composite path
analysis and covariance-based SEM (`semopy`) serve as the structural
analysis of record. Both replicate the R regression results.

## Layout

```
analysis/python/
  data/uca173_anon.csv    de-identified dataset (analysis of record)
  src/                    analysis scripts
  output/                 generated results (git-ignored)
  requirements.txt        pinned dependencies
```

## Data

`data/uca173_anon.csv` is the de-identified survey export (CSV). Microsoft
Forms collected responses anonymously; in addition, the Email and Name
fields (which held no data) were removed, and the two response
timestamps were reduced to `survey_date` (date only) and `duration_min`
(completion duration), removing time-of-day precision. No identifying
or quasi-identifying fields remain.

The screening funnel is applied in code, not baked into the file:
173 raw responses, 170 after the consent gate, 164 after the attention
check. A survey-routing error presented the predictor battery only to
participants reporting any AI use, so predictor analyses use the 142
AI-using participants; analyses of HRL, demographics, age, and
personality use the full 164.

## Setup

```
pip install -r requirements.txt
```

## Scripts

Each script defaults to the bundled dataset and accepts an alternative
via positional argument or `--data PATH`.

| Script | Produces | Sample |
|---|---|---|
| `prep_data.py` | Screening funnel, scale scoring, Cronbach's alpha | — |
| `sem_path.py` | Composite path coefficients, bootstrap CIs (primary structural result) | 142 |
| `sem_semopy.py` | Covariance-based SEM parameter table and fit indices (chi2, CFI, TLI, RMSEA, GFI) | 142 |
| `sem_bootstrap.py` | Per-predictor mediation through MD, bootstrap CIs | 142 |
| `age_analysis.py` | Age x HRL, AI-use x HRL, AD5 venting, Big Five correlations | 164 / 142 |

```
python src/prep_data.py                 # funnel + alphas
python src/prep_data.py --no-screen     # raw, unscreened
python src/sem_path.py                  # primary structural result
python src/age_analysis.py              # exploratory age analyses
```

## Reproducibility

Bootstrap routines are seeded (`SEED = 42`, 5000 resamples). Scale
scoring uses five-point Likert coding with the cautious AI-trust item
(AT4) reverse-coded. Alphas: OD .73, ED .75, AN .68, AP .78, MD .82,
AT .85, AD .84.
