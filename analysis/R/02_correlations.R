# ============================================================================
# UCA Study - 02_correlations.R
# Bivariate correlations among study variables (Ch 4.4).
# Prep delegated to 00_prep.R. Full matrix on pairwise-complete observations;
# the focal HRL column reported with unadjusted p and per-pair n. A companion
# per-cell pairwise-n matrix is printed so every r carries its denominator
# (cells span 142-164; reduced cells reflect the AI-frequency branch).
#
# Note for Ch 4.4/4.5: anonymity is NON-significant at the zero-order level
# (r approx -.13, p approx .13, n = 142) and only turns significant in the
# multivariate model (n = 139) - a suppression effect, to be narrated as such,
# not a contradiction. Both are AI-user estimates.
# ============================================================================

source("00_prep.R")

cor_vars <- c("hostile_response",
              "habitual_use", "empathy_deficit", "normalization",
              "anonymity", "moral_disengagement",
              "ai_trust", "ai_disinhibition", "ai_familiarity",
              "extraversion", "conscientiousness", "neuroticism",
              "agreeableness", "openness")

cat("\n========== 02 CORRELATIONS ==========\n")

# -- full matrix (pairwise complete) + companion per-cell n ------------------
R <- cor(valid[, cor_vars], use = "pairwise.complete.obs")

present <- !is.na(as.matrix(valid[, cor_vars]))
storage.mode(present) <- "numeric"
Nm <- crossprod(present)            # cell [i, j] = rows with BOTH variables present

cat("\nCorrelation matrix (pairwise complete, rounded):\n")
print(round(R, 3))

cat("\nPer-cell pairwise n (denominator for each r above):\n")
print(Nm)
cat(sprintf("\nPairwise n range: %d - %d (reduced cells reflect the AI-frequency branch)\n",
            min(Nm), max(Nm)))

# -- focal column: zero-order correlations with HRL (unadjusted p, per-pair n)-
cat("\nZero-order correlations with HRL (hostile_response):\n")
cat(sprintf("  %-20s %8s %8s %6s\n", "variable", "r", "p", "n"))
for (v in cor_vars[-1]) {
  ok  <- complete.cases(valid$hostile_response, valid[[v]])
  ct  <- cor.test(valid$hostile_response[ok], valid[[v]][ok])
  cat(sprintf("  %-20s %+8.3f %8.4f %6d\n",
              v, ct$estimate, ct$p.value, sum(ok)))
}

# ---------------------------------------------------------------------------
# TABLE 4.2 render object (M, SD, lower-triangle r with significance stars).
# Reuses R (computed above); p-values from psych::corr.test with adjust="none"
# so the lower triangle carries unadjusted two-tailed p, matching the reported
# table. Upper triangle blanked, diagonal em-dash. Leaves `tbl_corr` for
# 07_render.R. This table is wide (14 numeric columns): render landscape in
# the Doc. Skips quietly if flextable is absent.
# ---------------------------------------------------------------------------
if (requireNamespace("flextable", quietly = TRUE) &&
    requireNamespace("psych", quietly = TRUE)) {
  .lab42 <- c("Hostile Response Likelihood", "Habitual SNS Use", "Empathy Deficit",
              "Aggression Normalisation", "Perceived Anonymity", "Moral Disengagement",
              "AI Trust", "AI Disinhibition", "AI Familiarity", "Extraversion",
              "Conscientiousness", "Neuroticism", "Agreeableness", "Openness")
  k  <- length(cor_vars)
  M  <- sapply(cor_vars, function(v) mean(valid[[v]], na.rm = TRUE))
  SD <- sapply(cor_vars, function(v) sd(valid[[v]],   na.rm = TRUE))
  P  <- suppressWarnings(
          psych::corr.test(valid[, cor_vars], use = "pairwise", adjust = "none")$p)
  .star <- function(p) ifelse(p < .001, "***",
                       ifelse(p < .01,  "**",
                       ifelse(p < .05,  "*", "")))
  .fr   <- function(r) sub("^(-?)0", "\\1", sprintf("%.2f", r))   # drop leading 0
  cell  <- matrix("", k, k)
  for (i in seq_len(k)) for (j in seq_len(k)) {
    if (i == j)      cell[i, j] <- "\u2014"
    else if (j < i)  cell[i, j] <- paste0(.fr(R[i, j]), .star(P[i, j]))
  }
  t42 <- data.frame(Variable = paste0(seq_len(k), ". ", .lab42),
                    M  = sprintf("%.2f", M),
                    SD = sprintf("%.2f", SD),
                    as.data.frame(cell, stringsAsFactors = FALSE),
                    check.names = FALSE)
  names(t42)[-(1:3)] <- as.character(seq_len(k))
  tbl_corr <- flextable::flextable(t42) |>
    flextable::set_caption(
      "Table 4.2  Means, SDs, and Zero-Order Correlations Among Study Variables") |>
    flextable::add_footer_lines(
      paste("Note. HRL and AI Familiarity rated 1\u201310; other multi-item scales 1\u20135.",
            "Pairwise-complete observations. Personality and HRL use N = 164",
            "(n = 163 Agreeableness); predictor and AI scales use n = 142",
            "(AI Trust n = 140). * p < .05, ** p < .01, *** p < .001 (two-tailed).")) |>
    flextable::theme_booktabs() |>
    flextable::fontsize(size = 7, part = "all") |>
    flextable::autofit()
  assign("tbl_corr", tbl_corr, envir = .GlobalEnv)
  cat("\n[render] tbl_corr (Table 4.2) built.\n")
} else {
  cat("\n[render] flextable/psych not installed; tbl_corr skipped.\n")
}

cat("\nDone.\n")
