# ============================================================================
# UCA Study - 08_figures.R
# Publication figures for Chapter 4 (Results), addressing supervisor feedback
# (Dr McWilliams, 5 June 2026) that the chapter is analysis-led rather than
# findings-led and would benefit from visual summaries before inferential
# statistics.
#
# Produces four PNG figures + one console table:
#   Figure 4.1  Mean scores across seven scales (HSU, ED, AN, PA, MD, AIT, AID)
#   Figure 4.2  Mean HRL by behavioural-choice response (the five options)
#   Figure 4.3  Significant predictors only: forest plot of beta / r effects
#   Figure 4.4  HRL by age band (18-24 vs 25+), reported as exploratory
#   Console     Table 4.3 reconciled against final N = 164 (clears the
#               [Numbers carried from prelim n = 132] flag in the draft)
#
# Prep delegated to 00_prep.R; figures consume the same screened `valid`
# frame as every other module. ggplot2 is the only added dependency.
#
# Run:
#   Rscript analysis/R/08_figures.R           # PNGs -> analysis/R/figures/
#   RStudio: Source the file. get_script_dir() resolves all three contexts.
#
# Output dimensions: 6.5 x 4.2 in, 300 dpi. Designed to drop into the Word
# doc at ~5 in wide without resampling.
# ============================================================================

# -- locate this script's dir (Rscript / source / RStudio editor) ------------
get_script_dir <- function() {
  ca <- commandArgs(FALSE)
  m  <- grep("^--file=", ca, value = TRUE)
  if (length(m) == 1) return(dirname(normalizePath(sub("^--file=", "", m), mustWork = FALSE)))
  for (i in rev(seq_len(sys.nframe()))) {
    of <- sys.frame(i)$ofile
    if (!is.null(of)) return(dirname(normalizePath(of, mustWork = FALSE)))
  }
  if (requireNamespace("rstudioapi", quietly = TRUE) && rstudioapi::isAvailable()) {
    p <- tryCatch(rstudioapi::getSourceEditorContext()$path, error = function(e) NULL)
    if (!is.null(p) && nzchar(p))
      return(dirname(normalizePath(p, mustWork = FALSE)))
  }
  getwd()
}
.here <- get_script_dir()
setwd(.here)

# -- dependencies ------------------------------------------------------------
if (!requireNamespace("ggplot2", quietly = TRUE))
  stop("08_figures needs ggplot2. install.packages(\"ggplot2\")")
library(ggplot2)

source("00_prep.R")

.figdir <- file.path(.here, "figures")
dir.create(.figdir, showWarnings = FALSE, recursive = TRUE)

# Consistent theme + palette across all four figures. Minimal grid, larger
# axis text than the ggplot default so the PNGs read at ~5 in wide in Word.
.theme <- theme_minimal(base_size = 11) +
  theme(panel.grid.minor   = element_blank(),
        panel.grid.major.x = element_blank(),
        axis.title         = element_text(size = 11),
        axis.text          = element_text(size = 10),
        plot.title         = element_text(size = 12, face = "bold"),
        plot.caption       = element_text(size = 9,  hjust = 0, colour = "grey30"))

# Single accent colour for bars; significant-predictor forest uses +/- coding.
.bar_fill <- "#2E75B6"   # Todd's standard accent
.sig_pos  <- "#2E75B6"
.sig_neg  <- "#C0504D"
.ref_grey <- "grey60"

# Helper: standard error of the mean (for error bars)
.sem <- function(x) sd(x, na.rm = TRUE) / sqrt(sum(!is.na(x)))

# Compact p-value formatter
.fmt_p <- function(p) {
  if (is.na(p)) return("NA")
  if (p < .001) return("< .001")
  sprintf("= %.3f", p)
}

cat("\n========== 08 FIGURES ==========\n")
cat("Output directory:", .figdir, "\n")
cat("N (screened):", nrow(valid), "\n\n")

