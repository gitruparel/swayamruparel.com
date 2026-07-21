import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import EasterEggModal from "@/components/EasterEggModal";

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
    default: "Swayam Ruparel — Computer Engineering Student & Product Builder",
    template: "%s | Swayam Ruparel",
  },
  description:
    "Portfolio of Swayam Ruparel — Computer Engineering student building production software, quantitative tools, AI systems, and hardware projects. Creator of TestReady.in.",
  keywords: [
    "Swayam Ruparel",
    "swayamruparel",
    "TestReady.in",
    "TestReady",
    "Swayam Ruparel portfolio",
    "Swayam Ruparel developer",
    "Swayam Ruparel engineer",
    "options trading backtest",
    "software engineer India",
    "computer engineering portfolio",
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
    title: "Swayam Ruparel — Computer Engineering Student & Product Builder",
    description:
      "Portfolio of Swayam Ruparel — Computer Engineering student building production software, quantitative tools, AI systems, and hardware projects. Creator of TestReady.in.",
    url: "https://swayamruparel.com",
    siteName: "Swayam Ruparel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swayam Ruparel — Computer Engineering Student & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swayam Ruparel — Computer Engineering Student & Product Builder",
    description:
      "Portfolio of Swayam Ruparel — Computer Engineering student building production software & systems. Creator of TestReady.in.",
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
  jobTitle: "Computer Engineering Student · Product Builder",
  description:
    "Swayam Ruparel is a Computer Engineering student building production software, AI systems, quantitative tools, and hardware projects. Creator of TestReady.in.",
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
        {/* Layered Canvas Background (#09090B + Grid + Noise + Scrolling Ambient Glow) */}
        <div className="bg-orb-container">
          <div className="bg-grid-overlay" />
          <div className="bg-noise-overlay" />
          <div className="bg-orb bg-orb-top" />
          <div className="bg-orb bg-orb-mid" />
          <div className="bg-orb bg-orb-bot" />
        </div>

        <div>
          <Navbar />
          <CommandPalette />
          <EasterEggModal />
        </div>

        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
