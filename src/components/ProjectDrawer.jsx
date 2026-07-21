"use client";

import { useEffect } from "react";
import { X, Lock, FileText } from "lucide-react";
import { Github } from "@/components/Icons";

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

  const isRedAccent = project.id === "f1-strategy-simulator";

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
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <span 
              className={`build-tag ${project.isConfidential ? "confidential" : ""}`} 
              style={{ 
                width: "fit-content",
                color: project.isConfidential ? "#EF4444" : (isRedAccent ? "var(--accent-red)" : "var(--primary-accent)"),
                borderColor: project.isConfidential ? "rgba(239, 68, 68, 0.2)" : (isRedAccent ? "rgba(220, 38, 38, 0.2)" : "rgba(37, 99, 235, 0.2)"),
                backgroundColor: project.isConfidential ? "rgba(239, 68, 68, 0.05)" : (isRedAccent ? "rgba(220, 38, 38, 0.05)" : "rgba(37, 99, 235, 0.05)")
              }}
            >
              {project.category}
            </span>
          </div>
          <button 
            className={`drawer-close ${isRedAccent ? "red-close" : ""}`} 
            onClick={onClose} 
            aria-label="Close details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          <h2 style={{ 
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "2rem", 
            marginBottom: "1.5rem", 
            fontWeight: "800",
            letterSpacing: "-0.03em"
          }}>
            {project.name}
          </h2>

          {/* Project Screenshot Visual inside Modal */}
          {project.image && (
            <div className="drawer-visual" style={{ marginBottom: "2rem" }}>
              <img 
                src={project.image} 
                alt={`${project.name} screenshot preview`} 
                className="drawer-image"
              />
            </div>
          )}

          {/* Notion-style properties */}
          <div className="drawer-meta-section">
            <div className="drawer-meta-label">Status</div>
            <div className="drawer-meta-value" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              {project.currentStatus ? (
                <span style={{ color: project.id === "testready" ? "#10B981" : "var(--text-primary)", fontWeight: 600 }}>
                  {project.currentStatus}
                </span>
              ) : project.isConfidential ? (
                <>
                  <Lock size={12} style={{ color: "#EF4444" }} />
                  <span style={{ color: "#EF4444", fontWeight: 600 }}>Private / Confidential</span>
                </>
              ) : (
                <>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }} />
                  <span>Open Source</span>
                </>
              )}
            </div>

            <div className="drawer-meta-label">Timeline</div>
            <div className="drawer-meta-value">{project.timeline}</div>

            <div className="drawer-meta-label">Stack</div>
            <div className="drawer-meta-value" style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.tech.map((t) => (
                <span key={t} className="build-tech-pill" style={{ margin: 0 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <hr style={{ border: 0, height: "1px", backgroundColor: "var(--border-color)", margin: "2rem 0" }} />

          {/* Structured Engineering Case Study Body */}
          <div className="drawer-body">
            {/* Overview */}
            <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
              Overview
            </div>
            <p className="drawer-body-text">{project.longDescription}</p>

            {/* Why I Built It */}
            {project.whyBuilt && (
              <>
                <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
                  Why I Built It
                </div>
                <p className="drawer-body-text">{project.whyBuilt}</p>
              </>
            )}

            {/* Problem */}
            {project.problem && (
              <>
                <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
                  Problem
                </div>
                <p className="drawer-body-text">{project.problem}</p>
              </>
            )}

            {/* Vision */}
            {project.vision && (
              <>
                <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
                  Vision
                </div>
                <p className="drawer-body-text">{project.vision}</p>
              </>
            )}

            {/* Architecture */}
            {project.architecture && (
              <>
                <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
                  Architecture & Systems
                </div>
                <p className="drawer-body-text">{project.architecture}</p>
              </>
            )}

            {/* Major Features */}
            {project.majorFeatures && (
              <>
                <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
                  Major Features
                </div>
                <ul className="drawer-bullets">
                  {project.majorFeatures.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Engineering Challenges */}
            {project.challenges && (
              <>
                <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
                  Engineering Challenges
                </div>
                <ul className="drawer-bullets">
                  {project.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Future Roadmap */}
            {project.futureRoadmap && (
              <>
                <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
                  Future Roadmap
                </div>
                <p className="drawer-body-text">{project.futureRoadmap}</p>
              </>
            )}

            {/* Links & Resources */}
            <div className="drawer-section-title" style={{ color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)", marginTop: "2rem" }}>
              Links & Resources
            </div>
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
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary drawer-action-btn"
                >
                  <Github size={14} />
                  Source Code
                </a>
              )}
              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary drawer-action-btn"
                >
                  <FileText size={14} />
                  Read Paper
                </a>
              )}
              {project.isConfidential && !project.liveUrl && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  <Lock size={14} />
                  <span>Details available upon request.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
