# Sprout Grocery — Yameen Traders

A responsive React + Vite website for the Sprout grocery brand, operated by Yameen Traders. Includes Home, Privacy Policy, and Terms & Conditions pages, and is suitable for deployment on Vercel.

## Before publishing

Search `src/main.jsx` for `REPLACE_WITH_` and replace the three placeholders with accurate, monitored business details:

- `REPLACE_WITH_SUPPORT_EMAIL`
- `REPLACE_WITH_BUSINESS_PHONE`
- `REPLACE_WITH_REGISTERED_BUSINESS_ADDRESS`

Review the privacy policy and terms carefully so they match the actual app, Supabase setup, communications providers, payment methods, delivery coverage, and retention practices. The supplied policy and terms are starter drafts, not legal advice. Do not submit the site to Meta until all placeholders are replaced and the deployed website is accessible publicly over HTTPS.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

Import this repository into Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`. No environment variables are required for this static website.
