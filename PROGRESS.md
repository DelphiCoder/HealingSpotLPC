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
vite.config.js             React plugin, base "/", copies index.html to 404.html after build
src/main.jsx               React root, imports fonts.css and styles.css
src/App.jsx                BrowserRouter + routes + ScrollManager
src/components/            Layout, Header, Footer, Modal, SectionLabel, ClientPortal,
                           InsuranceGlossary, PracticeAreaDrawer, ContactForm
src/sections/              Hero, Concerns, Contact, Endorsements, Faq, FeesInsurance,
                           MeetTherapist, Philosophy, Process, Resources, Services
src/pages/                 HomePage, AboutPage, ServicesPage, FeesPage, ResourcesPage,
                           FaqPage, ContactPage, NotFoundPage (one per route)
src/data/                  constants.js (URLs, phone, email, plan lists), forms.js
                           (Formspree endpoint), practiceAreas.js (drawer copy), svgPaths.js
src/lib/asset.js           asset(path): prefixes /public paths with BASE_URL
src/fonts/, src/styles/    Font files + fonts.css, styles.css
public/assets/             Images (hero_brian_counts_reduced.jpg, office.png, zachary-terry.png)
public/logos/              Insurer logos (hidden automatically if missing)
```

Routes: `/` (home), `/about`, `/services`, `/fees`, `/resources`, `/faq`, `/contact`, anything else → NotFoundPage.

## Change History

### 2026-10-28

**Relative paths for GitHub Pages project site** (uncommitted)
- `index.html`: module script is `./src/main.jsx` (was `/src/main.jsx`).
- `vite.config.js`: `base` is `./` for `vite build` and `/` for the dev server.
- `src/App.jsx`: router basename is resolved from `document.baseURI`, so it is `/HealingSpotLPC` on a project page and empty on a domain root.
- `src/lib/asset.js`: `asset()` resolves against `document.baseURI` and returns a root-based path.
- Verified: the build served from a `/HealingSpotLPC/` folder loads the home page with styles and images, and the About link routes to `/HealingSpotLPC/about`.

**Pushed to origin** (2026-10-29)
- Branch `vite-react-conversion` pushed to `https://github.com/DelphiCoder/HealingSpotLPC`. Commits: `f7f3436` (Vite + React conversion and copy changes), `589eaf5` (concern and footer readability).
- Pull request: https://github.com/DelphiCoder/HealingSpotLPC/pull/new/vite-react-conversion
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

1. **Commit the conversion and the copy changes.** Nothing from 2026-10-28 is committed yet.
2. **Browser check** of the built app: every route, the header at narrow widths (six nav items now), modals, accordions, contact form.
3. **Zachary Terry content still on the site:**
   - `src/sections/Endorsements.jsx`: four testimonials, Oklahoma license `#11680`, Psychology Today links.
   - `src/sections/Contact.jsx`: Stillwater, OK office card, address, photo `public/assets/office.png`, Google Maps link.
   - `src/data/constants.js`: `SIMPLEPRACTICE_URL` points to `zachary-terry.clientsecure.me`.
   - `public/assets/zachary-terry.png`: unused by code, can be removed.
4. **Brian's details still missing:** Ludington street address and ZIP (`index.html` schema has `GET_STREET_ADDRESS` and `GET_ZIP_CODE`); Brian's Texas license number if he wants it shown; Brian's own client-portal link.
5. **Phone number mismatch:** `(231) 425-1102` in `src/data/constants.js` and the footer; `(405) 293-3099` in the contact form error text and the schema. Confirm which is Brian's and make it consistent.
6. **Placeholder copy to review:** Anxiety focus-card description (spec discrepancy 5).
7. **Philosophy image:** replace the crucible photo with a GPS image when one is available (discrepancy 3).
8. **Resources links:** add the medication and assessment place links when Brian provides them (discrepancy 14).
10. **Deployment:** `base` is `/` for HealingSpotLPC.com. For a GitHub Pages project URL without the custom domain, set `base` to `/HealingSpotLPC/`.
11. **404 page** is a generic "Page not found" inside the app. Confirm the copy.

## Decisions

- **Vite + React** chosen so content and components can be edited separately. Plain CSS kept, no CSS framework.
- **Static assets live in `public/`** and are referenced through `asset()`, so the base path can change without editing each file.
- **Data in `src/data/`**, so copy changes (plans, URLs, phone, practice-area text, FAQ, concerns) stay out of the component markup where possible. Note: most section copy currently still lives inside each section file.
- **Old vanilla code deleted rather than kept beside the new app.** Recover any file from git history if needed.
- **Formspree endpoint** is the same as before (`xgaejdlw`), in `src/data/forms.js`.
