# HealingSpotLPC: Progress Log

Running history of work on this repo. Add a new entry at the top of **Change History** for every batch of changes (newest first). Keep entries factual: what changed, which files, and what is still open.

## Project Overview

- Landing site for **Brian Counts, LPC** (The Healing Spot, LPC). Target domain: **HealingSpotLPC.com**.
- Originally a landing page for another therapist (Zachary Terry, Bridge to Wellness). Converting it to Brian's site. Some of that therapist's content is still in place (see **Open Items**).
- Stack: **Vite + React 19 + react-router-dom 7**. Styling is plain CSS in `src/styles/styles.css`.
- Repo: `origin` = `https://github.com/DelphiCoder/HealingSpotLPC.git`. Branch: `main`.

## Running the Site

Run every command from the repo root (`G:\Code\__WORK\HealingSpotLPC\GitHub\healingspotlpc`), where `package.json` lives.

```
npm install
npm run dev       # local dev server
npm run build     # production build to dist/ (also writes dist/404.html)
npm run preview   # serve dist/ locally
```

## Layout

```
index.html                 Vite entry: head meta, SEO, JSON-LD schema
vite.config.js             React plugin, relative base "./" for builds, copies index.html to 404.html after build
README.md                  Short repo readme (live link, run commands, points here)
src/main.jsx               React root: fonts, tokens, styles, favicon
src/App.jsx                BrowserRouter + routes + ScrollManager
src/components/            Layout, Header, Footer, Modal, SectionLabel, ClientPortal,
                           InsuranceGlossary, PracticeAreaDrawer, ContactForm,
                           BookingButton + BookingNotice (booking time-zone pop-up)
src/sections/              Hero, Concerns, Contact, Faq, FeesInsurance,
                           MeetTherapist, Philosophy, Privacy, Process, Services
src/pages/                 HomePage, AboutPage, ServicesPage, FeesPage,
                           FaqPage, ContactPage, PrivacyPage, NotFoundPage (one per route)
src/data/                  constants.js (booking and Headway URLs, phone, email), forms.js
                           (form endpoint, empty until a provider is chosen), pages.js (site
                           URL and page titles), practiceAreas.js (drawer copy), svgPaths.js
src/lib/                   asset.js (public paths from the site root), siteRoot.js,
                           favicon.js
src/fonts/                 Font files + fonts.css
src/styles/                styles.css; design-tokens.css (token list, shared tokens, imports
                           palette.css); palette.css (Branding Three colors, light + dark)
.github/workflows/         deploy-pages.yml (build and deploy to GitHub Pages on push to main)
public/.htaccess           Apache: send every page address to index.html (live host)
public/robots.txt          Search-engine rules; points to sitemap.xml
public/sitemap.xml         The seven page addresses on www.healingspotlpc.com
public/assets/             Images (hero_brian_counts_reduced.jpg, compass-web.jpg, og-image.jpg)
public/logos/              Insurer logos (hidden automatically if missing), site logo, state seals
```

Routes: `/` (home), `/about`, `/services`, `/fees`, `/faq`, `/contact`, `/privacy`, anything else → NotFoundPage.

## Change History

Everything below is committed and on `main` (2026-11-04 work in `3515b40`, pushed and deployed). "(uncommitted)" tags on these entries are historical.

### 2026-11-09

**Site live at www.healingspotlpc.com: fixes for the new host** (uncommitted)
- Checked the live site: `https://www.healingspotlpc.com/` is the main address; `https://healingspotlpc.com/` and both `http://` forms redirect to it (301). It is served by **Apache** (not GitHub Pages) and has the same build as GitHub Pages. `https://delphicoder.github.io/HealingSpotLPC/` still serves a second copy.
- Problem found: on the new host, every page except home (`/about`, `/services`, `/fees`, `/faq`, `/contact`, `/privacy`) returned Apache's "404 Not Found" when opened directly, refreshed, bookmarked, or reached from a search result. Clicking through from home worked because the app changes pages itself.
- New `public/.htaccess` (copied into `dist/` by the build): sends any address that is not a real file to `index.html` with a 200 status, so the app shows the right page; redirects a trailing slash (`/about/` → `/about`); `FallbackResource` for hosts without mod_rewrite. **It must be uploaded with the rest of `dist/`.** Some FTP programs hide files that start with a dot.
- New `public/robots.txt` (allow all, points to the sitemap) and `public/sitemap.xml` (all seven pages on www).
- New `src/data/pages.js`: `SITE_URL` (`https://www.healingspotlpc.com`) and a title for each page.
- `src/App.jsx`: new `PageMeta` sets each page's title, canonical link, and `og:url` (index.html only had the home page's, so every page told Google it was a copy of home). Unknown addresses get "Page Not Found" and `<meta name="robots" content="noindex">`.
- `index.html`: home title now "The Healing Spot, LPC | Brian Counts, LPC" (was "The Healing Spot"); canonical, `og:url`, schema `url` → `https://www.healingspotlpc.com/`; `og:image`, `twitter:image`, schema `image` → `https://www.healingspotlpc.com/assets/og-image.jpg` (were the GitHub Pages address).
- `README.md`: live link now www.healingspotlpc.com.
- Checked in Chrome (dev server): each route has its own title and one canonical link on www; `/nope` gets the not-found title and `noindex`.
- Kept: relative `base` (`./`) in `vite.config.js`, so the GitHub Pages copy still works.