# ============================================================================
# FIGURE 4.1  Mean scores across seven scales
# ----------------------------------------------------------------------------
# Gerry: "This is probably the graph I'd most want to see. One bar chart
# showing [the seven scales] with means on the y-axis. That instantly tells
# the reader what the sample looked like before any statistics are discussed."
#
# All seven scales scored 1-5, so they share an axis. 95% CI error bars; per-
# scale n in the caption since the AI-frequency branch leaves the AI scales
# at n = 142 (140 for AI Trust).
# ============================================================================

.scale_labels <- c(habitual_use        = "Habitual SNS Use",
                   empathy_deficit     = "Empathy Deficit",
                   normalization       = "Aggression Normalisation",
                   anonymity           = "Perceived Anonymity",
                   moral_disengagement = "Moral Disengagement",
                   ai_trust            = "AI Trust",
                   ai_disinhibition    = "AI Disinhibition")

f41 <- do.call(rbind, lapply(names(.scale_labels), function(s) {
  x <- valid[[s]]
  data.frame(scale = .scale_labels[[s]],
             m     = mean(x, na.rm = TRUE),
             se    = .sem(x),
             n     = sum(!is.na(x)),
             stringsAsFactors = FALSE)
}))
# Preserve label order on the x-axis
f41$scale <- factor(f41$scale, levels = unname(.scale_labels))

p41 <- ggplot(f41, aes(x = scale, y = m)) +
  geom_hline(yintercept = 3, linetype = "dashed", colour = .ref_grey) +
  geom_col(fill = .bar_fill, width = 0.7) +
  geom_errorbar(aes(ymin = m - 1.96 * se, ymax = m + 1.96 * se),
                width = 0.15, colour = "grey25") +
  geom_text(aes(label = sprintf("%.2f", m)),
            vjust = -1.4, size = 3.2, colour = "grey25") +
  scale_y_continuous(limits = c(1, 5), breaks = 1:5, expand = c(0, 0)) +
  coord_cartesian(ylim = c(1, 5), clip = "off") +
  labs(title   = "Figure 4.1  Mean scores across the seven multi-item scales",
       x       = NULL, y = "Mean (1\u20135 scale)",
       caption = sprintf(
         paste("Error bars: 95%% CI. Dashed line marks the scale midpoint (3).",
               "n = 142 for all scales except AI Trust (n = %d).",
               "AI Trust differs owing to item-level missingness on two cases."),
         f41$n[f41$scale == "AI Trust"])) +
  .theme +
  theme(axis.text.x = element_text(angle = 30, hjust = 1))

ggsave(file.path(.figdir, "fig_4_1_scale_means.png"),
       p41, width = 6.5, height = 4.2, dpi = 300)
cat("[fig 4.1] saved fig_4_1_scale_means.png\n")

# ============================================================================
# FIGURE 4.2  Mean HRL by behavioural-choice response
# ----------------------------------------------------------------------------
# Gerry: "This would be one of the strongest visuals in the dissertation
# because it directly supports the outcome measure. A bar chart showing mean
# HRL for [the five behavioural options]. The difference would be immediately
# visible and arguably more convincing than the table."
#
# Also serves as the canonical Table 4.3 recompute. The current draft (Table
# 4.3 note) carries a flag: "[Numbers carried from prelim n = 132 prep run;
# recompute against final N = 164 dataset before submission.]" This block
# prints the reconciled M / SD / n in console form for direct paste-in.
# ============================================================================

# The response_choice strings exported from Qualtrics are long phrases; map to
# short labels in the order Gerry presented (passive -> aggressive).
.bc_map <- list(
  "Ignore it and move on"                     = "Ignore",
  "Reply calmly but firmly"                   = "Reply calmly",
  "Report or block the person"                = "Report/block",
  "Talk to someone else about it privately"   = "Talk privately",
  "Reply with a sharp or sarcastic comment"   = "Reply sharply"
)

