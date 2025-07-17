import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eloquent-agnesi2-76keh.view-2.tempo-dev.app"),
  title: {
    default: "RoiGPT - AI Automation for Small Businesses",
    template: "%s | RoiGPT",
  },
  description:
    "Custom chatbots and social media automation for small businesses that pays for itself without the enterprise price tag. Starting at $99/month with guaranteed ROI.",
  keywords: [
    "AI automation",
    "small business",
    "chatbots",
    "social media automation",
    "ROI",
    "affordable AI",
    "business automation",
    "customer service automation",
    "small business AI solutions",
    "automated customer support",
    "AI chatbot development",
    "social media management tools",
  ],
  authors: [
    {
      name: "RoiGPT",
      url: "https://eloquent-agnesi2-76keh.view-2.tempo-dev.app",
    },
  ],
  creator: "RoiGPT",
  publisher: "RoiGPT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eloquent-agnesi2-76keh.view-2.tempo-dev.app",
    siteName: "RoiGPT",
    title: "RoiGPT - AI Automation for Small Businesses",
    description:
      "Custom chatbots and social media automation for small businesses that pays for itself without the enterprise price tag.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "RoiGPT AI Automation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RoiGPT",
    creator: "@RoiGPT",
    title: "RoiGPT - AI Automation for Small Businesses",
    description:
      "Custom chatbots and social media automation for small businesses that pays for itself without the enterprise price tag.",
    images: {
      url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
      alt: "RoiGPT AI Automation",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://eloquent-agnesi2-76keh.view-2.tempo-dev.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://api.dicebear.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://api.dicebear.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <Script
        src="https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js"
        strategy="afterInteractive"
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <TempoInit />
      </body>
    </html>
  );
}
