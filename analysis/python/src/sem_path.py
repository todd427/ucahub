"""
Composite path analysis with bootstrap confidence intervals.

Produces the primary structural result reported in Chapter 4: path
coefficients for the MIRM-aligned model (classic predictors -> MD -> HRL),
with percentile bootstrap CIs (5000 resamples).

Run:
    python sem_path.py                 # bundled data/uca173_anon.csv
    python sem_path.py --data PATH     # alternative dataset
"""
import argparse
import numpy as np
import statsmodels.formula.api as smf
from prep_data import load_uca

SEED = 42
N_BOOT = 5000
KEEP = ['OD', 'ED', 'AN', 'AP', 'MD', 'AT', 'AD', 'AD5', 'HRL']


def standardise(df, cols):
    out = df.copy()
    for c in cols:
        out[c] = (out[c] - out[c].mean()) / out[c].std()
    return out


def fit_path_model(d):
    c = {}
    m_med = smf.ols('MD ~ OD + ED + AN + AP', data=d).fit()
    for v in ['OD', 'ED', 'AN', 'AP']:
        c[f'{v}_to_MD'] = m_med.params[v]
    c['R2_MD'] = m_med.rsquared
    m_out = smf.ols('HRL ~ OD + ED + AN + AP + MD + AT + AD + AD5', data=d).fit()
    for v in ['OD', 'ED', 'AN', 'AP', 'MD', 'AT', 'AD', 'AD5']:
        c[f'{v}_to_HRL'] = m_out.params[v]
    c['R2_HRL'] = m_out.rsquared
    for v in ['OD', 'ED', 'AN', 'AP']:
        c[f'{v}_indirect'] = c[f'{v}_to_MD'] * c['MD_to_HRL']
    return c


def main(path=None):
    np.random.seed(SEED)
    df = load_uca(path)
    df_cc = df.dropna(subset=KEEP).copy()
    print(f"Complete cases (predictor sample): N = {len(df_cc)}")
    df_z = standardise(df_cc, KEEP)
    main_c = fit_path_model(df_z)

    boot = {k: np.zeros(N_BOOT) for k in main_c}
    for i in range(N_BOOT):
        idx = np.random.choice(len(df_z), size=len(df_z), replace=True)
        try:
            c = fit_path_model(df_z.iloc[idx].reset_index(drop=True))
            for k in main_c:
                boot[k][i] = c[k]
        except Exception:
            for k in main_c:
                boot[k][i] = np.nan

    def ci(a):
        a = a[~np.isnan(a)]
        return np.percentile(a, 2.5), np.percentile(a, 97.5)

    def p(a):
        a = a[~np.isnan(a)]
        return min(2 * np.mean(a <= 0) if np.mean(a) > 0 else 2 * np.mean(a >= 0), 1.0)

    print(f"\nR2 MD = {main_c['R2_MD']:.3f}, R2 HRL = {main_c['R2_HRL']:.3f}\n")
    print("Outcome paths (HRL):")
    for v in ['OD', 'ED', 'AN', 'AP', 'MD', 'AT', 'AD', 'AD5']:
        k = f'{v}_to_HRL'
        lo, hi = ci(boot[k])
        print(f"  {v:<4} beta={main_c[k]:+.3f}  CI[{lo:+.3f},{hi:+.3f}]  p={p(boot[k]):.4f}")
    print("\nIndirect via MD:")
    for v in ['OD', 'ED', 'AN', 'AP']:
        k = f'{v}_indirect'
        lo, hi = ci(boot[k])
        print(f"  {v} -> MD -> HRL  ab={main_c[k]:+.3f}  CI[{lo:+.3f},{hi:+.3f}]  p={p(boot[k]):.4f}")


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description="Composite path analysis with bootstrap CIs.")
    ap.add_argument('data', nargs='?', default=None)
    ap.add_argument('--data', dest='data_opt', default=None)
    a = ap.parse_args()
    main(a.data_opt or a.data)
