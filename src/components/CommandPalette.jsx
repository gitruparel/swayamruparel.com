"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, FolderGit2, User, Clock, Home, CornerDownLeft } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  const commands = [
    {
      id: "home",
      label: "Go to Home",
      action: () => {
        router.push("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      icon: <Home size={16} />,
      shortcut: "H",
    },
    {
      id: "projects",
      label: "View Things I've Built",
      action: () => {
        router.push("/#projects");
        setTimeout(() => {
          const el = document.getElementById("projects");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      },
      icon: <FolderGit2 size={16} />,
      shortcut: "P",
    },
    {
      id: "now",
      label: "View Now Page",
      action: () => router.push("/now"),
      icon: <Clock size={16} />,
      shortcut: "N",
    },
    {
      id: "resume",
      label: "Open Resume",
      action: () => router.push("/resume"),
      icon: <FileText size={16} />,
      shortcut: "R",
    },
    {
      id: "github",
      label: "Open GitHub",
      action: () => window.open("https://github.com/gitruparel", "_blank"),
      icon: <Github size={16} />,
      shortcut: "G",
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/swayam-ruparel-577925295/", "_blank"),
      icon: <Linkedin size={16} />,
      shortcut: "L",
    },
    {
      id: "contact",
      label: "Contact Swayam",
      action: () => {
        router.push("/#contact");
        setTimeout(() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      },
      icon: <User size={16} />,
      shortcut: "C",
    },
  ];

  // Listen for the slash key press globally
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if user is typing in an input/textarea
      const activeElement = document.activeElement;
      const isTyping = activeElement.tagName === "INPUT" || 
                       activeElement.tagName === "TEXTAREA" || 
                       activeElement.isContentEditable;

      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        setIsOpen(true);
        setSearch("");
        setSelectedIndex(0);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle input focus when palette opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (filteredCommands.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`command-backdrop ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className="command-input-container">
          <Search size={18} className="command-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="command-input"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <span className="command-shortcut" style={{ fontSize: "0.65rem" }}>ESC</span>
        </div>

        <ul className="command-list">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => (
              <li
                key={cmd.id}
                className={`command-item ${idx === selectedIndex ? "selected" : ""}`}
                onClick={() => {
                  cmd.action();
                  setIsOpen(false);
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="command-item-left">
                  {cmd.icon}
                  <span>{cmd.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {idx === selectedIndex && (
                    <CornerDownLeft size={10} style={{ opacity: 0.5 }} />
                  )}
                  <span className="command-shortcut">{cmd.shortcut}</span>
                </div>
              </li>
            ))
          ) : (
            <li className="command-item" style={{ pointerEvents: "none", color: "var(--text-muted)", justifyContent: "center" }}>
              No commands found.
            </li>
          )}
        </ul>

        <div className="command-palette-hint">
          <span>Use ↑↓ keys to navigate, <span className="command-shortcut" style={{ fontSize: "0.6rem", padding: "0.05rem 0.25rem" }}>Enter</span> to select</span>
          <span>swayamruparel.com v1.0</span>
        </div>
      </div>
    </div>
  );
}
