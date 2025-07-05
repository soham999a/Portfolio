import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://code-till-sayonara.vercel.app'),
  title: "👨‍💻 CODE_TILL_SAYONARA ✨💻",
  description: "4th year B.Tech ECE student, self-taught frontend developer with 2+ years experience, and conversion copywriter with 100+ happy clients. Specializing in React, TypeScript, and persuasive copy that converts.",
  keywords: ["Frontend Developer", "React Developer", "TypeScript", "Copywriter", "Web Developer", "Freelancer", "Next.js", "Tailwind CSS"],
  authors: [{ name: "Soham Das" }],
  creator: "Soham Das",
  openGraph: {
    title: "👨‍💻 CODE_TILL_SAYONARA ✨💻",
    description: "Building experiences that feel magical and words that convert browsers into buyers",
    url: "https://code-till-sayonara.vercel.app",
    siteName: "Soham Das Portfolio",
    images: [
      {
        url: "/SOHAM.png",
        width: 1200,
        height: 630,
        alt: "Soham Das - Frontend Developer & Copywriter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "👨‍💻 CODE_TILL_SAYONARA ✨💻",
    description: "Building experiences that feel magical and words that convert browsers into buyers",
    creator: "@dassoham345",
    images: ["/SOHAM.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
