"""
Mediation analysis: separate per-predictor tests through MD.

Each predictor entered alone (the per-predictor MIRM mediation reported
in Chapter 4). Percentile bootstrap CIs, 5000 resamples.

Run:
    python sem_bootstrap.py [--data PATH]
"""
import argparse
import numpy as np
import statsmodels.formula.api as smf
from prep_data import load_uca

SEED = 42
N_BOOT = 5000
KEEP = ['OD', 'ED', 'AN', 'AP', 'MD', 'AT', 'AD', 'AD5', 'HRL']


def fit_separate(d, predictor):
    m1 = smf.ols(f'MD ~ {predictor}', data=d).fit()
    m2 = smf.ols(f'HRL ~ MD + {predictor}', data=d).fit()
    return m1.params[predictor] * m2.params['MD']


def main(path=None):
    np.random.seed(SEED)
    df = load_uca(path)
    d = df.dropna(subset=KEEP).copy()
    for c in KEEP:
        d[c] = (d[c] - d[c].mean()) / d[c].std()
    print(f"N = {len(d)}\n")
    print("Separate per-predictor mediation (predictor -> MD -> HRL):")
    for v in ['OD', 'ED', 'AN', 'AP']:
        main_ab = fit_separate(d, v)
        boot = np.array([
            fit_separate(d.iloc[np.random.choice(len(d), len(d), replace=True)].reset_index(drop=True), v)
            for _ in range(N_BOOT)
        ])
        lo, hi = np.percentile(boot, [2.5, 97.5])
        pv = min(2 * np.mean(boot <= 0) if main_ab > 0 else 2 * np.mean(boot >= 0), 1.0)
        print(f"  {v} -> MD -> HRL  ab={main_ab:+.3f}  CI[{lo:+.3f},{hi:+.3f}]  p={pv:.4f}")


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description="Separate per-predictor mediation tests.")
    ap.add_argument('data', nargs='?', default=None)
    ap.add_argument('--data', dest='data_opt', default=None)
    a = ap.parse_args()
    main(a.data_opt or a.data)
