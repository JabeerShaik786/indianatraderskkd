import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : '/indianatraderskkd';

export const metadata: Metadata = {
  title: "Indiana Traders | Premium Container Homes & Modular Solutions",
  description: "Leading designer and builder of luxury container homes, modular offices, portable site cabins, and bespoke container structures based in Kakinada, Andhra Pradesh.",
  keywords: [
    "Container Homes Kakinada",
    "Modular Offices Kakinada",
    "Portable Site Cabin Andhra Pradesh",
    "Container Cafe Kakinada",
    "Storage Containers Kakinada",
    "Indiana Traders",
    "Custom Containers India"
  ],
  authors: [{ name: "Indiana Traders" }],
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/favicon-48x48.png`, sizes: '48x48', type: 'image/png' },
      { url: `${basePath}/icon-512x512.png`, sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Indiana Traders | Premium Container Homes & Modular Solutions",
    description: "Explore our premium, precision-engineered container homes, modular offices, and custom designs.",
    url: "https://indianatraders.com",
    siteName: "Indiana Traders",
    locale: "en_IN",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