.match_bc <- function(s) {
  for (k in names(.bc_map)) {
    if (!is.na(s) && grepl(k, s, fixed = TRUE)) return(.bc_map[[k]])
  }
  NA_character_
}
bc_label <- vapply(valid$response_choice, .match_bc, character(1))
unmatched <- sum(!is.na(valid$response_choice) & is.na(bc_label))
if (unmatched > 0)
  warning(sprintf("[fig 4.2] %d response_choice values did not match; check Qualtrics export wording",
                  unmatched))

bc_df <- data.frame(label = bc_label,
                    hrl   = valid$hostile_response,
                    stringsAsFactors = FALSE)
bc_df <- bc_df[!is.na(bc_df$label) & !is.na(bc_df$hrl), ]

f42 <- aggregate(hrl ~ label, data = bc_df,
                 FUN = function(x) c(m = mean(x), sd = sd(x), n = length(x)))
f42 <- data.frame(label = f42$label,
                  m     = f42$hrl[, "m"],
                  sd    = f42$hrl[, "sd"],
                  n     = f42$hrl[, "n"])

# Order on the x-axis: passive -> aggressive (per Gerry's example)
.bc_order <- c("Ignore", "Reply calmly", "Report/block", "Talk privately", "Reply sharply")
f42$label <- factor(f42$label, levels = .bc_order)
f42 <- f42[order(f42$label), ]
f42$se <- f42$sd / sqrt(f42$n)

cat("\n[Table 4.3 reconciled, N =", sum(f42$n), "]\n")
print(transform(f42,
                m  = sprintf("%.2f", m),
                sd = sprintf("%.2f", sd),
                se = sprintf("%.2f", se)),
      row.names = FALSE)

p42 <- ggplot(f42, aes(x = label, y = m)) +
  geom_col(fill = .bar_fill, width = 0.65) +
  geom_errorbar(aes(ymin = m - 1.96 * se, ymax = m + 1.96 * se),
                width = 0.15, colour = "grey25") +
  geom_text(aes(label = sprintf("%.1f", m)),
            vjust = -1.4, size = 3.4, colour = "grey25") +
  geom_text(aes(label = sprintf("n=%d", n), y = 0.3),
            size = 3.0, colour = "white", fontface = "bold") +
  scale_y_continuous(limits = c(0, 10), breaks = seq(0, 10, 2), expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 10), clip = "off") +
  labs(title   = "Figure 4.2  Hostile Response Likelihood by behavioural choice",
       x       = "Self-reported behavioural response",
       y       = "Mean HRL (1\u201310)",
       caption = sprintf(
         paste("Error bars: 95%% CI. Convergent-validity check on the HRL measure.",
               "Total N = %d; per-bar n shown inside each bar.",
               "Aggressive option scored M = %.1f vs M = %.1f for the most passive option."),
         sum(f42$n),
         f42$m[f42$label == "Reply sharply"],
         f42$m[f42$label == "Talk privately"])) +
  .theme

ggsave(file.path(.figdir, "fig_4_2_hrl_by_choice.png"),
       p42, width = 6.5, height = 4.2, dpi = 300)
cat("[fig 4.2] saved fig_4_2_hrl_by_choice.png\n")

# ============================================================================
# FIGURE 4.3  Significant predictors only (forest plot)
# ----------------------------------------------------------------------------
# Gerry: "Instead of pages of coefficients, a simple plot showing:
#   - Moral Disengagement (+)
#   - Perceived Anonymity (-)
#   - Agreeableness (- correlation only)
# would make the final story much clearer."
#
# Two effect types share the panel:
#   - Standardised beta from the hierarchical regression (MD, Anonymity)
#   - Zero-order r from the full sample (Agreeableness; did not survive
#     multivariate control, reported as correlation only per draft S4.6)
# ============================================================================

