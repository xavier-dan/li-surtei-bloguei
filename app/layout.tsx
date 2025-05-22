import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ShareProvider } from "./provider/ShareProvider";
import { FavoritesProvider } from "./provider/FavoritesProvider";
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
  title: "Li, Surtei, Bloguei",
  description: "Blog com resenhas bem surtadinhas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FavoritesProvider>
          <ShareProvider>
            {children}
          </ShareProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
