"use client";

import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index, onOpenDrawer }) {
  const handleCardClick = (e) => {
    onOpenDrawer(project);
  };

  const isAlternate = index % 2 !== 0;

  const isFlagship = project.id === "testready";
  const isRedAccent = project.id === "f1-strategy-simulator";

  return (
    <div 
      className={`build-item ${isAlternate ? "alternate" : ""} ${isFlagship ? "flagship-card" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      {/* Content Side */}
      <div className="build-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <span className={`build-tag ${isRedAccent ? "red-tag" : ""} ${isFlagship ? "flagship-tag" : ""}`}>
              {project.category}
            </span>
            {isFlagship && (
              <span className="live-status-pill">
                <span className="live-dot" /> Live • In Production
              </span>
            )}
          </div>
        </div>

        <h3 className="build-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {project.name}
          <span className="desktop-only" style={{ display: "inline-flex", alignItems: "center" }}>
            <ArrowRight size={22} style={{ opacity: 0.3, transform: "translateX(-4px)", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }} className="build-arrow" />
          </span>
        </h3>

        <p className="build-desc">{project.description}</p>
        
        {project.whyBuilt && (
          <p className="build-meta-quote desktop-only">&ldquo;{project.whyBuilt}&rdquo;</p>
        )}

        {/* Tech pills */}
        <div className="build-tech-list">
          {project.tech.map((t) => (
            <span key={t} className="build-tech-pill">
              {t}
            </span>
          ))}
        </div>

        {/* Action Triggers */}
        <div className="build-actions desktop-only" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "0.4rem 0.85rem" }}
            >
              Visit {project.name} ↗
            </a>
          )}
          <span className="interactive-link" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
            Read Case Study →
          </span>
        </div>

        <div className="mobile-only" style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-primary"
              style={{ fontSize: "0.8rem", padding: "0.35rem 0.75rem" }}
            >
              Visit {project.name} ↗
            </a>
          )}
          <span className="interactive-link" style={{ fontSize: "0.85rem", fontWeight: "600", color: isRedAccent ? "var(--accent-red)" : "var(--primary-accent)" }}>
            Read Case Study →
          </span>
        </div>
      </div>

      {/* Visual Side */}
      <div className="build-visual">
        <img 
          src={project.image} 
          alt={`${project.name} interface mockup`}
          className="build-image"
          loading="lazy"
        />
      </div>

      <style jsx>{`
        /* CSS to support arrow hover slide */
        @media (hover: hover) {
          .build-item:hover .build-arrow {
            opacity: 1 !important;
            transform: translateX(4px) !important;
            color: ${isRedAccent ? "var(--accent-red)" : "var(--primary-accent)"};
          }
        }
      `}</style>
    </div>
  );
}