# Compute beta + 95% CI for MD and Anonymity from the full hierarchical model
# (Model 5 in the draft: all blocks entered). Replicates 03_hierarchical.R but
# without re-sourcing it (avoids printing the whole stepped table to console).
.hm_vars <- c("hostile_response", "habitual_use", "empathy_deficit",
              "normalization", "anonymity", "moral_disengagement",
              "ai_trust", "ai_disinhibition", "ai_familiarity",
              "extraversion", "conscientiousness", "neuroticism",
              "agreeableness", "openness")
.hm <- valid[, .hm_vars]
.hm_cc <- .hm[complete.cases(.hm), ]

# z-standardise so coefficients = standardised betas
.hm_z <- as.data.frame(scale(.hm_cc))
fit <- lm(hostile_response ~ habitual_use + empathy_deficit + normalization +
            anonymity + moral_disengagement + ai_trust + ai_disinhibition +
            ai_familiarity + extraversion + conscientiousness + neuroticism +
            agreeableness + openness, data = .hm_z)

ci <- confint(fit, level = 0.95)
co <- summary(fit)$coefficients
get_b <- function(v) list(b  = co[v, "Estimate"],
                          lo = ci[v, 1], hi = ci[v, 2],
                          p  = co[v, "Pr(>|t|)"])
b_md   <- get_b("moral_disengagement")
b_anon <- get_b("anonymity")

# Agreeableness zero-order r against full N=164 sample (single-item Big5)
ag <- valid[!is.na(valid$agreeableness) & !is.na(valid$hostile_response),
            c("agreeableness", "hostile_response")]
r_ag <- cor.test(ag$agreeableness, ag$hostile_response)

# Fisher z-transform CI on the correlation
.fisher_ci <- function(r, n, conf = 0.95) {
  z   <- atanh(r)
  se  <- 1 / sqrt(n - 3)
  zcr <- qnorm(1 - (1 - conf) / 2)
  tanh(c(z - zcr * se, z + zcr * se))
}
ag_ci <- .fisher_ci(r_ag$estimate, nrow(ag))

f43 <- data.frame(
  predictor = c("Moral Disengagement", "Perceived Anonymity", "Agreeableness"),
  type      = c("Standardised \u03b2 (full model)",
                "Standardised \u03b2 (full model)",
                "Zero-order r (full sample)"),
  est       = c(b_md$b, b_anon$b, unname(r_ag$estimate)),
  lo        = c(b_md$lo, b_anon$lo, ag_ci[1]),
  hi        = c(b_md$hi, b_anon$hi, ag_ci[2]),
  p         = c(b_md$p, b_anon$p, r_ag$p.value),
  n         = c(nrow(.hm_cc), nrow(.hm_cc), nrow(ag))
)
f43$predictor <- factor(f43$predictor, levels = rev(f43$predictor))   # MD on top
f43$sign      <- ifelse(f43$est >= 0, "positive", "negative")
f43$label_txt <- mapply(function(type_lab, est_v, p_v) {
  prefix <- if (grepl("^Zero", type_lab)) "r" else "\u03b2"
  sprintf("%s = %+.2f, p %s", prefix, est_v, .fmt_p(p_v))
}, f43$type, f43$est, f43$p)

