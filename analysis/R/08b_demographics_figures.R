# ============================================================================
# UCA Study - 08b_demographics_figures.R
# Demographic and descriptive figures for Chapter 4, regenerated from the
# canonical N = 164 pipeline (NOT the raw MS Forms auto-charts, which use
# pre-screening N = 170 and contradict every other figure in the dissertation).
#
# Produces four PNGs in analysis/R/figures/:
#   fig_behavioural_choice.png   Distribution of the 5 vignette responses
#   fig_ai_use_frequency.png     AI-use frequency: Daily through Never
#   fig_age_breakdown.png        Age 5-band breakdown
#   fig_gender_breakdown.png     Gender distribution
#
# Filenames are descriptive only; the Word document carries the figure
# numbers in the captions and in-figure titles describe content only.
#
# Style: horizontal bars (more legible than donuts for ranked counts).
#
# Run:
#   Windows / RStudio: open this file, click Source.
#   CLI:               Rscript analysis/R/08b_demographics_figures.R
#
# Dependencies: ggplot2 only (already required by 08_figures.R).
# ============================================================================

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

.bar_fill <- "#2E75B6"

cat("\n========== 08b DEMOGRAPHICS FIGURES ==========\n")
cat("Output directory:", .figdir, "\n")
cat("N (screened):", nrow(valid), "\n\n")

# ============================================================================
# Behavioural-choice distribution (descriptive)
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
bc_tab$choice <- factor(bc_tab$choice, levels = rev(bc_tab$choice))

cap_45 <- .wrap_caption(sprintf(paste(
  "Distribution of self-reported behavioural responses to the provocation",
  "vignette (N = %d). The behavioural-choice item is descriptive."),
  sum(bc_tab$n)))

p45 <- ggplot(bc_tab, aes(x = n, y = choice)) +
  geom_col(fill = .bar_fill, width = 0.7) +
  geom_text(aes(label = sprintf("%d (%.0f%%)", n, pct)),
            hjust = -0.15, size = 3.5, colour = "grey20", fontface = "bold") +
  scale_x_continuous(limits = c(0, max(bc_tab$n) * 1.25), expand = c(0, 0)) +
  labs(title   = "Distribution of behavioural responses to the vignette",
       x       = "Count",
       y       = NULL,
       caption = cap_45) +
  .theme +
  theme(panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_behavioural_choice.png"),
       p45, width = 7.5, height = 4.0, dpi = 300)
cat("[saved] fig_behavioural_choice.png\n")
cat("[data]\n"); print(bc_tab, row.names = FALSE)

# ============================================================================
# AI-use frequency distribution
# ============================================================================

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
ai_tab$freq <- factor(ai_tab$freq, levels = rev(.ai_order))

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
  labs(title   = "AI-use frequency in the sample",
       x       = "Count",
       y       = NULL,
       caption = cap_46) +
  .theme +
  theme(panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_ai_use_frequency.png"),
       p46, width = 7.5, height = 4.0, dpi = 300)
cat("[saved] fig_ai_use_frequency.png\n")
cat("[data]\n"); print(ai_tab[order(match(as.character(ai_tab$freq), .ai_order)), ], row.names = FALSE)

# ============================================================================
# Age band 5-category breakdown
# ============================================================================

.age_order <- c("18-24", "25-34", "35-44", "45-54", "55+")
age_tab <- as.data.frame(table(valid$age_group), stringsAsFactors = FALSE)
names(age_tab) <- c("band", "n")
age_tab <- age_tab[age_tab$band %in% .age_order, ]
age_tab$pct <- 100 * age_tab$n / sum(age_tab$n)
age_tab$band <- factor(age_tab$band, levels = rev(.age_order))

cap_47 <- .wrap_caption(sprintf(paste(
  "Age distribution (N = %d). The sample is heavily concentrated in the",
  "18\u201324 band (%.0f%%)."),
  sum(age_tab$n),
  age_tab$pct[age_tab$band == "18-24"]))

p47 <- ggplot(age_tab, aes(x = n, y = band)) +
  geom_col(fill = .bar_fill, width = 0.7) +
  geom_text(aes(label = sprintf("%d (%.0f%%)", n, pct)),
            hjust = -0.15, size = 3.5, colour = "grey20", fontface = "bold") +
  scale_x_continuous(limits = c(0, max(age_tab$n) * 1.25), expand = c(0, 0)) +
  labs(title   = "Age distribution",
       x       = "Count",
       y       = NULL,
       caption = cap_47) +
  .theme +
  theme(panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_age_breakdown.png"),
       p47, width = 7.0, height = 3.6, dpi = 300)
cat("[saved] fig_age_breakdown.png\n")
cat("[data]\n"); print(age_tab[order(match(as.character(age_tab$band), .age_order)), ], row.names = FALSE)

# ============================================================================
# Gender distribution
# ============================================================================

gender_norm <- function(g) {
  if (is.na(g) || !nzchar(g)) return(NA_character_)
  if (grepl("^Woman$",          g, ignore.case = TRUE)) return("Woman")
  if (grepl("^Man$",            g, ignore.case = TRUE)) return("Man")
  if (grepl("Non.?binary",      g, ignore.case = TRUE)) return("Non-binary")
  if (grepl("Genderfluid",      g, ignore.case = TRUE)) return("Genderfluid")
  if (grepl("Prefer.*not.*say", g, ignore.case = TRUE)) return("Prefer not to say")
  if (grepl("self.?describe",   g, ignore.case = TRUE)) return("Prefer to self-describe")
  "Other"
}
gender_clean <- vapply(valid$gender, gender_norm, character(1))
gen_tab <- as.data.frame(table(gender_clean), stringsAsFactors = FALSE)
names(gen_tab) <- c("gender", "n")
gen_tab$pct <- 100 * gen_tab$n / sum(gen_tab$n)
gen_tab <- gen_tab[order(-gen_tab$n), ]
gen_tab$gender <- factor(gen_tab$gender, levels = rev(gen_tab$gender))

cap_48 <- .wrap_caption(sprintf(paste(
  "Gender distribution (N = %d). The sample is %.0f%% women."),
  sum(gen_tab$n),
  gen_tab$pct[as.character(gen_tab$gender) == "Woman"]))

p48 <- ggplot(gen_tab, aes(x = n, y = gender)) +
  geom_col(fill = .bar_fill, width = 0.7) +
  geom_text(aes(label = sprintf("%d (%.0f%%)", n, pct)),
            hjust = -0.15, size = 3.5, colour = "grey20", fontface = "bold") +
  scale_x_continuous(limits = c(0, max(gen_tab$n) * 1.25), expand = c(0, 0)) +
  labs(title   = "Gender distribution",
       x       = "Count",
       y       = NULL,
       caption = cap_48) +
  .theme +
  theme(panel.grid.major.x = element_line(colour = "grey92"),
        panel.grid.major.y = element_blank())

ggsave(file.path(.figdir, "fig_gender_breakdown.png"),
       p48, width = 7.0, height = 3.6, dpi = 300)
cat("[saved] fig_gender_breakdown.png\n")
cat("[data]\n"); print(gen_tab[order(-gen_tab$n), ], row.names = FALSE)

cat("\n08b_demographics_figures: done. Four PNGs in", .figdir, "\n")
