"use client";

import { useEffect } from "react";
import { X, Lock, FileText, ExternalLink, Network, FileCode, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/Icons";
import BrowserFrame from "@/components/BrowserFrame";

export default function ProjectDrawer({ project, isOpen, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? "active" : ""}`} 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className={`drawer-container ${isOpen ? "active" : ""}`}>
        <div className="drawer-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <span className="build-tag">{project.category}</span>
            {project.status && (
              <span className="status-badge status-live" style={{ fontSize: "0.7rem", padding: "0.15rem 0.45rem" }}>
                <span className="status-dot" /> {project.status}
              </span>
            )}
          </div>
          <button 
            className="drawer-close" 
            onClick={onClose} 
            aria-label="Close details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          <h2 className="drawer-title">{project.name}</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            {project.oneLiner}
          </p>

          {/* Browser Frame Visual inside Drawer */}
          {project.image && (
            <div style={{ marginBottom: "2rem" }}>
              <BrowserFrame title={project.browserFrameTitle || `${project.id}.swayamruparel.com`}>
                <img 
                  src={project.image} 
                  alt={`${project.name} preview`} 
                  className="drawer-image"
                />
              </BrowserFrame>
            </div>
          )}

          {/* Metadata Properties */}
          <div className="drawer-meta-section">
            <div className="drawer-meta-label">Timeline</div>
            <div className="drawer-meta-value">{project.timeline}</div>

            <div className="drawer-meta-label">Status</div>
            <div className="drawer-meta-value">{project.status}</div>

            <div className="drawer-meta-label">Built With</div>
            <div className="drawer-meta-value" style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.builtWith.map((t) => (
                <span key={t} className="build-tech-pill" style={{ margin: 0 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <hr style={{ border: 0, height: "1px", backgroundColor: "var(--border-color)", margin: "2rem 0" }} />

          {/* Structured Case Study Body */}
          <div className="drawer-body">
            {/* Problem */}
            {project.problem && (
              <div className="drawer-section">
                <div className="drawer-section-title">Problem</div>
                <p className="drawer-body-text">{project.problem}</p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="drawer-section">
                <div className="drawer-section-title">Solution</div>
                <p className="drawer-body-text">{project.solution}</p>
              </div>
            )}

            {/* Impact */}
            {project.impact && (
              <div className="drawer-section">
                <div className="drawer-section-title">Impact & Outcome</div>
                <p className="drawer-body-text">{project.impact}</p>
              </div>
            )}

            {/* Architecture & Flow Diagrams Slot */}
            {project.architecture && (
              <div className="drawer-section">
                <div className="drawer-section-title" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Network size={16} /> Architecture & System Flow
                </div>
                <p className="drawer-body-text">{project.architecture}</p>

                {/* Optional Future Architecture Diagram Image / Flowchart Slot */}
                {project.architectureDiagram && (
                  <div style={{ marginTop: "1rem" }}>
                    <BrowserFrame title="Architecture Flow Diagram">
                      <img src={project.architectureDiagram} alt="Architecture Diagram" style={{ width: "100%" }} />
                    </BrowserFrame>
                  </div>
                )}
              </div>
            )}

            {/* Major Features */}
            {project.majorFeatures && (
              <div className="drawer-section">
                <div className="drawer-section-title">Major Features</div>
                <ul className="drawer-bullets">
                  {project.majorFeatures.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Engineering Challenges */}
            {project.challenges && (
              <div className="drawer-section">
                <div className="drawer-section-title">Engineering Challenges</div>
                <ul className="drawer-bullets">
                  {project.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Research Paper Slot */}
            {project.paperBadge && (
              <div className="drawer-section">
                <div className="drawer-section-title" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#10B981" }}>
                  <FileText size={16} /> Publication / Paper
                </div>
                <div className="paper-badge-box">
                  <span>{project.paperBadge}</span>
                </div>
              </div>
            )}

            {/* Future Roadmap */}
            {project.futureRoadmap && (
              <div className="drawer-section">
                <div className="drawer-section-title">Future Roadmap</div>
                <p className="drawer-body-text">{project.futureRoadmap}</p>
              </div>
            )}

            {/* Action Links */}
            <div className="drawer-section" style={{ marginTop: "2rem" }}>
              <div className="drawer-section-title">Links & Resources</div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary drawer-action-btn"
                  >
                    Visit {project.name} ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary drawer-action-btn"
                  >
                    <Github size={14} /> Source Code
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary drawer-action-btn"
                  >
                    <FileText size={14} /> Read IEEE Paper
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
