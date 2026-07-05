import type { Metadata } from "next";
import { Righteous, Rubik, Reem_Kufi_Fun } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const reemKufiFun = Reem_Kufi_Fun({
  subsets: ["latin"],
  variable: "--font-reem-kufi-fun",
});

export const metadata: Metadata = {
  title: "INDI Technology - Your Digital Transformation Partner",
  description: "Indi Technology will be delivered the best technology solutions that will help to achieve your Digital Transformation Goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${righteous.variable} ${rubik.variable} ${reemKufiFun.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
