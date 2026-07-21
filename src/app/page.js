"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, FileText, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

import { projects } from "@/data/projects";
import { overviewMetrics } from "@/data/overview";
import { engineeringPhilosophy } from "@/data/philosophy";
import { leadershipTimeline } from "@/data/experience";

import ProjectCard from "@/components/ProjectCard";
import ProjectDrawer from "@/components/ProjectDrawer";
import BrowserFrame from "@/components/BrowserFrame";
import NowWidget from "@/components/NowWidget";
import TechStack from "@/components/TechStack";

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const testreadyProject = projects.find((p) => p.id === "testready");
  const deptProject = projects.find((p) => p.id === "dept-internship");
  const gridProjects = projects.filter((p) => !p.isFlagship);

  const handleOpenDrawer = (project) => {
    setActiveProject(project);
    setIsDrawerOpen(true);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION (65–75vh) */}
      <section className="container hero" id="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-subtitle">Computer Engineering Student</span>
            <h1 className="hero-title">SWAYAM<br />RUPAREL</h1>

            <p className="hero-desc">
              Building production-ready software, AI systems, developer tools, and hardware projects.
            </p>

            <div className="hero-actions">
              <a 
                href="#featured" 
                onClick={(e) => scrollToSection(e, "featured")} 
                className="btn-primary"
              >
                View Projects <ArrowRight size={16} className="btn-arrow" />
              </a>
              <Link 
                href="/resume" 
                className="btn-secondary"
              >
                <FileText size={16} />
                Resume
              </Link>
            </div>
          </div>

          {/* Desktop "NOW" Widget */}
          <NowWidget />
        </div>
      </section>

      {/* OVERVIEW SECTION (formerly Quick Summary) */}
      <section className="container section" id="overview">
        <div className="section-header-block">
          <span className="section-label">01 / Overview</span>
          <h2 className="section-title">At a Glance</h2>
        </div>

        <div className="overview-grid">
          {overviewMetrics.map((item, idx) => (
            <div key={idx} className="overview-card" style={{ borderLeft: `4px solid ${item.accent}` }}>
              <div className="overview-number">{item.number}</div>
              <div className="overview-label">{item.label}</div>
              <div className="overview-desc">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Block */}
        <div className="philosophy-card">
          <div className="philosophy-title">Engineering Principles</div>
          <ul className="philosophy-list">
            {engineeringPhilosophy.map((principle, idx) => (
              <li key={idx} className="philosophy-item">
                <span className="philosophy-item-num">0{idx + 1}.</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECH STACK MATRIX SECTION */}
      <section className="container section" id="stack">
        <div className="section-header-block">
          <span className="section-label">02 / Tech Stack</span>
          <h2 className="section-title">Technologies & Systems</h2>
          <p className="section-subtitle">Core frameworks, languages, databases, and engineering tools I build with.</p>
        </div>

        <TechStack />
      </section>

      {/* FEATURED PROJECTS (DUAL FLAGSHIP SHOWCASES) */}
      <section className="container section" id="featured">
        <div className="section-header-block">
          <span className="section-label">03 / Flagships</span>
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <p className="section-subtitle">Building software people actually use.</p>
        </div>

        {/* Flagship Showcase 1: TestReady.in (Content Left, Screenshot Right) */}
        {testreadyProject && (
          <div className="featured-showcase">
            <div className="featured-content">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                <span className="build-tag">{testreadyProject.category}</span>
                <span className="status-badge status-live">
                  <span className="status-dot" /> {testreadyProject.status}
                </span>
              </div>

              <h3 style={{ fontSize: "2.5rem", fontWeight: "800" }}>{testreadyProject.name}</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>{testreadyProject.oneLiner}</p>

              {/* Problem -> Solution -> Impact */}
              <div className="psi-block">
                <div className="psi-row">
                  <span className="psi-label">Problem</span>
                  <span className="psi-text">{testreadyProject.problem}</span>
                </div>
                <div className="psi-row">
                  <span className="psi-label">Solution</span>
                  <span className="psi-text">{testreadyProject.solution}</span>
                </div>
                <div className="psi-row">
                  <span className="psi-label">Impact</span>
                  <span className="psi-text">{testreadyProject.impact}</span>
                </div>
              </div>

              {/* Built With Chips */}
              <div className="built-with-block">
                <span className="built-with-label">Built with</span>
                <div className="build-tech-list">
                  {testreadyProject.builtWith.map((t) => (
                    <span key={t} className="build-tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
                {testreadyProject.liveUrl && (
                  <a href={testreadyProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Visit TestReady.in ↗
                  </a>
                )}
                <button onClick={() => handleOpenDrawer(testreadyProject)} className="btn-secondary">
                  Read Case Study →
                </button>
              </div>
            </div>

            <div className="featured-visual" onClick={() => handleOpenDrawer(testreadyProject)} style={{ cursor: "pointer" }}>
              <BrowserFrame title={testreadyProject.browserFrameTitle}>
                <img src={testreadyProject.image} alt={testreadyProject.name} />
              </BrowserFrame>
            </div>
          </div>
        )}

        {/* Flagship Showcase 2: Department Internship Project (Screenshot Left, Content Right) */}
        {deptProject && (
          <div className="featured-showcase alternate">
            <div className="featured-content">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                <span className="build-tag">{deptProject.category}</span>
                <span className="status-badge status-progress">
                  <span className="status-dot" /> {deptProject.status}
                </span>
              </div>

              <h3 style={{ fontSize: "2.5rem", fontWeight: "800" }}>{deptProject.name}</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>{deptProject.oneLiner}</p>

              {/* Problem -> Solution -> Impact */}
              <div className="psi-block">
                <div className="psi-row">
                  <span className="psi-label">Problem</span>
                  <span className="psi-text">{deptProject.problem}</span>
                </div>
                <div className="psi-row">
                  <span className="psi-label">Solution</span>
                  <span className="psi-text">{deptProject.solution}</span>
                </div>
                <div className="psi-row">
                  <span className="psi-label">Impact</span>
                  <span className="psi-text">{deptProject.impact}</span>
                </div>
              </div>

              {/* Built With Chips */}
              <div className="built-with-block">
                <span className="built-with-label">Built with</span>
                <div className="build-tech-list">
                  {deptProject.builtWith.map((t) => (
                    <span key={t} className="build-tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
                <button onClick={() => handleOpenDrawer(deptProject)} className="btn-secondary">
                  Read Case Study →
                </button>
              </div>
            </div>

            <div className="featured-visual" onClick={() => handleOpenDrawer(deptProject)} style={{ cursor: "pointer" }}>
              <BrowserFrame title={deptProject.browserFrameTitle}>
                <img src={deptProject.image} alt={deptProject.name} />
              </BrowserFrame>
            </div>
          </div>
        )}
      </section>

      {/* PROJECTS GRID SECTION (ASYMMETRIC MASONRY) */}
      <section className="container section" id="projects">
        <div className="section-header-block">
          <span className="section-label">04 / Projects</span>
          <h2 className="section-title">Selected Works & Systems</h2>
          <p className="section-subtitle">Production platforms, IoT gateways, physics simulation engines, and low-level C code.</p>
        </div>

        <div className="projects-masonry-grid">
          {gridProjects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx}
              onOpenDrawer={handleOpenDrawer} 
            />
          ))}
        </div>
      </section>

      {/* LEADERSHIP TIMELINE SECTION */}
      <section className="container section" id="leadership">
        <div className="section-header-block">
          <span className="section-label">05 / Leadership</span>
          <h2 className="section-title">Leadership & Governance</h2>
        </div>

        <div className="timeline-container">
          {leadershipTimeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-card">
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-org">{item.organization}</div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEYOND CODE (ABOUT) SECTION */}
      <section className="container section" id="beyond-code">
        <div className="section-header-block">
          <span className="section-label">06 / Beyond Code</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="beyond-code-grid">
          <div>
            <p className="beyond-code-p">
              I build software by shipping products. I believe the best way to understand systems—whether it&apos;s a quantitative options backtester, a low-level C game loop, or an IoT hardware bridge—is to take an idea all the way to a working, deployed solution.
            </p>
            <p className="beyond-code-p">
              Currently pursuing my B.Tech in Computer Engineering at FCRIT, I spend my time outside coursework designing tools that solve practical problems. I don&apos;t build tutorial apps; I build software I actually use or put into the hands of real users.
            </p>
          </div>

          <div>
            <p className="beyond-code-p">
              What drives me isn&apos;t just code syntax—it&apos;s product ownership. I enjoy figuring out why a problem matters, architecting a clean system to solve it, and refining the user experience until it feels effortless.
            </p>
            <p className="beyond-code-p">
              Lately, I&apos;ve been studying distributed systems, container orchestration with Kubernetes, and exploring how AI agents and edge automation can streamline real-world workflows.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CALL-TO-ACTION */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-cta-block">
            <h2 className="footer-cta-title">Have an interesting problem?</h2>
            <p className="footer-cta-desc">Let&apos;s build it together.</p>

            <a href="mailto:swayam.ruparel@gmail.com" className="btn-primary" style={{ padding: "0.8rem 1.75rem", fontSize: "1.05rem" }}>
              Get in touch <ArrowRight size={18} className="btn-arrow" />
            </a>
          </div>

          <div className="footer-bottom-row">
            <ul className="footer-links">
              <li>
                <a href="mailto:swayam.ruparel@gmail.com" className="footer-link">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/swayam-ruparel-577925295/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/gitruparel" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              </li>
              <li>
                <Link href="/resume" className="footer-link">Resume PDF</Link>
              </li>
            </ul>

            <div className="footer-copy">
              © 2026 Swayam Ruparel. Built with Next.js & TailwindCSS.
            </div>
          </div>
        </div>
      </footer>

      {/* CASE STUDY MODAL DRAWER */}
      <ProjectDrawer 
        project={activeProject} 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  );
}
