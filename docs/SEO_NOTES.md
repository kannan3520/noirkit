# NoirKit — SEO Notes

Site: `https://noirkit.pages.dev`
Companion docs: `GROWTH_PLAN.md` (distribution), `PROJECT_LOG.md` (build history).
Last updated: 2026-10-16.

---

## 1. Keyword strategy

### 1.1 Seed queries — UNVALIDATED

> **Status: UNVALIDATED.** These are working seeds chosen from the product's own
> feature set and naming intuition. **No search-volume tool, keyword planner or
> rank tracker has been accessed**, so no volume, difficulty, CPC or position data
> exists for any of them. Do not treat this list as researched demand — it is a
> hypothesis list to be checked against Google Search Console and Bing Webmaster
> Tools data once those are connected (both are still pending).

| # | Seed query | Intent it targets | Where it is currently used on-site |
|---|---|---|---|
| S1 | Instagram username generator | Primary — tool-seeking | H1 "Instagram Username Generator", title, meta description, JSON-LD description |
| S2 | aesthetic username generator | Style-specific tool-seeking | Meta description, style tile copy, JSON-LD description |
| S3 | dark username generator | Style-specific tool-seeking | Meta description, style tile copy, JSON-LD description |
| S4 | unique Instagram username ideas | Idea/list-seeking | Meta description, title framing, FAQ |
| S5 | Instagram username generator for girls | Audience-specific | Not yet on-page — candidate for future iteration only if GSC shows demand |
| S6 | Instagram username generator for boys | Audience-specific | Not yet on-page — same rule as S5 |
| S7 | gaming username generator | Style-specific | Style tile copy, JSON-LD description |
| S8 | minimalist username ideas | Idea/list-seeking | Style tile copy |
| S9 | Instagram username generator with keywords | Feature-specific (keyword field) | Lede copy, Niche-style copy, FAQ |

**Rules for using the seeds**

- One primary query (S1) per page; the home page should never try to rank for
  several unrelated seeds at once.
- S5 and S6 are recorded but deliberately absent from the current copy: they are
  only worth distinct treatment if query data later shows real impressions, and
  audience-split pages with no distinct value would be thin pages (see section 4).
- Any addition to the page must reflect a feature that exists. No keyword-stuffed
  paragraph, no claims about availability checking (the tool does not check
  availability, and saying otherwise would be inaccurate).

### 1.2 Secondary / long-tail candidates (also UNVALIDATED)

Free-form ideas to watch for in GSC rather than to target directly: "username
ideas for instagram aesthetic", "is my instagram username available", "cool
gaming names generator", "instagram name rules", "username with period and
underscore", "unique handle ideas", "username generator with keyword".

---

## 2. On-page implementation checklist

Mapped against what is actually implemented in the deployed files
(`index.html`, `about.html`, `404.html`, `robots.txt`, `sitemap.xml`).

| Element | Implemented | Current state |
|---|---|---|
| `<title>` | Yes | Home: "NoirKit — Free Instagram Username Generator"; About: "About & Privacy — NoirKit" |
| Meta description | Yes | Home describes the styles, "free, no signup, runs entirely in your browser"; About describes what the page covers |
| H1 | Yes | `Instagram Username Generator` — single H1 on the home page, contains the primary seed |
| Heading hierarchy | Yes | H2 sections: styles grid, guide, FAQ; H3 per style tile and FAQ-free subheads |
| Semantic HTML | Yes | `header`, `nav` (with `aria-label`), `main`, `section` with ids, `article` tiles, `footer`, `details/summary` for FAQ, skip link |
| Canonical URLs | Yes | Self-referencing canonical to clean URLs (`/` and `/about`), matching the host's 307 clean-URL redirects |
| `robots` meta | Yes | `index, follow` on the home page; 404 page serves `noindex` |
| Open Graph tags | Yes | `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` (`/og.png`) |
| Twitter card tags | Yes | `twitter:card` = `summary_large_image`, `twitter:title`, `twitter:description` |
| `sitemap.xml` | Yes | Two URLs (`/` priority 1.0 weekly, `/about` priority 0.5 monthly), `lastmod` 2026-10-16 |
| `robots.txt` | Yes | Allows all, disallows `/404.html`, declares `Sitemap:` on its own line |
| Custom 404 | Yes | Unknown path returns the custom `404.html` with HTTP 404 and `noindex` (verified live) |
| JSON-LD structured data | Yes | `WebApplication`: name, url, `applicationCategory`, `browserRequirements` "Requires JavaScript", description, `offers` price 0 USD |
| Internal links | Yes | Header nav (`Generator`, `Guide`, `FAQ`, `About`), footer (`Generator`, `About & Privacy`, `Contact`, `Sitemap`), in-page anchor nav, FAQ link to `/about#privacy` |
| FAQ section | Yes | Seven `details/summary` Q&As: availability checking, free/no account, allowed characters, keyword & initials, saved data, batch size, disappearing favorites |
| Fast static assets | Yes | Static HTML/CSS/JS only; one stylesheet, two ES modules, SVG favicon; no frameworks, no trackers; `cf-cache: HIT` verified |
| Mobile-first | Yes | Viewport meta, responsive layout; 390px viewport verified with no horizontal overflow |
| Privacy copy | Yes | Lede ("nothing is uploaded"), FAQ item, About page `#privacy` section, footer fineprint stating no affiliation with Instagram/Meta |
| Image assets | Partial | `og.png` and `favicon.svg` present; `og:image` is referenced but no `width`/`height` on `og:image` yet — optional follow-up |
| `twitter:image` | No | Not set; Twitter falls back to `og:image`. Optional follow-up. |
| `lang` attribute | Yes | `<html lang="en">` |
| Analytics | Intentionally none | See privacy posture below |

