"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, BookOpen, Brain, Activity, Compass } from "lucide-react";
import { nowData } from "@/data/now";

export default function NowPage() {
  return (
    <div className="container section" style={{ paddingTop: "7rem", maxWidth: "800px" }}>
      {/* Back link */}
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/" className="interactive-link" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </div>

      {/* Title */}
      <h1 className="now-title" style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "0.5rem" }}>
        Now
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
        This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-accent)", textDecoration: "underline" }}>now page</a>. It documents my active engineering focus, learning goals, and current projects.
      </p>

      <div style={{ 
        display: "inline-flex", 
        alignItems: "center", 
        gap: "0.5rem", 
        fontFamily: "var(--font-mono)", 
        fontSize: "0.8rem", 
        color: "var(--text-muted)",
        marginTop: "1rem",
        marginBottom: "2.5rem",
        padding: "0.35rem 0.75rem",
        backgroundColor: "var(--surface-color)",
        border: "1px solid var(--border-color)",
        borderRadius: "6px"
      }}>
        <Calendar size={12} />
        <span>Last updated: {nowData.lastUpdated}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {/* Currently Building */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-accent)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", marginBottom: "1rem" }}>
            <Activity size={16} />
            <span>Currently Building</span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {nowData.building.map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--primary-accent)" }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Currently Exploring / Tech to Learn */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-purple)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", marginBottom: "1rem" }}>
            <Compass size={16} />
            <span>Currently Exploring</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {nowData.currentlyExploring.map((tech, idx) => (
              <span key={idx} className="now-tag" style={{ fontSize: "0.85rem", padding: "0.35rem 0.75rem" }}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Reading */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-amber)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", marginBottom: "1rem" }}>
            <BookOpen size={16} />
            <span>Reading</span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {nowData.reading.map((book, idx) => (
              <li key={idx} style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent-amber)" }}>—</span>
                <span>{book}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Lifestyle / Routine */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", marginBottom: "1rem" }}>
            <Brain size={16} />
            <span>Active Routine</span>
          </div>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            {nowData.lifestyle}
          </p>
        </section>
      </div>

      <hr style={{ border: 0, height: "1px", backgroundColor: "var(--border-color)", margin: "3rem 0 2rem" }} />

      <footer style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)", fontSize: "0.85rem" }}>
        <span>Inspired by Derek Sivers nownownow project</span>
        <Link href="/" className="interactive-link">
          Home →
        </Link>
      </footer>
    </div>
  );
}