p43 <- ggplot(f43, aes(y = predictor, x = est, colour = sign)) +
  geom_vline(xintercept = 0, linetype = "dashed", colour = .ref_grey) +
  geom_errorbarh(aes(xmin = lo, xmax = hi), height = 0.15, linewidth = 0.7) +
  geom_point(size = 3.2) +
  geom_text(aes(label = label_txt),
            hjust = -0.15, vjust = -0.7, size = 3.1, colour = "grey25") +
  scale_colour_manual(values = c(positive = .sig_pos, negative = .sig_neg),
                      guide  = "none") +
  scale_x_continuous(limits = c(-0.5, 0.7), breaks = seq(-0.4, 0.6, 0.2)) +
  labs(title   = "Figure 4.3  Significant predictors of Hostile Response Likelihood",
       x       = "Effect size (95% CI)",
       y       = NULL,
       caption = sprintf(paste(
         "Moral disengagement and perceived anonymity: standardised \u03b2 from the",
         "full hierarchical model (n = %d). Agreeableness: zero-order r against",
         "the full sample (n = %d); did not survive multivariate control.",
         "Predictors with p >= .05 in all models omitted."),
         nrow(.hm_cc), nrow(ag))) +
  facet_grid(type ~ ., scales = "free_y", space = "free_y", switch = "y") +
  .theme +
  theme(strip.placement    = "outside",
        strip.text.y.left  = element_text(angle = 0, hjust = 1, size = 9,
                                          colour = "grey30"),
        panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_4_3_sig_predictors.png"),
       p43, width = 6.8, height = 3.6, dpi = 300)
cat("[fig 4.3] saved fig_4_3_sig_predictors.png\n")

# ============================================================================
# FIGURE 4.4  HRL by age band (exploratory)
# ----------------------------------------------------------------------------
# Gerry: "4.5.2 Age Differences. A graph: 18-24, 25+, with mean HRL." This
# pairs with the exploratory paragraph already in S4.6 / S5.6. Reported as
# exploratory: older group small (n approx 22), so wide CI by design.
# ============================================================================

ag2 <- valid[!is.na(valid$age_group) & !is.na(valid$hostile_response), ]
ag2$band <- ifelse(grepl("18", ag2$age_group), "18\u201324", "25+")

f44 <- aggregate(hostile_response ~ band, data = ag2,
                 FUN = function(x) c(m = mean(x), sd = sd(x), n = length(x)))
f44 <- data.frame(band = f44$band,
                  m    = f44$hostile_response[, "m"],
                  sd   = f44$hostile_response[, "sd"],
                  n    = f44$hostile_response[, "n"])
f44$se <- f44$sd / sqrt(f44$n)

tt <- t.test(hostile_response ~ band, data = ag2)
.d_cohen <- function(a, b) {
  s <- sqrt(((length(a) - 1) * var(a) + (length(b) - 1) * var(b)) /
              (length(a) + length(b) - 2))
  (mean(a) - mean(b)) / s
}
d44 <- .d_cohen(ag2$hostile_response[ag2$band == "18\u201324"],
                ag2$hostile_response[ag2$band == "25+"])

p44 <- ggplot(f44, aes(x = band, y = m)) +
  geom_col(fill = .bar_fill, width = 0.55) +
  geom_errorbar(aes(ymin = m - 1.96 * se, ymax = m + 1.96 * se),
                width = 0.1, colour = "grey25") +
  geom_text(aes(label = sprintf("%.2f", m)), vjust = -1.4, size = 3.4,
            colour = "grey25") +
  geom_text(aes(label = sprintf("n=%d", n), y = 0.3),
            colour = "white", fontface = "bold", size = 3.0) +
  scale_y_continuous(limits = c(0, 10), breaks = seq(0, 10, 2), expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 10), clip = "off") +
  labs(title   = "Figure 4.4  Hostile Response Likelihood by age band (exploratory)",
       x       = "Age band",
       y       = "Mean HRL (1\u201310)",
       caption = sprintf(
         paste("Welch t(%.1f) = %.2f, p %s, d = %.2f.",
               "Older band is small (n = %d); estimate is reported with caution."),
         tt$parameter, tt$statistic, .fmt_p(tt$p.value),
         d44, f44$n[f44$band == "25+"])) +
  .theme

ggsave(file.path(.figdir, "fig_4_4_age_band.png"),
       p44, width = 5.0, height = 3.6, dpi = 300)
cat("[fig 4.4] saved fig_4_4_age_band.png\n")

cat("\n08_figures: done. Four PNGs in", .figdir, "\n")
