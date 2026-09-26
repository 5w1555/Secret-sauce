# webasset-starter

Clone this per new site. Edit `src/config/site.config.js`, add content as
Markdown files in `src/content/posts/`, push to GitHub, deploy on Cloudflare Pages.

## Local setup

```bash
npm install
npm run dev        # http://localhost:4321
```

## New site checklist

1. `git clone` this repo (or use it as a GitHub template — see below)
2. Edit `src/config/site.config.js`: name, tagline, description, url, nav, colors
3. Update `public/robots.txt` sitemap URL to match the real domain
4. Delete `src/content/posts/example-post.md`, add real posts
5. `npm run build` to confirm it builds clean
6. Push to a new GitHub repo
7. Connect that repo in Cloudflare Pages (steps below)
8. Point your Porkbun domain's DNS at Cloudflare Pages

## Deploying on Cloudflare Pages

1. Push this repo to GitHub (make a new repo per site, or fork this one)
2. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select the repo. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy — Cloudflare gives you a `*.pages.dev` URL immediately
5. Go to **Custom domains** on that Pages project → add your Porkbun domain
6. Cloudflare gives you a CNAME target; add it in Porkbun's DNS settings
   (or move the domain's nameservers to Cloudflare for full DNS management)
7. Every future `git push` auto-deploys — no manual redeploy step

## Making it a template for future sites

On GitHub: repo **Settings** → check **Template repository**. Then "Use this
template" gives you a clean copy per new site without git history baggage.
