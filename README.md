# [CoDox](https://codox.vercel.app/) - starter template for modern web development !

<kbd>
<a href="https://codox.vercel.app/">
  <img alt="CoDox – A starter template for modern web development with nextjs 13 (app route), tailwindcss, typescript, trpc, clerk auth, and prisma." src="https://codox.vercel.app/og-image.png">
</a>
</kbd>

### A starter template for modern web development with nextjs 13 (app route), tailwindcss, typescript, trpc, clerk auth, and prisma.

## Tech Stacks 💻

- ⚡ [Next.js](https://nextjs.org) 13 — The React framework with hybrid static & server rendering, and App Router
- 🔥 [TypeScript](https://www.typescriptlang.org) — JavaScript with type safety and enhanced developer experience.
- 💅 [Tailwind CSS](https://tailwindcss.com) — A utility-first CSS framework for rapid UI development
- 🗃 [Shadcn UI](https://ui.shadcn.com/) — A collection of beautiful and accessible components built with Radix UI and Tailwind CSS.
- 🌐 [tRPC](https://trpc.io) — A toolkit for building end-to-end typesafe APIs with Next.js and any database
- 🔒 [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) — A complete user management solution with authentication, profiles, and more
- 📦 [Prisma](https://www.prisma.io/) — A modern ORM for Node.js and TypeScript that simplifies database access
- ♻️ [T3 Env](https://env.t3.gg/) — A library for managing type-safe environment variables in Next.js
- 🛠 [BiomeJS](https://biomejs.dev/) — A tool for formatting, linting, and more in a fraction of a second.
- 📊 [Google Analytics ](https://analytics.google.com/) — A web analytics service that tracks and reports website traffic

## Environment Variables 🌎

To use clerk and analytics you need to add the following environment variables to your .env file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY =
DATABASE_URL =
NEXT_PUBLIC_GOOGLE_ID =
```

## Setup Locally 🚀

1. Clone the repository

```bash
git clone https://github.com/sujjeee/codox.git
```

2. Install dependencies using pnpm

```bash
pnpm install
```

3. Start the development server

```bash
pnpm dev
```

## Preview 👀

See the preview — <a href="https://codox.vercel.app/">CoDox</a>

```
maxima-communication
├─ .gitignore
├─ biome.json
├─ components.json
├─ next.config.cjs
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.cjs
├─ public
│  ├─ assets
│  │  └─ fonts
│  │     ├─ area
│  │     │  ├─ AreaExtendedTrial-Black-BF65ea75c45976a.otf
│  │     │  ├─ AreaExtendedTrial-BlackItalic-BF65ea75c4d092c.otf
│  │     │  ├─ AreaExtendedTrial-Bold-BF65ea75c4be86f.otf
│  │     │  ├─ AreaExtendedTrial-BoldItalic-BF65ea75c331a32.otf
│  │     │  ├─ AreaExtendedTrial-Extrablack-BF65ea75c4c2bf5.otf
│  │     │  ├─ AreaExtendedTrial-ExtrablackItalic-BF65ea75c4ef97d.otf
│  │     │  ├─ AreaExtendedTrial-Extrabold-BF65ea75c46944a.otf
│  │     │  ├─ AreaExtendedTrial-ExtraboldItalic-BF65ea75c31d3f3.otf
│  │     │  ├─ AreaExtendedTrial-Extralight-BF65ea75c31cd22.otf
│  │     │  ├─ AreaExtendedTrial-ExtralightItalic-BF65ea75c5062e7.otf
│  │     │  ├─ AreaExtendedTrial-Hairline-BF65ea75c3484d8.otf
│  │     │  ├─ AreaExtendedTrial-HairlineItalic-BF65ea75c4cf88e.otf
│  │     │  ├─ AreaExtendedTrial-Light-BF65ea75c341265.otf
│  │     │  ├─ AreaExtendedTrial-LightItalic-BF65ea75c50b777.otf
│  │     │  ├─ AreaExtendedTrial-Medium-BF65ea75c4e7e40.otf
│  │     │  ├─ AreaExtendedTrial-MediumItalic-BF65ea75c4da31e.otf
│  │     │  ├─ AreaExtendedTrial-Regular-BF65ea75c35e1f0.otf
│  │     │  ├─ AreaExtendedTrial-RegularItalic-BF65ea75c508880.otf
│  │     │  ├─ AreaExtendedTrial-Semibold-BF65ea75c3e2930.otf
│  │     │  ├─ AreaExtendedTrial-SemiboldItalic-BF65ea75c361895.otf
│  │     │  ├─ AreaExtendedTrial-Thin-BF65ea75c34b91e.otf
│  │     │  ├─ AreaExtendedTrial-ThinItalic-BF65ea75c3bd9e8.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Black-BF65ea75c0bedee.otf
│  │     │  ├─ AreaInktrapExtendedTrial-BlackItalic-BF65ea75c0d4bdf.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Bold-BF65ea75c0f0628.otf
│  │     │  ├─ AreaInktrapExtendedTrial-BoldItalic-BF65ea75c185003.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Extrablack-BF65ea75c356d30.otf
│  │     │  ├─ AreaInktrapExtendedTrial-ExtrablackItalic-BF65ea75c183c8d.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Extrabold-BF65ea75c106bf9.otf
│  │     │  ├─ AreaInktrapExtendedTrial-ExtraboldItalic-BF65ea75c17f7c0.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Extralight-BF65ea75c489d42.otf
│  │     │  ├─ AreaInktrapExtendedTrial-ExtralightItalic-BF65ea75c1996db.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Hairline-BF65ea75c430505.otf
│  │     │  ├─ AreaInktrapExtendedTrial-HairlineItalic-BF65ea75c4f2d35.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Light-BF65ea75c4960ac.otf
│  │     │  ├─ AreaInktrapExtendedTrial-LightItalic-BF65ea75c19d54e.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Medium-BF65ea75c19f0be.otf
│  │     │  ├─ AreaInktrapExtendedTrial-MediumItalic-BF65ea75c1a94b4.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Regular-BF65ea75c493999.otf
│  │     │  ├─ AreaInktrapExtendedTrial-RegularItalic-BF65ea75c3110ba.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Semibold-BF65ea75c31df92.otf
│  │     │  ├─ AreaInktrapExtendedTrial-SemiboldItalic-BF65ea75c30b674.otf
│  │     │  ├─ AreaInktrapExtendedTrial-Thin-BF65ea75c47eb31.otf
│  │     │  ├─ AreaInktrapExtendedTrial-ThinItalic-BF65ea75c045e56.otf
│  │     │  ├─ AreaInktrapTrial-Black-BF65ea75c566e27.otf
│  │     │  ├─ AreaInktrapTrial-BlackItalic-BF65ea75c56dd52.otf
│  │     │  ├─ AreaInktrapTrial-Bold-BF65ea75c66612f.otf
│  │     │  ├─ AreaInktrapTrial-BoldItalic-BF65ea75c47e1f3.otf
│  │     │  ├─ AreaInktrapTrial-Extrablack-BF65ea75c567479.otf
│  │     │  ├─ AreaInktrapTrial-ExtrablackItalic-BF65ea75c0ce71a.otf
│  │     │  ├─ AreaInktrapTrial-Extrabold-BF65ea75c482e6b.otf
│  │     │  ├─ AreaInktrapTrial-ExtraboldItalic-BF65ea75c5c2e49.otf
│  │     │  ├─ AreaInktrapTrial-Extralight-BF65ea75c5c6da3.otf
│  │     │  ├─ AreaInktrapTrial-ExtralightItalic-BF65ea75c440e9b.otf
│  │     │  ├─ AreaInktrapTrial-Hairline-BF65ea75c662901.otf
│  │     │  ├─ AreaInktrapTrial-HairlineItalic-BF65ea75c588c15.otf
│  │     │  ├─ AreaInktrapTrial-Light-BF65ea75c5c278b.otf
│  │     │  ├─ AreaInktrapTrial-LightItalic-BF65ea75c61814e.otf
│  │     │  ├─ AreaInktrapTrial-Medium-BF65ea75c6638ec.otf
│  │     │  ├─ AreaInktrapTrial-MediumItalic-BF65ea75c56b91f.otf
│  │     │  ├─ AreaInktrapTrial-Regular-BF65ea75c6662c7.otf
│  │     │  ├─ AreaInktrapTrial-RegularItalic-BF65ea75c644bd2.otf
│  │     │  ├─ AreaInktrapTrial-Semibold-BF65ea75c68d8d8.otf
│  │     │  ├─ AreaInktrapTrial-SemiboldItalic-BF65ea75c53d193.otf
│  │     │  ├─ AreaInktrapTrial-Thin-BF65ea75c5c0ee1.otf
│  │     │  ├─ AreaInktrapTrial-ThinItalic-BF65ea75c6321f6.otf
│  │     │  ├─ AreaNormalTrial-Black-BF65ea75c66612f.otf
│  │     │  ├─ AreaNormalTrial-BlackItalic-BF65ea75c6b5101.otf
│  │     │  ├─ AreaNormalTrial-Bold-BF65ea75c6a7619.otf
│  │     │  ├─ AreaNormalTrial-BoldItalic-BF65ea75c66fd8e.otf
│  │     │  ├─ AreaNormalTrial-Extrablack-BF65ea75c662008.otf
│  │     │  ├─ AreaNormalTrial-ExtrablackItalic-BF65ea75c68c2d6.otf
│  │     │  ├─ AreaNormalTrial-Extrabold-BF65ea75c66d287.otf
│  │     │  ├─ AreaNormalTrial-ExtraboldItalic-BF65ea75c65953d.otf
│  │     │  ├─ AreaNormalTrial-Extralight-BF65ea75c6682cd.otf
│  │     │  ├─ AreaNormalTrial-ExtralightItalic-BF65ea75c66774f.otf
│  │     │  ├─ AreaNormalTrial-Hairline-BF65ea75c69d8bd.otf
│  │     │  ├─ AreaNormalTrial-HairlineItalic-BF65ea75c66b06b.otf
│  │     │  ├─ AreaNormalTrial-Light-BF65ea75c6c87b9.otf
│  │     │  ├─ AreaNormalTrial-LightItalic-BF65ea75c6bb3a8.otf
│  │     │  ├─ AreaNormalTrial-Medium-BF65ea75c66b01c.otf
│  │     │  ├─ AreaNormalTrial-MediumItalic-BF65ea75c6898b0.otf
│  │     │  ├─ AreaNormalTrial-Regular-BF65ea75c666f34.otf
│  │     │  ├─ AreaNormalTrial-RegularItalic-BF65ea75c6ba3fa.otf
│  │     │  ├─ AreaNormalTrial-Semibold-BF65ea75c6b547e.otf
│  │     │  ├─ AreaNormalTrial-SemiboldItalic-BF65ea75c667970.otf
│  │     │  ├─ AreaNormalTrial-Thin-BF65ea75c6d622a.otf
│  │     │  ├─ AreaNormalTrial-ThinItalic-BF65ea75c6ad701.otf
│  │     │  └─ Befonts-License.txt
│  │     ├─ Baliw.ttf
│  │     ├─ baroka
│  │     │  ├─ 1.jpg
│  │     │  ├─ Baroka Demo.ttf
│  │     │  └─ license agreement - demo font.pdf
│  │     ├─ bogart
│  │     │  ├─ Bogart-Black-Italic-trial.ttf
│  │     │  ├─ Bogart-Black-trial.ttf
│  │     │  ├─ Bogart-Bold-Italic-trial.ttf
│  │     │  ├─ Bogart-Bold-trial.ttf
│  │     │  ├─ Bogart-Extrabold-Italic-trial.ttf
│  │     │  ├─ Bogart-Extrabold-trial.ttf
│  │     │  ├─ Bogart-Extralight-Italic-trial.ttf
│  │     │  ├─ Bogart-Extralight-trial.ttf
│  │     │  ├─ Bogart-Italic-trial.ttf
│  │     │  ├─ Bogart-Light-Italic-trial.ttf
│  │     │  ├─ Bogart-Light-trial.ttf
│  │     │  ├─ Bogart-Medium-Italic-trial.ttf
│  │     │  ├─ Bogart-Medium-trial.ttf
│  │     │  ├─ Bogart-Regular-trial.ttf
│  │     │  ├─ Bogart-Semibold-Italic-trial.ttf
│  │     │  ├─ Bogart-Semibold-trial.ttf
│  │     │  ├─ Bogart-Thin-Italic-trial.ttf
│  │     │  └─ Bogart-Thin-trial.ttf
│  │     ├─ cocogoose
│  │     │  ├─ COCOGOOSE PRO by ZETAFONTS - Commercial information.pdf
│  │     │  ├─ Cocogoose-Pro-Bold-Italic-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Bold-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Darkmode-Italic-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Darkmode-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Family-CC-BY-NCLicensepdf.pdf
│  │     │  ├─ Cocogoose-Pro-Italic-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Letterpress-Regular-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Light-Italic-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Light-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Regular-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Semilight-Italic-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Semilight-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Thin-Italic-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Thin-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Ultralight-Italic-trial.ttf
│  │     │  ├─ Cocogoose-Pro-Ultralight-trial.ttf
│  │     │  └─ Cocogoose-Pro.png
│  │     ├─ coolvetica
│  │     │  ├─ coolvetica compressed hv.otf
│  │     │  ├─ coolvetica condensed rg.otf
│  │     │  ├─ coolvetica crammed rg.otf
│  │     │  ├─ coolvetica rg it.otf
│  │     │  ├─ coolvetica rg.otf
│  │     │  ├─ read-this.html
│  │     │  └─ Typodermic Desktop EULA 2023.pdf
│  │     ├─ CRASEY.otf
│  │     ├─ distant_feeling
│  │     │  ├─ Distant Feeling-Italic.ttf
│  │     │  ├─ Distant Feeling.ttf
│  │     │  └─ README BEFORE INSTAL !!!!.txt
│  │     ├─ engebrechtre
│  │     │  ├─ Engebrechtre Bd It.otf
│  │     │  ├─ Engebrechtre Bd.otf
│  │     │  ├─ Engebrechtre Ex Bd It.otf
│  │     │  ├─ Engebrechtre Ex Bd.otf
│  │     │  ├─ Engebrechtre Ex It.otf
│  │     │  ├─ Engebrechtre Ex.otf
│  │     │  ├─ Engebrechtre Rg It.otf
│  │     │  └─ Engebrechtre Rg.otf
│  │     ├─ genova
│  │     │  ├─ Genova-Black.otf
│  │     │  ├─ Genova-BlackItalic.otf
│  │     │  ├─ Genova-Italic.otf
│  │     │  ├─ Genova-Medium.otf
│  │     │  ├─ Genova-MediumItalic.otf
│  │     │  ├─ Genova-Thin.otf
│  │     │  ├─ Genova-ThinItalic.otf
│  │     │  └─ Genova.otf
│  │     ├─ hagrid
│  │     │  ├─ Hagrid-Family-CC-BY-NCLicensepdf.pdf
│  │     │  ├─ Hagrid-Italic-trial.ttf
│  │     │  ├─ Hagrid-Regular-trial.ttf
│  │     │  ├─ Hagrid-Text-Extrabold-Italic-trial.ttf
│  │     │  ├─ Hagrid-Text-Extrabold-trial.ttf
│  │     │  └─ Hagrid_by_Zetafonts.png
│  │     ├─ LT Glockenspiel Black.ttf
│  │     ├─ NoisyWalk.ttf
│  │     ├─ noland
│  │     │  ├─ Noland-Bold.otf
│  │     │  ├─ Noland-Bold.ttf
│  │     │  └─ [License] Noland Typeface Personal Use.txt
│  │     ├─ Relevance-trial-Regular.ttf
│  │     ├─ stonewaller
│  │     │  └─ Stonewaller.ttf
│  │     └─ tabarra
│  │        ├─ License - README.txt
│  │        ├─ Tabarra Pro Fonts.URL
│  │        ├─ tabarra-pro-font-s.png
│  │        ├─ Tabarra-Pro-Fonts-specimen.pdf
│  │        ├─ TabarraPro-Black-FFP.ttf
│  │        ├─ TabarraPro-Light-FFP.ttf
│  │        └─ TabarraPro-NarrowLight-FFP.ttf
│  ├─ favicon.ico
│  ├─ googlea0f0548f4347733c.html
│  ├─ m-footer.svg
│  ├─ m.svg
│  └─ og-image.png
├─ README.md
├─ src
│  ├─ app
│  │  ├─ (pages)
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ loading.tsx
│  │  └─ robots.ts
│  ├─ components
│  │  ├─ aboutus.tsx
│  │  ├─ contactUs.tsx
│  │  ├─ globe.tsx
│  │  ├─ icons.tsx
│  │  ├─ Lamp.tsx
│  │  ├─ layouts
│  │  │  ├─ site-footer.tsx
│  │  │  └─ site-header.tsx
│  │  ├─ process.tsx
│  │  ├─ providers
│  │  │  └─ theme-providers.tsx
│  │  ├─ Services.tsx
│  │  ├─ theme-toggle.tsx
│  │  ├─ ticker.tsx
│  │  └─ ui
│  │     ├─ aurora-background.tsx
│  │     ├─ button.tsx
│  │     ├─ cloud-logo.tsx
│  │     ├─ cursor.tsx
│  │     ├─ flip-words.tsx
│  │     ├─ paragraph.tsx
│  │     ├─ rippleeffect.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ sparkles.tsx
│  │     ├─ spotlight.tsx
│  │     └─ styledimage.tsx
│  ├─ configs
│  │  └─ site.ts
│  ├─ images
│  │  ├─ 4.svg
│  │  ├─ 6.svg
│  │  ├─ arrow.svg
│  │  ├─ arrowflipped.svg
│  │  ├─ butt.svg
│  │  ├─ button.png
│  │  ├─ code.jpg
│  │  ├─ contactUs.svg
│  │  ├─ first.png
│  │  ├─ Geo Wave 15(2).svg
│  │  ├─ logos
│  │  │  ├─ Agadir-Beach-Club.png
│  │  │  ├─ Agadir-Beach-Club.svg
│  │  │  ├─ CHU-Souss-Massa.png
│  │  │  ├─ Delassus-Group.svg
│  │  │  ├─ Faculte-Medecine-Laayoune.svg
│  │  │  ├─ Ministere-de-la-Sante.svg
│  │  │  ├─ OCP.png
│  │  │  ├─ Robinson-Agadir-Hotel.svg
│  │  │  └─ Universiapolis.png
│  │  ├─ markus.jpg
│  │  ├─ meeting.jpg
│  │  ├─ mesh.png
│  │  ├─ second.png
│  │  ├─ third.png
│  │  └─ whiteboard.jpg
│  ├─ styles
│  │  └─ globals.css
│  ├─ types
│  │  └─ window.d.ts
│  └─ utils
│     └─ cn.ts
├─ tailwind.config.js
├─ tailwind.config.ts
└─ tsconfig.json

```