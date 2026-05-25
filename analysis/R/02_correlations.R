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
# multivariate model (n = 136) — a suppression effect, to be narrated as such,
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

cat("\nDone.\n")
