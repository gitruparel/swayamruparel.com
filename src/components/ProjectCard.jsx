"use client";

import { ArrowRight, Lock, ExternalLink, FileText } from "lucide-react";
import BrowserFrame from "@/components/BrowserFrame";
import { Github } from "@/components/Icons";

export default function ProjectCard({ project, index, onOpenDrawer }) {
  const handleCardClick = () => {
    onOpenDrawer(project);
  };

  const getStatusBadge = (statusType) => {
    switch (statusType) {
      case "live":
        return <span className="status-badge status-live"><span className="status-dot" /> Live • Production</span>;
      case "progress":
        return <span className="status-badge status-progress"><span className="status-dot" /> In Progress</span>;
      case "maintained":
        return <span className="status-badge status-maintained"><span className="status-dot" /> Maintained</span>;
      default:
        return <span className="status-badge status-maintained">{project.status}</span>;
    }
  };

  return (
    <div 
      className={`product-card ${project.gridSpan || ""}`}
      onClick={handleCardClick}
    >
      <div className="product-card-visual">
        <BrowserFrame title={project.browserFrameTitle || `${project.id}.swayamruparel.com`}>
          <img 
            src={project.image} 
            alt={`${project.name} preview`} 
            className="product-card-image"
            loading="lazy"
          />
        </BrowserFrame>
      </div>

      <div className="product-card-content">
        <div className="product-card-top">
          <span className="build-tag">{project.category}</span>
          {getStatusBadge(project.statusType)}
        </div>

        <h3 className="product-card-title">
          {project.name}
          <ArrowRight size={18} className="product-card-arrow" />
        </h3>

        <p className="product-card-oneliner">{project.oneLiner}</p>

        {/* Problem -> Solution -> Impact Format */}
        <div className="psi-block">
          <div className="psi-row">
            <span className="psi-label">Problem</span>
            <span className="psi-text">{project.problem}</span>
          </div>
          <div className="psi-row">
            <span className="psi-label">Solution</span>
            <span className="psi-text">{project.solution}</span>
          </div>
          {project.impact && (
            <div className="psi-row">
              <span className="psi-label">Impact</span>
              <span className="psi-text">{project.impact}</span>
            </div>
          )}
        </div>

        {/* Built With */}
        <div className="built-with-block">
          <span className="built-with-label">Built with</span>
          <div className="build-tech-list">
            {project.builtWith.map((t) => (
              <span key={t} className="build-tech-pill">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="product-card-actions">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="btn-primary"
              style={{ fontSize: "0.8rem", padding: "0.35rem 0.75rem" }}
            >
              Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="btn-secondary"
              style={{ fontSize: "0.8rem", padding: "0.35rem 0.75rem", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
            >
              <Github size={13} /> Source
            </a>
          )}
          <span className="interactive-link" style={{ fontSize: "0.85rem", fontWeight: "600", marginLeft: "auto" }}>
            Case Study →
          </span>
        </div>
      </div>
    </div>
  );
}
