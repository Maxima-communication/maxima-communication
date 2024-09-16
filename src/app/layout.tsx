import { ThemeProvider } from "@/components/providers/theme-providers";

import { siteConfig } from "@/configs/site";
import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - Maxima Communication`,
  },
  description: siteConfig.description,
  // added new keywords for SEO
  keywords: [
    "web development",
    "mobile development",
    "UI/UX design",
    "web marketing",
    "free consultation",
    "voice your vision",
    "Maxima Communication",
    "responsive design",
    "custom web applications",
    "e-commerce solutions",
    "SEO optimization",
    "content management systems",
    "progressive web apps",
    "cross-platform mobile apps",
    "user interface design",
    "user experience optimization",
    "digital branding",
    "social media marketing",
    "email marketing campaigns",
    "analytics and reporting",
    "web accessibility",
    "performance optimization",
    "API integration",
    "front-end development",
    "back-end development",
    "full-stack solutions",
    "mobile-first design",
    "agile development",
    "digital transformation",
    "technology consulting"
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.github,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@maximacommunication",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
