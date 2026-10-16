# NoirKit — Project Log

Date of this entry: 2026-10-16
Project: NoirKit — Instagram username generator static site
Live URL: `https://noirkit.techgeek-veena.workers.dev`
Tagline: "usernames with a shadow."

Everything below marked **Verified** was observed or confirmed directly. Anything
not yet done is marked **planned**. No traffic, ranking or revenue figures exist at
this stage, so none are recorded.

---

## 1. Hosting research and decision — Verified

Hosting options were compared on their free tiers before any code was deployed:

| Host | Free-tier facts checked | Source |
|---|---|---|
| Cloudflare Pages / Workers | 500 builds/mo, 100 custom domains, 20k files, unlimited previews | developers.cloudflare.com/pages/platform/limits |
| GitHub Pages | Free for public repos, 100GB soft limit | GitHub Pages documentation |
| Netlify Free | $0, but 300-credit limit; a production deploy consumes 15 credits each | netlify.com/pricing |
| Vercel Hobby | $0, 100GB/mo, personal non-commercial terms | Vercel Hobby plan terms |

**Decision: Cloudflare.** Rationale: largest headroom, a permanent free subdomain,
and no credit metering (Netlify's 300-credit cap with 15 credits per production
deploy was the main concern; Vercel Hobby's personal non-commercial terms were the
other).

---

## 2. Brand research — Verified

| Candidate | Result |
|---|---|
| HandleKit | Taken — handlekit.com is an active tool site. |
| HandleForge | Existing products already use the name. |
| handloom | Taken on pages.dev. |
| **NoirKit** | No conflicting brand found in search. Subdomains free on pages.dev / github.io. |

**Brand chosen: NoirKit**, tagline **"usernames with a shadow."**

---

## 3. Cloudflare account — Verified

- Cloudflare account created via Google sign-in, using the Google account
  `techgeek.veena@gmail.com`.
- The Google account chooser session already existed in the browser; no password
  was typed and no CAPTCHA was bypassed.

---

## 4. First deployment — Verified

- Method: Cloudflare dashboard direct folder upload of `/build` (10 files).
- Project name: `noirkit`.
- Deployment id: `435776fe`, reported 100% ready.
- The upload created a Worker serving static assets (Cloudflare's current-generation
  flow) rather than a classic Pages project, so the resulting URL is
  `https://noirkit.techgeek-veena.workers.dev` — **not** a `pages.dev` domain.

---

## 5. Clean-URL alignment — Verified

- The host performs clean-URL redirects: `/about.html` → `/about` with a 307.
- Canonicals, `sitemap.xml` and internal links were therefore updated to use clean
  URLs, and the site was redeployed (2 further deploys).

---

## 6. Live verification — Verified

| Check | Result |
|---|---|
| `/` | 200 |
| `/about` | 200 |
| `/robots.txt` | 200 |
| `/sitemap.xml` | 200 |
| `/favicon.svg` | 200 |
| `/og.png` | 200 |
| `/css` | 200 |
| `/js` | 200 |
| Unknown path | Serves the custom `404.html`, status 404, with `noindex` |
| HTTPS | Automatic |
| Cache | `cf-cache: HIT` observed |

---

## 7. Test suite — Verified

13 `node:test` cases pass, covering: validation, length caps, dedupe,
determinism, keyword honouring, unicode sanitising, empty input, copy-all, RNG
range, and count clamps.

---

## 8. Live browser smoke test — Verified

Run in a BrowserOS browser against the deployed URL:

- 12 cards render.
- Regenerate works.
- Copy button produced the toast `Copied @name`.
- Favorites persisted across a reload (localStorage).
- 390px mobile viewport: no horizontal overflow.
- Light/dark theme toggle works.
- No console errors.

---

## 9. Privacy posture — Verified

- No analytics.
- No cookies.
- No third-party scripts.
- Favorites stored in localStorage only.

---

## 10. Costs — Verified

**Total spent: 0.** No domain purchased, no hosting charges, no ads, no credits
bought. (Cloudflare free tier; Netlify/Vercel not used; no paid directory
listings.)

---

## 11. Pending / Manual

| Item | Status | Note |
|---|---|---|
| Google Search Console verification | Not done — manual | Requires account sign-in and DNS TXT / HTML-file verification; then submit `sitemap.xml`. |
| Bing Webmaster Tools | Not done — manual | Account + sitemap submission; can import the GSC property. |
| Source repository | Not created | Blocked on an account decision (which Git host / identity to publish under). |
| Monetization (AdSense) | Not applied | Requires the site to have content/traffic history and pass review; free tier plan, planned at best. |
| IndexNow key hosting | planned | Key file at site root, then ping URL list on each deploy. |
| Directory submissions | planned | Evaluate outlets per `docs/GROWTH_PLAN.md` section 9 before submitting. |
| Custom domain | planned / undecided | Would be the first potential cost; everything currently runs on the free `workers.dev` subdomain. |

---

## 12. Speculative / not yet true

The following are **planned**, not facts: search rankings, organic traffic, any
query impressions in Google or Bing, acceptance of any directory listing, AdSense
approval, and growth numbers of any kind.
