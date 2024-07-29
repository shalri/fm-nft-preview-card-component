import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "NFT Preview Card Component | FScode",
  description: "Solution for NFT Preview Card Component challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} flex font-normal min-h-screen flex-col antialiased scroll-smooth bg-nft-very-dark-blue-main`}>
        {children}
      </body>
    </html>
  );
}
