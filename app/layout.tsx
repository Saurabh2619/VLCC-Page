import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beauty, Makeup, Hair & Wellness Academy | VLCC Education",
  description: "India's leading beauty academy offering makeup, hair, skincare, nail, nutrition & wellness courses with certification and placement assistance.",
  keywords: "VLCC Institute, Beauty & Makeup Courses, Cosmetology Course, Nutrition Course, Wellness Training, Beauty Academy, Makeup Training",
  openGraph: {
    title: "Master Makeup & Beauty Skills at VLCC School of Beauty",
    siteName: "VLCC Education",
    url: "https://www.vlcceducation.com/",
    description: "Learn. Create. Shine. Join VLCC School of Beauty and master the skills of Makeup, Hair, Skin Care, Nail Artistry, Laser Aesthetics, and Nutrition with expert guidance and practical training.",
    type: "website",
    images: [
      {
        url: "",
      }
    ]
  },
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="bg-white text-[#1a1a1a] font-body">
        <FloatingSocials />
        {children}
      </body>
    </html>
  );
}