---

## 3. GEO / AI-discovery notes

Generative and AI-driven search surfaces (AI overviews, answer engines, browsing
assistants) reward pages that can be quoted accurately. What applies here:

- **Clear, literal headings.** H1 is the plain query phrase; section headings are
  descriptive nouns ("Username styles, with examples", "How to choose a memorable
  username", "Frequently asked questions"), not clever marketing lines.
- **Explains how it works.** The lede states the mechanism: type a keyword, pick a
  vibe, get handles filtered against Instagram's rules, all generated locally.
- **States limitations explicitly.** The results panel carries the fineprint that
  suggestions are creative, format-valid ideas and **not availability checks**;
  the FAQ repeats it. A tool that states its limits is quotable without needing a
  model to hedge for it.
- **Crawlable HTML.** All primary content — styles, guide, FAQ, about — is plain
  server-rendered HTML. Nothing essential lives behind JS-only rendering (the
  generator itself needs JS, which the JSON-LD `browserRequirements` declares),
  so text extractors and crawlers that do not execute scripts still see the copy.
- **Accurate factual claims.** Character rules quoted on the page (1–30 chars,
  letters/numbers/periods/underscores, no trailing period, no consecutive
  periods) match the rules the code enforces. No invented statistics, no traffic
  numbers, no "checks availability" claim anywhere.
- **About page and contact.** `/about` covers what the tool is, how it works, the
  privacy notice, and a contact block with a real mailto address
  (`techgeek.veena@gmail.com`, asking that "NoirKit" appear in the subject).
- **Consistent entity naming.** "NoirKit" plus the tagline appears in the footer,
  the title and the JSON-LD, so brand mentions resolve to one entity.
- **Trademark honesty.** The footer states the site is independent and not
  affiliated with Instagram or Meta — this keeps any citation of the page from
  being a misrepresentation.

---

## 4. After Google Search Console / Bing data arrives

Both verification steps are pending (see `PROJECT_LOG.md` → Pending/Manual). The
plan once query data exists:

1. **Baseline, then compare.** Record impressions, clicks, average position and
   CTR per query weekly so later changes can be compared against a baseline —
   note that the baseline starts at zero, so early swings are noise, not signal.
2. **Harvest long-tail queries.** GSC's performance report is the real keyword
   research here. Any query with impressions but no clicks becomes a candidate for
   a title or meta-description change (the click gap is a copy problem, not a
   content problem).
3. **Map each query to intent, not to a new page by default.** If a query is
   answerable by extending an existing section (a new FAQ answer, an extra style
   tile, a clearer example line), do that first — internal consolidation beats
   new URLs for a site this size.
4. **Create a new page only where there is distinct value.** A page needs its own
   content and its own reason to exist — different examples, different rules,
   genuinely different tool behaviour. A near-duplicate of the generator with a
   swapped keyword in the title is a doorway page and is explicitly out of scope.
5. **No thin doorway pages.** Audience-split variants ("for girls" / "for boys")
   and style-split clones are not built unless query data shows demand *and* the
   page can carry unique, useful copy. Until then the seeds stay in this document
   only.
6. **Fix crawl anomalies.** Use URL Inspection for "Discovered – currently not
   indexed" or "Crawled – currently not indexed" on `/about`; usually a quality
   or internal-link signal rather than a technical block.
7. **Validate structured data.** Re-run the Rich Results test after any schema
   change; the WebApplication block is the only schema currently emitted.
8. **Keep `lastmod` truthful.** `sitemap.xml` dates must be updated when pages
   actually change, otherwise the signal is ignored.
9. **Feed results back into distribution.** Queries that show real impressions
   become the next short-form video titles and pin descriptions
   (`GROWTH_PLAN.md` sections 3 and 6) — the same validated language, reused on
   channels that need no ad budget.

---

## 5. Open SEO risks (honest list)

- **Host URL is a `workers.dev` subdomain.** Free and permanent per the Cloudflare
  free tier, but a custom domain would be stronger for branding and would make
  any future migration of the brand easier. Currently a `planned` decision, not a
  cost.
- **Only two URLs exist.** `/` and `/about`. That limits total search surface;
  expansion is gated on the "distinct value" rule in section 4, not on a desire
  for more pages.
- **No verification data yet.** Nothing in this document should be read as
  ranking performance — Search Console and Bing Webmaster Tools are not connected.
- **No analytics.** Deliberate: no cookies, no third-party scripts. In-tool
  measurement will come from Search Console/Bing query data and from referral
  counts in the hosts' own logs, not from adding a tracking script.
