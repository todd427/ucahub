# ============================================================================
# UCA Study - Hierarchical Regression (STEPPED AI BLOCKS)
# Understanding Cyber-Aggression through AI Use, Trust, and Personality Factors
# DV: hostile_response (single-item HRL, 1-10)
#
# Purpose: replaces the combined-AI-block regression with a stepped version for
# Chapter 4.5. AI Trust, AI Disinhibition, and AI Familiarity each enter as their
# own block so H2 can be read component-by-component.
#
# Data prep (rename / Likert / composites) is IDENTICAL to uca_with_k.R, so the
# descriptives, alphas and complete-case N reconcile exactly with that run.
# ============================================================================

# -- 0. PACKAGES -------------------------------------------------------------
library(dplyr)
# readxl loaded conditionally below. car / lmtest used for assumptions (optional).

# -- 1. DATA IMPORT ----------------------------------------------------------
# Point this at either your working file or the committed de-identified copy.
# Both carry identical question-text headers, so the keyword matching below works
# on either. Default resolves the committed dataset when run from analysis/R/ in
# the repo; override with your local working file if preferred.
data_path <- "../python/data/uca173_anon.csv"   # or e.g. "uca_173.xlsx"

ext <- tolower(tools::file_ext(data_path))
if (ext %in% c("xlsx", "xls")) {
  library(readxl)
  df <- as.data.frame(read_excel(data_path))
} else {
  df <- read.csv(data_path, check.names = FALSE, stringsAsFactors = FALSE)
}
cat("Total responses:", nrow(df), "\n")

# Keyword column matching (robust to export-format differences).
rename_by_match <- function(df, pattern, new_name) {
  idx <- grep(pattern, colnames(df), ignore.case = TRUE)
  if (length(idx) == 1) {
    colnames(df)[idx] <- new_name
  } else if (length(idx) > 1) {
    warning(paste("Multiple matches for", new_name, "- using first match"))
    colnames(df)[idx[1]] <- new_name
  } else {
    warning(paste("No match found for:", new_name, "| pattern:", pattern))
  }
  return(df)
}

# Demographics & screening
df <- rename_by_match(df, "^ID$",                                "ID")
df <- rename_by_match(df, "confirm that you are aged 18",        "consent")
df <- rename_by_match(df, "answers are anonymous",               "understand_anon")
df <- rename_by_match(df, "age group",                           "age_group")
df <- rename_by_match(df, "^Gender$",                            "gender")
df <- rename_by_match(df, "ATU Student",                         "atu_student")
df <- rename_by_match(df, "How often do you use AI",             "ai_frequency_raw")

# Habitual Use (4 items)
df <- rename_by_match(df, "just for a minute",                   "hab1")
df <- rename_by_match(df, "check social media.*without",         "hab2")
df <- rename_by_match(df, "hard to stop scrolling",              "hab3")
df <- rename_by_match(df, "post or reply.*before",               "hab4")

# Empathy Deficit (4 items)
df <- rename_by_match(df, "rarely affects me emotionally",       "emp1")
df <- rename_by_match(df, "responsible for other people.*feelings", "emp2")
df <- rename_by_match(df, "easier.*ignore someone.*feelings",    "emp3")
df <- rename_by_match(df, "less emotionally involved",           "emp4")

# Normalization (4 items)
df <- rename_by_match(df, "normal for people to be rude",        "norm1")
df <- rename_by_match(df, "Swearing or insulting",               "norm2")
df <- rename_by_match(df, "expect harsh comments",               "norm3")
df <- rename_by_match(df, "Calling someone names",               "norm4")

# Anonymity (4 items)
df <- rename_by_match(df, "don.*t really know who I am",         "anon1")
df <- rename_by_match(df, "more anonymous online",               "anon2")
df <- rename_by_match(df, "hard for most people to connect",     "anon3")
df <- rename_by_match(df, "blend in.*online",                    "anon4")

# Moral Disengagement (6 items)
df <- rename_by_match(df, "deserve a harsh response",            "md1")
df <- rename_by_match(df, "justified in attacking them back",    "md2")
df <- rename_by_match(df, "Making fun.*acceptable.*started",     "md3")
df <- rename_by_match(df, "understand why people join in",       "md4")
df <- rename_by_match(df, "cutting comment.*shut down",          "md5")
df <- rename_by_match(df, "don.*t feel particularly guilty",     "md6")

# AI Trust (5 items)
df <- rename_by_match(df, "trust AI tools.*accurate",            "trust1")
df <- rename_by_match(df, "comfortable following suggestions",   "trust2")
df <- rename_by_match(df, "designed with users.*best interests", "trust3")
df <- rename_by_match(df, "cautious about AI",                   "trust4")
df <- rename_by_match(df, "AI tools are safe",                   "trust5")

# AI Disinhibition (5 items)
df <- rename_by_match(df, "expressing my true thoughts",         "disinhib1")
df <- rename_by_match(df, "say things to AI.*would not say",     "disinhib2")
df <- rename_by_match(df, "less judged.*interact with AI",       "disinhib3")
df <- rename_by_match(df, "more direct or blunt",                "disinhib4")
df <- rename_by_match(df, "let off steam or vent",               "disinhib5")

# AI Familiarity (1-10 slider)
df <- rename_by_match(df, "familiar or comfortable.*AI",         "ai_familiarity")

