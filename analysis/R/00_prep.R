# ============================================================================
# UCA Study - 00_prep.R
# CANONICAL shared data preparation. SOURCE this from every analysis module:
#     source("00_prep.R")
# It leaves a single screened data frame `valid` (N = 164) in the environment,
# with one DV definition, one screening funnel, and one set of composites.
# This is the ONLY place data prep happens; modules must not re-prep.
#
# DV: hostile_response (single-item HRL, 1-10). Screening: consent + attention
# + ATU -> 164. Composites use na.rm = FALSE (any missing item -> NA -> dropped
# at complete-case selection downstream).
# ============================================================================

suppressMessages(library(dplyr))

# -- locate the dataset relative to THIS file (works under source / Rscript) --
get_script_dir <- function() {
  ca <- commandArgs(FALSE)
  m  <- grep("^--file=", ca, value = TRUE)
  if (length(m) == 1) return(dirname(normalizePath(sub("^--file=", "", m), mustWork = FALSE)))
  for (i in rev(seq_len(sys.nframe()))) {        # innermost frame = this file
    of <- sys.frame(i)$ofile
    if (!is.null(of)) return(dirname(normalizePath(of, mustWork = FALSE)))
  }
  getwd()
}
.prep_dir  <- get_script_dir()
.data_path <- normalizePath(file.path(.prep_dir, "..", "python", "data", "uca173_anon.csv"),
                            mustWork = FALSE)

df <- read.csv(.data_path, check.names = FALSE, stringsAsFactors = FALSE)
cat("00_prep: read", nrow(df), "raw responses from", basename(.data_path), "\n")

# -- keyword column rename (robust to export-format differences) -------------
rename_by_match <- function(df, pattern, new_name) {
  idx <- grep(pattern, colnames(df), ignore.case = TRUE)
  if (length(idx) >= 1) colnames(df)[idx[1]] <- new_name
  else warning(paste("00_prep: no match for", new_name))
  df
}

df <- rename_by_match(df, "confirm that you are aged 18",        "consent")
df <- rename_by_match(df, "age group",                           "age_group")
df <- rename_by_match(df, "^Gender$",                            "gender")
df <- rename_by_match(df, "ATU Student",                         "atu_student")
df <- rename_by_match(df, "How often do you use AI",             "ai_frequency_raw")
df <- rename_by_match(df, "just for a minute",                   "hab1")
df <- rename_by_match(df, "check social media.*without",         "hab2")
df <- rename_by_match(df, "hard to stop scrolling",              "hab3")
df <- rename_by_match(df, "post or reply.*before",               "hab4")
df <- rename_by_match(df, "rarely affects me emotionally",       "emp1")
df <- rename_by_match(df, "responsible for other people.*feelings", "emp2")
df <- rename_by_match(df, "easier.*ignore someone.*feelings",    "emp3")
df <- rename_by_match(df, "less emotionally involved",           "emp4")
df <- rename_by_match(df, "normal for people to be rude",        "norm1")
df <- rename_by_match(df, "Swearing or insulting",               "norm2")
df <- rename_by_match(df, "expect harsh comments",               "norm3")
df <- rename_by_match(df, "Calling someone names",               "norm4")
df <- rename_by_match(df, "don.*t really know who I am",         "anon1")
df <- rename_by_match(df, "more anonymous online",               "anon2")
df <- rename_by_match(df, "hard for most people to connect",     "anon3")
df <- rename_by_match(df, "blend in.*online",                    "anon4")
df <- rename_by_match(df, "deserve a harsh response",            "md1")
df <- rename_by_match(df, "justified in attacking them back",    "md2")
df <- rename_by_match(df, "Making fun.*acceptable.*started",     "md3")
df <- rename_by_match(df, "understand why people join in",       "md4")
df <- rename_by_match(df, "cutting comment.*shut down",          "md5")
df <- rename_by_match(df, "don.*t feel particularly guilty",     "md6")
df <- rename_by_match(df, "trust AI tools.*accurate",            "trust1")
df <- rename_by_match(df, "comfortable following suggestions",   "trust2")
df <- rename_by_match(df, "designed with users.*best interests", "trust3")
df <- rename_by_match(df, "cautious about AI",                   "trust4")
df <- rename_by_match(df, "AI tools are safe",                   "trust5")
df <- rename_by_match(df, "expressing my true thoughts",         "disinhib1")
df <- rename_by_match(df, "say things to AI.*would not say",     "disinhib2")
df <- rename_by_match(df, "less judged.*interact with AI",       "disinhib3")
df <- rename_by_match(df, "more direct or blunt",                "disinhib4")
df <- rename_by_match(df, "let off steam or vent",               "disinhib5")   # = venting
df <- rename_by_match(df, "familiar or comfortable.*AI",         "ai_familiarity")
df <- rename_by_match(df, "outgoing and talkative",              "big5_E")
df <- rename_by_match(df, "organised.*keeps track",             "big5_C")
df <- rename_by_match(df, "nervous or anxious",                 "big5_N")
df <- rename_by_match(df, "sensitive to other people.*feelings","big5_A")
df <- rename_by_match(df, "enjoys new and unusual ideas",       "big5_O")
df <- rename_by_match(df, "sharp or hostile message",           "hostile_response")
df <- rename_by_match(df, "How serious do you think",           "seriousness")
df <- rename_by_match(df, "sounds most like what you would do", "response_choice")
df <- rename_by_match(df, "paying attention.*select",           "attention_check")

