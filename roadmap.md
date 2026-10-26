# Project Roadmap (`rick-for-mayor`)

## Phase 1: v1.0.1 — Campaign Launch & Mayoral Endorsement (Completed)
- Standalone Vite + React 19 + TypeScript satirical campaign site in `D:\p\rick-for-mayor`.
- Cropped 3:4 hero campaign portrait (`public/rick-crow-king.jpg`) framing all three subjects and the feather crown without dead ceiling space.
- Full endorsement pipeline directing Marshall voters to re-elect Mayor Scott Wolfersberger (`votescott4mayor.com`) on November 3, 2026.
- Dedicated GitHub repository (`awwbaw3/rick-for-mayor`) and live Netlify production deployment.

## Phase 2: v1.2.0 — Custom Domain Live on Cloudflare (`voterick4mayor.com`) (Completed)
- Registered `voterick4mayor.com` on Cloudflare (`0f40130f3a5b17109c6ef2c69bc623a9`) and deployed `rick-for-mayor` static assets with automatic custom domain triggers (`https://voterick4mayor.com` and `https://www.voterick4mayor.com`).

## Phase 3: v1.3.0 — "Site Under Construction" Embargo & Password Protection Gate (Completed)
- Placed domain under strict embargo for future campaign preparation.
- Isolated public-facing route to display solely "Site Under Construction" with a minimal password prompt and no visible passwords or hints.
- Fully isolated campaign assets into dynamically imported chunks (`React.lazy`) protected by SHA-256 hash authentication (`crowking2026`, `marshall2026`).