# Big Five (single items)
df <- rename_by_match(df, "outgoing and talkative",              "big5_E")
df <- rename_by_match(df, "organised.*keeps track",             "big5_C")
df <- rename_by_match(df, "nervous or anxious",                 "big5_N")
df <- rename_by_match(df, "sensitive to other people.*feelings","big5_A")
df <- rename_by_match(df, "enjoys new and unusual ideas",       "big5_O")

# DV and scenario items
df <- rename_by_match(df, "sharp or hostile message",           "hostile_response")
df <- rename_by_match(df, "How serious do you think",           "seriousness")
df <- rename_by_match(df, "sounds most like what you would do", "response_choice")
df <- rename_by_match(df, "paying attention.*select",           "attention_check")

# -- 2. EXCLUSIONS -----------------------------------------------------------
cat("\n-- EXCLUSIONS --\n")
cat("Consent fail:    ", sum(df$consent != "Yes", na.rm = TRUE), "\n")
cat("Attention fail:  ", sum(df$attention_check != "Agree", na.rm = TRUE), "\n")
cat("Not ATU student: ", sum(df$atu_student != "Yes", na.rm = TRUE), "\n")

valid <- df %>%
  filter(consent == "Yes",
         attention_check == "Agree",
         atu_student == "Yes")
cat("Valid after exclusions: N =", nrow(valid), "\n")

# -- 3. LIKERT CODING --------------------------------------------------------
likert_to_num <- function(x) {
  recode <- c("Strongly Disagree" = 1, "Strongly disagree" = 1,
              "Disagree" = 2,
              "Neither Agree Nor Disagree" = 3, "Neither agree nor disagree" = 3,
              "Agree" = 4,
              "Strongly Agree" = 5, "Strongly agree" = 5)
  as.numeric(recode[as.character(x)])
}

likert_items <- c(paste0("hab", 1:4), paste0("emp", 1:4), paste0("norm", 1:4),
                  paste0("anon", 1:4), paste0("md", 1:6), paste0("trust", 1:5),
                  paste0("disinhib", 1:5), paste0("big5_", c("E","C","N","A","O")))
for (item in likert_items) valid[[item]] <- likert_to_num(valid[[item]])

# Reverse code trust4 (cautious about AI = reverse scored)
valid$trust4 <- 6 - valid$trust4

# ai_familiarity is a numeric 1-10 slider; coerce in case it imported as text
valid$ai_familiarity <- as.numeric(valid$ai_familiarity)

# -- 4. COMPOSITE SCORES -----------------------------------------------------
valid$habitual_use        <- rowMeans(valid[, paste0("hab", 1:4)],     na.rm = FALSE)
valid$empathy_deficit     <- rowMeans(valid[, paste0("emp", 1:4)],     na.rm = FALSE)
valid$normalization       <- rowMeans(valid[, paste0("norm", 1:4)],    na.rm = FALSE)
valid$anonymity           <- rowMeans(valid[, paste0("anon", 1:4)],    na.rm = FALSE)
valid$moral_disengagement <- rowMeans(valid[, paste0("md", 1:6)],      na.rm = FALSE)
valid$ai_trust            <- rowMeans(valid[, paste0("trust", 1:5)],   na.rm = FALSE)
valid$ai_disinhibition    <- rowMeans(valid[, paste0("disinhib", 1:5)],na.rm = FALSE)

valid$extraversion      <- valid$big5_E
valid$conscientiousness <- valid$big5_C
valid$neuroticism       <- valid$big5_N
valid$agreeableness     <- valid$big5_A
valid$openness          <- valid$big5_O

# -- 5. COMPLETE-CASE SET (identical across all blocks) ----------------------
# Every nested model MUST be fit on the same rows or the dR^2 / dF tests are
# invalid. Complete cases are taken across the full predictor set (the largest
# model), so all five models below use exactly the same n.
reg_vars <- c("hostile_response",
              "habitual_use", "empathy_deficit", "normalization",
              "anonymity", "moral_disengagement",
              "ai_trust", "ai_disinhibition", "ai_familiarity",
              "extraversion", "conscientiousness", "neuroticism",
              "agreeableness", "openness")

reg_data <- valid[complete.cases(valid[, reg_vars]), reg_vars]
cat("\n-- COMPLETE CASES --\n")
cat("Complete cases for regression: n =", nrow(reg_data), "\n")
cat("DV (hostile_response): M =", round(mean(reg_data$hostile_response), 3),
    " SD =", round(sd(reg_data$hostile_response), 3), "\n")

# -- 6. STEPPED HIERARCHICAL REGRESSION --------------------------------------
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

# -- 6.1 Block-comparison table (the 4.5 table) ------------------------------
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
    f2 <- r2 / (1 - r2)                                  # block-1 total f2
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

# -- 6.2 Per-block coefficients ----------------------------------------------
for (nm in names(models)) {
  cat("\n-- COEFFICIENTS:", nm, "--\n")
  print(summary(models[[nm]])$coefficients)
}

# -- 6.3 Standardized betas (final model) ------------------------------------
cat("\n-- STANDARDIZED BETAS (Model 5, full) --\n")
m5_z <- lm(hostile_response ~ ., data = as.data.frame(scale(reg_data)))
betas <- coef(m5_z)[-1]
for (v in names(betas)) cat(sprintf("  %-22s beta = %+.3f\n", v, betas[v]))

# -- 7. ASSUMPTION CHECKS (full model) ---------------------------------------
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
