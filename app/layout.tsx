import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const rethink_sans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rethink_sans",
});

export const metadata: Metadata = {
  title: "Robin Curbelo",
  description: "Hi, I'm Robin Curbelo, software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rethink_sans.variable}>{children}</body>
    </html>
  );
}
