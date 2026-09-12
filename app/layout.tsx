import type { Metadata } from "next";
import localFont from "next/font/local";

import { StructuredData } from "@/components/seo/structured-data";
import { siteMetadata } from "@/content";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";
import "./portfolio-editorial.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  weight: "45 920",
  style: "normal",
  display: "swap",
  variable: "--font-pretendard",
  fallback: [
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Segoe UI",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: siteMetadata.title,
  description: siteMetadata.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "/",
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${pretendard.variable}`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
