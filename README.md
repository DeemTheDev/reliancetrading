# Reliance Trading SA – website

Rebuild of the COD Bridging Finance site (codbf.co.za) for **Reliance Trading SA (Pty) Ltd**: same
page structure, sections and copy, with the company identity swapped and the accent colour changed
to the client's blue. Built with [Astro](https://astro.build) as a static site (fast, no CMS to
maintain) plus one serverless function for the contact form. Deploys to Vercel with zero config.

## Pages

| URL | Page | Notes |
|---|---|---|
| `/` | Home | hero, two feature cards, testimonials, "what we focus on", popup |
| `/about/` | About Us | company profile and products list |
| `/products/` | Services | overview of the 5 products |
| `/products/<slug>/` | Product pages | seller-advances, commission-advances, bond-advances, property-buyers, secured-business-loans |
| `/bridging-checklist/` | Bridging Checklist | new: the original's button pointed at a dead page |
| `/faqs/` | FAQs | 15 questions from `src/data/faqs.ts` |
| `/blog/`, `/blog/<slug>/`, `/blog/category/<cat>/` | News | Markdown posts in `src/content/blog/` |
| `/contact-us/` | Contact | map + form posting to `/api/contact` |
| `/privacy-policy/`, `/paia-manual/` | Legal | adapted to the new company, **needs legal review** |

## Where to edit things

| What | File |
|---|---|
| Company name, reg no, address, phone, email, socials, nav, footer, popup text | `src/config/site.ts` |
| Brand colour (blue) and typography | `src/styles/global.css` (`:root` tokens at the top) |
| Products / services copy and requirement lists | `src/data/products.ts` |
| FAQs | `src/data/faqs.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Blog posts | `src/content/blog/*.md` (frontmatter: title, description, pubDate, category, image) |
| Blog categories | `src/data/categories.ts` (+ the Blog dropdown in `site.ts`) |
| Page layouts | `src/pages/*.astro`, shared pieces in `src/components/` |
| Logo | `src/components/Logo.astro` (HTML/CSS wordmark, same as the PDF form) |

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

Node 18.17+ (20 recommended). Copy `.env.example` to `.env` to test the contact form locally.

## Contact form (SMTP)

`src/pages/api/contact.ts` runs as a Vercel serverless function and emails each enquiry using the
mailbox that came with the domain. Set these environment variables in Vercel
(Project → Settings → Environment Variables) and in a local `.env`:

| Variable | Example |
|---|---|
| `SMTP_HOST` | `mail.reliancetrading.co.za` (from your email host) |
| `SMTP_PORT` | `465` (SSL) or `587` (STARTTLS) |
| `SMTP_SECURE` | `true` for 465, `false` for 587 |
| `SMTP_USER` | `info@reliancetrading.co.za` |
| `SMTP_PASS` | mailbox password |
| `CONTACT_TO` | where enquiries land (defaults to the site email) |
| `CONTACT_FROM` | usually the same as `SMTP_USER` |

Until these are set the form returns a friendly "email not set up yet" message and logs the enquiry
in the function logs. The form has a honeypot field for spam and works without JavaScript.

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub, GitLab or Bitbucket).
2. In Vercel: **Add New → Project → Import** the repo. Vercel detects Astro automatically
   (build `astro build`, output `dist/`). No settings to change.
3. Add the SMTP environment variables above, then **Deploy**.
4. **Domains**: add `reliancetrading.co.za` and `www.reliancetrading.co.za`. Vercel shows the DNS
   records to create at your registrar (an `A` record `76.76.21.21` for the apex and a `CNAME`
   `cname.vercel-dns.com` for `www`). Keep your existing `MX` records so email keeps working.
5. Set `www` to redirect to the apex (or the other way round) under the domain settings.

Alternatively `npx vercel` from this folder deploys from the command line.

## Motion (animations and parallax)

Deliberately light: everything is CSS plus one small script, `src/scripts/motion.ts`, and all of it
switches off automatically for visitors who have "reduce motion" enabled or JavaScript disabled.

| Effect | How it is applied |
|---|---|
| Scroll-reveal (fade / slide in) | add `data-reveal` (or `data-reveal="left"`, `"right"`, `"zoom"`) to any element; stagger with `style="--reveal-delay:120ms"` |
| Parallax backgrounds | a `<div class="parallax-bg" data-parallax="0.2">` inside a `position: relative; overflow: hidden` block; the number is the drift speed (0.1 subtle – 0.35 strong). Used on the home hero, the feature-card texture, every page banner, the Services image panels and product intro bands. Desktop only. |
| Hero text entrance | CSS keyframes on `.hero-content` children and page-banner titles |
| Header condenses on scroll | `.site-header.is-scrolled` (height 84 → 68px, logo shrinks) |
| Hover lifts / nav underline | CSS transitions in the "motion" block of `global.css` |
| Floating back-to-top button | appears after 600px of scrolling |

To tone it down, delete rules from the `/* ---------- motion` block in `src/styles/global.css`; to
remove parallax entirely, delete the `parallax-bg` divs (the sections fall back to a flat background).

## Placeholders to replace before launch

The original site's photos, staff, testimonials and articles belong to COD Bridging Finance and were
not copied. Everything below is a clearly marked stand-in:

- **Photos** – all files in `public/images/` are abstract blue SVG placeholders generated by
  `scripts/make-placeholders.py`. Replace with licensed photographs (same file names, or update the
  paths in the pages). Recommended sizes: heroes 1920×1080, product images 1200×900, feature
  thumbnails 400×400, blog covers 1200×675.
- **Testimonials** – `src/data/testimonials.ts` contains samples marked "(sample)". Replace with
  real client quotes or set `showTestimonials = false`.
- **Blog** – one sample post. Delete it or add real articles.
- **Social links** – empty in `site.ts`, so the icons are hidden until URLs are added.
- **Memberships** – the original showed a BFASA badge. Add to `site.memberships` if applicable.
- **Copy** – the original claimed "over 15 years" and described COD's Attwood Group ownership. The
  default text avoids company-history claims; edit `heroIntro` / `aboutIntro` in `site.ts`.
- **Legal pages** – Privacy Notice and PAIA manual were adapted to the new company and current
  legislation. Bracketed items (Information Officer, head of the private body, fees) must be filled
  in and the pages reviewed by the company's attorney.
- **Developer credit** – `site.developerCredit` is blank (was "Developed by iNCO Creative").

## Differences from the original site

- Accent colour: orange → blue `#1a6fb5` (one CSS token). The navy blues are unchanged.
- Fonts: Avenir / Bank Gothic are commercial; the site uses Google Fonts Rubik (headings, as the
  original did for most headings), Nunito Sans (body) and Montserrat (logo wordmark).
- Logo: typographic wordmark matching the PDF application form instead of a badge.
- "Property Bridging Finance" appears only as the tagline in the hero; the footer tagline was removed
  as requested.
- WordPress/Elementor replaced by a static build: no plugins to update, no admin login to protect.
- Added a `/bridging-checklist/` page (the original button linked to a page that redirects home).
- Removed at the client's request: the Our Team page and the Directors / Credit Department sections of About.
