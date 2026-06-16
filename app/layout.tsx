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
  title: "VLCC Institute | Beauty & Makeup Courses, Cosmetology Training",
  description: "Join VLCC Institute for Beauty & Makeup Courses, cosmetology, nutrition and wellness training with industry-focused certification programs.",
  keywords: "VLCC Institute, Beauty & Makeup Courses, Cosmetology Course, Nutrition Course, Wellness Training, Beauty Academy, Makeup Training",
  icons: {
    icon: "/vlcc-logo.png"
  }
};

import FloatingSocials from "./components/FloatingSocials";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-white text-[#1a1a1a] font-body">
        <FloatingSocials />
        {children}
      </body>
    </html>
  );
}
