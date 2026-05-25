# ============================================================================
# UCA Study - 00_prep_md5.R   (OPTIONAL sensitivity variant, not in main chain)
# ----------------------------------------------------------------------------
# Purpose: quantify how much the headline moral-disengagement effect depends on
# md2 ("If someone attacks me online, I feel justified in attacking them back"),
# the one MD item conceptually proximate to the hostile-response outcome
# (item-HRL r = .49 vs .14-.33 for the other five). This is the robustness
# check referenced in the Ch 4.5 footnote; it is NOT sourced by any module.
#
# Design: source the canonical 00_prep.R (single source of truth), then rebuild
# ONLY moral_disengagement from the five remaining items (md1,md3,md4,md5,md6),
# na.rm = FALSE, exactly as 00_prep builds the six-item version. Refit the full
# Model 5 (n=139) on the IDENTICAL complete-case set for both versions, so the
# only thing that changes is the composition of the MD composite.
#
# Usage:  source("00_prep_md5.R")     # from analysis/R/
# ============================================================================

source("00_prep.R")                       # leaves `valid` with the 6-item MD
suppressMessages(library(psych))

reg_vars <- c("hostile_response",
              "habitual_use", "empathy_deficit", "normalization",
              "anonymity", "moral_disengagement",
              "ai_trust", "ai_disinhibition", "ai_familiarity",
              "extraversion", "conscientiousness", "neuroticism",
              "agreeableness", "openness")

# identical complete-case set (defined on the canonical 6-item composite);
# md2 is present on every such row (na.rm = FALSE), so the 5-item composite is
# fully observed on the same rows and n is held constant across both fits.
cc <- complete.cases(valid[, reg_vars])
d6 <- valid[cc, reg_vars]
cat("\n00_prep_md5: complete cases n =", nrow(d6),
    "(identical set for both MD versions)\n")

# five-item MD (drop md2), same na.rm = FALSE rule
md5_full <- rowMeans(valid[, c("md1", "md3", "md4", "md5", "md6")], na.rm = FALSE)
d5 <- d6
d5$moral_disengagement <- md5_full[cc]

# reliability of the reduced scale, for the footnote
a6 <- suppressWarnings(psych::alpha(valid[, paste0("md", 1:6)],
                                    check.keys = FALSE))$total$raw_alpha
a5 <- suppressWarnings(psych::alpha(valid[, c("md1","md3","md4","md5","md6")],
                                    check.keys = FALSE))$total$raw_alpha
cat(sprintf("MD reliability: 6-item alpha = %.3f | 5-item (no md2) alpha = %.3f\n",
            a6, a5))

# full Model 5, fit identically on each version
f5 <- hostile_response ~ habitual_use + empathy_deficit + normalization +
        anonymity + moral_disengagement + ai_trust + ai_disinhibition +
        ai_familiarity + extraversion + conscientiousness + neuroticism +
        agreeableness + openness

std_betas <- function(df) {
  m <- lm(hostile_response ~ ., data = as.data.frame(scale(df)))
  list(b = coef(m)[-1], r2 = summary(m)$r.squared)
}
m6 <- std_betas(d6)
m5 <- std_betas(d5)

cat("\n-- Standardised betas: full MD (6) vs reduced MD (5, no md2) --\n")
cat(sprintf("  %-22s %10s %10s %8s\n", "predictor", "beta(6)", "beta(5)", "delta"))
for (v in names(m6$b)) {
  cat(sprintf("  %-22s %+10.3f %+10.3f %+8.3f\n",
              v, m6$b[v], m5$b[v], m5$b[v] - m6$b[v]))
}
cat(sprintf("\n  Model R2:  6-item = %.3f   5-item = %.3f\n", m6$r2, m5$r2))
cat(sprintf("  MD beta:   %.3f  ->  %.3f  (attenuation %.3f); anonymity %.3f -> %.3f\n",
            m6$b["moral_disengagement"], m5$b["moral_disengagement"],
            m6$b["moral_disengagement"] - m5$b["moral_disengagement"],
            m6$b["anonymity"], m5$b["anonymity"]))

cat("\nDone.\n")
