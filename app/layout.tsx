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
  title: { default: "Real Estate Properties", template: "%s | Real Estate" },
  metadataBase: new URL("http://localhost:3000"),
  keywords: ["real estate", "properties", "housing"],
  description:
    "This is a real estate properties website showcasing various listings.",
  openGraph: {
    title: "Real Estate Properties",
    description:
      "Explore our listings of beautiful properties available for rent or purchase.",
    url: "http://localhost:3000",
    siteName: "Real Estate Properties",
    images: [
      {
        url: "http://localhost:3000/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Properties",
      },
    ],
    locale: "en_US",
    type: "website",
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
