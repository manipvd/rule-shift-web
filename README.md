# Rule Shift — Website

Marketing/support site for the **Rule Shift** mobile game (`com.ruleshift.app`).
Built with Next.js (App Router) and exported as a fully static site.

## Pages

| Route      | Content                                                        |
| ---------- | -------------------------------------------------------------- |
| `/`        | Hero + live animated demo, features, game modes, chapters      |
| `/how-to`  | Tabbed guide (Basics / Easy / Normal / Hard / Expert) with animated rule demos |
| `/privacy` | Privacy policy — Play Store Data Safety aligned (zero collection) |
| `/terms`   | Terms & conditions                                             |

## Develop

```sh
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Cloudflare

The site builds to a static `out/` directory (`output: "export"`).

### Option A — Cloudflare Pages (git-connected, recommended)

1. Push this repo to GitHub (already set: `rule-shift-web`).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** set env var `NODE_VERSION=20` (or `.nvmrc`)
4. Deploy — every push to `main` rebuilds automatically.

### Option B — Wrangler CLI (Workers static assets)

```sh
npm install -D wrangler
npm run deploy     # builds, then `wrangler deploy` using wrangler.jsonc
```

Or preview locally: `npm run preview` (serves `out/` via `wrangler dev`).

## Notes

- `public/_headers` sets immutable caching for `/_next/static/*` (Pages only).
- `wrangler.jsonc` serves `out/` with 404 handling for Workers deployments.
- No server code, no env vars, no database — everything prerenders at build.
