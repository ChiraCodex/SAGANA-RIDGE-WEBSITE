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
  title: "Sagana Ridge",
  description: "Lifestyle Living",
  authors: [
    {
      name: "CiiraDev",
      url: "mailto:ciiradev@gmail.com",
    },
  ],
  icons: {
    icon: "/images/SaganaRidge-logo.png", // favicon
    apple: "/images/SaganaRidge-logo.png", // Apple touch icon
  },
  openGraph: {
    title: "Sagana Ridge",
    description: "Lifestyle Living",
    url: "https://saganaridge.com", // replace with your site URL
    images: ["/images/SaganaRidge-logo.png"],
    siteName: "Sagana Ridge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagana Ridge",
    description: "Lifestyle Living",
    images: ["/images/SaganaRidge-logo.png"],
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
