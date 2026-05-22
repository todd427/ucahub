"""
UCA data preparation: load, screen, and score.

Screening funnel (built in): raw -> consent gate -> attention check.
For the canonical dataset this is 173 -> 170 -> 164.

Usage:
    # As a script (prints funnel + alphas):
    python prep_data.py                          # uses bundled data/uca173_anon.csv
    python prep_data.py /path/to/other.csv       # positional override
    python prep_data.py --data /path/to/other.csv
    python prep_data.py --no-screen              # skip consent/attention filtering

    # As a module:
    from prep_data import load_uca
    df = load_uca()                              # default bundled file
    df = load_uca("/path/to/other.csv")          # explicit path
    df = load_uca(screen=False)                  # raw, unscreened
"""
import argparse
import os
import sys
import pandas as pd
import numpy as np

# Default dataset resolved relative to this script, so it runs from any CWD.
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DEFAULT_DATA = os.path.normpath(os.path.join(_SCRIPT_DIR, "..", "data", "uca173_anon.csv"))

COLUMN_NAMES = [
    'Id', 'survey_date', 'duration_min', 'Consent1', 'Consent2',
    'age_group', 'gender', 'ATU_student', 'ai_frequency',
    'OD1', 'OD2', 'OD3', 'OD4', 'ED1', 'ED2', 'ED3', 'ED4',
    'AN1', 'AN2', 'AN3', 'AN4', 'AP1', 'AP2', 'AP3', 'AP4',
    'MD1', 'MD2', 'MD3', 'MD4', 'MD5', 'MD6',
    'AT1', 'AT2', 'AT3', 'AT4', 'AT5', 'AD1', 'AD2', 'AD3', 'AD4', 'AD5',
    'ai_familiarity', 'BF_E', 'BF_C', 'BF_N', 'BF_A', 'BF_O',
    'HRL_likely', 'HRL_serious', 'HRL_choice', 'attention',
]

LIKERT_COLS = [
    'OD1', 'OD2', 'OD3', 'OD4', 'ED1', 'ED2', 'ED3', 'ED4',
    'AN1', 'AN2', 'AN3', 'AN4', 'AP1', 'AP2', 'AP3', 'AP4',
    'MD1', 'MD2', 'MD3', 'MD4', 'MD5', 'MD6',
    'AT1', 'AT2', 'AT3', 'AT4', 'AT5', 'AD1', 'AD2', 'AD3', 'AD4', 'AD5',
    'BF_E', 'BF_C', 'BF_N', 'BF_A', 'BF_O',
]

SCALES = {
    'OD': ['OD1', 'OD2', 'OD3', 'OD4'],
    'ED': ['ED1', 'ED2', 'ED3', 'ED4'],
    'AN': ['AN1', 'AN2', 'AN3', 'AN4'],
    'AP': ['AP1', 'AP2', 'AP3', 'AP4'],
    'MD': ['MD1', 'MD2', 'MD3', 'MD4', 'MD5', 'MD6'],
    'AT': ['AT1', 'AT2', 'AT3', 'AT4_r', 'AT5'],
    'AD': ['AD1', 'AD2', 'AD3', 'AD4', 'AD5'],
}


def _to_likert(x):
    if pd.isna(x):
        return np.nan
    return {
        'strongly disagree': 1, 'disagree': 2, 'neither agree nor disagree': 3,
        'neutral': 3, 'agree': 4, 'strongly agree': 5,
    }.get(str(x).strip().lower(), np.nan)


def load_uca(path=None, screen=True, verbose=False):
    """Load, optionally screen, and score the UCA dataset.

    Args:
        path: path to the CSV. Defaults to bundled data/uca173_anon.csv.
        screen: apply consent gate + attention-check filter (default True).
        verbose: print the screening funnel.

    Returns:
        Scored DataFrame with composite scale columns and numeric demographics.
    """
    if path is None:
        path = DEFAULT_DATA
    if not os.path.exists(path):
        raise FileNotFoundError(f"Dataset not found: {path}")

    df = pd.read_csv(path)
    if len(df.columns) != len(COLUMN_NAMES):
        raise ValueError(
            f"Expected {len(COLUMN_NAMES)} columns, found {len(df.columns)}. "
            "Column layout does not match the UCA instrument."
        )
    df.columns = COLUMN_NAMES

    n0 = len(df)
    if screen:
        df = df[df['Consent1'] == 'Yes'].copy()
        n1 = len(df)
        df = df[df['attention'] == 'Agree'].copy()
        n2 = len(df)
        if verbose:
            print(f"Funnel: {n0} raw -> {n1} consented (-{n0 - n1}) "
                  f"-> {n2} passed attention (-{n1 - n2})")
    else:
        if verbose:
            print(f"No screening applied. N = {n0}")

    for c in LIKERT_COLS:
        df[c] = df[c].apply(_to_likert)
    df['AT4_r'] = 6 - df['AT4']  # cautious-framing item, reverse-coded

    for name, cols in SCALES.items():
        df[name] = df[cols].mean(axis=1)

    df['age_num'] = df['age_group'].map(
        {'18-24': 1, '25-34': 2, '35-44': 3, '45-54': 4})
    df['ai_freq_num'] = df['ai_frequency'].map(
        {'Never': 0, 'Less than once a month': 1, 'About once a month': 2,
         'About once a week': 3, 'Several times a week': 4, 'Daily': 5})
    df['gender_bin'] = df['gender'].apply(
        lambda x: 1 if x == 'Woman' else (0 if x == 'Man' else np.nan))
    df['HRL'] = df['HRL_likely']

    return df


def cronbach_alpha(items_df):
    items = items_df.dropna()
    k = items.shape[1]
    var_sum = items.var(axis=0, ddof=1).sum()
    total_var = items.sum(axis=1).var(ddof=1)
    return (k / (k - 1)) * (1 - var_sum / total_var)


def _parse_args(argv=None):
    p = argparse.ArgumentParser(
        description="Load, screen, and score the UCA dataset.")
    p.add_argument(
        'data', nargs='?', default=None,
        help="Path to the dataset CSV (default: bundled data/uca173_anon.csv).")
    p.add_argument(
        '--data', dest='data_opt', default=None,
        help="Path to the dataset CSV (optional-flag form of the positional).")
    p.add_argument(
        '--no-screen', action='store_true',
        help="Skip the consent/attention screening funnel.")
    return p.parse_args(argv)


def main(argv=None):
    args = _parse_args(argv)
    path = args.data_opt or args.data  # optional flag wins if both given
    df = load_uca(path=path, screen=not args.no_screen, verbose=True)
    print(f"\nFinal N = {len(df)}  (source: {path or DEFAULT_DATA})")
    print("\nCronbach's alpha (5-point scoring, AT4 reverse-coded):")
    for name, cols in SCALES.items():
        a = cronbach_alpha(df[cols])
        n = df[cols].dropna().shape[0]
        print(f"  {name}: alpha = {a:.3f}  (n={n})")


if __name__ == '__main__':
    main()
