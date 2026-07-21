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
    "Personal website of Swayam Ruparel — Computer Engineering student building production software, AI systems, and hardware projects. Creator of TestReady.in.",
  keywords: [
    "Swayam Ruparel",
    "swayamruparel",
    "TestReady.in",
    "TestReady",
    "Swayam Ruparel portfolio",
    "Swayam Ruparel developer",
    "Swayam Ruparel engineer",
    "options trading backtest",
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
      "Personal website of Swayam Ruparel — Computer Engineering student building production software, AI systems, and hardware projects. Creator of TestReady.in.",
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
      "Personal website of Swayam Ruparel — Computer Engineering student building production software & systems. Creator of TestReady.in.",
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
    "https://github.com/gitruparel",
    "https://www.linkedin.com/in/swayam-ruparel-577925295/",
  ],
  jobTitle: "Builder · Engineer · Product Thinker",
  description:
    "Swayam Ruparel is a Computer Engineering student building production software, AI systems, and hardware projects. Creator of TestReady.in.",
  knowsAbout: [
    "Software Engineering",
    "Product Development",
    "Quantitative Trading Systems",
    "TestReady.in",
    "Options Backtesting",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Flask",
    "IoT & Hardware Automation",
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
