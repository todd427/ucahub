"""
Covariance-based SEM (semopy) on standardised composites.

Produces the structural model fit indices reported in Chapter 4
(chi-square, CFI, TLI, RMSEA, GFI) for the MIRM-aligned model.

Run:
    python sem_semopy.py [--data PATH]
"""
import argparse
import semopy
from semopy import Model
from prep_data import load_uca

KEEP = ['OD', 'ED', 'AN', 'AP', 'MD', 'AT', 'AD', 'AD5', 'HRL']

MODEL = """
MD ~ OD + ED + AN + AP
HRL ~ MD + OD + ED + AN + AP + AT + AD + AD5
OD ~~ ED
OD ~~ AN
OD ~~ AP
ED ~~ AN
ED ~~ AP
AN ~~ AP
AT ~~ AD
AT ~~ AD5
AD ~~ AD5
"""


def main(path=None):
    df = load_uca(path)
    d = df.dropna(subset=KEEP).copy()
    for c in KEEP:
        d[c] = (d[c] - d[c].mean()) / d[c].std()
    print(f"N = {len(d)}")
    m = Model(MODEL)
    m.fit(d[KEEP])
    print("\nParameter estimates:")
    print(m.inspect().to_string())
    print("\nFit indices:")
    print(semopy.calc_stats(m).T)


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description="Covariance-based SEM with fit indices.")
    ap.add_argument('data', nargs='?', default=None)
    ap.add_argument('--data', dest='data_opt', default=None)
    a = ap.parse_args()
    main(a.data_opt or a.data)
