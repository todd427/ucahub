# ============================================================================
# UCA Study - 08b_demographics_figures.R
# Demographic and descriptive figures for Chapter 4, regenerated from the
# canonical N = 164 pipeline (NOT the raw MS Forms auto-charts, which use
# pre-screening N = 170 and contradict every other figure in the dissertation).
#
# Produces four PNGs in analysis/R/figures/:
#   fig_4_5_behavioural_choice.png   Distribution of the 5 vignette responses
#   fig_4_6_ai_use_frequency.png     AI-use frequency: Daily through Never
#   fig_4_7_age_breakdown.png        Age 5-band breakdown (more detail than Table 4.1)
#   fig_4_8_gender_breakdown.png     Gender distribution
#
# Style: descriptive, single-colour where the count IS the message; a sequential
# palette where ordering matters (frequency, behavioural-choice severity).
#
# Run:
#   Windows / RStudio: open this file, click Source.
#   CLI:               Rscript analysis/R/08b_demographics_figures.R
#
# Dependencies: ggplot2 only (already required by 08_figures.R).
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

if (!requireNamespace("ggplot2", quietly = TRUE))
  stop("08b_demographics_figures needs ggplot2. install.packages(\"ggplot2\")")
library(ggplot2)

source("00_prep.R")

.figdir <- file.path(.here, "figures")
dir.create(.figdir, showWarnings = FALSE, recursive = TRUE)

# ----------------------------------------------------------------------------
# Shared theme (same as 08_figures.R so the four chapters of figures look
# coherent on the page).
# ----------------------------------------------------------------------------
.wrap_caption <- function(s, width = 95) {
  paste(strwrap(s, width = width), collapse = "\n")
}

.theme <- theme_minimal(base_size = 11) +
  theme(panel.grid.minor      = element_blank(),
        panel.grid.major.y    = element_blank(),
        axis.title            = element_text(size = 11),
        axis.text             = element_text(size = 10),
        plot.title            = element_text(size = 12, face = "bold",
                                             margin = margin(b = 8)),
        plot.title.position   = "plot",
        plot.caption          = element_text(size = 9, hjust = 0,
                                             colour = "grey30",
                                             margin = margin(t = 10)),
        plot.caption.position = "plot",
        plot.margin           = margin(t = 10, r = 14, b = 8, l = 10))

.bar_fill <- "#2E75B6"   # Todd's standard accent

# Sequential palette for ordered categorical (severity, frequency).
.seq_palette <- c("#2C7BB6", "#5BA4CF", "#ABD9E9", "#FDAE61", "#D7191C")

cat("\n========== 08b DEMOGRAPHICS FIGURES ==========\n")
cat("Output directory:", .figdir, "\n")
cat("N (screened):", nrow(valid), "\n\n")

# ============================================================================
# FIGURE 4.5  Behavioural-choice distribution (descriptive)
# ----------------------------------------------------------------------------
# MS Forms shows this as a donut at raw N = 170. We need it at N = 164, and a
# horizontal bar is more legible than a donut for ranked counts anyway. Order
# bars by frequency (highest at top) following the MS Forms layout convention.
#
# This is NEW descriptive material relative to the current draft; the existing
# Table 4.3 reports HRL CONDITIONAL on the choice. This figure shows the
# unconditional distribution of choices, which the draft mentions in prose
# (Section 4.2) but has no figure for.
# ============================================================================

.bc_map <- list(
  "Ignore it and move on"                     = "Ignore it and move on",
  "Reply calmly but firmly"                   = "Reply calmly but firmly",
  "Report or block the person"                = "Report or block the person",
  "Talk to someone else about it privately"   = "Talk to someone privately",
  "Reply with a sharp or sarcastic comment"   = "Reply with a sharp or sarcastic comment"
)
.match_bc <- function(s) {
  for (k in names(.bc_map)) {
    if (!is.na(s) && grepl(k, s, fixed = TRUE)) return(.bc_map[[k]])
  }
  NA_character_
}
bc_label <- vapply(valid$response_choice, .match_bc, character(1))
bc_tab <- as.data.frame(table(bc_label), stringsAsFactors = FALSE)
names(bc_tab) <- c("choice", "n")
bc_tab$pct <- 100 * bc_tab$n / sum(bc_tab$n)
bc_tab <- bc_tab[order(-bc_tab$n), ]
bc_tab$choice <- factor(bc_tab$choice, levels = rev(bc_tab$choice))   # top = highest

