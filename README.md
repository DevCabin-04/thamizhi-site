# thamizhi

Astro 6 site for Thamizhi, deployed on Cloudflare Pages.

## Local update flow

```bash
bun install
bun run check
bun run build
bun run dev
```

- Local dev URL: `http://localhost:4321`
- Root (`/`) should redirect to Tamil (`/ta`).

## Deploy to Cloudflare Pages (CLI)

Project: `thamizhi-org`
Production URL: `https://thamizhi-org.pages.dev`

### Deploy current branch preview (e.g. `v6`)

```bash
bun run build
bunx wrangler pages deploy dist --project-name thamizhi-org --branch v6
```

This updates the branch alias URL:

- `https://v6.thamizhi-org.pages.dev`

### Deploy to production

```bash
bun run build
bunx wrangler pages deploy dist --project-name thamizhi-org --branch main
```

## Notes

- `origin/main` is kept unchanged from local `main`.
- Work happens on `v6` (tracked as `origin/v6`).
