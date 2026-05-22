"""
Exploratory age analyses reported in Chapter 4.

Age x HRL (full N=164), AI-use x HRL within the young cohort, and
AD5 venting partial correlation (predictor sample). Demonstrates that
the age effect on HRL does not run through the measured constructs.

Run:
    python age_analysis.py [--data PATH]
"""
import argparse
import numpy as np
from scipy import stats
import statsmodels.formula.api as smf
from prep_data import load_uca


def cohens_d(a, b):
    pooled = np.sqrt((a.var() * (len(a) - 1) + b.var() * (len(b) - 1)) / (len(a) + len(b) - 2))
    return (a.mean() - b.mean()) / pooled


def main(path=None):
    df = load_uca(path)
    print(f"Full sample N = {len(df)}\n")

    # Age x HRL (full sample)
    g1 = df[df['age_group'] == '18-24']['HRL'].dropna()
    g2 = df[df['age_group'] != '18-24']['HRL'].dropna()
    t, p = stats.ttest_ind(g1, g2, equal_var=False)
    print(f"Age x HRL: 18-24 (n={len(g1)}, M={g1.mean():.2f}) vs 25+ "
          f"(n={len(g2)}, M={g2.mean():.2f}); t={t:.2f}, p={p:.4f}, d={cohens_d(g1, g2):.2f}")

    # Daily vs non-daily within 18-24
    sub = df[df['age_group'] == '18-24']
    daily = sub[sub['ai_frequency'] == 'Daily']['HRL'].dropna()
    other = sub[sub['ai_frequency'] != 'Daily']['HRL'].dropna()
    t, p = stats.ttest_ind(daily, other, equal_var=False)
    print(f"Within 18-24, Daily (n={len(daily)}, M={daily.mean():.2f}) vs Non-daily "
          f"(n={len(other)}, M={other.mean():.2f}); t={t:.2f}, p={p:.4f}, d={cohens_d(daily, other):.2f}")

    # AD5 venting partial r (predictor sample)
    s = df.dropna(subset=['AD5', 'HRL', 'MD', 'ai_freq_num'])
    r0, p0 = stats.pearsonr(s['AD5'], s['HRL'])
    ry = smf.ols('HRL ~ MD + ai_freq_num', data=s).fit().resid
    rx = smf.ols('AD5 ~ MD + ai_freq_num', data=s).fit().resid
    rp, pp = stats.pearsonr(rx, ry)
    print(f"AD5 venting (n={len(s)}): zero-order r={r0:.3f} (p={p0:.4f}); "
          f"partial r={rp:.3f} (p={pp:.4f})")

    # Big Five x HRL (full sample)
    print("\nBig Five x HRL:")
    for col, lbl in [('BF_E', 'Extraversion'), ('BF_C', 'Conscientiousness'),
                     ('BF_N', 'Neuroticism'), ('BF_A', 'Agreeableness'), ('BF_O', 'Openness')]:
        s = df.dropna(subset=[col, 'HRL'])
        r, p = stats.pearsonr(s[col], s['HRL'])
        print(f"  {lbl:<18} r={r:+.3f}, p={p:.4f}")


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description="Exploratory age analyses.")
    ap.add_argument('data', nargs='?', default=None)
    ap.add_argument('--data', dest='data_opt', default=None)
    a = ap.parse_args()
    main(a.data_opt or a.data)
