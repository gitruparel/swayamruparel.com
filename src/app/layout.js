import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://swayamruparel.com"),
  title: {
    default: "Swayam Ruparel — Builder. Engineer. Product Thinker.",
    template: "%s | Swayam Ruparel",
  },
  description:
    "Personal website of Swayam Ruparel — builder, engineer, and product thinker. Exploring ideas, writing software, and shipping products for real users.",
  keywords: [
    "Swayam Ruparel",
    "swayamruparel",
    "Swayam Ruparel portfolio",
    "Swayam Ruparel developer",
    "Swayam Ruparel engineer",
    "builder engineer product thinker",
    "software engineer India",
    "personal portfolio website",
  ],
  authors: [{ name: "Swayam Ruparel", url: "https://swayamruparel.com" }],
  creator: "Swayam Ruparel",
  publisher: "Swayam Ruparel",
  category: "technology",
  alternates: {
    canonical: "https://swayamruparel.com",
  },
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
    title: "Swayam Ruparel — Builder. Engineer. Product Thinker.",
    description:
      "Personal website of Swayam Ruparel — builder, engineer, and product thinker. Exploring ideas, writing software, and shipping products for real users.",
    url: "https://swayamruparel.com",
    siteName: "Swayam Ruparel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swayam Ruparel — Builder. Engineer. Product Thinker.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swayam Ruparel — Builder. Engineer. Product Thinker.",
    description:
      "Personal website of Swayam Ruparel — builder, engineer, and product thinker.",
    creator: "@swayamruparel",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Swayam Ruparel",
  alternateName: "swayamruparel",
  url: "https://swayamruparel.com",
  sameAs: [
    "https://github.com/swayamruparel",
    "https://linkedin.com/in/swayamruparel",
  ],
  jobTitle: "Builder · Engineer · Product Thinker",
  description:
    "Swayam Ruparel is a builder, engineer, and product thinker who writes software and ships products for real users.",
  knowsAbout: [
    "Software Engineering",
    "Product Development",
    "Trading Systems",
    "Algorithmic Trading",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <div className="bg-orb-container no-print">
          <div className="bg-orb bg-orb-blue"></div>
          <div className="bg-orb bg-orb-red"></div>
          <div className="bg-orb bg-orb-purple"></div>
          <div className="bg-orb bg-orb-yellow"></div>
        </div>
        <div className="no-print">
          <Navbar />
          <CustomCursor />
          <CommandPalette />
        </div>
        <main style={{ position: "relative" }}>{children}</main>
      </body>
    </html>
  );
}
