"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Search } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    setIsMobileMenuOpen(false);
    
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

  const navItems = [
    { label: "Projects", targetId: "projects", href: "/#projects" },
    { label: "Stack", targetId: "stack", href: "/#stack" },
    { label: "About", targetId: "beyond-code", href: "/#beyond-code" },
  ];

  return (
    <>
      <nav className={`navbar ${isAtTop && !isMobileMenuOpen ? "navbar-at-top" : ""}`}>
        <div className="navbar-container">
          <Link href="/" onClick={(e) => handleLinkClick(e, "hero")} className="logo">
            Swayam Ruparel<span className="logo-dot" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-wrapper">
            <ul className="nav-links-sections">
              {navItems.map((item) => (
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

            <div className="nav-links-pages">
              <button 
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                className="nav-link-now-pill"
                title="Search / Command Palette (⌘K)"
                style={{ cursor: "pointer" }}
              >
                <Search size={12} />
                <span>⌘K</span>
              </button>

              <Link
                href="/now"
                className={`nav-link-now-pill ${pathname === "/now" ? "nav-link-now-pill-active" : ""}`}
              >
                <span className="now-dot" />
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
        <button
          className="mobile-menu-close"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="mobile-menu-content">
          <ul className="mobile-menu-sections">
            {navItems.map((item) => (
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

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Link
              href="/now"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-secondary"
              style={{ justifyContent: "center" }}
            >
              <span className="now-dot" /> View Now Page
            </Link>
            <Link
              href="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary"
              style={{ justifyContent: "center" }}
            >
              <FileText size={16} /> Resume (PDF)
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
