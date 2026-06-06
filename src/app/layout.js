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
  title: "Swayam Ruparel — Builder. Engineer. Product Thinker.",
  description: "Personal website of Swayam Ruparel. Exploring ideas, writing software, and building products for real users.",
  metadataBase: new URL("https://swayamruparel.com"),
  openGraph: {
    title: "Swayam Ruparel — Builder. Engineer. Product Thinker.",
    description: "Exploring ideas, writing software, and building products for real users.",
    url: "https://swayamruparel.com",
    siteName: "Swayam Ruparel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swayam Ruparel — Builder. Engineer. Product Thinker.",
    description: "Exploring ideas, writing software, and building products for real users.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
