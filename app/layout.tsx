import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StructuredData from "./components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Cytech World Communication provides premium event production, equipment rental, distribution, and installation for concerts, festivals, and corporate events across Nigeria since 2003.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cytechworld.com"),
  title: {
    default: "Cytech World Communication | Premium Event Production",
    template: "%s | Cytech World Communication",
  },
  description: siteDescription,
  keywords: [
    "event production Lagos",
    "event equipment rental Nigeria",
    "stage lighting Lagos",
    "sound systems rental Nigeria",
    "concert production company",
    "Cytech World Communication",
  ],
  authors: [{ name: "Cytech World Communication" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://cytechworld.com",
    siteName: "Cytech World Communication",
    title: "Cytech World Communication | Premium Event Production",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cytech World Communication | Premium Event Production",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <StructuredData />
      <Analytics/>
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer/>
    </html>
  );
}
