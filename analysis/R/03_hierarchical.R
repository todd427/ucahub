# ============================================================================
# UCA Study - 03_hierarchical.R
# Stepped hierarchical regression (H1, H2) for Chapter 4.5.
# DV: hostile_response (single-item HRL, 1-10).
#
# AI Trust, AI Disinhibition, and AI Familiarity each enter as their own block
# so H2 reads component-by-component; Big Five is the final block. All five
# nested models are fit on the IDENTICAL complete-case set (n) so the dR^2 / dF
# tests are valid.
#
# Prep is delegated to 00_prep.R (single source of truth). Verified reconciled:
# n=139, classic R2=.220, full R2=.252, MD B=1.590, anonymity B=-0.838.
# ============================================================================

source("00_prep.R")

# -- complete-case set across the full predictor set (largest model) ---------
reg_vars <- c("hostile_response",
              "habitual_use", "empathy_deficit", "normalization",
              "anonymity", "moral_disengagement",
              "ai_trust", "ai_disinhibition", "ai_familiarity",
              "extraversion", "conscientiousness", "neuroticism",
              "agreeableness", "openness")
reg_data <- valid[complete.cases(valid[, reg_vars]), reg_vars]
cat("\n03_hierarchical: complete cases n =", nrow(reg_data),
    "| DV M =", round(mean(reg_data$hostile_response), 3),
    "SD =", round(sd(reg_data$hostile_response), 3), "\n")

# -- stepped models ----------------------------------------------------------
m1 <- lm(hostile_response ~ habitual_use + empathy_deficit + normalization +
           anonymity + moral_disengagement, data = reg_data)          # Classic
m2 <- update(m1, . ~ . + ai_trust)                                    # + AI Trust
m3 <- update(m2, . ~ . + ai_disinhibition)                            # + AI Disinhibition
m4 <- update(m3, . ~ . + ai_familiarity)                              # + AI Familiarity
m5 <- update(m4, . ~ . + extraversion + conscientiousness +
               neuroticism + agreeableness + openness)                # + Big Five

models <- list("1. Classic"          = m1,
               "2. + AI Trust"       = m2,
               "3. + AI Disinhib."   = m3,
               "4. + AI Familiarity" = m4,
               "5. + Big Five"       = m5)

# -- block-comparison table (the 4.5 table) ----------------------------------
# dR^2 = increment over previous block; f2(delta) = (R2_i - R2_{i-1}) / (1 - R2_i)
# Cohen's f2 benchmarks: .02 small, .15 medium, .35 large.
cat("\n==============================================================\n")
cat("  HIERARCHICAL REGRESSION - BLOCK COMPARISON (n =", nrow(reg_data), ")\n")
cat("  DV = hostile_response (HRL, 1-10)\n")
cat("==============================================================\n\n")
cat(sprintf("%-20s %6s %7s %7s %7s %6s %8s %8s\n",
            "Block", "R2", "AdjR2", "dR2", "dF", "df", "p(dF)", "f2(d)"))

prev <- NULL
for (nm in names(models)) {
  mod <- models[[nm]]
  s   <- summary(mod)
  r2  <- s$r.squared; adj <- s$adj.r.squared
  if (is.null(prev)) {
    f2 <- r2 / (1 - r2)
    cat(sprintf("%-20s %6.3f %7.3f %7s %7s %6s %8s %8.3f\n",
                nm, r2, adj, "-", "-", "-", "-", f2))
  } else {
    a   <- anova(prev, mod)
    dr2 <- r2 - summary(prev)$r.squared
    dF  <- a$F[2]; p <- a$`Pr(>F)`[2]
    df1 <- as.integer(abs(a$Df[2])); df2 <- as.integer(a$Res.Df[2])
    f2  <- dr2 / (1 - r2)
    cat(sprintf("%-20s %6.3f %7.3f %+7.3f %7.3f %3d,%-3d %8.4f %8.4f\n",
                nm, r2, adj, dr2, dF, df1, df2, p, f2))
  }
  prev <- mod
}

# -- per-block coefficients --------------------------------------------------
for (nm in names(models)) {
  cat("\n-- COEFFICIENTS:", nm, "--\n")
  print(summary(models[[nm]])$coefficients)
}

# -- standardized betas (final model) ----------------------------------------
cat("\n-- STANDARDIZED BETAS (Model 5, full) --\n")
m5_z <- lm(hostile_response ~ ., data = as.data.frame(scale(reg_data)))
betas <- coef(m5_z)[-1]
for (v in names(betas)) cat(sprintf("  %-22s beta = %+.3f\n", v, betas[v]))

# -- assumption checks (full model) ------------------------------------------
cat("\n-- ASSUMPTIONS (Model 5) --\n")
if (requireNamespace("car", quietly = TRUE)) {
  cat("VIF:\n"); print(round(car::vif(m5), 2))
  cat("Durbin-Watson:\n"); print(car::durbinWatsonTest(m5))
} else {
  cat("(install 'car' for VIF and Durbin-Watson)\n")
}
sw <- shapiro.test(residuals(m5))
cat(sprintf("Shapiro-Wilk on residuals: W = %.3f, p = %.4f\n", sw$statistic, sw$p.value))
if (requireNamespace("lmtest", quietly = TRUE)) {
  bp <- lmtest::bptest(m5)
  cat(sprintf("Breusch-Pagan: BP = %.3f, df = %d, p = %.4f\n",
              bp$statistic, bp$parameter, bp$p.value))
} else {
  cat("(install 'lmtest' for Breusch-Pagan)\n")
}

cat("\nDone.\n")
