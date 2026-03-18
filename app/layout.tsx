import type { Metadata, Viewport } from "next";
import { Cormorant, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OBSIDIAN — Where Coffee Becomes Art",
  description:
    "A luxury specialty coffee experience. Single origin, direct trade, precision roasted. London · Milan · New York.",
  openGraph: {
    title: "OBSIDIAN — Where Coffee Becomes Art",
    description: "Specialty coffee elevated to the extraordinary.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060402",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
