"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, FolderGit2, User, Clock, Home, CornerDownLeft, Sparkles, Code2, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { projects } from "@/data/projects";

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
      category: "Navigation",
      action: () => {
        router.push("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      icon: <Home size={16} />,
      shortcut: "H",
    },
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      label: `${p.name} — ${p.oneLiner}`,
      category: "Projects",
      action: () => {
        if (p.liveUrl) {
          window.open(p.liveUrl, "_blank");
        } else {
          router.push("/#projects");
          setTimeout(() => {
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      },
      icon: <FolderGit2 size={16} />,
      shortcut: "P",
    })),
    {
      id: "now",
      label: "View Now Page",
      category: "Navigation",
      action: () => router.push("/now"),
      icon: <Clock size={16} />,
      shortcut: "N",
    },
    {
      id: "resume",
      label: "Open Resume (PDF)",
      category: "Navigation",
      action: () => router.push("/resume"),
      icon: <FileText size={16} />,
      shortcut: "R",
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      category: "Socials",
      action: () => window.open("https://github.com/gitruparel", "_blank"),
      icon: <Github size={16} />,
      shortcut: "G",
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      category: "Socials",
      action: () => window.open("https://www.linkedin.com/in/swayam-ruparel-577925295/", "_blank"),
      icon: <Linkedin size={16} />,
      shortcut: "L",
    },
    {
      id: "contact",
      label: "Get in Touch (Contact)",
      category: "Navigation",
      action: () => {
        router.push("/#contact");
        setTimeout(() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      },
      icon: <User size={16} />,
      shortcut: "C",
    }
  ];

  // Listen for ⌘K / Ctrl+K or / globally
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeElement = document.activeElement;
      const isTyping = activeElement && (
        activeElement.tagName === "INPUT" || 
        activeElement.tagName === "TEXTAREA" || 
        activeElement.isContentEditable
      );

      // Support ⌘K (Mac) or Ctrl+K (Windows) or / key
      if (((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") || (e.key === "/" && !isTyping)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
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

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
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
            placeholder="Type a command or search (⌘K)..."
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
              No matching commands found.
            </li>
          )}
        </ul>

        <div className="command-palette-hint">
          <span>Use ↑↓ keys to navigate, <span className="command-shortcut" style={{ fontSize: "0.6rem", padding: "0.05rem 0.25rem" }}>Enter</span> to select</span>
          <span>swayamruparel.com v3.0</span>
        </div>
      </div>
    </div>
  );
}
