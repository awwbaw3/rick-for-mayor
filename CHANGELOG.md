# Changelog

All notable changes to the **Rick Albaugh for Mayor (`rick-for-mayor`)** project will be documented in this file.

## [1.2.0] - 2026-10-25
### Added
- Deployed production static assets and Cloudflare Edge custom domain triggers (`voterick4mayor.com` and `www.voterick4mayor.com`) via `wrangler.jsonc` (`account_id: 0f40130f3a5b17109c6ef2c69bc623a9`, Version ID `eff8a971-c2eb-4f11-bf5e-a5d9bf27e51a`).
- Verified live HTTPS 200 responses on both `https://voterick4mayor.com` and `https://www.voterick4mayor.com`.

## [1.1.1] - 2026-10-25
### Fixed
- Restored `https://voterick4mayor.netlify.app` as the active primary Netlify production URL (`ssl_url`) and cleared the premature unpurchased DNS zone so `voterick4mayor.com` is unlocked for purchase in the Netlify Domain Registration checkout and the live site resolves immediately.
- Updated `og:image` and `og:url` in `index.html` to `https://voterick4mayor.netlify.app` so social link previews resolve immediately.

## [1.1.0] - 2026-10-25
### Added
- Pre-bound custom domain `voterick4mayor.com` and alias `www.voterick4mayor.com` to Netlify project `voterick4mayor` (`62d883b8-f09c-4990-945f-674b797df48c`).
- Provisioned Netlify DNS Zone (`6ade5b8a03ae311b3f1dc50a`) with `NETLIFY` routing records for both apex (`voterick4mayor.com`) and `www.voterick4mayor.com`.
- Added canonical link and absolute OpenGraph URL metadata (`https://voterick4mayor.com`) in `index.html`.

## [1.0.1] - 2026-10-25
### Changed
- Cropped `public/rick-crow-king.jpg` (`439x585`, 3:4 portrait aspect ratio) to remove excess top ceiling space and lower legs while keeping all three subjects and the full feather crown centered.
- Updated hero portrait `<img>` dimensions and responsive framing in `src/App.tsx` so the full width of the cropped portrait renders without side clipping.

## [1.0.0] - 2026-10-25
### Added
- Initial launch of the standalone satirical 2026 Marshall Mayoral campaign website (`D:\p\rick-for-mayor`).
- Hero campaign portrait (`public/rick-crow-king.jpg`) with `fetchpriority="high"` LCP optimization.
- Four-pillar **Good / Better / Best** platform incorporating authentic Rick Albaugh lore (Copper A.C. Demerit Slip #212309, Lake Odessa / Battle Creek `8.8.8.8` VPN ping diagnostics, AmbirScan system tray SOPs, banned corporate buzzwords, AG1 travel packs, 4-year macro cycle, and Maria's Uncorked backlinks).
- Interactive **Fountain Circle Ping Diagnostic**, **Anti-Buzzword Ordinance Filter**, **Candidate Comparison Matrix** (Rick Albaugh vs. Mayor Scott Wolfersberger vs. Ryan Watson), and **Ballot Simulator** endorsing **Mayor Scott Wolfersberger** (`votescott4mayor.com`).
