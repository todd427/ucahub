# ============================================================================
# UCA Study - 06_mirm.R
# MIRM = Mediated I-cubed with Regulatory Modulation.
#
# This file currently implements ONLY Test 19.2 (mediation dissociation), the
# test that decides whether MIRM has an independent empirical leg: does AI
# venting predict hostile response INDEPENDENTLY of the cognitive-script
# (moral-disengagement) pathway? Tests 19.1 (layered GAM/I3/MIRM comparison)
# and 19.3 (impellance boundary) are deferred pending that decision.
#
# All figures here are on CANONICAL screening (N=164 -> complete cases), which
# supersedes the earlier attention-only / na.rm=TRUE run.
# ============================================================================

source("00_prep.R")

# -- analysis frame: complete cases on the dissociation variables ------------
vars <- c("hostile_response", "ai_venting", "moral_disengagement",
          "normalization", "empathy_deficit", "anonymity", "neuroticism")
dd <- valid[complete.cases(valid[, vars]), vars]
cat("\n========== MIRM 19.2 - MEDIATION DISSOCIATION ==========\n")
cat("n (complete cases) =", nrow(dd), "\n\n")

# -- associative profiles: where does each construct 'live'? -----------------
# MD should sit next to the cognitive-script constructs; venting should not.
script_vars <- c("empathy_deficit", "normalization", "anonymity", "neuroticism")
cat("Associative profile (zero-order r with each construct):\n")
cat(sprintf("  %-18s %8s %8s %8s\n", "construct", "MD", "venting", "delta"))
for (v in script_vars) {
  r_md   <- cor(dd$moral_disengagement, dd[[v]])
  r_vent <- cor(dd$ai_venting,          dd[[v]])
  cat(sprintf("  %-18s %+8.3f %+8.3f %+8.3f\n", v, r_md, r_vent, r_md - r_vent))
}

# -- context: venting's simple relationship with the DV ----------------------
r0 <- cor(dd$hostile_response, dd$ai_venting)
cat(sprintf("\nVenting zero-order with HRL: r = %+.3f (p = %.4f)\n",
            r0, cor.test(dd$hostile_response, dd$ai_venting)$p.value))

# -- THE residual test: venting net of the full cognitive-script pathway -----
m_full <- lm(hostile_response ~ ai_venting + moral_disengagement +
               normalization + empathy_deficit + anonymity, data = dd)
co <- summary(m_full)$coefficients
b  <- co["ai_venting", "Estimate"]
se <- co["ai_venting", "Std. Error"]
p  <- co["ai_venting", "Pr(>|t|)"]

# standardized beta for venting (z-score the frame, refit)
m_std <- lm(hostile_response ~ ai_venting + moral_disengagement +
              normalization + empathy_deficit + anonymity,
            data = as.data.frame(scale(dd[, c("hostile_response","ai_venting",
              "moral_disengagement","normalization","empathy_deficit","anonymity")])))
beta <- coef(m_std)["ai_venting"]

cat("\nResidual test - HRL ~ venting + MD + normalization + empathy + anonymity:\n")
cat(sprintf("  venting  B = %+.3f  SE = %.3f  beta = %+.3f  p = %.4f\n",
            b, se, beta, p))
cat("\nFull model coefficients:\n")
print(round(co, 4))

cat("\nDecision rule: if venting's independent effect holds (p < .05, beta\n")
cat("clearly negative), MIRM has an independent regulatory-pathway leg.\n")
cat("If it collapses, the dissociation does not survive canonical screening.\n")
