# NoirKit — 30-Day Organic Growth Plan (Entirely Free)

Status: planned. No money is spent on this plan: no ads, no paid tools, no bought
backlinks, no scheduling subscriptions. Every item below can be done with free
accounts and browser-native tools.

Site under promotion: `https://noirkit.techgeek-veena.workers.dev`
Brand: NoirKit — "usernames with a shadow."

---

## 1. Strategy overview

**Product positioning.** NoirKit is a free, no-signup Instagram username generator
that runs entirely in the browser. Its honest limitations are also its marketing
angle: it produces format-valid creative suggestions, not availability checks, and
it collects nothing. Both facts are worth saying out loud in public, because most
competitors in this niche hide behind email capture and overclaim availability.

**Growth thesis for a 30-day zero-budget window:**

1. **Short-form video is the only reliably free reach lever.** Reels, Shorts and
   Pinterest Idea Pins are distributed by recommendation, not by audience size, so a
   brand-new account can be seen. The site's features are visual and fast, which
   suits 15–40 second screen recordings.
2. **Pinterest is a search engine, not a feed.** Pins keep working for months and
   route to a static page — the best long-tail fit for this product.
3. **Reddit and developer communities reward usefulness and punish promotion.**
   They are handled as value-first posts with disclosed affiliation, never as ad
   placements.
4. **Search visibility is the compounding channel.** Technical SEO is already in
   place (see `docs/SEO_NOTES.md`); the 30-day job is getting the site into Google,
   Bing and IndexNow, then reading query data.
5. **Nothing is bought, and nothing is faked.** No engagement pods, no purchased
   followers, no mass-DM outreach, no spam submissions to directories that charge or
   auto-approve without review.

**Operating rules for the whole month**

- One creative concept is produced once and adapted per platform (same screen
  recording re-cut, captions swapped), so output is free and fast.
- Every external post that links to NoirKit discloses affiliation where the
  platform or community expects it.
- Subreddit and forum self-promotion rules are read on the day of posting; rules
  change and several communities forbid links entirely.
- No posting cadence is a promise of results — the calendar below is a schedule of
  activity, not a forecast of traffic.

---

## 2. Platform-by-platform tactics

### 2.1 Instagram Reels

- Post 4–5 Reels per week. Screen-record the generator on a 390px-wide mobile
  viewport so the capture matches how most viewers will open the link.