cap_45 <- .wrap_caption(sprintf(paste(
  "Distribution of self-reported behavioural responses to the provocation",
  "vignette (N = %d). The behavioural-choice item is descriptive; Hostile",
  "Response Likelihood (1\u201310) is the primary outcome (see Figure 4.2)."),
  sum(bc_tab$n)))

p45 <- ggplot(bc_tab, aes(x = n, y = choice)) +
  geom_col(fill = .bar_fill, width = 0.7) +
  geom_text(aes(label = sprintf("%d (%.0f%%)", n, pct)),
            hjust = -0.15, size = 3.5, colour = "grey20", fontface = "bold") +
  scale_x_continuous(limits = c(0, max(bc_tab$n) * 1.25), expand = c(0, 0)) +
  labs(title   = "Figure 4.5  Distribution of behavioural responses to the vignette",
       x       = "Count",
       y       = NULL,
       caption = cap_45) +
  .theme +
  theme(panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_4_5_behavioural_choice.png"),
       p45, width = 7.5, height = 4.0, dpi = 300)
cat("[fig 4.5] saved fig_4_5_behavioural_choice.png\n")
cat("[fig 4.5 data]\n"); print(bc_tab, row.names = FALSE)

# ============================================================================
# FIGURE 4.6  AI-use frequency distribution
# ----------------------------------------------------------------------------
# Six categories. Order is fixed (Daily -> Never), not by count. Worth a
# figure because the current draft has no visualisation of the AI-use
# branching variable, and §4.6 / §5.6 reports the "daily vs non-daily"
# contrast within the 18-24 cohort.
# ============================================================================

# The raw column ai_frequency_raw holds the Likert string from MS Forms.
.ai_order <- c("Daily",
               "Several times a week",
               "About once a week",
               "About once a month",
               "Less than once a month",
               "Never")
ai_tab <- as.data.frame(table(valid$ai_frequency_raw), stringsAsFactors = FALSE)
names(ai_tab) <- c("freq", "n")
ai_tab <- ai_tab[ai_tab$freq %in% .ai_order, ]
ai_tab$pct <- 100 * ai_tab$n / sum(ai_tab$n)
ai_tab$freq <- factor(ai_tab$freq, levels = rev(.ai_order))   # top = Daily

cap_46 <- .wrap_caption(sprintf(paste(
  "Self-reported AI-use frequency (N = %d). The 22 participants reporting",
  "'Never' were not routed to the AI-construct block, hence the analytic n = 142",
  "for AI-related scales reported elsewhere."),
  sum(ai_tab$n)))

p46 <- ggplot(ai_tab, aes(x = n, y = freq)) +
  geom_col(fill = .bar_fill, width = 0.7) +
  geom_text(aes(label = sprintf("%d (%.0f%%)", n, pct)),
            hjust = -0.15, size = 3.5, colour = "grey20", fontface = "bold") +
  scale_x_continuous(limits = c(0, max(ai_tab$n) * 1.25), expand = c(0, 0)) +
  labs(title   = "Figure 4.6  AI-use frequency in the sample",
       x       = "Count",
       y       = NULL,
       caption = cap_46) +
  .theme +
  theme(panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_4_6_ai_use_frequency.png"),
       p46, width = 7.5, height = 4.0, dpi = 300)
cat("[fig 4.6] saved fig_4_6_ai_use_frequency.png\n")
cat("[fig 4.6 data]\n"); print(ai_tab[order(match(as.character(ai_tab$freq), .ai_order)), ], row.names = FALSE)

# ============================================================================
# FIGURE 4.7  Age band 5-category breakdown
# ----------------------------------------------------------------------------
# Table 4.1 currently collapses age into 18-24 vs 25+. The full breakdown
# (18-24, 25-34, 35-44, 45-54, 55+) is worth a figure if you want to make the
# youth skew unmistakable. The 25-34 band carries most of the "25+" group;
# 35-44 / 45-54 / 55+ are essentially noise.
# ============================================================================

# age_group from MS Forms uses strings like "18-24", "25-34", etc.
.age_order <- c("18-24", "25-34", "35-44", "45-54", "55+")
age_tab <- as.data.frame(table(valid$age_group), stringsAsFactors = FALSE)
names(age_tab) <- c("band", "n")
age_tab <- age_tab[age_tab$band %in% .age_order, ]
age_tab$pct <- 100 * age_tab$n / sum(age_tab$n)
age_tab$band <- factor(age_tab$band, levels = rev(.age_order))   # top = 18-24

