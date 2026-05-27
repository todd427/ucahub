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

# ---------------------------------------------------------------------------
# TABLE 4.1 render object (reliabilities + composite descriptives).
# Builds `tbl_descr` (a flextable) from the SAME objects computed above and
# leaves it in the global env for 07_render.R. Non-destructive: all console
# output above is unchanged. Skips quietly if flextable is not installed, so
# headless diagnostic runs still work on machines without the render stack.
# ---------------------------------------------------------------------------
if (requireNamespace("flextable", quietly = TRUE)) {
  .lab41 <- c(habitual_use        = "Habitual SNS Use",
              empathy_deficit     = "Empathy Deficit",
              normalization       = "Aggression Normalisation",
              anonymity           = "Perceived Anonymity",
              moral_disengagement = "Moral Disengagement",
              ai_trust            = "AI Trust",
              ai_disinhibition    = "AI Disinhibition")
  t41 <- do.call(rbind, lapply(names(scales), function(s) {
    it <- scales[[s]]
    cc <- complete.cases(valid[, it])
    sc <- rowMeans(valid[cc, it])
    a  <- suppressWarnings(psych::alpha(valid[, it], check.keys = FALSE))$total$raw_alpha
    data.frame(Scale = .lab41[[s]], Items = length(it),
               a  = sprintf("%.2f", a),
               M  = sprintf("%.2f", mean(sc)),
               SD = sprintf("%.2f", sd(sc)),
               n  = sum(cc), check.names = FALSE)
  }))
  tbl_descr <- flextable::flextable(t41) |>
    flextable::set_header_labels(a = "\u03b1") |>
    flextable::set_caption(
      "Table 4.1  Scale Reliabilities and Composite Descriptive Statistics") |>
    flextable::add_footer_lines(
      paste("Note. All multi-item scales scored 1\u20135 (1 = strongly disagree,",
            "5 = strongly agree). Aggression normalisation fell just below the",
            ".70 threshold. AI Trust n = 140 owing to item-level missingness on",
            "two cases. n = 142 AI-using participants.")) |>
    flextable::theme_booktabs() |>
    flextable::autofit()
  assign("tbl_descr", tbl_descr, envir = .GlobalEnv)
  cat("\n[render] tbl_descr (Table 4.1) built.\n")
} else {
  cat("\n[render] flextable not installed; tbl_descr skipped.\n")
}

cat("\nDone.\n")
