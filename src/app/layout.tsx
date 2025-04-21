import type { Metadata } from "next";
import "./index.css";
import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import { Inter, Lexend } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const title = "SenStay | Cho thuê homestay, căn hộ dịch vụ hàng đầu tại Việt Nam";
const description = "Trải nghiệm mỗi chuyến đi cùng SenStay → Hàng ngàn homestay cho thuê → Hàng ngàn homestay được khách hàng yêu thích → Khắp các tỉnh thành tại Việt Nam.";
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["senstay", "nghỉ dưỡng", "resort", "sen", "chill", "pwa"],
  authors: [{ name: "Người Anh Em", url: "https://senstay.vn" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  openGraph: {
    title: title,
    description: description,
    siteName: "SenStay",
    url: "https://senstay.vn",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://senstay.vn/og-image.png",
        width: 1200,
        height: 630,
        alt: "SenStay - OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["https://senstay.vn/og-image.png"],
  },
  other: {
    "X-UA-Compatible": "IE=edge",
    "Content-Type": "text/html; charset=UTF-8",
    "msapplication-TileColor": "#ffffff",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
