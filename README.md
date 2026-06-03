# UCAHub (static site)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20529430.svg)](https://doi.org/10.5281/zenodo.20529430)

A lightweight thesis study hub for:
**Understanding Cyber-Aggression through AI Use, Trust, and Personality Factors (UCA)**

## Pre-live mode (Ethics not yet approved)
This site supports a "dark" pre-live state.
Edit `site.json` and set:

```json
"isLive": true
```

When `isLive` is `false`, the UI is dimmed and any elements tagged with
`data-requires-live="true"` are disabled.

## Deploy to Cloudflare Pages (GitHub)
1. Create a GitHub repo and push these files to the repo root.
2. In Cloudflare Dashboard → Pages → Create a project → Connect to Git.
3. Framework preset: **None**
4. Build command: *(leave blank)*
5. Build output directory: `/` (root)

Then add a custom domain (e.g., `ucahub.ie`) in the Pages project settings.

## Updating content
- Update milestones in `progress.html`
- Add dated entries to `updates.html`
- Update `site.json` for status and `lastUpdated`.


## Data received thermometer
Edit `site.json`:

- `metricCurrent`: how many responses collected so far
- `metricTarget`: target number of responses
- `metricUnit`: label (e.g., "responses")

This thermometer is intentionally **not** overall project completion.
