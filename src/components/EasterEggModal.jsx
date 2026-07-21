"use client";

import { useEffect, useState } from "react";
import { Terminal, X, Check, Sparkles } from "lucide-react";

export default function EasterEggModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedBuffer, setTypedBuffer] = useState("");

  useEffect(() => {
    const targetString = "sudohireswayam";
    
    const handleKeyDown = (e) => {
      // Ignore when typing in inputs/textareas
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.isContentEditable)) {
        return;
      }

      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      // Buffer key presses
      const key = e.key.toLowerCase();
      if (/^[a-z ]$/.test(key)) {
        setTypedBuffer((prev) => {
          const next = (prev + key.replace(" ", "")).slice(-15);
          if (next.includes(targetString) || next.includes("konami")) {
            setIsOpen(true);
            return "";
          }
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="command-backdrop active" onClick={() => setIsOpen(false)}>
      <div className="easter-egg-modal" onClick={(e) => e.stopPropagation()}>
        <div className="easter-egg-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700" }}>
            <Terminal size={16} />
            <span>ROOT_SHELL // ACCESS GRANTED</span>
          </div>
          <button className="drawer-close" onClick={() => setIsOpen(false)} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="easter-egg-body">
          <div className="terminal-line">
            <span style={{ color: "#10B981" }}>swayam@shell:~$</span> sudo hire swayam --role="Software Engineer"
          </div>

          <div className="easter-egg-card">
            <h3 style={{ fontSize: "1.25rem", fontWeight: "800", marginBottom: "0.5rem", color: "#FFF" }}>
              🎉 You unlocked the Developer Easter Egg!
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
              Thanks for inspecting the site so thoroughly. Whether you found this by typing <code>sudo hire swayam</code> or searching the command palette, I&apos;d love to connect!
            </p>

            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div className="easter-egg-check">
                <Check size={14} style={{ color: "#10B981" }} />
                <span>Production engineering & product-first mindset</span>
              </div>
              <div className="easter-egg-check">
                <Check size={14} style={{ color: "#10B981" }} />
                <span>Zero-latency user experience & clean system architecture</span>
              </div>
              <div className="easter-egg-check">
                <Check size={14} style={{ color: "#10B981" }} />
                <span>Open for Engineering Internships & Collaboration</span>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
              <a href="mailto:swayam.ruparel@gmail.com" className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}>
                Send Email ✉
              </a>
              <a href="https://linkedin.com/in/swayam-ruparel-577925295/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}>
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
