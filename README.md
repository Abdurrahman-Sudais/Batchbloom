# Batchbloom

**Understand what changed between baking batches.**

Batchbloom helps commercial bakeries understand inconsistent production results. AI connects product images, ingredient records, and process measurements to highlight quality changes and support better-informed investigations.

> Batchbloom is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype uses fictional data. Named organisation types are prospective customers with no implied affiliation. The domain `www.batchbloom.com` and email `hello@batchbloom.com` are placeholders — check availability with a registrar before use.

Categories: AI · Food Technology · Manufacturing Analytics

## What's here

- **Marketing site** (`/`): hero, purpose and stakes (with sourced statistics), problem, solution, how it works, customers, public-sector angle, AI safeguards, principles, founders' letter, vision, pricing, proposed AWS architecture, team, FAQ and an early-access form.
- **Interactive prototype** (`/app`): a review workspace on fictional batch deviations. Switch roles with *Demo as*, open a record to see AI flags with evidence and confidence, assign reviewers, add notes and record decisions (a reason is required). Every change is written to an audit log you can export as CSV. A grounded assistant answers only from the records and refuses decisions that belong to people. Changes persist in `localStorage`.
- **Legal drafts**: `/privacy` and `/terms` (review drafts; operator details to be confirmed).

## Team

- **Bukola Fashanu** — Founder/CEO. Bakery technologist with experience in industrial bread production and quality.
- **Nnamdi Okafor** — Co-founder. Process engineer focused on food manufacturing lines and data.
- **Rahmat Yusuf** — CTO. Computer vision and ML engineer working on industrial inspection.

## Sources for the statistics

- 1.7Mt — Estimated food waste from UK food and drink manufacturing each year. ([WRAP, cited in Sustainable Energy & Fuels review](https://pmc.ncbi.nlm.nih.gov/articles/PMC8477656/))
- 51% — Share of that manufacturing food waste estimated to be avoidable. ([WRAP, cited in Sustainable Energy & Fuels review](https://pmc.ncbi.nlm.nih.gov/articles/PMC8477656/))
- 50k t — Bakery materials in Australian manufacturing wasted or diverted to animal feed each year. ([Bread and Bakery Sector Action Plan (NSW)](https://www.lovefoodhatewaste.nsw.gov.au/sites/default/files/2023-02/Bread-and-Bakery-Sector-Action-Plan_Full-Report-1.pdf))

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # Vite build, server render, and static prerender of /, /app, /privacy, /terms and 404.html
npm test        # Engine and content tests (node --test)
npm run preview
```

The build output in `dist/` is fully static. `public/_headers` and `public/_redirects` cover Netlify/Cloudflare Pages; `vercel.json` covers Vercel.

### Early-access form

Without configuration the form saves the request in the browser and offers a pre-filled email to hello@batchbloom.com. To send submissions to HubSpot, set `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_GUID` at build time, and update the privacy notice first.

### Motion

Scroll reveals, word-by-word manifesto lighting, count-up statistics, timeline and step lines, card tilt and magnetic buttons live in `src/motion.js`. Content is server-rendered and fully visible without JavaScript; motion is skipped when the visitor prefers reduced motion.

## Structure

```
src/content.js        all site copy (edit here)
src/seed.js           fictional prototype records
src/theme.css         colours and fonts
src/App.jsx           marketing pages
src/Purpose.jsx       purpose, stakes, principles, letter, vision
src/app/engine.js     prototype rules (permissions, decisions, audit, assistant)
src/app/Prototype.jsx prototype UI
scripts/prerender.mjs static HTML for every route
```
