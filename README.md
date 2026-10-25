This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project self-hosts Syne and IBM Plex Sans with `next/font`, preserving the Figma typography without browser requests to Google Fonts.

## SEO and image delivery

Page titles, descriptions, canonical paths and the production domain live in `shared/config/site.ts`. The same route list generates `/sitemap.xml`; `/robots.txt` points crawlers to it. Update that configuration when adding a public page. Organization and WebSite structured data are rendered on the homepage.

Keep original Figma PNG exports in `public/images`. Run `bun run images:optimize` to generate WebP delivery assets in `public/images/optimized`, then reference those assets in components. The script processes referenced PNGs above 100 KB, preserves transparency and aspect ratio, and caps dimensions at 2400 pixels. It also reports missing sources. Next.js serves responsive AVIF/WebP variants; always provide accurate `sizes` for `fill` images. Only preload an image needed above the fold.

Offscreen content fades in once as it approaches the viewport. Content already on screen stays visible during hydration, and images keep their position and size throughout the fade. The hero collage loads eagerly and stays still. Content remains visible without JavaScript, and reduced-motion preferences disable decorative movement. The image script skips unchanged exports; pass `--force` to regenerate them after changing encoder settings.

The homepage word highlight uses a passive scroll listener with one animation-frame update, without an animation-library dependency. The measured LCP hero image uses eager loading and high fetch priority, including the generated preload. Portfolio images describe their actual column widths in `sizes`. Repeated “Learn more” controls include destination-specific accessible text while preserving the visible button labels.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