- Hook in the first 1.5 seconds with on-screen text (e.g. "your handle is
  available-format, not available — here's the difference"), because Reels skip
  rate is highest at the start.
- Keep the on-screen text large and burned in; most viewers watch muted. Add
  captions anyway for accessibility.
- Use the link in bio (Instagram allows links in bios on all accounts now) and
  repeat the URL in the caption text as plain text, since caption links are not
  clickable but plain-text URLs are still read.
- Hashtag sets: keep them small and topical (username, Instagram username
  generator, aesthetic usernames, dark usernames, gaming usernames). No banned or
  generic 30-tag blocks.
- Reply to every comment within the first hour; reply with a video reply when the
  question is a feature request — that becomes the next Reel.
- Save Reels to a "Generator" profile highlight so the bio link stays discoverable.
- Stories: one Behind-the-scenes per week (the 13 passing tests, the 404 page, the
  zero-cookie privacy copy) plus a poll ("dark or aesthetic handles?").

### 2.2 YouTube Shorts

- Post 2–3 Shorts per week, re-cut from the same recordings used on Reels, with a
  YouTube-native title that is a search query ("Instagram username generator — 12
  ideas from one word").
- First line of the description repeats the keyword phrase and the site URL
  (YouTube descriptions render links and are indexed).
- Use playlists: one for "Username tips", one for "NoirKit features".
- Pin a comment with the URL and a one-line disclosure that it is the creator's
  own tool.
- End screen text: "link in description" rather than pointing at the bio, since
  Shorts descriptions are one tap away.
- Respond to comments with Shorts where a follow-up question is answerable in
  under 40 seconds.

### 2.3 Pinterest

- Create a business account (free) so you get the claimed-website badge and can
  see native analytics without paying.
- Boards organized by intent, not by product: "Dark & mysterious username ideas",
  "Aesthetic username ideas", "Gaming username ideas", "Username rules & tips",
  "Minimalist handle ideas".
- One pin per concept, pointing at the relevant page or section anchor. Design
  pins as tall 2:3 images with a readable text overlay — static images are the
  safest pin type and are fully crawlable.
- Pin description = 2–3 sentences containing the keyword phrase naturally, plus
  the site URL as plain text.
- Use the "claimed website" feature to get attribution; add the site URL to the
  profile bio as well.
- Re-pin/reschedule older pins to a second board 2–3 weeks later (the calendar
  does this in days 20, 24, 26, 28, 29).
- Never use automation bots; manual pinning keeps the account within Pinterest's
  automation rules.

### 2.4 Reddit

- **Read the rules of each subreddit on the day of posting.** Self-promotion rules
  differ per community and change without notice; several subreddits forbid any
  link from a new or low-karma account. Confirm: allowed link posts, allowed
  promotional comments, disclosure expectations, minimum account age/karma.
- Default posture: answer questions first, link second. A useful comment that
  answers a "what should I name my account" thread is usually more effective —
  and more permitted — than a link post.
- When a link is allowed, title the post as a value post ("I built a free tool
  that respects Instagram's username rules — happy to take feedback"), disclose
  affiliation in the first line, and mention the tool's limitations (no
  availability checking) before anyone has to ask.
- Never post the same text to multiple subreddits in one session; write each one
  for that community's tone.
- Track which subreddits removed a post and do not re-post there.
- Candidate communities (verify rules before each post): r/Instagram, r/socialmedia,
  r/StartProjects or r/SideProject, r/InternetIsBeautiful (link-format rules are
  strict), r/webdev, r/selfhosted-style tool threads, r/EntrepreneurRideAlong.

### 2.5 Developer communities

| Outlet | How to use it | Approval | Notes |
|---|---|---|---|
| GitHub | Create a public source repository once the account decision is made; add a README with screenshots, the 13-test suite, and a topic list (`instagram`, `username-generator`, `static-site`, `cloudflare-workers`). Star/fork etiquette applies to anything you engage with. | Submission allowed; approval N/A | Repo is still pending — see `docs/PROJECT_LOG.md` "Pending/Manual". |
| Indie Hackers | Launch post in the products section + a build-in-public thread describing the zero-cost stack decision (Cloudflare vs Netlify vs Vercel). | Submission allowed; approval N/A | Framing: decisions and numbers, not "try my tool". |
| Hacker News — Show HN | Actual submission is allowed; approval is N/A (there is no pre-approval — submissions go live and are ranked/demoted by user voting). Title format "Show HN: NoirKit – free Instagram username generator that runs in your browser". | Submission allowed; approval N/A | Prepare for blunt feedback; answer every comment factually, never defensively. |
| Dev.to / Hashnode (free cross-post) | Republish the "how the generator enforces Instagram's username rules" post as an original article with a canonical link back to NoirKit. | Submission allowed; editorial moderation on dev.to | Mark clearly as your own project. |
| GitHub topic / awesome lists | Propose addition to relevant curated lists only where the list's README states a submission process. | PR-based, editorial review | Many awesome lists reject self-submission — read CONTRIBUTING first. |

---

## 3. Short-form video concepts (exactly 15)

Each concept: title, script hook (15–40 seconds), and the feature it demonstrates.

| # | Title | Script hook (15–40s) | Feature demonstrated |
|---|---|---|---|
| V1 | One word, twelve handles | "Type 'guitar', hit generate, and stop scrolling when you see a handle you'd actually use." (show keyword entry → 12 cards) | Keyword field + Generate |
| V2 | Pick a vibe in one tap | "There are ten vibes in here. Tap 'dark' and watch the whole batch change personality." | Style chips (multi-select) |
| V3 | Short, medium or long | "Instagram cuts you off at 30 characters. Here's what a ≤12 handle looks like next to a ≤24 one." | Length caps (short/medium/long) |
| V4 | Your separator says a lot | "Periods, underscores, or nothing. Same keyword, three completely different brands." | Separator select (mixed/period/underscore/none) |
| V5 | Don't like any of them? | "One click, fresh batch, no refresh, no signup." | Regenerate |
| V6 | The copy-all button | "Forty names, one button, and a toast that says exactly what happened." | Copy all + toast confirmation |
| V7 | Save the keepers locally | "Favorite a name, close the tab, come back tomorrow — it's still there, and no server ever saw it." | Favorites in localStorage |
| V8 | Your initials, woven in | "Type 'ab' as initials and every suggestion gets a personal signature like `ab.luna`." | Initials field |
| V9 | The niche style | "This is the only style that builds every single name around your word." | Niche (keyword-led) style |
| V10 | Dark and mysterious handles | "Voidraven. Duskshade. Nocturne.moth. Tap two chips and generate the whole aesthetic." | Dark + Mysterious styles |
| V11 | Gaming handle energy | "Frostbytegg. Clutch.raid. Respawnlyn — gamer names that sound fast because they are short." | Gaming style + length cap |
| V12 | Why your handle can't end in a period | "Instagram's real rules: 1–30 characters, letters, periods, underscores, no trailing period, no double periods. Every suggestion here is filtered against them." | Rule validation / sanitising |
| V13 | Forty at once | "Pick 40, hit copy all, paste them into your notes, and pick your favourite offline." | Count selector (6/12/25/40) + copy-all |
| V14 | Nothing leaves your phone | "No analytics, no cookies, no third-party scripts. I'll show you the privacy copy on the About page." | Privacy: local-only generation, localStorage favorites |
| V15 | Dark mode, light mode, 390px | "One toggle, two themes, and it fits a 390px screen with no sideways scrolling." | Theme toggle + mobile-first layout |

---

## 4. Example social posts (exactly 10)

| # | Platform | Post copy | Hashtags |
|---|---|---|---|
| P1 | Instagram | "New handle, who dis? Type one word, get 12 format-valid username ideas in under a second — free, no signup, nothing leaves your browser. Link in bio. (These are ideas, not availability checks — always search the exact name on Instagram first.)" | #usernames #instagramusernamegenerator #aestheticusernames #usernameideas |
| P2 | X / Twitter | "I built a username generator that never asks for your email. 10 styles, up to 40 names per batch, favorites saved locally, zero cookies. Free: noirkit.techgeek-veena.workers.dev" | none (keep clean) |
| P3 | Threads | "Instagram usernames: 1–30 characters, letters/periods/underscores, no trailing period, no two periods in a row. Most generator tools ignore half of that. Ours filters every suggestion against the real rules." | #username #instagramtips |
| P4 | YouTube (Shorts description) | "A free Instagram username generator: type a keyword, pick a style, get 12–40 format-valid handles you can copy in one click. Runs entirely in your browser — no account, no cookies. Try it: noirkit.techgeek-veena.workers.dev" | keywords in title/description, not hashtag spam |
| P5 | Instagram | "Dark usernames, one tap: voidraven · duskshade · blackoutember · nocturne.moth. Generate your own in the bio link — the Dark and Mysterious styles do the work for you." | #darkusernames #mysteriousaesthetic #usernamegenerator #gothicusername |
| P6 | X / Twitter | "Build note: 13 automated tests cover the boring parts — length caps, dedupe, deterministic output for the same seed, unicode sanitising, empty input, clamps. Boring tests are why the fun part works." | none |
| P7 | Reddit (value post, per section 5) | see R4 | n/a |
| P8 | Instagram | "Why your perfect handle is already taken: nobody checks the exact profile URL. Copy the suggestion, open instagram.com/yourhandle, and only then fall in love with it." | #instagramtips #usernamecheck #socialmediatips |
| P9 | Pinterest (pin description, see also section 6) | "Aesthetic username ideas for Instagram: soft, dreamy handles that still follow Instagram's character rules. Generate your own free — no signup, runs in your browser." | keyword-rich description, no hashtag block |
| P10 | Instagram carousel caption | "6 rules that hold up when choosing a memorable username: short enough to say out loud, one separator, important word first, numbers sparingly, check it before you fall in love, match it everywhere. Full guide on the site — link in bio." | #usernameideas #branding #instagramgrowth |

---

## 5. Reddit post concepts (exactly 5, self-promotion etiquette)

Disclosure rule for all five: state affiliation in the first or second sentence,
frame the post around what a reader gets, and link only where that subreddit's
rules permit a link — otherwise describe the tool without URLs and let interested
readers find it through your profile.

| # | Target community (verify rules first) | Concept | Framing / disclosure / link policy |
|---|---|---|---|
| R1 | r/Instagram (or r/socialmedia) | "The actual username rules Instagram enforces, and how to check one before you commit" — a genuinely useful rules summary (1–30 chars, allowed characters, no trailing/double period, search the profile URL) ending with one line: "I built a free generator around these rules (disclosure: it's mine); happy to answer questions." | Value post first. Link only if the sub allows link posts; otherwise no link. |
| R2 | r/SideProject or r/StartProjects | "I built a zero-cost static username generator — here's the stack decision and what it taught me" — Cloudflare vs GitHub Pages vs Netlify vs Vercel free tiers, permanent free subdomain, no credit metering, 13 tests, $0 spend. | Build-in-public framing, disclosure in first line. Link allowed in most build subs — confirm. |
| R3 | r/webdev | "What I got wrong shipping my first static tool to Cloudflare Workers" — clean-URL redirects (307 from `/about.html`), canonicals and sitemap having to match, static assets served by a Worker rather than classic Pages. | Technical value, disclosure second paragraph. Link in comments only if the sub forbids link posts. |
| R4 | r/InternetIsBeautiful or a naming-focused community | "Free tool: generate username ideas that actually follow Instagram's character rules" — one paragraph, one screenshot, disclosure, explicit caveat that it does not check availability. | Strict subs may auto-remove links from new accounts — check account-age/karma rules first; if links are banned, submit as a text post without URL. |
| R5 | r/EntrepreneurRideAlong or r/smallbusiness | "Free tools I use to run a $0 website: search console, bing webmaster, indexnow, a static generator" — a list of genuinely free resources NoirKit actually uses, NoirKit mentioned as one entry among them with disclosure. | List/value framing keeps it from reading as an ad; never post an identical copy in a second sub. |

---

## 6. Pinterest pin concepts (exactly 10)

| # | Pin title | Pin description |
|---|---|---|
| PIN1 | Dark username ideas for Instagram | Moody, high-contrast handle ideas like voidraven and duskshade — generate your own dark usernames for free. One word in, twelve format-valid ideas out, no signup required. |
| PIN2 | Aesthetic username generator | Soft, dreamy Instagram username ideas that still follow Instagram's character rules. Type a keyword, pick the Aesthetic style, copy your favourites in one click. |
| PIN3 | Minimalist username ideas | Short, lowercase, easy to type: minimalist handle ideas that work on every platform. The Minimal style caps length so nothing gets cut off in a tag list. |
| PIN4 | Gaming username generator | Fast, punchy gamer handles like frostbytegg and clutch.raid. Pick the Gaming style, set the length to short, and get a batch you can copy straight into your profile. |
| PIN5 | Instagram username rules cheat sheet | Letters, numbers, periods and underscores, up to 30 characters, no trailing period, no two periods in a row — the rules Instagram actually enforces, plus free ideas that respect them. |
| PIN6 | Cute username ideas | Sweet, tiny, friendly handles like mochi.bunny and cherrydaisy. Choose the Cute style and generate a batch in seconds — free, private, runs in your browser. |
| PIN7 | Username ideas with your keyword | Enter a hobby, mood, niche or name and the Niche style builds every suggestion around it: guitar, luna, pixels, cafe. Personal handles without the guessing. |
| PIN8 | How to choose a memorable username | Six rules that hold up: keep it sayable, pick one separator, lead with the important word, use numbers sparingly, check the profile URL, match it everywhere. |
| PIN9 | Unique Instagram username ideas | Twelve unique handle ideas from a single keyword, format-checked against Instagram's rules before you ever see them. Free, no account, no email. |
| PIN10 | Dark and mysterious username ideas | Cryptic handles that make people look twice: nocturne.moth, whisperph, reverie.rune. Tap two styles and generate the whole vibe for free. |

---

## 7. Reusable 30-day content calendar

How to reuse: this table is a template. Replace the dates with the month you start;
every reference points to a concept number above, so re-running the month only
requires swapping which weeks you are in. One row = one published piece.

| Week | Day | Platform | Content piece |
|---|---|---|---|
| 1 | 1 | Instagram Reels | V1 — One word, twelve handles |
| 1 | 1 | Pinterest | PIN1 — Dark username ideas |
| 1 | 2 | YouTube Shorts | V2 — Pick a vibe in one tap |
| 1 | 2 | Pinterest | PIN2 — Aesthetic username generator |
| 1 | 3 | Instagram Reels | V3 — Short, medium or long |
| 1 | 3 | X / Twitter | P1 — New handle, who dis |
| 1 | 4 | Pinterest | PIN3 — Minimalist username ideas |
| 1 | 4 | Pinterest | PIN4 — Gaming username generator |
| 1 | 5 | Instagram Reels | V4 — Your separator says a lot |
| 1 | 5 | Reddit | R1 — Instagram username rules, value post |
| 1 | 6 | YouTube Shorts | V5 — Don't like any of them? |
| 1 | 6 | Pinterest | PIN5 — Username rules cheat sheet |
| 1 | 7 | Instagram Reels | V6 — The copy-all button |
| 1 | 7 | X / Twitter | P2 — Zero-email generator launch |
| 2 | 8 | Instagram Reels | V7 — Save the keepers locally |
| 2 | 8 | Pinterest | PIN6 — Cute username ideas |
| 2 | 9 | YouTube Shorts | V8 — Your initials, woven in |
| 2 | 9 | Threads | P3 — The real character rules |
| 2 | 10 | Instagram Reels | V9 — The niche style |
| 2 | 10 | Pinterest | PIN7 — Username ideas with your keyword |
| 2 | 11 | Reddit | R2 — Zero-cost stack build-in-public |
| 2 | 11 | X / Twitter | P6 — Build note: 13 tests |
| 2 | 12 | Instagram Reels | V10 — Dark and mysterious handles |
| 2 | 12 | YouTube Shorts | V10 re-cut for Shorts |
| 2 | 13 | Pinterest | PIN8 — How to choose a memorable username |
| 2 | 13 | Instagram | P8 — Why your perfect handle is taken |
| 2 | 14 | Instagram Reels | V11 — Gaming handle energy |
| 2 | 14 | Reddit | R3 — Cloudflare Workers clean-URL lessons |
| 3 | 15 | Instagram Reels | V12 — Why your handle can't end in a period |
| 3 | 15 | Pinterest | PIN9 — Unique Instagram username ideas |
| 3 | 16 | X / Twitter | P6 variant — test/refactor note (write fresh copy) |
| 3 | 16 | YouTube Shorts | V13 — Forty at once |
| 3 | 17 | Instagram Reels | V13 re-cut for Reels |
| 3 | 17 | Pinterest | PIN10 — Dark and mysterious username ideas |
| 3 | 18 | Reddit | R4 — Free tool post (link only if allowed) |
| 3 | 18 | X / Twitter | P5 reworded — dark usernames thread |
| 3 | 19 | Instagram Reels | V14 — Nothing leaves your phone |
| 3 | 19 | YouTube Shorts | V14 re-cut for Shorts |
| 3 | 20 | Pinterest | Reshare PIN1–PIN5 to a second board |
| 3 | 20 | Instagram | P8 variant — check the profile URL (fresh caption) |
| 3 | 21 | Instagram Reels | V15 — Dark mode, light mode, 390px |
| 3 | 21 | Indie Hackers | Launch post — product page + disclosure |
| 4 | 22 | YouTube Shorts | V15 re-cut for Shorts |
| 4 | 22 | X / Twitter | P9 — pin-style aesthetic ideas post |
| 4 | 23 | Instagram Reels | V1 reshoot — different keyword |
| 4 | 23 | Reddit | R5 — $0 tool stack list with disclosure |
| 4 | 24 | Pinterest | Reshare PIN6–PIN10 to a second board |
| 4 | 24 | GitHub | Public repository launch (README, tests, screenshots) |
| 4 | 25 | Instagram Reels | V5 reshoot — regenerate in the wild |
| 4 | 25 | Instagram | P10 — 6 rules carousel caption |
| 4 | 26 | YouTube Shorts | V3 re-cut for Shorts |
| 4 | 26 | Pinterest | Reshare PIN2 and PIN7 to a niche board |
| 4 | 27 | Instagram Reels | V8 reshoot — initials |
| 4 | 27 | Hacker News | Show HN submission (submission allowed, approval N/A) |
| 4 | 28 | Pinterest | Reshare PIN4 and PIN9 to a niche board |
| 4 | 28 | Instagram | Recap carousel — best performers of the month |
| 5 | 29 | Pinterest | Reshare PIN3 and PIN8 to a second board |
| 5 | 29 | Indie Hackers | Follow-up thread — what the first 4 weeks produced |
| 5 | 30 | YouTube Shorts | V12 re-cut for Shorts |
| 5 | 30 | All platforms | Month review: read GSC/Bing query data, retire low-value formats |

Concept reference counts: 15 videos (V1–V15), 10 social posts (P1–P10), 10 pins
(PIN1–PIN10), 5 Reddit posts (R1–R5) — all appear at least once above; reshoots
and reshares are deliberately labelled as re-runs.

---

## 8. Free search-visibility steps

| Step | Action | Cost | Notes |
|---|---|---|---|
| Google Search Console | Add property, verify by DNS TXT record or the HTML-file/meta method, submit `https://noirkit.techgeek-veena.workers.dev/sitemap.xml`, run URL Inspection on `/` and confirm "URL is available to Google". | Free | Pending — see `docs/PROJECT_LOG.md`. |
| Bing Webmaster Tools | Create account, import the GSC property if offered, submit the sitemap, confirm indexing. | Free | Pending. |
| IndexNow | Generate a key file, host it at the site root, then ping the IndexNow endpoint with the URL list whenever content changes (Bing, Yandex and others consume it). | Free | Suits this site: every deploy is a known, small URL list. |
| Sitemap | `sitemap.xml` already lists `/` and `/about` with `lastmod` — keep `lastmod` truthful on each redeploy. | Free | Already implemented. |
| Robots.txt | Already allows all and references the sitemap; keeps `/404.html` disallowed. | Free | Already implemented. |
| Verify rendering | Use URL Inspection "View crawled page" / Rich Results test on `/` to confirm the JSON-LD WebApplication schema is parsed. | Free | — |
| Monitor query data | Weekly: in GSC look at impressions, average position and clicks per query; in Bing look at the same. Record queries with impressions but no clicks as title/description candidates. | Free | No traffic numbers are claimed here — this step is about collecting data, not having it. |
| Core Web Vitals / Lighthouse | Run once on `/` and `/about`; the site is static with two small JS files, so expect a good baseline — confirm rather than assume. | Free | — |
| Cross-linking | Every social profile, bio link and directory listing points at the same canonical URL (no URL shorteners, no UTM-mangled duplicates). | Free | Canonicals already set to clean URLs. |

---

## 9. Free directories / submission outlets to evaluate

Nothing below has been submitted to yet. For each outlet, confirm four things
before spending time: **the real submission URL, that submission is actually free,
whether there is editorial/human review, and whether self-promotion is allowed at
all**. Outlets that fail those checks are dropped rather than worked around.

| Outlet | What to verify before submitting |
|---|---|
| Product Hunt | Submission URL (`/posts/new`), free submission, community/electoral review process, whether posting your own product is within their self-promotion rules. |
| AlternativeTo | Submission URL, free listing, editorial or automated approval, whether a self-submitted alternative with a link is accepted. |
| BetaList | Submission URL, free tier vs paid, human review, whether an already-launched tool (not a beta) qualifies. |
| Toolfinder | Submission URL, free listing, review turnaround, promo/link policy. |
| Uneed | Submission URL, free daily submission vs paid guarantee, editorial review, link policy. |
| There's An AI For That | Submission URL, free?, review process, and whether a non-AI utility qualifies at all (NoirKit is a generator, not an AI product — verify category fit first). |
| Fazier | Submission URL, free tier, editorial review, promo allowed? |
| 10words.io | Submission URL, free?, review?, promo allowed? |
| Startup directories generally (e.g. Startup Stash-style lists) | Whether the list is hand-maintained or auto-generated, free submission, whether links are `nofollow`/`sponsored`, and whether inclusion requires payment — paid inclusion dressed as a directory is rejected. |
| Curated GitHub "awesome" lists | README-documented submission process (usually a PR), free, editorial review (yes — lists commonly reject self-promotion), promo allowed only where CONTRIBUTING says so. |
| Dev.to / Hashnode cross-posts | Canonical URL policy (self-canonical vs canonical back to NoirKit), free publishing, moderation, disclosure expectations for promoting your own project. |

Verification method for every row: open the site, read the submission page and any
`/about`, `pricing` or `contribute` page, and record the answer in this table
before submitting. Do not rely on a directory aggregator's description of another
directory.

---

## 10. What this plan deliberately excludes

- Paid ads, promoted posts, or buying followers/engagement.
- Paid directory listings and "guaranteed placement" services.
- Automated posting/pinning/commenting bots.
- Comment-section link dropping and cross-posting identical text to multiple
  subreddits.
- Claiming NoirKit checks availability — it does not, and any post that implies it
  would be an inaccurate claim.
