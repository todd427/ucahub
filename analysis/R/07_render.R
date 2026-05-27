# ============================================================================
# UCA Study - 07_render.R
# Render + publish layer. Turns the COMPUTED table objects from the analysis
# modules into formatted flextables, assembles two Word documents (Chapter 3
# methodology tables; Chapter 4 results tables), and optionally publishes them
# to Google Docs as NATIVE Docs tables.
#
# Design: this script renders; it does NOT compute. The numbers come straight
# from 00_prep.R -> 01/02/03 (single source of truth). Re-running this after a
# data re-pin regenerates every table identically. No hand-transcription.
#
# Coverage:
#   Ch4  Table 4.1 (tbl_descr, from 01)   Table 4.2 (tbl_corr, from 02)
#        Table 4.3 (tbl_hier, from 03)
#   Ch3  Demographics table; Measures summary table (built here from `valid`)
#   NOT covered: Table 4.4 (composite path) is Python-sourced (sem_path.py);
#        render it in the Python pipeline, not here, or the R port (04_path.R,
#        n=140) will contradict the reported table (n=142).
#
# Run:   Rscript analysis/R/07_render.R            # writes ch3_tables.docx, ch4_tables.docx
#        UCA_PUBLISH=1 Rscript analysis/R/07_render.R   # also pushes to Google Docs
#
# Google Docs publish prerequisites (headless / vi / Rscript):
#   - googledrive needs a CACHED OAuth token. Run ONCE interactively:
#       googledrive::drive_auth()                 # caches to ~/.cache/gargle
#     or use a service account:
#       googledrive::drive_auth(path = "sa.json")
#   - Set GD_FOLDER below to a Drive folder path, or leave NULL for My Drive root.
# ============================================================================

# -- locate this script's dir so bare source("00_prep.R") in modules resolves -
get_script_dir <- function() {
  ca <- commandArgs(FALSE)
  m  <- grep("^--file=", ca, value = TRUE)
  if (length(m) == 1) return(dirname(normalizePath(sub("^--file=", "", m), mustWork = FALSE)))
  for (i in rev(seq_len(sys.nframe()))) {
    of <- sys.frame(i)$ofile
    if (!is.null(of)) return(dirname(normalizePath(of, mustWork = FALSE)))
  }
  getwd()
}
.here <- get_script_dir()
setwd(.here)

# -- hard dependency check (render stack) ------------------------------------
.need <- c("flextable", "officer", "psych")
.miss <- .need[!vapply(.need, requireNamespace, logical(1), quietly = TRUE)]
if (length(.miss))
  stop("07_render needs: ", paste(.miss, collapse = ", "),
       "\n  install.packages(c(", paste(sprintf('\"%s\"', .miss), collapse = ", "), "))")
library(officer)

# -- run the analysis modules (quietly); they leave tbl_* + `valid`/`scales` --
# Each module re-sources 00_prep.R (idempotent; a few seconds). Console output
# is captured so the render run stays clean; errors still propagate.
cat("07_render: sourcing analysis modules ...\n")
invisible(capture.output(source("01_descriptives.R")))
invisible(capture.output(source("02_correlations.R")))
invisible(capture.output(source("03_hierarchical.R")))
stopifnot(exists("tbl_descr"), exists("tbl_corr"), exists("tbl_hier"),
          exists("valid"), exists("scales"))
cat("07_render: tbl_descr / tbl_corr / tbl_hier ready (N =", nrow(valid), ")\n")

# ---------------------------------------------------------------------------
# Chapter 3 methodology tables (built here; no module owns them).
# ---------------------------------------------------------------------------

# Demographics (N = 164): gender + age band, count and %.
.freq_tbl <- function(x, heading) {
  tt <- sort(table(x), decreasing = TRUE)
  data.frame(Category = c(heading, names(tt)),
             n        = c("", as.character(as.integer(tt))),
             `%`      = c("", sprintf("%.1f", 100 * as.integer(tt) / sum(tt))),
             check.names = FALSE)
}
demo_df <- rbind(.freq_tbl(valid$gender,    "Gender"),
                 .freq_tbl(valid$age_group, "Age band"))
tbl_demo <- flextable::flextable(demo_df) |>
  flextable::set_caption(sprintf(
    "Table 3.x  Sample Characteristics (N = %d)", nrow(valid))) |>
  flextable::bold(i = which(demo_df$n == ""), j = 1) |>
  flextable::theme_booktabs() |>
  flextable::autofit()

