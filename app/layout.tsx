import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FMD Agro Concept - Fresh Produce, Expert Training, Real Impact",
  description:
    "FMD Agro Concept is a leading provider of aquaculture, crops, and horticulture solutions. We deliver fresh produce, comprehensive training, and sustainable agricultural practices.",
  generator: "fmd-agro-concept",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
