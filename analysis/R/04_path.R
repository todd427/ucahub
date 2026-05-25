# ============================================================================
# UCA Study - 04_path.R
# Composite path analysis (primary PLS-SEM result) for Chapter 4.6.
# Unit-weighted standardised composites entered as exogenous predictors of HRL;
# standardised OLS betas on z-scored variables = path coefficients with unit
# outer weights. 5,000-resample PERCENTILE bootstrap (per methodology; avoids
# the seminr measurement-model instability documented for HabUse / AITrust).
#
# Ported from R_UCA_176 sec.15 onto canonical prep (00_prep). Positional labels
# in that script map as: score_AN = normalization, score_AP = anonymity.
# Verified reconciled: n=140, classic R2=.222, +AI R2=.242 (dR2=.020),
# MD beta=+.479 [.31,.64], anonymity beta=-.224 [-.40,-.06].
# ============================================================================

source("00_prep.R")
suppressMessages(library(boot))

path_vars <- c("hostile_response",
               "habitual_use", "empathy_deficit", "normalization",
               "anonymity", "moral_disengagement",
               "ai_trust", "ai_disinhibition", "ai_familiarity")

# complete cases, then standardise everything (z-scores -> path coefficients)
path_data <- valid[complete.cases(valid[, path_vars]), path_vars]
path_data <- as.data.frame(scale(path_data))
cat("\n========== 04 COMPOSITE PATH ANALYSIS (primary PLS-SEM) ==========\n")
cat("n =", nrow(path_data), "(complete cases on standardised composites)\n")

f_full <- hostile_response ~ habitual_use + empathy_deficit + normalization +
            anonymity + moral_disengagement + ai_trust + ai_disinhibition +
            ai_familiarity
f_classic <- hostile_response ~ habitual_use + empathy_deficit + normalization +
               anonymity + moral_disengagement

r2_classic <- summary(lm(f_classic, data = path_data))$r.squared
fit <- lm(f_full, data = path_data)
r2_full <- summary(fit)$r.squared

cat(sprintf("\nModel A (classic):  R2 = %.3f\n", r2_classic))
cat(sprintf("Model B (+AI):      R2 = %.3f  (Adj %.3f, dR2 = %+.3f)\n",
            r2_full, summary(fit)$adj.r.squared, r2_full - r2_classic))

cat("\nStandardised path coefficients (point estimates):\n")
print(round(summary(fit)$coefficients, 3))

# -- 5,000-resample percentile bootstrap -------------------------------------
boot_paths <- function(data, indices) {
  fit <- lm(f_full, data = data[indices, ])
  c(coef(fit)[-1], R2 = summary(fit)$r.squared)
}
set.seed(42)
br <- boot(path_data, boot_paths, R = 5000)

cat("\nBootstrap 95% percentile CIs (5,000 resamples):\n")
cat(sprintf("  %-20s %8s %9s %9s %9s\n", "path", "beta", "ci_lo", "ci_hi", "boot_p"))
for (i in seq_along(br$t0)) {
  ci <- suppressWarnings(boot.ci(br, index = i, type = "perc"))$percent
  ts <- br$t[, i]
  bp <- 2 * min(mean(ts <= 0), mean(ts >= 0))
  cat(sprintf("  %-20s %+8.3f %9.3f %9.3f %9.4f\n",
              names(br$t0)[i], br$t0[i], ci[4], ci[5], bp))
}

cat("\nNote: these standardised path betas (MD +.479, anonymity -.224, n=140,\n")
cat("AI-block model without Big Five) are a DIFFERENT specification from the\n")
cat("OLS full-model betas in 03_hierarchical (MD +.466, anonymity -.214, n=139,\n")
cat("with Big Five). Label each table clearly in Ch 4; they are not in conflict.\n")
cat("\nDone.\n")
