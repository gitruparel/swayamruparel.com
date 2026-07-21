"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, FolderGit2, User, Clock, Home, CornerDownLeft, Sparkles, X, ExternalLink } from "lucide-react";
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
      keywords: "home start top index",
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
      keywords: `${p.name} ${p.category} ${p.builtWith.join(" ")} ${p.problem} ${p.solution}`,
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
      keywords: "now updates active current exploring",
      action: () => router.push("/now"),
      icon: <Clock size={16} />,
      shortcut: "N",
    },
    {
      id: "resume",
      label: "Open Resume (PDF)",
      category: "Navigation",
      keywords: "resume cv pdf download experience background",
      action: () => router.push("/resume"),
      icon: <FileText size={16} />,
      shortcut: "R",
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      category: "Socials",
      keywords: "github git code repo source",
      action: () => window.open("https://github.com/gitruparel", "_blank"),
      icon: <Github size={16} />,
      shortcut: "G",
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      category: "Socials",
      keywords: "linkedin social work background connect network",
      action: () => window.open("https://www.linkedin.com/in/swayam-ruparel-577925295/", "_blank"),
      icon: <Linkedin size={16} />,
      shortcut: "L",
    },
    {
      id: "contact",
      label: "Get in Touch (Contact)",
      category: "Navigation",
      keywords: "contact email reach hire touch message",
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

  // Global Event Listener for custom toggle event & ⌘K / Ctrl+K / /
  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
      setSearch("");
      setSelectedIndex(0);
    };

    const handleKeyDown = (e) => {
      const activeElement = document.activeElement;
      const isTyping = activeElement && (
        activeElement.tagName === "INPUT" || 
        activeElement.tagName === "TEXTAREA" || 
        activeElement.isContentEditable
      );

      // Support ⌘K (Mac), Ctrl+K (Windows/Linux), or / key
      if (((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") || (e.key === "/" && !isTyping)) {
        e.preventDefault();
        handleToggle();
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("toggle-command-palette", handleToggle);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("toggle-command-palette", handleToggle);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Focus input whenever palette opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  const query = search.trim().toLowerCase();

  const filteredCommands = query === "" 
    ? commands 
    : commands.filter((cmd) =>
        cmd.label.toLowerCase().includes(query) ||
        cmd.category.toLowerCase().includes(query) ||
        (cmd.keywords && cmd.keywords.toLowerCase().includes(query))
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
    <div className="command-backdrop active" onClick={() => setIsOpen(false)}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className="command-input-container">
          <Search size={20} className="command-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="command-input"
            placeholder="Type to search projects, resume, links (⌘K)..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button 
            onClick={() => setIsOpen(false)}
            style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", display: "flex", alignItems: "center" }}
            aria-label="Close command palette"
          >
            <X size={18} />
          </button>
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
                  <span style={{ fontWeight: idx === selectedIndex ? "600" : "400" }}>{cmd.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {idx === selectedIndex && (
                    <CornerDownLeft size={12} style={{ color: "var(--primary-accent)" }} />
                  )}
                  <span className="command-shortcut">{cmd.shortcut}</span>
                </div>
              </li>
            ))
          ) : (
            <li className="command-item" style={{ pointerEvents: "none", color: "var(--text-muted)", justifyContent: "center", padding: "1.5rem 0" }}>
              No matching commands or projects found.
            </li>
          )}
        </ul>

        <div className="command-palette-hint">
          <span>Use <span className="command-shortcut">↑</span> <span className="command-shortcut">↓</span> to navigate, <span className="command-shortcut">↵</span> to select</span>
          <span>swayamruparel.com</span>
        </div>
      </div>
    </div>
  );
}
