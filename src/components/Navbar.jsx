"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open (Apple style)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

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
      <nav className={`navbar ${isAtTop && !isMobileMenuOpen ? "navbar-at-top" : ""} ${isMobileMenuOpen ? "navbar-menu-open" : ""}`}>
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

          {/* Apple-Style Morphing Hamburger Button */}
          <button
            className={`apple-hamburger ${isMobileMenuOpen ? "is-active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="apple-hamburger-bar apple-hamburger-bar-top" />
            <span className="apple-hamburger-bar apple-hamburger-bar-bottom" />
          </button>
        </div>
      </nav>

      {/* Apple-Style Animated Mobile Drawer */}
      <div 
        className={`apple-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="apple-mobile-menu-inner">
          <ul className="apple-mobile-nav-list">
            {navItems.map((item, idx) => (
              <li 
                key={item.label} 
                className="apple-mobile-nav-item"
                style={{ "--item-idx": idx }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.targetId)}
                  className="apple-mobile-nav-link"
                >
                  <span>{item.label}</span>
                  <span className="apple-mobile-nav-arrow">→</span>
                </a>
              </li>
            ))}

            <li 
              className="apple-mobile-nav-item"
              style={{ "--item-idx": navItems.length }}
            >
              <Link
                href="/now"
                onClick={() => setIsMobileMenuOpen(false)}
                className="apple-mobile-nav-link"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span className="now-dot" />
                  <span>Now</span>
                </div>
                <span className="apple-mobile-nav-arrow">→</span>
              </Link>
            </li>

            <li 
              className="apple-mobile-nav-item"
              style={{ "--item-idx": navItems.length + 1 }}
            >
              <Link
                href="/resume"
                onClick={() => setIsMobileMenuOpen(false)}
                className="apple-mobile-nav-link"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <FileText size={18} style={{ color: "var(--primary-accent)" }} />
                  <span>Resume (PDF)</span>
                </div>
                <span className="apple-mobile-nav-arrow">→</span>
              </Link>
            </li>
          </ul>

          {/* Quick Connect Dock at Bottom of Drawer */}
          <div 
            className="apple-mobile-footer"
            style={{ "--item-idx": navItems.length + 2 }}
          >
            <span className="apple-mobile-footer-label">Direct Connect</span>
            <div className="apple-mobile-footer-actions">
              <a 
                href="mailto:swayam.ruparel@gmail.com" 
                className="apple-mobile-contact-btn"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
              <a 
                href="https://github.com/gitruparel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="apple-mobile-contact-btn"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/swayam-ruparel-577925295/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="apple-mobile-contact-btn"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
