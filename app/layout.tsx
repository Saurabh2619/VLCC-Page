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
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16558118479"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-16558118479');
            `,
          }}
        />
        {/* SEO Structured Data (JSON-LD Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://www.vlcceducation.com/#educationalorganization",
                  "name": "VLCC Education – Sector 49, Gurugram",
                  "alternateName": "VLCC School of Beauty – Gurugram",
                  "url": "https://www.vlcceducation.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.vlcceducation.com/#logo",
                    "url": "https://www.vlcceducation.com/vlcc-logo.png",
                    "contentUrl": "https://www.vlcceducation.com/vlcc-logo.png"
                  },
                  "description": "Start your beauty career with confidence at VLCC School of Beauty. Get hands-on training in Makeup, Hair, Skin, Nails, Laser Aesthetics, and Nutrition, guided by experienced professionals and industry-focused learning.",
                  "telephone": "+91-74282 38777",
                  "email": "institute2.gurugram@vlcceducation.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Third Floor, Sapphire Mall, opposite Orchid Petal, Orchid Petals, Block S, Uppal Southend",
                    "addressLocality": "Sector 49, Gurugram",
                    "addressRegion": "Haryana",
                    "postalCode": "122018",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "28.4119069",
                    "longitude": "77.0490439"
                  },
                  "sameAs": [
                    "https://www.facebook.com/vlccschoolofbeauty/",
                    "https://www.instagram.com/vlcc_school_of_beautyggn49",
                    "https://www.youtube.com/@institute2.gurugram",
                    "https://maps.app.goo.gl/VVQaYg7HStsr4ek56"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Beauty and Wellness Courses",
                    "itemListElement": [
                      {
                        "@type": "Course",
                        "name": "Makeup Artistry Course",
                        "url": "https://www.vlcceducation.com/best-makeup-academy-in-gurgaon",
                        "description": "Professional makeup artistry training designed to develop practical skills and industry-focused knowledge."
                      },
                      {
                        "@type": "Course",
                        "name": "Hair Dressing Course",
                        "url": "https://www.vlcceducation.com/best-hair-course-in-gurgaon",
                        "description": "Professional hair dressing training covering essential techniques and practical industry skills."
                      },
                      {
                        "@type": "Course",
                        "name": "Skin Care Course",
                        "url": "https://www.vlcceducation.com/skin-care-course-in-gurgaon",
                        "description": "Professional skin care training focused on beauty and wellness practices and industry-relevant techniques."
                      },
                      {
                        "@type": "Course",
                        "name": "Nail Artistry Course",
                        "url": "https://www.vlcceducation.com/best-nail-extension-course-in-gurgaon",
                        "description": "Practical nail artistry training covering professional nail care, nail art, and nail extension techniques."
                      },
                      {
                        "@type": "Course",
                        "name": "Laser Aesthetics Course",
                        "url": "https://www.vlcceducation.com/best-aesthetic-laser-treatment-course-in-gurgaon",
                        "description": "Industry-focused training in aesthetic laser treatments and professional beauty and aesthetics practices."
                      },
                      {
                        "@type": "Course",
                        "name": "Nutrition Course",
                        "url": "https://www.vlcceducation.com/best-nutrition-course-in-gurgaon",
                        "description": "Professional nutrition training designed to develop knowledge and practical understanding of nutrition and wellness."
                      }
                    ]
                  }
                },
                {
                  "@type": "ContactPoint",
                  "@id": "https://www.vlcceducation.com/#contactpoint",
                  "telephone": "+91-8065488855",
                  "email": "institute2.gurugram@vlcceducation.com",
                  "contactType": "customer service",
                  "areaServed": "Gurugram",
                  "availableLanguage": [
                    "English",
                    "Hindi"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.vlcceducation.com/#website",
                  "url": "https://www.vlcceducation.com/",
                  "name": "VLCC Education",
                  "publisher": {
                    "@id": "https://www.vlcceducation.com/#educationalorganization"
                  },
                  "inLanguage": "en-IN"
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-white text-[#1a1a1a] font-body">
        <FloatingSocials />
        {children}
      </body>
    </html>
  );
}
