# Session Handoff — WavesMVMNT

## Status
- Session 1: ✅ COMPLETE
- Session 2: ✅ COMPLETE (pending Netlify deploy via GitHub)

## Pages Done
- home → app/page.tsx (Hero, FeaturedProducts, Banner sections)
- collection → app/collections/[handle]/page.tsx (CollectionHeader, CollectionFilters, CollectionGrid)
- product → app/product/[handle]/page.tsx (updated layout wrapper, keeps Shopify Gallery + ProductDescription)
- cart → app/cart/page.tsx (server component) + components/cart/CartUI.tsx (client component)

## Components Created
- components/home/Hero.tsx
- components/home/FeaturedProducts.tsx
- components/home/Banner.tsx
- components/collection/CollectionHeader.tsx
- components/collection/CollectionFilters.tsx (client component)
- components/collection/CollectionGrid.tsx (client component)
- components/cart/CartUI.tsx (client component, extracted for RSC boundary)
- app/not-found.tsx (custom 404 page)

## TypeScript: ✅ Clean
## Build: ✅ Passes locally (9/9 static pages)
## Images: ✅ Verified (no raw img tags; all src= are next/image Shopify URLs)

## Brand System Applied
- globals.css @theme: brand-primary (#1A1A2E), brand-secondary (#E94560), brand-accent (#D4AF37), surface, muted
- Fonts: Inter (body) + Playfair Display (headings) via next/font/google
- layout.tsx: updated html className and body bg/font

## GitHub Repo
https://github.com/FaisalAwa/WavesMVMNT-storefront

## Netlify Site
- Admin: https://app.netlify.com/projects/wavesmvmnt-storefront
- URL: https://wavesmvmnt-storefront.netlify.app
- Site ID: eb2ffab2-9e37-46c9-9cee-3b9fb531f891
- Status: Netlify site created, needs GitHub connection for remote build

## Session 3 (Manual Steps Required)

### 1. Connect GitHub to Netlify
- Go to https://app.netlify.com/projects/wavesmvmnt-storefront
- Site → Build & Deploy → Link repository → GitHub
- Select: FaisalAwa/WavesMVMNT-storefront
- Branch: main
- Build command: pnpm run build
- Publish directory: .next

### 2. Add Environment Variables in Netlify
Go to: Site → Environment Variables → Add
- SHOPIFY_STORE_DOMAIN = [your-store].myshopify.com
- SHOPIFY_STOREFRONT_ACCESS_TOKEN = [your token]
- SHOPIFY_REVALIDATION_SECRET = [generate a random string]
- COMPANY_NAME = Waves MVMNT
- SITE_NAME = Waves MVMNT

Get token from: Shopify Admin → Settings → Apps → Develop apps → API credentials

### 3. Trigger Redeploy
After adding env vars, trigger a manual redeploy from Netlify dashboard.

## Build Fixes Applied (Session 2)
- PPR changed to 'incremental' (was causing build failures with placeholder credentials)
- Navbar/Footer getMenu calls wrapped in try/catch for resilience
- [page]/page.tsx getPage calls wrapped in try/catch
- CartUI extracted from client cart page to server component wrapper
- custom not-found.tsx added to avoid 404→[page] route fallthrough

## Notes
- Once real Shopify credentials are set, ppr: 'incremental' → ppr: true can be re-enabled
- Collection page at /collections/[handle] (new route; existing /search/[collection] untouched)
- Cart page at /cart is client-side with placeholder data; wire to Shopify CartProvider in a future session