# -- Likert -> numeric (1-5) -------------------------------------------------
likert_to_num <- function(x) {
  rc <- c("Strongly Disagree" = 1, "Strongly disagree" = 1, "Disagree" = 2,
          "Neither Agree Nor Disagree" = 3, "Neither agree nor disagree" = 3,
          "Agree" = 4, "Strongly Agree" = 5, "Strongly agree" = 5)
  as.numeric(rc[as.character(x)])
}
.likert <- c(paste0("hab", 1:4), paste0("emp", 1:4), paste0("norm", 1:4),
             paste0("anon", 1:4), paste0("md", 1:6), paste0("trust", 1:5),
             paste0("disinhib", 1:5), paste0("big5_", c("E","C","N","A","O")))
for (it in .likert) df[[it]] <- likert_to_num(df[[it]])
df$trust4         <- 6 - df$trust4                  # reverse-coded trust item
df$ai_familiarity <- as.numeric(df$ai_familiarity)
df$hostile_response <- as.numeric(df$hostile_response)

# -- screening: consent + attention + ATU -> 164 -----------------------------
valid <- df %>% filter(consent == "Yes",
                       attention_check == "Agree",
                       atu_student == "Yes")

# -- composites (na.rm = FALSE) ----------------------------------------------
cm <- function(cols) rowMeans(valid[, cols], na.rm = FALSE)
valid$habitual_use        <- cm(paste0("hab", 1:4))
valid$empathy_deficit     <- cm(paste0("emp", 1:4))
valid$normalization       <- cm(paste0("norm", 1:4))
valid$anonymity           <- cm(paste0("anon", 1:4))
valid$moral_disengagement <- cm(paste0("md", 1:6))
valid$ai_trust            <- cm(paste0("trust", 1:5))
valid$ai_disinhibition    <- cm(paste0("disinhib", 1:5))

# single venting item (AD5) kept standalone for the catharsis / dissociation work
valid$ai_venting <- valid$disinhib5

valid$extraversion      <- valid$big5_E
valid$conscientiousness <- valid$big5_C
valid$neuroticism       <- valid$big5_N
valid$agreeableness     <- valid$big5_A
valid$openness          <- valid$big5_O

# NOTE for I3 / MIRM modules (05_i3.R, 06_mirm.R): build the I-cubed axes by
# z-scoring WITHIN the analysis complete-case subset, not here, so the scaling
# matches each model's n. Canonical operationalisation:
#   INSTIG = z(normalization);  IMPELL = z(neuroticism);  INHIB = -z(moral_disengagement)

cat("00_prep: screened to N =", nrow(valid),
    "(consent + attention + ATU)\n")
