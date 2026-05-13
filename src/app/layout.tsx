import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickCart",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`}>
        {children}
      </body>
    </html>
  );
}
