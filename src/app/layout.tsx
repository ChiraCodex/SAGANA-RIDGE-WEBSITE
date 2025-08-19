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
  metadataBase: new URL("https://www.saganaridge.com"), // ✅ Replace with your real domain
  title: "Sagana Ridge",
  description: "Lifestyle Living",
  authors: [
    {
      name: "CiiraDev",
      url: "mailto:ciiradev@gmail.com",
    },
  ],
  icons: {
    icon: "/images/SaganaRidge-logo.png",
    apple: "/images/SaganaRidge-logo.png",
  },
  openGraph: {
    title: "Sagana Ridge",
    description: "Lifestyle Living",
    url: "https://www.saganaridge.com",
    images: ["/images/SaganaRidge-logo.png"], // resolved using metadataBase
    siteName: "Sagana Ridge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagana Ridge",
    description: "Lifestyle Living",
    images: ["/images/SaganaRidge-logo.png"], // resolved using metadataBase
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
