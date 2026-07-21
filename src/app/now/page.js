"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, BookOpen, Brain, Activity } from "lucide-react";

export default function NowPage() {
  return (
    <div className="now-container">
      {/* Back button */}
      <div>
        <Link href="/" className="interactive-link">
          <ArrowLeft size={14} /> Back to home
        </Link>
      </div>

      {/* Header */}
      <div>
        <h1 className="now-title" style={{ fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          Now
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="interactive-link" style={{ color: "var(--primary-accent)", borderBottom: "1px solid var(--primary-accent)" }}>now page</a>. It documents what I am focused on at this point in my life.
        </p>
        
        <div style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "0.5rem", 
          fontFamily: "var(--font-mono)", 
          fontSize: "0.8rem", 
          color: "var(--text-muted)",
          marginTop: "1rem",
          padding: "0.35rem 0.75rem",
          backgroundColor: "rgba(255,255,255,0.02)",
          border: "1px solid var(--border-color)",
          borderRadius: "6px"
        }}>
          <Calendar size={12} />
          <span>Last updated: June 2026</span>
        </div>
      </div>

      <hr style={{ border: 0, height: "1px", backgroundColor: "var(--border-color)" }} />

      {/* Focus Area */}
      <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-accent)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "600" }}>
          <Activity size={14} />
          <span>Currently</span>
        </div>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--primary-accent)" }}>—</span>
            <span>Scaling <strong>TestReady.in</strong> — a production quantitative options strategy research and backtesting platform.</span>
          </li>
          <li style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--primary-accent)" }}>—</span>
            <span>Building backend automation pipelines for my <strong>Department Internship Project</strong>.</span>
          </li>
          <li style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--primary-accent)" }}>—</span>
            <span>Exploring <strong>AI agents & system design</strong>, while maintaining gym consistency and street photography.</span>
          </li>
        </ul>
      </section>

      {/* Reading list */}
      <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-red)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "600" }}>
          <BookOpen size={14} />
          <span>Reading</span>
        </div>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--accent-red)" }}>—</span>
            <span>
              <strong>The Pragmatic Programmer</strong> by Andy Hunt & Dave Thomas — to build sound software craftsmanship principles.
            </span>
          </li>
          <li style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--accent-red)" }}>—</span>
            <span>
              <strong>Steve Jobs</strong> by Walter Isaacson — a study of extreme product focus, design obsession, and user-centric systems.
            </span>
          </li>
        </ul>
      </section>

      {/* Thinking about */}
      <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "600" }}>
          <Brain size={14} />
          <span>Thinking About</span>
        </div>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--text-muted)" }}>—</span>
            <span>How to bridge the gap between being a technical engineer and a product-minded designer.</span>
          </li>
          <li style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--text-muted)" }}>—</span>
            <span>Simple, elegant solutions for real-world utilities rather than complex, over-engineered architectures.</span>
          </li>
        </ul>
      </section>

      <hr style={{ border: 0, height: "1px", backgroundColor: "var(--border-color)", marginTop: "1rem" }} />

      <footer style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)", fontSize: "0.8rem" }}>
        <span>Inspired by Derek Sivers</span>
        <Link href="/" className="interactive-link" style={{ fontSize: "0.8rem" }}>
          Home →
        </Link>
      </footer>
    </div>
  );
}
