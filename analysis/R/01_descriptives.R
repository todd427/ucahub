# ============================================================================
# UCA Study - 01_descriptives.R
# Scale reliabilities, composite/DV descriptives, demographic profile (Ch 4.3).
# Prep delegated to 00_prep.R. Verified reconciled (alphas .733 / .752 / .675 /
# .784 / .815 / .845 / .836; HRL M=4.384 SD=2.678).
#
# Reporting note: the AI-frequency branch skipped Q7-Q14 for the 22 'Never'
# users, so the multi-item cyber-cognition and AI scales have analytic n = 142
# (ai_trust 140), while demographics and the DV are at N = 164. Reliabilities
# and composite descriptives below print their own n; do NOT report them under
# a single blanket N.
# ============================================================================

source("00_prep.R")
suppressMessages(library(psych))

scales <- list(
  habitual_use        = paste0("hab", 1:4),
  empathy_deficit     = paste0("emp", 1:4),
  normalization       = paste0("norm", 1:4),
  anonymity           = paste0("anon", 1:4),
  moral_disengagement = paste0("md", 1:6),
  ai_trust            = paste0("trust", 1:5),   # trust4 already reverse-coded in 00_prep
  ai_disinhibition    = paste0("disinhib", 1:5)
)

cat("\n========== 01 DESCRIPTIVES & RELIABILITY ==========\n")
cat("Full screened sample N =", nrow(valid),
    "| scale stats reported with per-scale analytic n\n")
cat("AI-frequency branch: 22 'Never' users skipped Q7-Q14 (see 00_prep)\n")

cat("\nScale reliabilities (Cronbach's raw alpha), analytic n per scale:\n")
for (s in names(scales)) {
  items <- scales[[s]]
  n_s   <- sum(complete.cases(valid[, items]))
  a <- suppressWarnings(psych::alpha(valid[, items], check.keys = FALSE))$total$raw_alpha
  cat(sprintf("  %-20s alpha = %.3f  (%d items, n = %d)\n", s, a, length(items), n_s))
}

cat("\nComposite + DV descriptives (n per variable shown):\n")
comp_vars <- c(names(scales), "hostile_response")
desc <- psych::describe(valid[, comp_vars])
print(round(desc[, c("n", "mean", "sd", "min", "max", "skew", "kurtosis")], 3))

cat("\nDemographics (N =", nrow(valid), "):\n")
cat("Gender:\n");    print(table(valid$gender, useNA = "ifany"))
cat("Age group:\n"); print(table(valid$age_group, useNA = "ifany"))

cat("\nDone.\n")