**Contact form switched off: shows a "not working yet" popup** (committed in `12af33b`)
- The form used to post to Formspree form `xgaejdlw`, copied from the original site, so submissions most likely went to the other therapist. That ID is now removed from the code.
- `src/data/forms.js`: `FORMSPREE_URL` replaced by an empty `FORM_ENDPOINT`, with a comment explaining why and what to do once a provider is chosen.
- `src/components/ContactForm.jsx`: submitting no longer sends anything. It opens a popup instead. Removed the fetch, the "sending" / "sent" / "error" states, and the error line. The browser's required-field checks still run first.
- New `src/components/ContactFormNotice.jsx`: popup in the same style as the booking popup. Title "This form isn't working yet"; says the form is being worked on and the message was not sent; gives Brian's email and phone as links; "Email Me →" button opens a new email. Closes with the X, Escape, or a click outside.
- What the visitor typed stays in the form, so they can copy it.
- The email and phone links in the popup use the same gold as the "Email Me" button (`--terracotta`, #b8935a), bold, underlined on hover. New `.portal__link` class in `src/styles/styles.css`. Contrast on the popup background: 6.2:1 in dark mode, 2.7:1 in light mode (below the 4.5:1 guideline for small text).
- Checked in Chrome on `/contact`: popup shows on submit; no network request is made; the message stays in the form; all three ways of closing work.
- The `.contact-success` CSS is unused for now. Keep it for when the form works again.

### 2026-11-08

**Fees page: BCBS, Cigna / Evernorth, Carelon, and Ascension logos added, Aetna logo replaced, BCBS spelled out** (committed in `e58ffc5`)
- New `public/logos/bcbs.png` (186x98, supplied by the user). The BCBS tile already pointed at `logos/bcbs.png`.
- New `public/logos/cigna_ever.png` (128x64, supplied by the user). `src/sections/FeesInsurance.jsx`: Cigna / Evernorth tile now points at `cigna_ever.png` (was `cigna.png`, which never existed).
- `public/logos/aetna_2.png` was replaced by the user with a 32x32 purple heart version (was 256x256).
- Checked in Chrome in light and dark mode: logos show above the names (on the light chip in dark mode).
- `src/sections/FeesInsurance.jsx`: the BCBS tile label now reads "Blue Cross Blue Shield" (no slash, matching the FAQ) instead of the abbreviation. On phones (2 tiles per row) it wraps to two lines; tile heights stay even (checked at 320, 375, 700, 1300px).
- New `public/logos/carelon_128.png` (128x128, supplied by the user). Carelon Behavioral Health tile now points at `carelon_128.png` (was `carelon.png`, which never existed).
- New `public/logos/ascension.png` (31x32, supplied by the user). The tile already pointed at `ascension.png`.
- All five in-network insurers now have logos. Aetna (32x32) and Ascension (31x32) are small files shown at 28px tall, so they may look slightly soft on high-resolution screens; 64px or larger versions would be crisper.

**Color-mode button: two states, device setting by default** (committed in `242f48a`)
- `src/components/ColorModeToggle.jsx` rewritten. The button now switches only between Light and Dark (the Device state and monitor icon are gone).
- New visitors: nothing is saved, `<html>` has no `data-theme`, and the site follows the device's light/dark setting. The button shows the mode in effect (sun or moon) and updates if the device setting changes while the page is open.
- Clicking switches to the other mode and saves it in localStorage (`hs-color-mode`, same key as before), so it is kept on later visits. `index.html` already applies the saved choice before the page draws. localStorage was chosen over a cookie: the site is static, so no server needs to read it, and a cookie would be sent with every request.
- Visitors who saved Light or Dark under the old three-state button keep their choice.
- `src/styles/palette.css`: header comment updated.
- Checked in Chrome: new visitor (no saved value) follows the device (dark here); clicks go Light → Dark → Light and save each; the choice survives a reload.

**Fees page and FAQ: WebTPA removed** (committed in `f98f01b`)
- Brian is not in-network with WebTPA.
- `src/sections/FeesInsurance.jsx`: removed WebTPA from the In-Network Insurance grid. Five remain: Aetna, BCBS, Cigna / Evernorth, Carelon Behavioral Health, Ascension SmartHealth.
- `src/sections/Faq.jsx` ("Do you take insurance?"): removed WebTPA from the list so it still matches the Fees page.

**Social / search share image added** (committed in `594072d`)
- New `public/assets/og-image.jpg` (1200x630, 86 KB): dark brand background, logo and "The Healing Spot, LPC", Brian's About-page quote ("No matter what you believe about yourself or your life at this moment — change is possible."), "Individual & couples therapy for trauma, depression, and anxiety.", "Brian Counts, LPC · Telehealth · Michigan & Texas", healingspotlpc.com, and Brian's photo faded in on the right. Uses the site's fonts and colors.
- Source: `_specs/og-card.html` (git-ignored). To regenerate: render it with headless Chrome at 1200x630 (`chrome --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=1 --virtual-time-budget=3000 --window-size=1200,630 --screenshot=og-card.png file:///.../og-card.html`), then `_specs/make-web-image.ps1 -Source og-card.png -BoxW 1200 -BoxH 630 -Width 1200 -Quality 85`.
- `index.html`: added `og:image` (with type, width, height, alt), `twitter:image` and `twitter:image:alt`, changed `twitter:card` from `summary` to `summary_large_image`, and added `image` to the schema.
- The image URL is `https://delphicoder.github.io/HealingSpotLPC/assets/og-image.jpg`, because healingspotlpc.com does not serve the site yet (it redirects to `healingspotlpc-com.l.ink`, checked 2026-11-08). See Open Item 16.

**Audit: does the site point only to Brian?** (no code changed; committed with the share image)
- Clean: no other person's name, phone, email, license, photo, or profile link anywhere in `src`, `index.html`, or `public`. Metadata (title, descriptions, Open Graph, Twitter/X, schema name/phone/email/geo/areaServed, keywords) is all Brian's. Only gaps: schema `GET_STREET_ADDRESS` / `GET_ZIP_CODE` placeholders (item 3) and the contact form's Formspree ID (item 12).
- Not yet Brian's own words: compared against the original copied site (commit `830d270`), much of the visible text is still word for word from it (Services modalities, the practice-area drawers in `src/data/practiceAreas.js`, home-page Concerns, most FAQ answers, Process, Fees intro, insurance glossary). Brian's spec (`_specs/Website_Details.md`) edited parts of it and left the rest. See Open Item 15.

**Privacy Policy page added, Terms of Service removed** (committed in `3af54f3`)
- New `src/sections/Privacy.jsx` and `src/pages/PrivacyPage.jsx`: "Confidentiality & Privacy Policy" page at `/privacy`, using the text Brian supplied (opening paragraph, "Exceptions include:" with three bulleted exceptions, and the court-order paragraph).
- `src/App.jsx`: added the `/privacy` route.
- `src/components/Footer.jsx`: "Privacy Policy" in the footer bottom row is now a link to `/privacy` (it was plain text).
- `src/styles/styles.css`: new "Privacy policy page" block (`.privacy` max-width 760px, `.privacy__text`, `.privacy__list`).
- Checked in Chrome: footer link opens `/privacy` at the top; dark mode, light mode, and phone width look right.
- Removed "Terms of Service" from the footer (plain text, no page); this site does not need one. The footer bottom row now shows only the Privacy Policy link.

**FAQ answers slightly wider** (committed in `279f273`)
- `src/styles/styles.css`: `.faq-item__answer` max-width 700px → 760px, so the telehealth answer's first line ends with "In-person" instead of breaking it at the hyphen ("In-" / "person"). The first line needs about 742px. Applies to all FAQ answers.
- Checked in Chrome on `/faq` at desktop width. On screens where the answer box is narrower than about 742px, the line still wraps earlier, as normal.

**Oklahoma phone number replaced** (committed in `2804ed3`)
- Brian's number is (231) 425-1102. The old Oklahoma number (405) 293-3099 was in three places; all now use Brian's:
  - `src/components/ContactForm.jsx`: error message ("...or call (231) 425-1102."), now reads `PHONE` from `src/data/constants.js`.
  - `src/components/InsuranceGlossary.jsx`: "Call us directly for insurance help" link, now built from `PHONE` (`tel:2314251102`).
  - `index.html`: schema `telephone`.
- Search for `405` / `293-3099` across `src` and `index.html`: no phone matches left. `src/components/Footer.jsx` still has the number typed in directly (correct, but not read from `PHONE`).

**FAQ and search summaries: in-person coming soon** (committed in `2804ed3`)
- `src/sections/Faq.jsx` ("Do you offer telehealth or in-person sessions?"): new answer says telehealth is offered now for Michigan and Texas (including the Austin TX area) and in-person visits are coming soon for the greater Ludington MI region. "— whatever works best for you." is on its own line (`<br />`); this answer is now JSX instead of a plain string.
- Checked in Chrome on `/faq`.
- `index.html`: the four hidden descriptions (meta description, Open Graph, Twitter/X card, and schema `description`) now say telehealth in Michigan and Texas, with in-person sessions in Ludington, MI coming soon. They used to say in-person sessions were available now.
- `index.html` schema `geo`: was latitude `36.1025`, longitude `-86.4500` (central Tennessee). Now `43.9553`, `-86.4526`, the city center of Ludington, MI.
- Visible page text was checked: Ludington appears only as Brian's location (hero) and home town (Meet Your Therapist), not as an in-person offer.

**Fees page: Cash removed from payment methods** (committed in `3eddd97`)
- `src/sections/FeesInsurance.jsx`: removed "Cash" from `PAYMENT_METHODS`. Accepted Payment Methods now shows ACH Bank Transfer, Discover, HSA, Mastercard, Visa. No other "cash" text on the site.

**Fees page: four insurers removed** (committed in `6d3622c`)
- `src/sections/FeesInsurance.jsx`: removed Optum, Quest Behavioral Health, UMR, and UnitedHealthcare from the In-Network Insurance grid. Six remain: Aetna, BCBS, Cigna / Evernorth, Carelon Behavioral Health, WebTPA, Ascension SmartHealth.
- UnitedHealthcare and superbill no longer appear anywhere in `src`, `index.html`, or `public`.
- Deleted `public/logos/optum-com-logo.png` (no longer used).
- `src/styles/styles.css`: removed the 5-column rule for `.insurer-grid` at 1024px. The grid is now 2 per row on phones and 3 per row from 640px, so six insurers fill even rows (2/2/2, then 3/3).
- `src/sections/Faq.jsx` ("Do you take insurance?"): now lists all six in-network insurers and says "See the Fees & Insurance page for more detail." instead of pointing to a nonexistent "Insurance & Rates button".
- Checked in Chrome on `/fees` at 375, 700, and 1300px, and `/faq`.

**About page: Re-Evaluation every 10 weeks, 60-minute intake** (committed in `6d3622c`)
- `src/sections/Process.jsx`: the Re-Evaluation step now says "Every 10 weeks" instead of "Every 12 weeks". No other "12 weeks" text on the site.
- `src/sections/Process.jsx`: the Intake & Mapping step now says "A deep, 60-minute diagnostic intake" instead of 75-minute. No other "75-minute" text on the site.

**Superbill removed (not offered)** (committed in `6d3622c`)
- `src/components/InsuranceGlossary.jsx`: removed the "Superbill" term from the "Understanding Your Insurance" pop-up on the Fees & Insurance page. Six terms remain.
- `src/sections/Faq.jsx` ("Do you take insurance?"): removed "United Healthcare" from the in-network list and the sentence offering a superbill. Answer now reads: "Yes. I am currently in-network with Aetna, Blue Cross Blue Shield, and Cigna. Use the Insurance & Rates button at the top of the page for more detail."
- Search for `superbill` / `super bill` across `src`, `index.html`, and `public`: no other matches.
- Not changed, to confirm: the Fees & Insurance page insurer grid (`src/sections/FeesInsurance.jsx` line 28) still lists UnitedHealthcare. The FAQ answer still refers to an "Insurance & Rates button at the top of the page", but no such button exists (it is a section label on the Fees page).

**About page: less space between My Philosophy and The Process** (committed in `f57ab10`)
- `src/styles/styles.css`: `.section--philosophy` bottom padding and `.section--process` top padding are now half the usual section padding (40px each on phones, 56px each from 768px). The gap between the two sections went from 160px to 80px on phones and from 224px to 112px from 768px.
- Both classes are used only on the About page. Other sections keep the usual padding.
- Verified in Chrome at 375, 800, and 1300px.

**About page: Clinical Endorsements section removed** (committed in `f57ab10`)
- Brian is still collecting his own endorsements. The whole section was Zachary Terry's: four Psychology Today testimonials naming "Zachary"/"Zach", the "Zachary has received 4 professional endorsements" text, his Psychology Today profile link, and a credentials row (LPC, Oklahoma License #11680, 4+ years, MS · Abilene Christian University).
- Deleted `src/sections/Endorsements.jsx`. `src/pages/AboutPage.jsx` now ends with the Process section.
- `src/styles/styles.css`: removed the endorsements CSS (`.section--endorsements`, `.endorsements__*`, `.credentials`, `.credential*`, `.endorsement*`).
- To rebuild the section later, the old version is in Git: `git show 5ebe744:src/sections/Endorsements.jsx` (the CSS is in the same commit).
- Verified: build succeeds, and `/about` in Chrome has no "Zach" or "Endorsement" text. Process section flows into the footer.

**Contact form problems found (not fixed)** (committed in `f57ab10`)
- No code changed. Added Open Item 12. Waiting on the choice of form provider.

**Header fixed at narrow widths** (committed in `5ebe744`)
- Checked in Chrome on `/about`, every 16px from 320 to 1600px (measured in iframes, because the window could not be resized).
- Problem found at 1024–1260px: the full desktop header (brand, five links, two buttons, color-mode button) turned on at 1024px but needs about 1,260px. "Fees & Insurance" wrapped to two lines, the links touched the brand and the buttons, and up to about 1120px the buttons ran past the right edge.
- Problem found at 320–400px: the brand name plus the color-mode and menu buttons were wider than the screen, so the page scrolled sideways.
- `src/styles/styles.css` (Header section):
  - The full desktop header (links and buttons) now starts at 1180px instead of 1024px. Below 1180px the menu button is used. (First set to 1280px, then changed to 1180px on request.)
  - From 1180px to 1279px the header bar's side padding is 40px instead of 80px, so the full header fits. At 1180px there is about 20px between the brand, the links, and the buttons. From 1280px the padding is 80px again (about 30px gaps at 1280px).
  - Nav link gap is 24px, 32px from 1440px. Nav links and header buttons use `white-space: nowrap`.
  - Under 400px: bar padding 16px (was 20px), logo 36px (was 44px), brand name 18px (was 22px), menu button padding 6px. From 400px up these are unchanged.
  - `.header__bar` has an 8px minimum gap, and `.brand__name` uses `white-space: nowrap`.
- Result: no overlap, wrapping, or overflow in the header from 320 to 1600px. Note: the left/right side gaps jump from about 70px at 1279px to 30px at 1280px, when the padding returns to 80px.
- Found, not fixed: the footer's hidden license tooltips (`.license-tip__popup`, 220px wide, centered on "Michigan"/"Texas") still take up layout space when hidden. On some widths (320–400, 560, 752px) they stick out past the right edge, so the page scrolls sideways a little.

**Line endings: added `.gitattributes`** (committed in `0fba5d1`)
- New `.gitattributes`: `* text=auto eol=lf` stores and checks out text files with LF on every machine, so it no longer depends on each machine's `core.autocrlf`. Images, PDFs, and fonts are marked `binary`.
- Before this, most files were stored with LF, but `src/styles/styles.css` was stored with CRLF, and Git printed "LF will be replaced by CRLF" warnings.
- The same commit ran `git add --renormalize .`, which converted `src/styles/styles.css` to LF in the repo. No other files changed.

**`_specs/suggestions.md` untracked** (committed in `e0d23cc`)
- It had been tracked since commit `5f173d0`, even though `/_specs/` is in `.gitignore`. Removed from the index with `git rm --cached`. The local file is kept and stays ignored. Earlier commits on GitHub still contain it.

**Resources page and menu item removed** (committed in `b51e226`)
- Deleted `src/pages/ResourcesPage.jsx` and `src/sections/Resources.jsx`.
- `src/App.jsx`: removed the `ResourcesPage` import and the `/resources` route. `/resources` now shows the 404 page.
- `src/components/Header.jsx` and `src/components/Footer.jsx`: removed the "Resources" link. The menu now reads About, Services, Fees & Insurance, FAQ, Contact.
- `src/styles/styles.css`: removed CSS used only by the Resources page (`.body-text--library`, `.display-sans--library`, and the old "Resources: library" block of `library__*`, `topic*`, `platform*` rules). Renamed the "Resources: FAQ" comment to "FAQ".
- Verified: `npx vite build` succeeds. Not checked in a browser.

### 2026-11-04

**Color-mode button in the header (Device / Light / Dark)** (uncommitted)
- New `src/components/ColorModeToggle.jsx`: a round 36px icon button at the far right of the header. Each click cycles Device → Light → Dark → Device. The icon shows the current mode: monitor (Device), sun (Light), moon (Dark); inline SVGs, 2px round strokes in `currentColor`. `aria-label` and tooltip read e.g. "Color mode: Light. Switch to Dark."
- Device removes `data-theme` from `<html>` (colors follow the OS / browser setting); Light and Dark set `data-theme` and save it in the browser (`localStorage` key `hs-color-mode`; Device removes the key).
- `index.html`: small inline script in `<head>` applies a saved Light/Dark before the page draws, so returning visitors don't see a flash of the other mode. It is also in the built `404.html`.
- `src/styles/palette.css`: added a `:root[data-theme="dark"]` block (same values as the device-dark block), and the device-dark media query now skips `data-theme="light"`. Header comment documents the three states.
- `Header.jsx`: new `.header__end` wrapper holds the desktop buttons, the color-mode button, and the phone menu button, so on phones the color-mode button sits beside the menu button instead of floating mid-bar.
- `styles.css`: `.header__end` (gap 8px, 16px from 1024px) and `.color-mode` (outline in `--line`, icon in `--sage-text`; inside the header these are the header colors, so it is white on the teal header in light mode).
- Checked in the dev server (browser set to dark): Device shows dark colors; Light shows the light page and teal header (`#5E7C83`) even with the OS in dark; Dark shows dark; back to Device clears the saved key. A saved Light choice survives a reload. All three icons render in the header. The production build passes.
- Not checked: phone width, and the 1024–1279px desktop range, where the header was already tight with six links and two buttons. (Header fixed 2026-11-08.)

**Branding Three is the site's palette; theme tester removed** (uncommitted)
- Brian chose Branding Three. Before removing the tester, saved a standalone demo for later study (local only, `_specs/` is git-ignored):
  - `_specs/theme_tester_demo.html`: open in a browser. A mock of the site (header, hero, cards, footer) with the real tester in the bottom-left corner. Uses the tester's CSS unchanged, the same behavior rewritten in plain JavaScript, and the three palettes' colors. Checked in the browser: the panel opens, and Branding Three + Light gives header `#5E7C83` and hero `#2C454F`.
  - `_specs/theme_tester_demo.md`: explains the demo (how to view it, what is real and what is simplified, how the tester worked) and contains the full HTML source.
- New `src/styles/palette.css`: Brand's colors with Branding Three's header, hero, and footer written into the light block, on plain `:root` selectors. Dark mode is one `@media (prefers-color-scheme: dark)` block; the forced-dark block was dropped because nothing can set it now.
- `design-tokens.css`: imports `palette.css` only; header comment updated.
- Deleted: `src/components/ThemeTester.jsx`, `src/components/ThemeTester.css`, `src/lib/theme.js`, and `src/styles/palettes/` (`original.css`, `brand.css`, `brand-three.css`). All are in git history at `HEAD`.
- `src/main.jsx`: removed the `initTheme()` call and the `<ThemeTester />` render. `index.html`: removed `data-palette="brand"` from `<html>`.
- `README.md`: its only content was the `?themes` tester link, which no longer works. Replaced with a short description, the live link, run commands, and a pointer to this file.
- Verified the colors are unchanged: in the dev server (browser in dark mode), all 74 color tokens match Branding Three as computed before the change. Light mode, which can't be forced in the browser anymore: the 58 light values in `palette.css` match the committed `brand.css` light block plus `brand-three.css`. No tester renders, and `<html>` has no `data-palette`/`data-theme`. The production build passes.
- Visitors who used `?themes` before still have a tester flag saved in their browser; it does nothing now.
- `_specs/how-theme-selector-works.md` describes the removed tester; kept as history.

**Pop-up buttons now terracotta** (uncommitted)
- "Go to Portal →" (`ClientPortal.jsx`) and "Go to Calendar →" (`BookingNotice.jsx`): class changed from `btn btn--solid btn--small` to `btn btn--terracotta btn--small`. Background is `var(--terracotta)`, text `var(--on-fill)`, hover `var(--terracotta-hover)`. `btn--small` comes later in `styles.css`, so it still sets the padding (10px 20px) over `btn--terracotta`'s 14px 28px.
- Checked in the dev server (Brand palette, light mode): both buttons are `rgb(184, 147, 90)` (`#b8935a`, Brand's `--terracotta`) with white text and 10px 20px padding. The production build passes.

**Philosophy image: compass chosen** (uncommitted)
- Brian chose the compass photo. `src/sections/Philosophy.jsx`: removed the `PHOTOS` switch; the `<img>` now uses `assets/compass-web.jpg` directly (1200×1119, `-CenterY 1200`), alt "A hand holding a compass above a road — a metaphor for finding your direction".
- Moved out of `public/assets/` into `_specs/images/` (git-ignored, kept locally, nothing deleted): `gps1.jpg`, `gps1-web.jpg`, `car_gps.jpg`, `car_gps-web.jpg`, `compass.jpg`, `crucible.jpg`. They were unused but would have been published, since the build copies all of `public/`.
- `public/assets/` now holds only `hero_brian_counts_reduced.jpg` and `compass-web.jpg`; the build publishes only those two images (checked in `dist/assets`). The production build passes.
- `_specs/make-web-image.ps1` header updated: originals live in `_specs/images/`, and only the chosen copy goes in `public/assets/`.
- To commit: `public/assets/compass-web.jpg` is new and untracked.

**Philosophy image: car GPS photo on trial** (uncommitted)
- New `public/assets/car_gps-web.jpg`: from `car_gps.jpg` (1920×2880, 545 KB) with `_specs/make-web-image.ps1 -CenterY 1290` (crop y=395–2185), 1200×1119, 102 KB. Shows the dashboard navigation screen and its button row, with the volume knob and the red hazard button below. A first try at `-CenterY 1180` cut the hazard triangle in half at the bottom edge.
- `Philosophy.jsx`: added `carGps` to `PHOTOS` (alt text: "A car dashboard screen showing a navigation map at night — a metaphor for therapy as a GPS"). **`PHOTO` is now `PHOTOS.carGps`.** The compass entry and `compass-web.jpg` are unchanged (`-CenterY 1200`).
- Script header in `make-web-image.ps1` lists the settings for all three photos.
- Checked in the dev server at desktop width, light and dark mode: loads `/assets/car_gps-web.jpg` at 515×480. The production build passes.

**Philosophy image: compass photo on trial; reusable image script** (uncommitted)
- New `_specs/make-web-image.ps1` (local only, git-ignored): the crop-and-resize steps used for `gps1-web.jpg`, as a reusable script. Crops a full-width band in the display box's shape (default 515×480) centered on `-CenterY`, resizes to 1200px wide, saves JPEG quality 80 as `<name>-web.jpg`. Usage and past settings are in its header.
- New `public/assets/compass-web.jpg`: from `compass.jpg` (1920×2400, 484 KB), crop y=305–2095, resized to 1200×1119, 76 KB. Shows the road with its center line, the hand, and the compass.
- `src/sections/Philosophy.jsx`: both photos are listed in a `PHOTOS` object (src and alt text each). `const PHOTO = PHOTOS.compass;` picks the one shown; change it to `PHOTOS.gps` to switch back. **The compass photo is currently live in the code.** Compass alt text: "A hand holding a compass above a road — a metaphor for finding your direction".
- Checked in the dev server at desktop width, light and dark mode: loads `/assets/compass-web.jpg` at 515×480. In dark mode the dark photo sits close to the page background; in light mode it stands out. The production build passes.
- Untracked in `public/assets/`: `gps1-web.jpg` and `compass-web.jpg` (commit whichever is used), and the originals `gps1.jpg`, `compass.jpg`, `crucible.jpg` (unused; would be published if left in `public/`).

**Philosophy image: web-sized copy** (uncommitted)
- New `public/assets/gps1-web.jpg`: made from `gps1.jpg` (1920×2880, 443 KB) by cropping a full-width band from y=350 to y=2140 (1920×1790, the same shape as the 515×480 desktop box, centered on the phone and the toy bunny), then resizing to 1200×1119 at JPEG quality 80. Result: 127 KB. 1200px wide is about twice the desktop display width, so it stays sharp on high-resolution screens. Made with the .NET `System.Drawing` classes in Windows PowerShell; no image tools are installed.
- `src/sections/Philosophy.jsx`: uses `gps1-web.jpg`, with `width="1200" height="1119"` on the `<img>` so the browser reserves the space before it loads.
- `styles.css`: removed the `object-position: 50% 42%` added earlier today; the subject is now centered in the image, so the default center crop frames it.
- `gps1.jpg` (original) is unchanged and still in `public/assets/`.
- Checked in the dev server at desktop width: loads `/assets/gps1-web.jpg` (1200×1119) into the 515×480 box with the same framing as before. The production build passes.
- Not checked: phone width.

**Philosophy image: crucible replaced with GPS photo** (uncommitted)
- `src/sections/Philosophy.jsx` (About page, "My Philosophy"): the image now loads `public/assets/gps1.jpg` through `asset()` instead of the Unsplash crucible URL. Alt text: "A phone showing a GPS route, mounted on a car dashboard — a metaphor for therapy as a GPS". Closes spec discrepancy 3.
- `styles.css` `.philosophy__image`: added `object-position: 50% 42%`. The photo is a tall portrait (1920×2880) cropped to fill the box, and this keeps the phone and the toy bunny in frame.
- `public/assets/gps1.jpg` is new and untracked; it needs to be added to the commit.
- Checked in the dev server at desktop width: the image loads from `/assets/gps1.jpg` at 515×480 with the phone and bunny centered. The production build passes.
- Not checked: phone width, where the box is a wide 320px-tall strip, so the crop shows a narrower band of the photo.

**Home CTA band padding halved** (uncommitted)
- `.cta-band` ("Ready to take the first step?") top and bottom padding: 48px on mobile (was 96px), 64px from 768px up (was 128px). Side padding unchanged (20px / 80px).
- Not checked in the browser.

**Booking pop-up with a time-zone note** (uncommitted)
- Every "Book a Consultation" / "Book a Free Consultation" button now opens a pop-up first, styled like the Client Portal pop-up (it reuses the `.portal*` classes). Text: "To schedule a consultation, click "Go to Calendar" below." and "Be aware that your browser will try to "guess" your time zone. If it guesses wrong because of your privacy settings, you may need to change it manually or adjust your settings." Its "Go to Calendar →" button opens `BOOKING_URL` in a new tab and closes the pop-up.
- Small wording edits to Brian's draft: "guesses wrongly," became "guesses wrong" (comma removed). Eyebrow "Book a Consultation" and heading "Schedule a Consultation" are my wording; review them.
- New `src/components/BookingNotice.jsx` (the pop-up) and `src/components/BookingButton.jsx` (the button: same classes and text as before, opens the pop-up on a normal click; middle-click or Ctrl+click still opens the calendar directly).
- All 12 booking links now use `BookingButton`: `Header.jsx` ×2, `Hero.jsx`, `HomePage.jsx`, `Concerns.jsx`, `MeetTherapist.jsx`, `Services.jsx` ×3, `Faq.jsx`, `Contact.jsx`, `PracticeAreaDrawer.jsx`. Only the two new components import `BOOKING_URL` now.
- `src/components/Modal.jsx`: clicks inside a modal no longer pass up to the component that opened it. Without this, closing the booking pop-up opened from the practice-area drawer also closed the drawer, and clicks in it could toggle a concern card.
- Checked in the dev server (light mode): header button opens the pop-up and the page stays put; a real click on "Go to Calendar" opened the Google Calendar booking page in a new tab and closed the pop-up; from the Services practice-area drawer, closing the pop-up leaves the drawer open; from an open concern card, closing the pop-up (backdrop click) leaves the card open. The production build passes.
- Not checked: dark mode, phone width, the mobile-menu button.
- Added a third line: "Your browser currently shows **<zone>**." (zone in bold). `browserTimeZoneName()` in `BookingNotice.jsx` reads it with `Intl.DateTimeFormat("en-US")` each time the pop-up opens: the generic name first ("Central Time"), then the long name ("Central Standard Time") in browsers without generic names, then the IANA id ("America/Chicago"). Browsers whose privacy settings hide the zone usually report UTC, which shows as "Coordinated Universal Time". Checked in the dev server: shows "Central Time" in a browser set to America/Chicago.

**Booking buttons open in a new tab** (uncommitted)
- Six "Book a Consultation" / "Book a Free Consultation" links (`BOOKING_URL`, the Google Calendar booking page) replaced the site in the same tab. They now have `target="_blank" rel="noopener noreferrer"`: `Header.jsx` (desktop header and mobile menu), `Hero.jsx`, `HomePage.jsx` (CTA band), `Concerns.jsx` (inside each opened concern card), `MeetTherapist.jsx` (About page).
- The other six booking links (`Services.jsx` ×3, `Faq.jsx`, `Contact.jsx`, `PracticeAreaDrawer.jsx`) already opened a new tab, for 12 in total. Every `BOOKING_URL` link now does. (Superseded the same day by the booking pop-up above.)
- The production build passes. Not clicked through in the browser.

**Client Portal pop-up: one Headway link for everyone** (uncommitted)
- All clients now use Brian's Headway page, whatever their insurance.
- `src/components/ClientPortal.jsx`: removed both insurance button groups ("Billed through SimplePractice" and "Billed through Headway") and the "Paying out of pocket?" footer text. The pop-up now shows Brian's text: "To schedule a telehealth appointment, click "Go to Portal" below." and "It will open my secure Headway client page in a new tab, so you can come back here anytime. Questions? Feel free to reach out to me." The "Go to Portal →" button (`HEADWAY_URL`, opens in a new tab) is unchanged.
- Heading changed from "Who is your insurance through?" to "Schedule a Telehealth Appointment", and the "Select your plan below…" intro line was removed. The heading is my wording; review it.
- `src/data/constants.js`: removed `SIMPLEPRACTICE_URL` (Zachary Terry's `clientsecure.me` portal), `SIMPLEPRACTICE_PLANS`, and `HEADWAY_PLANS`. Nothing else used them. The Fees page insurer list is separate and unchanged.
- `src/styles/styles.css`: removed the now-unused `.portal__intro`, `.portal__group`, `.portal__grid`, `.portal__plan*`, and `.portal__footer-*` rules. Added `.portal__body` (15px text). The footer button is now right-aligned.
- Checked in the dev server (light mode): the pop-up shows the new heading and text, no plan buttons remain, and the button goes to `care.headway.co/providers/brian-counts` in a new tab. The production build passes.
- Not checked: dark mode, phone width.

**Home page copy edits by Brian** (uncommitted)
- `src/sections/Hero.jsx`: hero paragraph reworded ("in your past, or hard times right now,"; "Whether you feel lost, ashamed, trapped, or just frustrated"; "I am here when you are ready." is now its own sentence).
- `src/pages/HomePage.jsx`: CTA band text replaced with "Feeling lost or unsure of your next step is a very human experience, and you don't have to figure it out on your own. Together, we'll find your direction and decide where you want to go."

### 2026-11-02

**Merged to `main`, feature branch removed**
- Theme work committed as `868b8ea` ("Three Color Theme Tests") and pushed.
- Pull request #3 merged the branch into `main` on GitHub (merge commit `d8aaf11`). Earlier work went in through PRs #1 and #2. Also on `main`, edited on GitHub: `README.md` added, with instructions for the `?themes` tester (`3b1d6f0`, `5d99fde`).
- Local `main` fast-forwarded to `origin/main`. The feature branch was deleted locally and on origin. `main` is now the only branch.
- `.github/workflows/deploy-pages.yml`: the push trigger now lists only `main` (the deleted branch was removed). Deploys run on every push to `main`. (uncommitted)
- This log: branch references removed, Layout section updated (README, theme files, palettes, workflow; removed `office.png`, which is no longer in `public/assets/`), and Open Item "Commit the conversion" removed.
- Live site: the theme tester only shows after opening a page with `?themes` in the address (see 2026-11-01).

**Theme selector explainer** (local only)
- New `_specs/how-theme-selector-works.md`: covers when the tester panel shows, the `data-palette` and `data-theme` attributes, what visitors see, which files do what, and how to add a palette or remove the tester. It is in `_specs/`, which git ignores, so it is not committed.
- New `_specs/available_commands.md` (also local only): Claude Code slash commands seen in this session, with a note that typing `/` or running `/help` shows the full list.

**Third palette: "Branding Three"** (uncommitted)
- New `src/styles/palettes/brand-three.css`, id `brand-three`, label "Branding Three". It uses all of Brand's colors (light and dark). In light mode only, the header background is `#5E7C83` and the hero background is `#2C454F`. Dark mode is identical to Brand.
- `brand.css`: every block now applies to both `brand` and `brand-three` (`:root:is(...)`). A change there affects both palettes.
- New tokens, defined in every palette: `--header-bg`, `--header-ink`, `--header-accent`, `--header-line`, `--header-fill`, `--header-fill-hover`, `--hero-bg`. In Original and Brand they point to the existing page and primary colors, so those palettes look unchanged.
- `styles.css`: `.header` swaps `--ink`, `--sage-text`, `--line`, `--sage`, and `--sage-dark` for the header tokens, so all header text, links, and buttons follow them. `.header` and `.mobile-menu` backgrounds use `--header-bg`. `.hero` and `.hero__fade` use `--hero-bg`.
- In Branding Three light mode, the header text is white, and the "Book a Consultation" button is `#2C454F` (the hero color), hover `#1e333b`. The header border is `#4f6b72`. These three values are my picks.
- `src/lib/theme.js`: added to `PALETTES`. `design-tokens.css`: imports it and lists the new tokens.
- Checked in the dev server: header and hero colors in light mode (computed values match), dark mode identical to Brand, Client Portal pop-up keeps page colors. The production build passes.
- Not checked: the mobile menu with the dark header, or phone width.

**Branding Three: footer color pinned** (uncommitted)
- New token `--footer-bg`, used by `.footer` in `styles.css`. Original and Brand set it to `var(--sage)` (no visible change). `brand-three.css` sets it to `#4a6e7e` in light mode. This was already the footer color (Brand's primary), so nothing looks different today, but the footer no longer moves if Brand's primary changes. Dark mode unchanged.
- The production build passes. Not re-checked in the browser, since the rendered color is unchanged.

### 2026-11-01

**Brand palette added, original palette saved, test-only palette switcher** (uncommitted)
- Palettes now live in `src/styles/palettes/`, one file each, scoped to `:root[data-palette="<id>"]`:
  - `original.css`: the sage and terracotta colors exactly as before. Light only.
  - `brand.css`: teal and slate from `_specs/brand_design-tokens.css`, with light and dark values. Values with no brand token are marked "derived" in the file.
- The site now uses **brand** by default (`index.html` sets `data-palette="brand"` on `<html>`).
- Dark mode (brand only) follows the visitor's OS setting. Visitors have no on-page light/dark control yet.
- `src/styles/design-tokens.css`: now imports the palette files, lists the tokens every palette must define, and keeps only the tokens shared by all palettes (YouTube, crisis, on-dark lines).
- Token split in `src/styles/styles.css` and JSX strokes, so dark mode works. Each old use maps to a new token with the same original value, so the original palette looks unchanged:
  - `background: var(--cream)` → `--page`; `background: var(--white)` → `--surface`
  - text/border `--cream` on fills and bands → `--on-fill`; text `--white` → `--on-fill-strong`
  - text, outline, and hover-border `--sage` → `--sage-text` (`.concern.is-open` border stays `--sage`)
  - `--cream` and `--white` are no longer defined.
- `.insurer__logo` gets `--logo-ground`/`--logo-pad` (transparent/0 in light, a white chip in dark) so the dark logo artwork stays visible.
- New `src/lib/theme.js` (palette list, default, storage) and `src/components/ThemeTester.jsx` + `ThemeTester.css` (floating panel, bottom left: palette radio buttons and Auto/Light/Dark). It shows in the dev server, or on the live site after visiting any page with `?themes` (turned off with `?themes=off`). Choices are saved in that browser only and ignored when the tester is off. Visitors never see it.
- To add a palette: new file in `src/styles/palettes/`, `@import` it in `design-tokens.css`, add it to `PALETTES` in `theme.js`.
- `styles.css` header comment changed from "Bridge to Wellness" to "The Healing Spot".
- Checked in the dev server: home page in brand light, brand dark, and original; Fees page insurer logos in brand dark. The production build passes. Every token used is defined in both palettes (checked by script).
- Not checked: other pages in dark mode, modals and drawers in dark mode, phone width.
- Choices to review: in dark mode, the sage bands (hero, CTA, footer) and buttons keep the light primary `#4a6e7e` with white text instead of the spec's dark primary `#7aa3b0` with dark text, and gold stays `#b8935a` so white button text stays as readable as in light. The CTA band's white button becomes a dark button in dark mode. Third FAQ group color is the logo leaf green.
- `_specs/Style_Guide.html` still references `--cream` and `--white`, so those swatches will be blank until it is updated.

### 2026-10-30

**Footer license popup made opaque** (uncommitted)
- Cause: `.footer__blurb` had `opacity: 0.9`. Opacity applies to all children, so the hover popup inside the paragraph was also 90% opaque.
- Fix: the 90% is now a text color, `--cream-soft: rgba(250, 248, 245, 0.9)` in `design-tokens.css`, and `.footer__blurb` no longer sets `opacity`. The popup background is solid.
- Checked in the dev server: the hovered popup background is opaque (`rgb(255, 253, 248)`) and the paragraph opacity is 1.

**Contact page: office card and address removed** (uncommitted)
- `src/sections/Contact.jsx`: removed the Warren Alexander Group office card (photo, name, address, Get Directions link) and the pin row with the Stillwater address. The contact lines are now the phone number and Brian's email only.
- Removed the `asset` import, which only the office card used.
- Still in the repo, now unused: the `.office-card*`, `.contact__address`, `.contact__office`, and `.contact__line--address` rules in `styles.css`, and `public/assets/office.png`. Removing them is a separate step.

**`_specs/` excluded from the repo** (uncommitted)
- `.gitignore`: added `/_specs/`. None of its files were tracked by git, so nothing needs to be removed from history. The folder stays on disk for local use. The Style Guide page and the logo copies in `_specs/` are local only; the site uses the copies in `public/`.

**Removed unused Zachary Terry photo** (uncommitted)
- `public/assets/zachary-terry.png` is deleted. No code referenced it. The Layout section of this file no longer lists it.
- Still open: `src/data/constants.js` (`SIMPLEPRACTICE_URL`) and `src/sections/Endorsements.jsx` (a Psychology Today link) still point to Zachary Terry's pages. These are links, not the image, and were not changed.

**Header brand mark replaced with textless logo** (uncommitted)
- `src/components/Header.jsx`: the `brand__mark` span now holds an `<img>` pointing to `logos/Healing_spot_logo_sans_text.svg` (via `asset()`), replacing the inline sprout path. The `svgPaths` import was removed from this file because it was no longer used here.
- `src/styles/styles.css`: `.brand__mark img` uses the same absolute 100% sizing as the old svg rule.
- Checked in the dev server at `/about`: the logo appears beside the site name. The production build passes.
- Not checked: mobile header width, and the subfolder path on GitHub Pages.
- Enlarged the header logo: `.brand__mark` is now 44px (was 24px), with `margin: -10px 0` so its height footprint stays 24px. The header height is unchanged at 81px (measured). The site name moves 20px right to clear the larger logo.
- Open: check the mobile header, where the wider logo and the name may take more room.

**Favicon set from textless logo at runtime** (uncommitted)
- New `src/lib/favicon.js`: `setFavicon()` removes any existing icon links and adds `<link rel="icon" type="image/svg+xml">` pointing to `logos/Healing_spot_logo_sans_text.svg`, resolved with `asset()` so it follows the site root.
- `src/main.jsx` calls `setFavicon()` before render.
- Reason: a static icon link in `index.html` is unreliable on localhost, subdomains, and project subfolders.
- Checked in the dev server: the link is created with `/logos/Healing_spot_logo_sans_text.svg`, and the file returns 200 as `image/svg+xml`. The production build passes.
- Not checked: the icon in the browser tab (screenshots don't capture it), and the deployed subfolder path on GitHub Pages.
- The SVG has a sprout animation. Browsers may or may not play it in a tab icon; the reduced-motion setting turns it off.

**Style guide page added** (uncommitted)
- New `_specs/Style_Guide.html`: standalone page covering typography (three families, type scale table), color (every token from `design-tokens.css`, shown as live swatches), buttons and states, labels and tags, form fields, spacing, radius and shadow, components (concern card, crisis notice, footer, license popup), and the two state logos.
- It loads `src/fonts/fonts.css` and `src/styles/design-tokens.css` directly, so swatches and fonts follow the site when token values change.
- Checked in the dev server at `/_specs/Style_Guide.html`: fonts and colors render; the color section was reviewed. Other sections were not reviewed.

**Design tokens added for all colors** (uncommitted)
- New `src/styles/design-tokens.css`: every color on the site is defined once here on `:root`. This includes the brand palette (existing names kept, such as `--sage`, `--terracotta`, `--cream`), plus named tokens for the colors that were hard-coded before (tints, crisis red, popup colors, shadows, overlays, on-dark lines, placeholder and error text, YouTube red).
- `src/main.jsx` imports `design-tokens.css` before `styles.css`.
- `src/styles/styles.css`: the color variables were removed from its `:root` (font variables remain). Every hex and rgba literal was replaced with a `var(--token)`. No literal colors remain in the stylesheet.
- JSX: SVG stroke colors in `Header`, `MeetTherapist`, `Contact`, `ContactForm`, `Process`, `ClientPortal`, `PracticeAreaDrawer`, and `InsuranceGlossary` now use `style={{ stroke: "var(--…)" }}`. FAQ group accent colors in `Faq.jsx` use tokens.
- No color values were changed. Each literal maps to a token with the same value. Near-duplicate values (such as `#9a9e9a` and `#9a9d9a`) remain separate tokens.
- Checked: production build passes. The FAQ page renders its accent colors correctly in the dev server.
- Not checked: the other pages after this change.

**Resources page layout fixed** (uncommitted)
- Cause: `src/sections/Resources.jsx` used the `section-plain` class, which has no padding or max-width. The label and text sat flush against the header, screen edges, and footer.
- Fix: changed the section to `section section--cream section--resources`, the same base class the other sections use.
- Verified at 1280px in the dev server: label, text, and footer spacing look correct.
- Not verified: phone width. The browser window would not resize to 390px.
- Open: the Resources page still has only the intro paragraph; no resource list has been added.

**Header menu order changed** (uncommitted)
- `src/components/Header.jsx`: moved "Resources" to after "Contact" in `NAV_LINKS`. The menu now reads About, Services, Fees & Insurance, FAQ, Contact, Resources.

**My Philosophy military-family paragraph removed** (uncommitted)
- `src/sections/Philosophy.jsx`: deleted the paragraph that began "Growing up in a military family..." on the About page. The GPS paragraph above it and the pillar cards are unchanged.

**My Philosophy card title changed** (uncommitted)
- `src/sections/Philosophy.jsx`: the first card title changed from "Person-Centered" to "Goal-Oriented" (it appears on the About page). The card's subtitle changed from "Honoring your unique journey." to "Practical goals, measurable progress." to match the new title.

**Footer intro text updated** (uncommitted)
- `src/components/Footer.jsx`: replaced the intro blurb. It now says counseling is offered via telehealth throughout Michigan and Texas, states licensure in both states, and signs off "- Brian Counts, LPC." "Michigan" and "Texas" in "I'm licensed in both Michigan and Texas" are links (new class `footer__license-link` in `src/styles/styles.css`, underlined, opens in a new tab). Michigan goes to the MI LARA licensee record; Texas goes to the TBHEC license verification page. The "throughout Michigan and Texas" phrase is not linked. Hovering "Michigan" shows a popup (`.license-tip` in `Footer.jsx`, styles in `styles.css`) with the Michigan Global logo (`public/logos/MichiganGlobal-logo.svg`) and "Michigan LPC License No. 6401226146". The popup also opens on keyboard focus. Hovering "Texas" shows the same kind of popup with the Texas seal (`public/logos/Seal_of_Texas.svg`) and "Texas LPC License No. 89420". The sign-off starts on its own line (`<br />`). The dash, name, and credential are joined with non-breaking spaces (`&nbsp;`) so they wrap as one unit.
- The footer renders on every page, so the change appears on the homepage and all other pages.
- Open: the in-person Ludington wording was removed from this blurb. The Hero (`Brian Counts · LPC · Ludington, MI`) and the FAQ still mention Ludington.

### 2026-10-28

**Asset and router URLs fixed for project site** (uncommitted)
- Problem: `asset()` and the router basename were resolved from `document.baseURI`, which depends on the page address. Images were requested from `/assets/...` on the domain root.
- New `src/lib/siteRoot.js`: `SITE_ROOT` is `../` from the bundle's own URL in production (site root), and `/` in dev. It doesn't depend on the page address.
- `src/lib/asset.js` and `src/App.jsx` (router basename) use `SITE_ROOT`.
- Verified in a browser at `/HealingSpotLPC/about` (with the 404 fallback): hero image loads from `/HealingSpotLPC/assets/...` and nav links are under `/HealingSpotLPC/`.
- Known limit: a URL with no trailing slash (`/HealingSpotLPC`) can't load the relative script paths. GitHub Pages normally redirects to the slash version.

**GitHub Pages deploy workflow added** (uncommitted)
- Cause: no build was being published. GitHub Pages was serving the source tree, where `index.html` loads `src/main.jsx`, which a browser can't run. The request for `/src/main.jsx` at the site root is consistent with that.
- Added `.github/workflows/deploy-pages.yml`: on push to `main`, it runs `npm ci` and `npm run build`, then deploys `dist/` with actions/deploy-pages.
- Repo setting needed: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
- The `github-pages` environment may only allow deploys from the default branch. If the workflow is blocked on the feature branch, merge to `main` first.
- Deploy ran and the GitHub Pages site loads (confirmed 2026-10-29). The branch was allowed to deploy through the github-pages environment rules.

**Relative paths for GitHub Pages project site** (uncommitted)
- `index.html`: module script is `./src/main.jsx` (was `/src/main.jsx`).
- `vite.config.js`: `base` is `./` for `vite build` and `/` for the dev server.
- `src/App.jsx`: router basename is resolved from `document.baseURI`, so it is `/HealingSpotLPC` on a project page and empty on a domain root.
- `src/lib/asset.js`: `asset()` resolves against `document.baseURI` and returns a root-based path.
- Verified: the build served from a `/HealingSpotLPC/` folder loads the home page with styles and images, and the About link routes to `/HealingSpotLPC/about`.

**Pushed to origin** (2026-10-29)
- The Vite conversion work was pushed to `https://github.com/DelphiCoder/HealingSpotLPC`. Commits: `f7f3436` (Vite + React conversion and copy changes), `589eaf5` (concern and footer readability).
- It went in as a separate branch through pull request #1 (later work through #2 and #3; see 2026-11-02). The branch has since been deleted.
- Entries below marked "(uncommitted)" are included in those commits, except this note.
- Push required a GitHub account with write access to the repo. Account `DelphiCoder` got a 403 before access was granted.

**Gap under crisis card reduced** (uncommitted)
- `.crisis + .footer__bottom` has margin-top -40px. The space below the card drops from 64px to 24px.

**Footer link columns made easier to read** (uncommitted)
- `.footer__link` and `.footer__text`: 16px (was 14px), opacity 0.9 (was 0.8).
- `.footer__heading` ("EXPLORE", "HOURS"): 13px, color `--mist-soft` (was terracotta on sage, low contrast), letter-spacing 1.5px.
- `.footer__col` gap between links: 18px (was 16px).

**Concern cards made easier to read** (uncommitted)
- `.concern__short` (the grey line under each concern title): 16px, up from 13px, color `--ink-soft` (darker than `--muted`).
- New line under the grid in `src/sections/Concerns.jsx`: "Not sure which of these applies? A free 15-minute consultation is a good place to start." (`.concern-note`, 17px). This copy is my wording, so review it.

**Crisis card moved in footer** (uncommitted)
- The "Emergency Support" card now sits below the link columns and above the bottom rule (`src/components/Footer.jsx`). Its styling is unchanged.

**Home CTA band enlarged and centered** (uncommitted)
- `.cta-band`: padding 96px mobile, 128px desktop. Content is centered and stacked at all widths (the desktop side-by-side layout is removed).
- `.cta-band__title`: 44px mobile, 64px desktop (was 30/36px), weight 400 to match the other display headings.
- `.cta-band__text`: 18px mobile, 20px desktop (was 15px), opacity 0.9.
- Buttons are centered, in a row from 640px up.

**Footer heading kept on one line** (uncommitted)
- At 1280px and wider, `.footer__about` max-width goes to 760px and `.footer__name` uses `white-space: nowrap`, so "The Healing Spot Counseling" no longer wraps. Narrower desktops (1024–1279px) can still wrap.

**Footer intro text enlarged further** (uncommitted)
- `.footer__name` ("The Healing Spot Counseling"): 34px mobile, 52px desktop (was 28px).
- `.footer__blurb`: 18px mobile, 24px desktop (was 16px / 18px).

**Footer intro text enlarged (first pass)** (uncommitted)
- Left footer column (`.footer__about`) no longer capped at 360px. On desktop it grows to 600px and takes the free space beside the link columns.
- `.footer__blurb` is 16px on mobile and 18px on desktop, up from 14px, with opacity raised from 0.7 to 0.9.

**Home concerns heading enlarged** (uncommitted)
- "Do Any of These Sound Like You?" is now an `h2` in the same display style as other section headings (`display-sans--concerns`, 44px mobile, 64px desktop), replacing the small uppercase label.

**Website_Details.md text changes applied** (uncommitted)
- Home: hero title and lede replaced with spec copy; "right words" line removed from Concerns; CTA band text replaced; footer blurb replaced (see discrepancies).
- About: focus chips now EMDR Therapy, CBT, ACT, Anxiety/OCD, ADHD (Veterans & First Responders removed). Pull quote and both bio paragraphs replaced with spec copy. Typos fixed (see discrepancies).
- Philosophy: crucible pull quote and body replaced with the GPS wording.
- Services: session length 55 min. Focus cards are Trauma & PTSD, Depression, Anxiety (Christian Counseling moved to the chip list). Chip list: ADHD, Anger Management, Bipolar Disorder, Career Counseling, Christian Counseling, Men's Issues, Obsessive Compulsive Disorder, Personality Disorders, Sports Performance, Stress, Veterans. Addiction and Anxiety removed from chips. EMDR Intensives notice and waitlist modal removed.
- Practice-area drawers: added "Obsessive Compulsive Disorder" and "ADHD" (copy from spec). Removed "Addiction". Couples Counseling drawer: "Couples Therapy doesn't have to be a last resort".
- Fees: couples session $145. Superbill / insurance-phone note removed. Individual and couples sessions shown as 55 minutes.
- Process: step 3 is 55 minutes.
- FAQ: moved to its own page at `/faq` with a nav and footer link. Removed from Resources.
- Resources: Substack/YouTube library removed. Replaced with the medication/assessment intro (no place links yet).
- Deleted: `src/sections/Library.jsx`, `src/components/EmdrNotify.jsx`.
- `npx vite build` passes.

**Spec discrepancies and decisions** (from `_specs/Website_Details.md`; the user asked to proceed with the least confusing option)
1. Home hero: the spec gives the new title and lede without labels. Treated as replacements for the old hero title and lede.
2. Footer blurb: the spec omits the in-person Ludington option. Added "in person in Ludington, MI" so the footer matches the FAQ and meta text.
3. Philosophy image: the spec asks for a GPS picture. No such image exists yet, so the crucible image (with "Glowing crucible" alt text) is still in place.
4. Philosophy pull quote: spec gives no separate quote, so the pull quote repeats the first GPS sentence.
5. Anxiety focus-card description: the spec gives none. The text is a placeholder I wrote; review it.
6. About bio: the spec replaces both existing paragraphs, so the Abilene Christian University and Christian faith paragraph was removed. Faith still appears under Christian Counseling.
7. "Couples therapy is not a last resort" appears in the Couples Counseling drawer, not the Services offer. Applied there. The Concerns card still says "isn't a last resort" because the spec doesn't mention that card.
8. Session length: the spec changes only Services. I also changed Fees and Process to 55 minutes for consistency.
9. Typos fixed while copying the spec: "alot" → "a lot", "Inconsent" → "Inconsistent", "Overtime" → "Over time", "Ludington, Mi" → "Ludington, MI", "do" → "to make" in OCD benefits, and the ADHD benefit "Be able to understand how your motivated…" reworded to "Understand how to use your motivation to tackle tasks you would typically avoid".
10. Spec annotations "[Delete]", "[insert]", "[maginfy]" are instructions, not copy. Ignored.
11. "Addiction" was removed from the chip list and drawer data. "Substance Use" drawer data still exists in `practiceAreas.js`, but no button points to it.
12. The Services "Anxiety" chip was removed from the list because Anxiety is now a focus card.
13. Nav and footer now have six items (FAQ added). Check the header layout on narrow screens.
14. The Resources page has no heading, just the label "Resources" and the intro paragraph. The spec says the place links will be added later.
15. Brian's Substack and YouTube links were removed with the library, which closes a previous open item.
16. Phone: the (405) 293-3099 number is still in the contact form error text and in the schema. Only the fees-page insurance line was removed.

**Hero photo replaced** (uncommitted)
- New photo of Brian: copied `_specs/hero_brian_counts_reduced.jpg` → `public/assets/hero_brian_counts_reduced.jpg`.
- `src/sections/Hero.jsx` (home page) now uses that file.
- `src/sections/MeetTherapist.jsx` (About page, "Meet Your Therapist") also uses that file. Previously it showed `brian_damien.jpg`, which includes Brian's young son. Nothing in `src/` references `brian_damien.jpg` now.
- `npx vite build` passes and the new image is bundled.
- `public/assets/brian_damien.jpg` (photo with his son) deleted. It is still in git history at `HEAD`.

**Conversion to Vite + React** (uncommitted)
- Moved `assets/` → `public/assets/`, `logos/` → `public/logos/`, `fonts/` → `src/fonts/`, `css/` → `src/styles/` (done with `git mv`, so history follows the files).
- Deleted the vanilla JS app (`js/`) and the static `404.html`. Old versions are in git history at `HEAD`.
- Added `package.json` (react, react-dom, react-router-dom; dev: vite, @vitejs/plugin-react), `vite.config.js`, `.gitignore` entry `/dist`.
- Rewrote every former `js/` module as a React component (see Layout above). Template-string rendering and hand-wired event listeners are replaced by React state.
- `index.html` is now the Vite entry. The GitHub Pages `?/route` redirect scripts were removed, because `dist/404.html` now serves the app shell directly.
- Converted behaviour, unchanged in intent: mobile menu, portal/glossary/drawer modals (EMDR modal later removed), single-open accordions for Concerns and FAQ, contact form (Formspree; EMDR waitlist removed later in the day), insurer logos hide on load error, scroll to top on new page or to `#hash` target.
- Verified: `npx vite build` succeeds. `vite preview` returns the app for `/`, `/about`, `/services`, `/fees`, `/resources`, `/contact`. **Not yet checked in a browser.**

**Location copy** (uncommitted; applied before the conversion, carried into the React code)
- Brian is licensed in **Texas and Michigan**. **Austin, TX is telehealth only.** **Ludington, MI** offers in-person and telehealth.
- Updated: `index.html` meta/OG/Twitter descriptions and schema (`description`, `areaServed` = Michigan + Texas, geo set to Ludington center, removed `medicalSpecialty: Psychiatry`), footer blurb, hero location line ("Ludington, MI"), FAQ answer on telehealth vs in-person.

**Earlier in the session (already committed on `main`, before this log)**
- Commits `550ee3d` through `630c968`: earlier site updates (footer, booking URLs, therapist photo, etc.).

## Open Items

Ordered roughly by priority.

1. **Browser check** of the built app: every route, modals, accordions, contact form. (Header widths checked 2026-11-08.)
2. **Zachary Terry content still on the site.** This list is kept up to date and will be removed over time. Re-run a search for `Zachary|Terry|Stillwater|Oklahoma|zachary|11680|clientsecure` before each cleanup pass.
   - `src/sections/Endorsements.jsx`: removed 2026-11-08 (whole Clinical Endorsements section). Add Brian's own endorsements when he has them.
   - `src/data/constants.js`: `SIMPLEPRACTICE_URL` removed 2026-11-04.
   - `index.html`: schema `telephone` fixed 2026-11-08 (now Brian's number).
   - `src/styles/styles.css` line 2: header comment fixed 2026-11-01.
   - `public/assets/zachary-terry.png`: already removed.
3. **Brian's details still missing:** Ludington street address and ZIP (`index.html` schema has `GET_STREET_ADDRESS` and `GET_ZIP_CODE`). Schema `geo` coordinates were fixed 2026-11-08 to Ludington's city center (43.9553, -86.4526); update them to the office location once the street address is known; Brian's Texas license number if he wants it shown. (Client-portal link resolved 2026-11-04: Headway for everyone.)
4. ~~**Phone number mismatch:**~~ closed 2026-11-08: all phone numbers are Brian's (231) 425-1102.
5. **Placeholder copy to review:** Anxiety focus-card description (spec discrepancy 5).
6. **Philosophy image:** done 2026-11-04 (`compass-web.jpg`). Only phone-width framing is unchecked.
7. ~~**Resources links:**~~ closed 2026-11-08: Resources page removed.
8. **Deployment:** the live site is on an Apache host at www.healingspotlpc.com (2026-11-09). `vite.config.js` builds with a relative base (`./`), which works there and on GitHub Pages. Confirm how `dist/` gets to the Apache host, and that `.htaccess` is uploaded with it. The GitHub Pages copy (`delphicoder.github.io/HealingSpotLPC/`) is a duplicate: turn it off (repo Settings → Pages) once the host deploy is settled, or keep it as a preview. Its canonical links already point to www.
9. **404 page** is a generic "Page not found" inside the app. Confirm the copy.
10. **Dark mode check:** Branding Three chosen, tester removed, and a Light/Dark header button added (2026-11-04; two states with device default since 2026-11-08). Still open: check all pages, modals, and drawers in dark mode. (Header widths checked 2026-11-08.)
11. **Footer license tooltips cause sideways scroll** at some narrow widths (see 2026-11-08). Fix: keep the hidden popup from taking layout space, or keep it inside the screen edge.
12. **Contact form needs a form provider.** Since 2026-11-09 the form sends nothing: submitting shows a "this form isn't working yet" popup with Brian's email and phone, and the old Formspree ID (`xgaejdlw`, the other therapist's) is removed from the code. To turn it back on: pick a provider, put its endpoint in `src/data/forms.js` (`FORM_ENDPOINT`), send from `src/components/ContactForm.jsx`, and show an error unless `response.ok`. Restore the success message (the `.contact-success` styles are still in `styles.css`).
13. ~~**Insurance wording:**~~ closed 2026-11-08: superbill, UnitedHealthcare, Optum, Quest, UMR, and WebTPA removed; FAQ insurer list matches the Fees page. Re-run `super.?bill|united.?health|uhc` (case-insensitive) after insurance edits.
14. ~~**Terms of Service:**~~ closed 2026-11-08: removed from the footer; not needed.
15. **Confirm claims carried over from the original site** (audit 2026-11-08). These are first-person statements that must be true for Brian:
   - `src/sections/Services.jsx`: EMDR is "my primary tool for trauma and PTSD work" (the spec removed "EMDR intensives"; `index.html` keywords also list "EMDR therapy").
   - `src/sections/Services.jsx` "Also specializing" chips include Veterans (drawer says "Work with a therapist who understands military culture"), although the spec deleted "veterans and first responders" from the About focus areas. Also confirm Bipolar Disorder, Personality Disorders, Sports Performance, Career Counseling, Anger Management.
   - `src/data/practiceAreas.js` Trauma & PTSD: "This is one of my primary areas of expertise".
   - `src/sections/Faq.jsx` policies: 24-hour cancellation charged at the full session rate; limited sliding-scale slots.
   - `src/sections/Concerns.jsx` (home): "Couples therapy isn't a last resort". The spec changed this wording to "doesn't have to be a last resort", which was applied only in the Couples drawer.
   - Contact page form dropdown (`src/components/ContactForm.jsx`): "Trauma & EMDR", "Military, Veterans & First Responders", "Somatic Therapy".
   - Longer term: reword the copied text in Brian's own voice. It is the friend's writing, and identical text on two live sites can hurt search ranking.
16. ~~**Domain not connected:**~~ closed 2026-11-09: live at `https://www.healingspotlpc.com/`; all metadata URLs switched to www. After uploading the new build, check that `/about` etc. open directly, then submit `https://www.healingspotlpc.com/sitemap.xml` in Google Search Console.

## Decisions

- **Vite + React** chosen so content and components can be edited separately. Plain CSS kept, no CSS framework.
- **Static assets live in `public/`** and are referenced through `asset()`, so the base path can change without editing each file.
- **Data in `src/data/`**, so copy changes (plans, URLs, phone, practice-area text, FAQ, concerns) stay out of the component markup where possible. Note: most section copy currently still lives inside each section file.
- **Old vanilla code deleted rather than kept beside the new app.** Recover any file from git history if needed.
- **Formspree endpoint** is the same as before (`xgaejdlw`), in `src/data/forms.js`.
