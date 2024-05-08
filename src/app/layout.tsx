import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className=" m-3 flex items-end justify-end gap-2">
          <Link href={"/"}>
            <Badge>{"English/英語"}</Badge>
          </Link>
          <Link href={"/jp"}>
            <Badge>{"Japanese/日本語"}</Badge>
          </Link>
        </div>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
