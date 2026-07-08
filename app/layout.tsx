import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { GradientBackdrop } from "@/components/ui/gradient-backdrop";
import { LightboxProvider } from "@/components/ui/lightbox";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://camillenaraga.site"),
  title: "Camille Naraga — AI Automation Specialist",
  description:
    "AI automation for modern businesses. Camille Naraga builds AI-powered workflows with n8n, OpenAI, Claude, and GoHighLevel that save companies hundreds of hours.",
  keywords: [
    "AI Automation", "n8n", "OpenAI", "Claude", "GoHighLevel",
    "Workflow Automation", "AI Agents", "Davao City", "Philippines",
  ],
  authors: [{ name: "Camille Naraga" }],
  openGraph: {
    title: "Camille Naraga — AI Automation Specialist",
    description:
      "Building AI-powered workflows that save businesses time, reduce manual work, and scale operations.",
    url: "https://camillenaraga.site",
    siteName: "Camille Naraga",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Camille Naraga — AI Automation Specialist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camille Naraga — AI Automation Specialist",
    description: "AI automation for modern businesses.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* General Sans via Fontshare (editorial secondary face) */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600&display=swap"
          rel="stylesheet"
        />
        <style>{`:root{--font-general:"General Sans";}`}</style>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans grain`}
      >
        <ThemeProvider>
          <LightboxProvider>
            <SmoothScroll>
              <GradientBackdrop />
              <ScrollProgress />
              <CursorGlow />
              {children}
            </SmoothScroll>
          </LightboxProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