cap_47 <- .wrap_caption(sprintf(paste(
  "Age distribution (N = %d). The sample is heavily concentrated in the",
  "18\u201324 band (%.0f%%). The age 25+ analyses in Figure 4.4 and Section 4.6",
  "collapse all four older bands into a single group (n = %d)."),
  sum(age_tab$n),
  age_tab$pct[age_tab$band == "18-24"],
  sum(age_tab$n[age_tab$band != "18-24"])))

p47 <- ggplot(age_tab, aes(x = n, y = band)) +
  geom_col(fill = .bar_fill, width = 0.7) +
  geom_text(aes(label = sprintf("%d (%.0f%%)", n, pct)),
            hjust = -0.15, size = 3.5, colour = "grey20", fontface = "bold") +
  scale_x_continuous(limits = c(0, max(age_tab$n) * 1.25), expand = c(0, 0)) +
  labs(title   = "Figure 4.7  Age distribution",
       x       = "Count",
       y       = NULL,
       caption = cap_47) +
  .theme +
  theme(panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_4_7_age_breakdown.png"),
       p47, width = 7.0, height = 3.6, dpi = 300)
cat("[fig 4.7] saved fig_4_7_age_breakdown.png\n")
cat("[fig 4.7 data]\n"); print(age_tab[order(match(as.character(age_tab$band), .age_order)), ], row.names = FALSE)

# ============================================================================
# FIGURE 4.8  Gender distribution
# ----------------------------------------------------------------------------
# Table 4.1 already lists gender counts. A figure is somewhat redundant; the
# value is mostly visual reinforcement of the gender skew. Included for
# completeness so the Demographics subsection has matched figures across
# the three demographic variables.
# ============================================================================

# Normalise the various ways MS Forms exports gender. The raw column is
# `gender`. Map to a clean set of categories.
.gender_order <- c("Woman", "Man", "Non-binary", "Genderfluid",
                   "Prefer not to say", "Prefer to self-describe", "Other")
gender_norm <- function(g) {
  if (is.na(g) || !nzchar(g)) return(NA_character_)
  if (grepl("^Woman$",          g, ignore.case = TRUE))               return("Woman")
  if (grepl("^Man$",            g, ignore.case = TRUE))               return("Man")
  if (grepl("Non.?binary",      g, ignore.case = TRUE))               return("Non-binary")
  if (grepl("Genderfluid",      g, ignore.case = TRUE))               return("Genderfluid")
  if (grepl("Prefer.*not.*say", g, ignore.case = TRUE))               return("Prefer not to say")
  if (grepl("self.?describe",   g, ignore.case = TRUE))               return("Prefer to self-describe")
  "Other"
}
gender_clean <- vapply(valid$gender, gender_norm, character(1))
gen_tab <- as.data.frame(table(gender_clean), stringsAsFactors = FALSE)
names(gen_tab) <- c("gender", "n")
gen_tab$pct <- 100 * gen_tab$n / sum(gen_tab$n)
# Order: present categories ranked by count, with absent levels dropped.
gen_tab <- gen_tab[order(-gen_tab$n), ]
gen_tab$gender <- factor(gen_tab$gender, levels = rev(gen_tab$gender))

cap_48 <- .wrap_caption(sprintf(paste(
  "Gender distribution (N = %d). The sample is %.0f%% women; this skew is",
  "discussed as a limitation in Section 5.8."),
  sum(gen_tab$n),
  gen_tab$pct[as.character(gen_tab$gender) == "Woman"]))

p48 <- ggplot(gen_tab, aes(x = n, y = gender)) +
  geom_col(fill = .bar_fill, width = 0.7) +
  geom_text(aes(label = sprintf("%d (%.0f%%)", n, pct)),
            hjust = -0.15, size = 3.5, colour = "grey20", fontface = "bold") +
  scale_x_continuous(limits = c(0, max(gen_tab$n) * 1.25), expand = c(0, 0)) +
  labs(title   = "Figure 4.8  Gender distribution",
       x       = "Count",
       y       = NULL,
       caption = cap_48) +
  .theme +
  theme(panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_4_8_gender_breakdown.png"),
       p48, width = 7.0, height = 3.6, dpi = 300)
cat("[fig 4.8] saved fig_4_8_gender_breakdown.png\n")
cat("[fig 4.8 data]\n"); print(gen_tab[order(-gen_tab$n), ], row.names = FALSE)

cat("\n08b_demographics_figures: done. Four PNGs in", .figdir, "\n")
