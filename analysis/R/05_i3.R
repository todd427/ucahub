# ============================================================================
# UCA Study - 05_i3.R
# Finkel (2014) I-cubed theory test for Chapter 4.7.
# DV: hostile_response (raw HRL, 1-10). Components z-scored within the analysis
# subset:
#   INSTIG    = z(normalization)            (context-level instigator proxy)
#   IMPELL    = z(neuroticism)              (impellor; empirically weak here)
#   INHIB_md  = -z(moral_disengagement)     (MD is disinhibition, so inverted)
#   INHIB_c   = +z(conscientiousness)       (conscientiousness IS inhibition)
#
# I-cubed predicts a Hi-instigation x Hi-impellance x Lo-inhibition "perfect
# storm": that cell should yield the highest predicted HRL and the three-way
# interaction should be positive and significant. Verified reconciled:
# n=142; INHIB_md main B=-1.143***; three-way (MD) beta=+.072 p=.666; storm
# cell ranks 3/8 (not 1st); storm-vs-rest contrast +1.16 p=.019; conscientious-
# ness-inhibitor sensitivity three-way beta=-.478 p=.031.
#
# Reading: I-cubed is conceptually apt (MD-as-inhibition-failure is the dominant
# effect) but its strong multiplicative form is NOT supported cross-sectionally
# -- a measurement-validity limit (I-cubed presumes discrete provocation, which
# a survey cannot instantiate). McWilliams approved inclusion with a critical
# eye; report the null straight and loop back in the discussion.
# ============================================================================

source("00_prep.R")
suppressMessages(library(boot))

vars <- c("hostile_response", "normalization", "neuroticism",
          "moral_disengagement", "conscientiousness")
i3 <- valid[complete.cases(valid[, vars]), vars]
cat("\n========== 05 I-CUBED THEORY TEST (n =", nrow(i3), ") ==========\n")

z <- function(x) as.numeric(scale(x))
i3d <- data.frame(
  HRL      = i3$hostile_response,
  INSTIG   =  z(i3$normalization),
  IMPELL   =  z(i3$neuroticism),
  INHIB_md = -z(i3$moral_disengagement),
  INHIB_c  =  z(i3$conscientiousness)
)

# -- nested models (MD inhibitor) --------------------------------------------
m1 <- lm(HRL ~ INSTIG + IMPELL + INHIB_md, data = i3d)
m2 <- lm(HRL ~ INSTIG * IMPELL + INSTIG * INHIB_md + IMPELL * INHIB_md, data = i3d)
m3 <- lm(HRL ~ INSTIG * IMPELL * INHIB_md, data = i3d)

cat("\n-- Model 1 (main effects) --\n");        print(round(summary(m1)$coefficients, 3))
cat("\n-- Model 3 (full three-way) --\n");       print(round(summary(m3)$coefficients, 3))
cat("\n-- Model comparison (anova) --\n");        print(anova(m1, m2, m3))

b3  <- coef(m3)["INSTIG:IMPELL:INHIB_md"]
p3  <- summary(m3)$coefficients["INSTIG:IMPELL:INHIB_md", "Pr(>|t|)"]
cat(sprintf("\nThree-way interaction (MD inhibitor): beta = %+.3f, p = %.4f\n", b3, p3))

# -- perfect-storm cube: predict at the 8 corners (+/-1 SD per axis) ----------
grid <- expand.grid(INSTIG = c(1, -1), IMPELL = c(1, -1), INHIB_md = c(1, -1))
grid$pred <- predict(m3, newdata = grid)
grid <- grid[order(-grid$pred), ]
grid$rank <- seq_len(nrow(grid))
cat("\n-- Perfect-storm cube (predicted HRL at 8 corners) --\n")
print(round(grid, 3), row.names = FALSE)
storm <- which(grid$INSTIG == 1 & grid$IMPELL == 1 & grid$INHIB_md == -1)
cat(sprintf("Storm cell (Hi-INSTIG, Hi-IMPELL, Lo-inhibition) ranks %d of 8 (predicted #1 if I-cubed holds).\n",
            grid$rank[storm]))

# -- formal storm-vs-rest contrast (manual, dependency-free) -----------------
g8 <- expand.grid(INSTIG = c(1, -1), IMPELL = c(1, -1), INHIB_md = c(1, -1))
X8 <- model.matrix(delete.response(terms(m3)), g8)
si <- which(g8$INSTIG == 1 & g8$IMPELL == 1 & g8$INHIB_md == -1)
cvec <- X8[si, ] - colMeans(X8[-si, , drop = FALSE])
est  <- sum(cvec * coef(m3))
se   <- sqrt(as.numeric(t(cvec) %*% vcov(m3) %*% cvec))
tval <- est / se; dfree <- df.residual(m3); pval <- 2 * pt(-abs(tval), dfree)
cat(sprintf("\nStorm-vs-rest contrast: est = %+.3f, SE = %.3f, t = %.3f, df = %d, p = %.4f\n",
            est, se, tval, dfree, pval))

# -- bootstrap the three-way coefficient (5,000 percentile) ------------------
boot_3way <- function(data, idx)
  coef(lm(HRL ~ INSTIG * IMPELL * INHIB_md, data = data[idx, ]))["INSTIG:IMPELL:INHIB_md"]
set.seed(42)
b3b <- boot(i3d, boot_3way, R = 5000)
ci  <- suppressWarnings(boot.ci(b3b, type = "perc"))$percent
bp  <- 2 * min(mean(b3b$t <= 0), mean(b3b$t >= 0))
cat(sprintf("Bootstrap three-way: beta = %+.3f, 95%% perc CI [%.3f, %.3f], boot p = %.4f\n",
            b3b$t0, ci[4], ci[5], bp))

# -- sensitivity: conscientiousness as the inhibitor -------------------------
m3c <- lm(HRL ~ INSTIG * IMPELL * INHIB_c, data = i3d)
b3c <- coef(m3c)["INSTIG:IMPELL:INHIB_c"]
p3c <- summary(m3c)$coefficients["INSTIG:IMPELL:INHIB_c", "Pr(>|t|)"]
gc  <- expand.grid(INSTIG = c(1, -1), IMPELL = c(1, -1), INHIB_c = c(1, -1))
gc$pred <- predict(m3c, newdata = gc); gc <- gc[order(-gc$pred), ]
sc  <- which(gc$INSTIG == 1 & gc$IMPELL == 1 & gc$INHIB_c == -1)
cat(sprintf("\nSensitivity (conscientiousness inhibitor): three-way beta = %+.3f, p = %.4f, storm rank = %d/8\n",
            b3c, p3c, sc))

cat("\nDone.\n")