# Measures summary. Construct label, items, response format, alpha, analytic n
# are pipeline-derived and therefore consistent with Table 4.1 BY CONSTRUCTION.
# The Source column is intentionally left blank: the Ch3 4.4 scale names and
# citations (Suler online disinhibition, "emotional dissociation") disagree
# with the data labels here - fill it manually after reconciling (see notes).
.lab_meas <- c(habitual_use        = "Habitual SNS Use",
               empathy_deficit     = "Empathy Deficit",
               normalization       = "Aggression Normalisation",
               anonymity           = "Perceived Anonymity",
               moral_disengagement = "Moral Disengagement",
               ai_trust            = "AI Trust",
               ai_disinhibition    = "AI Disinhibition")
meas_df <- do.call(rbind, lapply(names(scales), function(s) {
  it <- scales[[s]]; cc <- complete.cases(valid[, it])
  a  <- suppressWarnings(psych::alpha(valid[, it], check.keys = FALSE))$total$raw_alpha
  data.frame(Construct = .lab_meas[[s]], Items = length(it),
             Response = "1\u20135 Likert",
             a = sprintf("%.2f", a), n = sum(cc),
             Source = "",          # TODO: reconcile Ch3 4.4 names/citations
             check.names = FALSE)
}))
tbl_meas <- flextable::flextable(meas_df) |>
  flextable::set_header_labels(a = "\u03b1") |>
  flextable::set_caption("Table 3.x  Measures: Items, Reliability, and Analytic n") |>
  flextable::add_footer_lines(
    paste("Note. \u03b1 and n recomputed from the analysis pipeline (00_prep.R).",
          "Single-item measures (AI Familiarity 1\u201310; Big Five 1\u20135)",
          "omitted from this reliability table.")) |>
  flextable::theme_booktabs() |>
  flextable::autofit()

# ---------------------------------------------------------------------------
# Assemble the two Word documents.
# Table 4.2 is wide (14 columns) -> place it in a landscape section.
# ---------------------------------------------------------------------------
ls_props <- prop_section(
  page_size = page_size(orient = "landscape"), type = "continuous")

ch4 <- read_docx() |>
  body_add_par("Chapter 4 Tables (auto-generated)", style = "heading 1") |>
  body_add_flextable(tbl_descr) |>
  body_add_par("") |>
  body_add_flextable(tbl_hier) |>
  body_add_par("") |>
  body_add_flextable(tbl_corr) |>
  body_end_block_section(block_section(ls_props))      # wrap the wide corr table
f_ch4 <- file.path(.here, "ch4_tables.docx")
print(ch4, target = f_ch4)

ch3 <- read_docx() |>
  body_add_par("Chapter 3 Tables (auto-generated)", style = "heading 1") |>
  body_add_flextable(tbl_demo) |>
  body_add_par("") |>
  body_add_flextable(tbl_meas)
f_ch3 <- file.path(.here, "ch3_tables.docx")
print(ch3, target = f_ch3)

cat("07_render: wrote\n  ", f_ch3, "\n  ", f_ch4, "\n")

# ---------------------------------------------------------------------------
# Optional: publish to Google Docs as native Docs tables (upload + convert).
# Gated on UCA_PUBLISH=1 so a plain Rscript run never triggers an OAuth prompt.
# ---------------------------------------------------------------------------
GD_FOLDER <- NULL   # e.g. "UCA/Tables"; NULL = My Drive root

if (nzchar(Sys.getenv("UCA_PUBLISH")) && Sys.getenv("UCA_PUBLISH") != "0") {
  if (!requireNamespace("googledrive", quietly = TRUE))
    stop("UCA_PUBLISH set but googledrive is not installed.")
  gd_path <- if (is.null(GD_FOLDER)) NULL else googledrive::as_dribble(GD_FOLDER)
  for (f in c(f_ch3, f_ch4)) {
    nm <- sub("\\.docx$", "", basename(f))
    googledrive::drive_put(media = f, path = gd_path,
                           name = paste0("UCA ", nm),
                           type = "document")          # .docx -> native Google Doc
    cat("07_render: published ", nm, " to Google Docs\n")
  }
} else {
  cat("07_render: UCA_PUBLISH not set; skipped Google Docs publish.\n")
}

cat("Done.\n")
