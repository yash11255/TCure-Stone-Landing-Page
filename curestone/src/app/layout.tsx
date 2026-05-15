import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://curestone.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CureStone | Best Kidney Stone Laser Surgery in Gurgaon & Delhi NCR",
    template: "%s | CureStone",
  },
  description:
    "CureStone offers advanced RIRS laser kidney stone surgery in Gurgaon & Delhi NCR. No cuts, no scars, 98% success rate. Cashless insurance. Book a free consultation today.",
  keywords: [
    "kidney stone surgery Gurgaon",
    "RIRS laser surgery",
    "kidney stone treatment Delhi NCR",
    "best urologist Gurgaon",
    "laser stone removal",
    "PCNL surgery",
    "ESWL treatment",
    "kidney stone specialist",
    "painless kidney stone surgery",
    "CureStone",
    "thecurestone",
    "kidney stone doctor gurgaon",
  ],
  authors: [{ name: "CureStone Medical Team", url: SITE_URL }],
  creator: "CureStone",
  publisher: "CureStone Private Limited",
  category: "Healthcare / Urology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "CureStone",
    title: "CureStone | Best Kidney Stone Laser Surgery in Gurgaon & Delhi NCR",
    description:
      "Advanced RIRS laser kidney stone surgery. No cuts, no scars, 98% success rate. Serving Gurgaon, Delhi NCR & pan-India patients.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CureStone – Advanced Kidney Stone Laser Surgery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@curestone_in",
    creator: "@curestone_in",
    title: "CureStone | Best Kidney Stone Laser Surgery in Gurgaon",
    description:
      "RIRS laser surgery for kidney stones. No cuts, no scars, 24hr recovery. Book a free consultation.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },
  icons: {
    icon: "/custom-favicon.png",
    apple: "/custom-favicon.png",
    shortcut: "/custom-favicon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "CureStone",
  alternateName: "The CureStone",
  description:
    "Advanced kidney stone treatment center offering RIRS, PCNL and ESWL laser surgery in Gurgaon and Delhi NCR.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/PNG-Black-e1664728676618.png`,
    width: 400,
    height: 100,
  },
  image: `${SITE_URL}/og-image.svg`,
  telephone: "+91-88002-63884",
  email: "care@thecurestone.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Insurance, EMI",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gurugram",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    postalCode: "122003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.4595",
    longitude: "77.0266",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  medicalSpecialty: "Urology",
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "RIRS – Retrograde Intrarenal Surgery",
    },
    {
      "@type": "MedicalProcedure",
      name: "PCNL – Percutaneous Nephrolithotomy",
    },
    {
      "@type": "MedicalProcedure",
      name: "ESWL – Extracorporeal Shock Wave Lithotripsy",
    },
    { "@type": "MedicalProcedure", name: "URSL – Ureteroscopic Lithotripsy" },
  ],
  sameAs: [
    "https://www.facebook.com/curestone/",
    "https://www.instagram.com/the_cure_stone/",
    "https://www.youtube.com/c/Urogyaan",
    "https://www.linkedin.com/company/cure-stone/",
    "https://thecurestone.com",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "CureStone",
  description: "Best Kidney Stone Laser Surgery in Gurgaon & Delhi NCR",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurgaon, Haryana, India" />
        <meta name="geo.position" content="28.4595;77.0266" />
        <meta name="ICBM" content="28.4595, 77.0266" />
      </head>
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  );
}
