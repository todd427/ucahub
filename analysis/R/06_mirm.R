# ============================================================================
# UCA Study - 06_mirm.R
# MIRM = Mediated I-cubed with Regulatory Modulation.
# Three cross-sectional CONSISTENCY tests (cannot confirm the framework; the
# definitive tests are the planned three-study programme). All on CANONICAL
# screening (00_prep -> N=164 -> complete cases n=142). These figures supersede
# the earlier attention-only / na.rm=TRUE run.
#
#   19.1  Layered model comparison  (GAM -> I3 -> MIRM)
#   19.2  Mediation dissociation    (venting independent of the MD pathway) [centrepiece]
#   19.3  Boundary condition        (venting's protective slope scales with impellance)
#
# NOTE: 19.1 and 19.3 were never in a saved script; their model specifications
# below are reconstructed from the design description. Confirm they match intent.
# Honest read (verified canonical): 19.1 -- I3 adds nothing over GAM (p=.43);
# MIRM increment borderline (p=.055) and does NOT beat parsimonious GAM on AIC.
# 19.3 -- median-split boundary holds (diff bootstrap p approx .03) but the
# CONTINUOUS interaction is n.s. (p=.18): works only via the split. Disclose both.
# ============================================================================

source("00_prep.R")
suppressMessages(library(boot))

vars <- c("hostile_response", "ai_venting", "moral_disengagement",
          "normalization", "empathy_deficit", "anonymity", "neuroticism")
dd <- valid[complete.cases(valid[, vars]), vars]
z  <- function(x) as.numeric(scale(x))
cat("\n========== 06 MIRM CONSISTENCY TESTS (n =", nrow(dd), ") ==========\n")

# ===========================================================================
# 19.1  LAYERED MODEL COMPARISON  (GAM -> I3 -> MIRM)
#   GAM  : additive main effects of the established predictors
#   I3   : + multiplicative interactions among the I-cubed triad
#          (normalization[INSTIG] x neuroticism[IMPELL] x MD[INHIB])
#   MIRM : + the regulatory layer (venting, and venting x impellance)
# ===========================================================================
mm <- within(dd, {
  HRL <- hostile_response
  zN <- z(normalization); zNeu <- z(neuroticism); zMD <- z(moral_disengagement)
  zA <- z(anonymity);     zE <- z(empathy_deficit); zV <- z(ai_venting)
})
gam  <- lm(HRL ~ zN + zNeu + zMD + zA + zE, data = mm)
i3l  <- lm(HRL ~ zN + zNeu + zMD + zA + zE +
             zN:zNeu + zN:zMD + zNeu:zMD + zN:zNeu:zMD, data = mm)
mir  <- lm(HRL ~ zN + zNeu + zMD + zA + zE +
             zN:zNeu + zN:zMD + zNeu:zMD + zN:zNeu:zMD +
             zV + zV:zNeu, data = mm)

cat("\n-- 19.1 Layered comparison --\n")
cat(sprintf("  %-6s %6s %8s %9s %9s\n", "model", "R2", "AIC", "dR2", "p(dF)"))
r2g <- summary(gam)$r.squared; r2i <- summary(i3l)$r.squared; r2m <- summary(mir)$r.squared
cat(sprintf("  %-6s %6.3f %8.1f %9s %9s\n", "GAM",  r2g, AIC(gam), "-", "-"))
ai <- anova(gam, i3l); cat(sprintf("  %-6s %6.3f %8.1f %+9.3f %9.4f\n",
     "I3",   r2i, AIC(i3l), r2i - r2g, ai$`Pr(>F)`[2]))
am <- anova(i3l, mir); cat(sprintf("  %-6s %6.3f %8.1f %+9.3f %9.4f\n",
     "MIRM", r2m, AIC(mir), r2m - r2i, am$`Pr(>F)`[2]))
cat("  Read: I3 null over GAM; MIRM increment borderline; AIC-best = lowest.\n")

