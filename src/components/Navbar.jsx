"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    setIsMobileMenuOpen(false);
    
    // If we are on home page, scroll to element
    if (pathname === "/") {
      if (targetId === "hero") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const sectionItems = [
    { label: "Things I've Built", targetId: "projects", href: "/#projects" },
    { label: "About", targetId: "about", href: "/#about" },
    { label: "Contact", targetId: "contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className={`navbar${isAtTop && !isMobileMenuOpen ? " navbar-at-top" : ""}`}>
        <div className="navbar-container">
          <Link href="/" onClick={(e) => handleLinkClick(e, "hero")} className="logo">
            Swayam Ruparel<span className="logo-dot"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-wrapper">
            {/* Scroll-to-sections */}
            <ul className="nav-links-sections">
              {sectionItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.targetId)}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Separate Pages (Now, Resume) */}
            <div className="nav-links-pages">
              <Link
                href="/now"
                className={`nav-link-now-pill ${pathname === "/now" ? "nav-link-now-pill-active" : ""}`}
              >
                <span className="now-dot"></span>
                Now
              </Link>
              <Link href="/resume" className="btn-resume-nav">
                <FileText size={14} />
                Resume
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={22} style={{ color: "var(--text-primary)" }} />
            ) : (
              <Menu size={22} style={{ color: "var(--text-primary)" }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Full-Screen Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Large, high-contrast close button in top right */}
        <button
          className="mobile-menu-close"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="mobile-menu-content">
          <ul className="mobile-menu-sections">
            {sectionItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.targetId)}
                  className="mobile-menu-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Separate Pages Styled Container */}
          <div className="mobile-menu-pages-container">
            <div className="mobile-menu-pages-label">
              Separate Pages
            </div>
            <div className="mobile-menu-pages-links">
              <Link
                href="/now"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`nav-link-now-pill ${pathname === "/now" ? "nav-link-now-pill-active" : ""}`}
              >
                <span className="now-dot"></span>
                Now
              </Link>
              <Link
                href="/resume"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-resume-nav"
              >
                <FileText size={14} />
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
