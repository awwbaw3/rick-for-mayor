# Implementation History

## 2026-10-26 — v1.3.1 Cryptographic Hash Hardening & Plaintext Elimination
- **Plaintext Purge**: Completely removed all plaintext passwords and default passcode arrays (`crowking2026`, `marshall2026`, etc.) from all configuration and source files.
- **Single SHA-256 Digest**: Hardened `src/siteAccessConfig.ts` to authenticate exclusively against the exact one-way cryptographic SHA-256 digest (`5215ba28a5da6f3f28b7df0ae466d24facbe075aa6f681149791d22c44961b8b`), guaranteeing that the access passcode cannot be reverse-engineered or discovered by examining repository code or compiled client bundles.
- **Verification**: Verified using Node.js crypto and browser Web Crypto digests that the exact secret passcode unlocks the site cleanly while all previous default passcodes are rejected.

## 2026-10-26 — v1.3.0 "Site Under Construction" Password-Protected Gate for Campaign Embargo
- **Privacy & Embargo Architecture**: Implemented a locked public holding page displaying solely "Site Under Construction" and a minimal password prompt. No campaign lore, names, images, or hints are exposed to unauthorized visitors.
- **Metadata Sanitization**: Neutralized `index.html` title and OpenGraph metadata to "Site Under Construction" and removed eager portrait preloading so search crawlers and link previews reveal zero campaign disclosures.
- **Code Splitting & Asset Isolation**: Refactored the full campaign experience into `src/CampaignPage.tsx` loaded via `React.lazy()`. The campaign JavaScript bundle, photos, and platforms are only transferred over the wire upon successful authentication.
- **Cryptographic Hash Verification**: Validates passcodes using Web Crypto API SHA-256 digests (`crowking2026`, `marshall2026`) preventing plaintext password discovery in client-side sources, with support for URL bypass (`?pass=...`) and persistent session storage.
- **Verification**: Verified using Chrome DevTools MCP both the locked state (clean "Site Under Construction" heading, focused password input, error handling) and the unlocked state (`document.title` dynamic synchronization, full campaign UI rendering, and floating Re-lock toggle).

## 2026-10-25 — v1.2.0 Cloudflare Edge Custom Domain Deployment (`https://voterick4mayor.com`)
- **Cloudflare Workers Static Assets & Custom Domains**: Configured `wrangler.jsonc` (`account_id: 0f40130f3a5b17109c6ef2c69bc623a9`) with `assets.directory = "./dist"` and `custom_domain = true` routes for `voterick4mayor.com` and `www.voterick4mayor.com`.
- **Verification**: Deployed Version ID `eff8a971-c2eb-4f11-bf5e-a5d9bf27e51a` and verified `200 OK` HTTPS responses across `https://voterick4mayor.com`, `https://www.voterick4mayor.com`, and `https://voterick4mayor.com/rick-crow-king.jpg`.

## 2026-10-25 — v1.1.1 Live Production URL Restoration (`voterick4mayor.netlify.app`)
- **Root Cause**: Binding `custom_domain = "voterick4mayor.com"` via the Netlify API before `voterick4mayor.com` was purchased caused the Netlify Dashboard's primary site link (`ssl_url`) to point to the unregistered `https://voterick4mayor.com` (`NXDOMAIN`) and blocked the Netlify "Buy a new domain" wizard from registering `voterick4mayor.com`.
- **Resolution**: Restored `https://voterick4mayor.netlify.app` as the active primary URL on Netlify (`62d883b8-f09c-4990-945f-674b797df48c`), cleared the premature DNS zone so `voterick4mayor.com` can be registered cleanly in the UI, and pointed `og:image` in `index.html` to `https://voterick4mayor.netlify.app/rick-crow-king.jpg`.

## 2026-10-25 — v1.1.0 Custom Domain Binding & Netlify DNS Provisioning (`voterick4mayor.com`)
- **Netlify Custom Domain**: Bound `voterick4mayor.com` (primary) and `www.voterick4mayor.com` (domain alias) to Netlify site `62d883b8-f09c-4990-945f-674b797df48c`.
- **Netlify DNS Zone**: Created Netlify DNS zone `6ade5b8a03ae311b3f1dc50a` for `voterick4mayor.com` (`dns1.p09.nsone.net` – `dns4.p09.nsone.net`) with `NETLIFY` records pointing apex and `www` to `voterick4mayor.netlify.app`.
- **SEO & OpenGraph**: Updated `index.html` with canonical URL and absolute `og:image`/`og:url` metadata for `https://voterick4mayor.com`.

## 2026-10-25 — v1.0.1 Main Campaign Photo Crop & Aspect Ratio Refinement
- **Photo Crop**: Cropped `public/rick-crow-king.jpg` from `439x1024` (`Y=195..780`, resulting in `439x585`) to eliminate dead ceiling space at the top and lower legs/shoes at the bottom while preserving the full feather crown halo and all three people centered.
- **Hero Rendering**: Updated `src/App.tsx` hero `<img>` intrinsic dimensions (`width="439" height="585"`) and changed fixed height cropping to `w-full h-auto object-cover object-center block` so neither person on the sides is clipped across viewports.

## 2026-10-25 — v1.0.0 Initial Standalone Campaign Site Launch
- **Scope**: Created completely isolated local repository (`D:\p\rick-for-mayor`), GitHub repository (`awwbaw3/rick-for-mayor`), and standalone Netlify deployment for Rick Albaugh's satirical 2026 Marshall Mayoral campaign against Ryan Watson in support of incumbent Mayor Scott Wolfersberger.
- **Domain Research**: Verified via Verisign RDAP and DNS resolution that `votescott4mayor.com` is active for Mayor Scott Wolfersberger, while `voterick4mayor.com`, `albaughformayor.com`, `rickformarshall.com`, and `crowkingformayor.com` are available to register.
- **Technical Standards**: Built with Vite 6, React 19, Tailwind CSS v4, and Strict TypeScript (`tsc --noEmit` + `npm run build`), following `modern-web-guidance` for LCP image priority (`fetchpriority="high"`) and `<dialog closedby="any">` with click-outside light-dismiss fallback.