# ===========================================================================
# 19.2  MEDIATION DISSOCIATION  (centrepiece)
# ===========================================================================
cat("\n-- 19.2 Mediation dissociation --\n")
script_vars <- c("empathy_deficit", "normalization", "anonymity", "neuroticism")
cat(sprintf("  %-18s %8s %8s %8s\n", "construct", "MD", "venting", "delta"))
for (v in script_vars) {
  r_md <- cor(dd$moral_disengagement, dd[[v]]); r_v <- cor(dd$ai_venting, dd[[v]])
  cat(sprintf("  %-18s %+8.3f %+8.3f %+8.3f\n", v, r_md, r_v, r_md - r_v))
}
r0 <- cor(dd$hostile_response, dd$ai_venting)
cat(sprintf("  venting zero-order with HRL: r = %+.3f (p = %.4f)\n",
            r0, cor.test(dd$hostile_response, dd$ai_venting)$p.value))
m_full <- lm(hostile_response ~ ai_venting + moral_disengagement +
               normalization + empathy_deficit + anonymity, data = dd)
co <- summary(m_full)$coefficients
m_std <- lm(hostile_response ~ ai_venting + moral_disengagement +
              normalization + empathy_deficit + anonymity,
            data = as.data.frame(scale(dd[, c("hostile_response","ai_venting",
              "moral_disengagement","normalization","empathy_deficit","anonymity")])))
cat(sprintf("  residual test: venting B = %+.3f  SE = %.3f  beta = %+.3f  p = %.4f\n",
            co["ai_venting","Estimate"], co["ai_venting","Std. Error"],
            coef(m_std)["ai_venting"], co["ai_venting","Pr(>|t|)"]))

# ===========================================================================
# 19.3  BOUNDARY CONDITION  (impellance = neuroticism)
#   Continuous interaction is the honest primary; the median split is reported
#   second and its dependence on the split is disclosed.
# ===========================================================================
cat("\n-- 19.3 Boundary condition --\n")
cont <- lm(hostile_response ~ scale(ai_venting) * scale(neuroticism), data = dd)
ci_co <- summary(cont)$coefficients
ix <- grep(":", rownames(ci_co))
cat(sprintf("  CONTINUOUS venting x impellance interaction: beta = %+.3f, p = %.4f  (the honest primary)\n",
            ci_co[ix, "Estimate"], ci_co[ix, "Pr(>|t|)"]))

med <- median(dd$neuroticism)
hi  <- dd[dd$neuroticism >  med, ]
lo  <- dd[dd$neuroticism <= med, ]
sh  <- coef(summary(lm(hostile_response ~ scale(ai_venting), data = hi)))
sl  <- coef(summary(lm(hostile_response ~ scale(ai_venting), data = lo)))
cat(sprintf("  median split (neuroticism = %.2f): hi n=%d, lo n=%d\n", med, nrow(hi), nrow(lo)))
cat(sprintf("    hi-impellance venting slope: beta = %+.3f, p = %.4f\n", sh[2,1], sh[2,4]))
cat(sprintf("    lo-impellance venting slope: beta = %+.3f, p = %.4f\n", sl[2,1], sl[2,4]))

boot_diff <- function(data, idx) {
  d <- data[idx, ]; mq <- median(d$neuroticism)
  h <- d[d$neuroticism > mq, ]; l <- d[d$neuroticism <= mq, ]
  if (nrow(h) < 5 || nrow(l) < 5) return(NA_real_)
  coef(lm(hostile_response ~ scale(ai_venting), h))[2] -
    coef(lm(hostile_response ~ scale(ai_venting), l))[2]
}
set.seed(42)
bd <- boot(dd, boot_diff, R = 5000)
ts <- bd$t[!is.na(bd$t)]
cat(sprintf("    slope diff (hi-lo): est = %+.3f, 95%% perc CI [%.3f, %.3f], boot p = %.4f (n boots = %d)\n",
            bd$t0, quantile(ts, .025), quantile(ts, .975),
            2 * min(mean(ts <= 0), mean(ts >= 0)), length(ts)))
cat("  DISCLOSE: significant via the median split only; the continuous\n")
cat("  interaction fails (p approx .18) and the impellor (neuroticism) is weak.\n")

cat("\nDone.\n")
