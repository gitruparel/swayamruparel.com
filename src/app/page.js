"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import ProjectDrawer from "@/components/ProjectDrawer";

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const projects = [
    {
      id: "testready",
      name: "TestReady.in",
      category: "Flagship Product",
      description: "Intelligent quantitative strategy research platform for options traders.",
      longDescription: "TestReady is an intelligent, high-performance strategy research platform built for quantitative options traders. It enables traders to design, test, analyze, and optimize complex options strategies through a visual workspace backed by low-latency backtesting engines.",
      whyBuilt: "I built TestReady because quantitative options research in India is either locked behind expensive institutional software or scattered across poorly documented Python scripts. I wanted to build a production-grade, end-to-end platform that gives individual traders access to institutional-grade analytics, backtesting precision, and automated broker execution.",
      problem: "Quantitative strategy research for retail options traders suffers from fragmented tools. Traders spend hours writing custom scripts, manually cross-referencing option chains, or relying on intuition rather than empirical data. High-frequency tick data is expensive, and existing tools lack real-time risk modeling or seamless execution bridges.",
      vision: "To create an accessible, end-to-end quantitative workspace where strategy creation, multi-year tick backtesting, performance analytics, and automated execution exist within a single unified web platform.",
      architecture: "Built with a responsive React and TypeScript frontend utilizing ApexCharts for high-density rendering. The backend is a modular Flask engine that handles strategy parsing, historical tick replay, and direct order routing via Py5Paisa API integration.",
      majorFeatures: [
        "Strategy Workspace: Visual interface for designing complex multi-leg options strategies.",
        "Historical Backtesting Engine: Replays multi-year historical market data to validate strategy rules.",
        "Performance Analytics: Real-time calculation of profit curves, drawdown profiles, Sharpe ratio, and risk metrics.",
        "Strategy Intelligence: AI-assisted pattern isolation to pinpoint factors causing win/loss variance.",
        "Broker Integration: Seamless order execution and position tracking via Py5Paisa APIs.",
        "Modern Production Dashboard: High-density charts with responsive React UX built for live trading environments."
      ],
      challenges: [
        "Designing a memory-efficient caching layer in Python for processing multi-gigabyte historical option tick files without memory spikes.",
        "Building a resilient API rate-limiting wrapper around broker REST endpoints to prevent thread locks during peak market volatility.",
        "Developing real-time canvas rendering for multi-leg option payoff diagrams using custom mathematical formulas."
      ],
      currentStatus: "Deployed and actively used in production by traders.",
      futureRoadmap: "Multi-broker API support, real-time strategy anomaly alerts, and execution sub-50ms latency optimizations.",
      tech: ["React", "TypeScript", "Python", "Flask", "Py5Paisa API", "Automation", "ApexCharts", "TailwindCSS"],
      timeline: "2025 – Present",
      liveUrl: "https://testready.in",
      github: null,
      isConfidential: false,
      image: "/projects/dashboard.png"
    },
    {
      id: "dept-internship",
      name: "Department Internship Project",
      category: "Engineering Research",
      description: "Ongoing institutional engineering software project for department operations.",
      longDescription: "An ongoing departmental software initiative focused on engineering automation, data pipeline optimization, and system monitoring. Built under academic supervision to solve key operational bottlenecks.",
      whyBuilt: "Initiated to automate legacy manual departmental tracking workflows, replacing error-prone spreadsheet processes with a robust, centralized engineering system.",
      problem: "Departmental workflows relied on manual data entry and unverified logs, leading to delays and data inconsistencies across faculty and student tracking systems.",
      vision: "Deliver an automated, role-aware management portal with audit logging and real-time dashboard analytics.",
      architecture: "Modular full-stack architecture with role-based access control, background job processing, and structured relational persistence.",
      majorFeatures: [
        "Automated Data Ingestion: Streamlines operational data collection across department pipelines.",
        "Role-Based Access Control: Granular security boundaries for admin, faculty, and student roles.",
        "Audit Logging & Reporting: Real-time generation of compliance reports and activity metrics."
      ],
      challenges: [
        "// TODO: Add specific technical challenges once module benchmarking completes.",
        "Structuring a scalable database schema to handle multi-semester records cleanly.",
        "Ensuring zero data loss during concurrent multi-user form submissions."
      ],
      currentStatus: "Active development — Core modules built; system testing in progress.",
      futureRoadmap: "// TODO: Document full integration phase details.",
      tech: ["Python", "JavaScript", "SQL", "REST API"],
      timeline: "Ongoing",
      isConfidential: false,
      image: "/projects/dashboard.png"
    },
    {
      id: "smart-bedroom-hub",
      name: "Smart Bedroom Hub",
      category: "IoT & Cloud Automation",
      description: "Hardware-repurposed home automation gateway with Cloudflare, Telegram & Siri control.",
      longDescription: "Smart Bedroom Hub is an IoT home automation gateway built by repurposing a legacy Redmi Note 5 Pro Android device. It translates cloud and voice commands into low-level Infrared signals to control air conditioning and room hardware without requiring expensive dedicated microcontrollers like a Raspberry Pi.",
      whyBuilt: "I wanted a dedicated, always-on smart home hub, but off-the-shelf smart plugs and dedicated microcontrollers were either closed-ecosystem or unnecessary hardware expenses. I realized an old Android phone had an IR blaster, Wi-Fi, battery backup, and camera — making it the ultimate low-cost IoT gateway.",
      problem: "Legacy appliances lack Wi-Fi interfaces, forcing manual remote control or expensive smart adapter upgrades. Commercial smart hubs add latency and require proprietary cloud bridges.",
      vision: "Transform legacy hardware into a zero-cost, multi-protocol automation bridge supporting Siri voice commands, Telegram bot messages, and WebRTC video monitoring.",
      architecture: "A Cloudflare Worker acts as the lightweight edge API gateway. Commands are routed via Firebase Realtime Database to a background Android service on the phone, which invokes native IR daemon calls to control the appliance.",
      majorFeatures: [
        "Multi-Interface Control: Trigger AC modes via Siri Shortcuts, Telegram Bot commands, or Web Dashboards.",
        "Cloudflare Edge Worker API: Low-latency webhook endpoint handling authentication and command validation.",
        "Firebase Realtime Signaling: Sub-100ms message synchronization between cloud and Android hardware.",
        "WebRTC Camera Streaming: Remote live video feed from the phone's camera for room security.",
        "Smart Battery Management: Automated charge-cycling scripts to prevent battery swelling during 24/7 operation."
      ],
      challenges: [
        "Writing a persistent background daemon in Android that bypasses OS battery optimization to guarantee 99.9% uptime.",
        "Decoding raw hex timing patterns for proprietary IR AC remotes and mapping them to reliable native signals.",
        "Implementing Cloudflare Worker CORS headers and token authentication to prevent unauthorized API calls."
      ],
      currentStatus: "Deployed in daily personal use for 6+ months with sub-second command execution.",
      futureRoadmap: "Local voice processing and ambient temperature sensor triggers.",
      tech: ["IoT", "Android", "Cloudflare Workers", "Firebase", "WebRTC", "Telegram API", "Siri Shortcuts", "IR Protocol"],
      timeline: "2024 – 2025",
      github: "https://github.com/gitruparel",
      isConfidential: false,
      image: "/projects/dashboard.png"
    },
    {
      id: "medsync",
      name: "MedSync",
      category: "Mobile Healthcare System",
      description: "Cross-platform healthcare management system with multi-role sync & IEEE research paper.",
      longDescription: "MedSync is a cross-platform mobile application designed to streamline patient-doctor coordination. It centralizes appointment scheduling, prescription tracking, and medical record management with real-time cloud synchronization.",
      whyBuilt: "Built in a team of four, we created MedSync to eliminate manual paperwork and communication delays in clinical workflows. Our work culminated in a published IEEE conference paper documenting the system architecture.",
      problem: "Healthcare clinics struggle with fragmented patient records, paper-based prescription tracking, and lack of real-time communication between patients, doctors, and administrators.",
      vision: "A secure, role-aware mobile ecosystem where medical data flows seamlessly between patients and providers with offline-first reliability.",
      architecture: "Built with React Native and Firebase. Utilizes Firestore multi-role security rules and disk persistence for seamless offline-to-online data synchronization.",
      majorFeatures: [
        "Multi-Role Workflows: Tailored interfaces and security permissions for Patients, Doctors, and Admins.",
        "Real-Time Record Sync: Instant updates for prescriptions, lab results, and appointment schedules.",
        "Offline-First Engine: Disk caching ensures access to vital medical logs even without network connectivity."
      ],
      challenges: [
        "Designing granular Firestore security rules to strictly isolate patient medical histories while allowing doctor access.",
        "Handling concurrent schedule bookings without double-booking slots under poor network conditions.",
        "Co-authoring an IEEE research paper detailing the scheduling algorithms and cloud queue metrics."
      ],
      currentStatus: "Completed — IEEE Research Paper published at ICCUBEA 2025.",
      futureRoadmap: "Telemedicine video integration and automated prescription OCR parsing.",
      tech: ["React Native", "Firebase", "Firestore", "IEEE Publication"],
      timeline: "2024 – 2025",
      github: "https://github.com/gitruparel/MedSync",
      paper: "#",
      isConfidential: false,
      image: "/projects/medsync.png"
    },
    {
      id: "f1-strategy-simulator",
      name: "F1 Strategy Simulator",
      category: "Physics Simulation Engine",
      description: "Physics-based Formula 1 race strategy engine with tyre degradation models.",
      longDescription: "F1 Strategy Simulator is a physics-driven strategy engine that calculates optimal pit-stop sequences and compound allocations by simulating tyre wear, track degradation, and dynamic weather.",
      whyBuilt: "I built this to test whether Formula 1 race strategies could be modeled algorithmically rather than relying on gut feel. It was an intense exercise in mathematical modeling and data processing.",
      problem: "Race strategy decisions require balancing nonlinear tyre degradation, pit-stop time loss, and unpredictable track evolution in real-time.",
      vision: "An interactive simulation tool that outputs optimal stint profiles and pit windows for any given track telemetry input.",
      architecture: "Vanilla JavaScript simulation core backed by a Node.js and Express API proxy that fetches live Ergast F1 telemetry while bypassing client CORS limits.",
      majorFeatures: [
        "Tyre Degradation Engine: Mathematical decay curves modeling performance drop-offs across Soft, Medium, and Hard compounds.",
        "Stint Optimization: Calculates total race time across 1-stop, 2-stop, and dynamic pit strategy variations.",
        "Live Telemetry Proxy: Node.js middleware server that pulls live race data and feeds the frontend simulation."
      ],
      challenges: [
        "Formulating exponential degradation curves that accurately penalize over-extended tyre stints without breaking numerical stability.",
        "Creating a lightweight server proxy to cache Ergast API responses and handle strict CORS headers."
      ],
      currentStatus: "Completed open-source project.",
      futureRoadmap: "Integrating real-time rain probability vectors and Monte Carlo race simulations.",
      tech: ["JavaScript", "Node.js", "Express", "Physics Simulation"],
      timeline: "2025",
      github: "https://github.com/gitruparel/f1-strategy-simulator",
      isConfidential: false,
      image: "/projects/f1_sim.png"
    },
    {
      id: "shatterblocks",
      name: "ShatterBlocks",
      category: "Low-Level Systems / Game Dev",
      description: "Retro brick breaker game built from scratch in C using SDL2 graphics & audio buffers.",
      longDescription: "ShatterBlocks is a retro-inspired arcade game written entirely in C. It bypasses commercial engines to directly control graphics buffers, sound synthesis, and collision detection through the low-level SDL2 library.",
      whyBuilt: "I built ShatterBlocks to gain deep hands-on mastery over C memory management, pointers, frame-rate capping, and raw hardware graphics rendering.",
      problem: "High-level game engines abstract away fundamental computer science concepts like memory allocation, vector reflection, and frame timing.",
      vision: "Build a complete, responsive arcade game using zero external engines, managing every byte of memory and pixel buffer manually.",
      architecture: "Written in pure C with SDL2 for windowing and surface rendering, SDL_mixer for audio streams, and custom math routines for physics calculations.",
      majorFeatures: [
        "Custom Game Loop: Fixed timestep game loop ensuring 60 FPS physics precision across hardware.",
        "AABB Collision System: Pixel-accurate Axis-Aligned Bounding Box collision detection and vector reflection math.",
        "Audio & Sprite Pipelines: Manual asset loading and memory management without leaks."
      ],
      challenges: [
        "Implementing precise collision reflection vectors so ball bounces feel natural at high velocities.",
        "Managing dynamic memory allocation and pointer cleanup in C to prevent memory leaks during extended play sessions."
      ],
      currentStatus: "Completed open-source project.",
      futureRoadmap: "Custom level editor and high-score file encryption.",
      tech: ["C", "SDL2", "SDL_mixer", "Memory Management"],
      timeline: "2024",
      github: "https://github.com/gitruparel/ShatterBlocks",
      isConfidential: false,
      image: "/projects/shatterblocks.png"
    }
  ];

  // Anime.js Entry & Scroll Stagger Animations
  useEffect(() => {
    const runAnimations = async () => {
      const { createTimeline, animate, stagger } = await import("animejs");

      // Hero Timeline Entrance
      const tl = createTimeline();

      tl.add(".anime-hero-title", {
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1200,
        ease: "outElastic(1, 0.75)"
      }, 100)
      .add(".anime-hero-desc", {
        translateY: [25, 0],
        opacity: [0, 1],
        duration: 800,
        ease: "outQuad",
        delay: stagger(120)
      }, "-=900")
      .add(".anime-hero-action", {
        scale: [0.85, 1],
        opacity: [0, 1],
        duration: 900,
        ease: "outElastic(1, 0.75)",
        delay: stagger(100)
      }, "-=600")
      .add(".anime-hero-social", {
        opacity: [0, 1],
        translateX: [-15, 0],
        duration: 700,
        ease: "outQuad",
        delay: stagger(100)
      }, "-=700");

      // Scroll Trigger Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            
            if (sectionId === "projects") {
              animate("#projects .section-label, #projects .section-title", {
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 900,
                ease: "outQuad"
              });
              animate("#projects .build-item", {
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 1200,
                ease: "outElastic(1, 0.8)",
                delay: stagger(200)
              });
            }
            
            if (sectionId === "glance-section") {
              animate("#glance-section .section-label, #glance-section .section-title", {
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 900,
                ease: "outQuad"
              });
              animate("#glance-section .at-a-glance-card", {
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 1100,
                ease: "outElastic(1, 0.75)",
                delay: stagger(120)
              });
            }

            if (sectionId === "now-section") {
              animate("#now-section .section-label, #now-section .section-title", {
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 900,
                ease: "outQuad"
              });
              animate("#now-section .terminal-window", {
                scale: [0.9, 1],
                opacity: [0, 1],
                duration: 1100,
                ease: "outElastic(1, 0.75)"
              });
              animate("#now-section .terminal-data-card", {
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 600,
                delay: stagger(100, { start: 400 }),
                ease: "outQuad"
              });
            }

            if (sectionId === "about") {
              animate("#about .section-label, #about .section-title", {
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 900,
                ease: "outQuad"
              });
              animate("#about .magazine-p", {
                translateX: [-30, 0],
                opacity: [0, 1],
                duration: 800,
                delay: stagger(150),
                ease: "outQuad"
              });
              animate("#about .magazine-quote-card", {
                scale: [0.85, 1],
                opacity: [0, 1],
                duration: 1100,
                ease: "outElastic(1, 0.7)"
              });
              animate("#about .personality-grid .at-a-glance-card", {
                scale: [0.85, 1],
                opacity: [0, 1],
                duration: 1100,
                ease: "outElastic(1, 0.75)",
                delay: stagger(120, { start: 300 })
              });
            }

            if (sectionId === "contact") {
              animate("#contact .section-label, #contact .contact-title-minimal, #contact .contact-text-minimal", {
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 900,
                delay: stagger(100),
                ease: "outQuad"
              });
              animate("#contact .contact-link-item", {
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 1100,
                delay: stagger(120, { start: 400 }),
                ease: "outElastic(1, 0.7)"
              });
            }
            
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      const sections = ["projects", "glance-section", "now-section", "about", "contact"];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    runAnimations();
  }, []);

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
      {/* HERO SECTION */}
      <section className="container hero" id="hero">
        <div className="hero-background-visual" />
        <div className="hero-content">

          <h1 className="hero-title anime-hero-title" style={{ opacity: 0 }}>Swayam Ruparel</h1>
          
          <div className="hero-desc-block">
            <span className="hero-desc-line highlight anime-hero-desc" style={{ opacity: 0 }}>Make things people love.</span>
          </div>

          <div className="hero-actions">
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, "projects")} 
              className="btn-primary anime-hero-action"
              style={{ opacity: 0 }}
            >
              Explore Builds
            </a>
            <Link 
              href="/resume" 
              className="btn-secondary anime-hero-action"
              style={{ opacity: 0 }}
            >
              <FileText size={18} />
              Resume
            </Link>
          </div>
          
          <div className="hero-links">
            <a href="https://github.com/gitruparel" target="_blank" rel="noopener noreferrer" className="interactive-link anime-hero-social" style={{ opacity: 0 }}>
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/swayam-ruparel-577925295/" target="_blank" rel="noopener noreferrer" className="interactive-link anime-hero-social" style={{ opacity: 0 }}>
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="mailto:swayam.ruparel@gmail.com" className="interactive-link anime-hero-social" style={{ opacity: 0 }}>
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </section>

      {/* THINGS I'VE BUILT SECTION */}
      <section className="container section" id="projects">
        <div className="section-header">
          <span className="section-label">01 / Featured</span>
          <h2 className="section-title">Things I&apos;ve Built</h2>
        </div>
        
        <div className="editorial-builds-list">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx}
              onOpenDrawer={handleOpenDrawer} 
            />
          ))}
        </div>
      </section>

      {/* AT A GLANCE SECTION */}
      <section className="container section" id="glance-section">
        <div className="section-header">
          <span className="section-label">02 / metrics</span>
          <h2 className="section-title">At a Glance</h2>
        </div>
        <div className="at-a-glance-grid">
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--primary-accent)" }}>
            <div className="at-a-glance-number">5+</div>
            <div className="at-a-glance-label">Projects Built</div>
          </div>
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--accent-red)" }}>
            <div className="at-a-glance-number">3</div>
            <div className="at-a-glance-label">Hackathons</div>
          </div>
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--primary-accent)" }}>
            <div className="at-a-glance-number">1</div>
            <div className="at-a-glance-label">Research Paper</div>
          </div>
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--accent-red)" }}>
            <div className="at-a-glance-number">4+</div>
            <div className="at-a-glance-label">Years Coding</div>
          </div>
        </div>
      </section>

      {/* NOW SECTION */}
      <section className="container section" id="now-section">
        <div className="section-header">
          <span className="section-label">03 / Status</span>
          <h2 className="section-title">Now</h2>
        </div>
        
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot close"></span>
              <span className="terminal-dot minimize"></span>
              <span className="terminal-dot maximize"></span>
            </div>
            <div className="terminal-title">swayam@shell: ~/focus</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <div className="terminal-prompt">
                <span className="terminal-prompt-user">swayam@shell:~$</span>
                <span className="terminal-prompt-cmd">cat now.json</span>
              </div>
              
              <div className="terminal-output">
                <div className="terminal-data-card">
                  <span className="terminal-key">Building</span>
                  <span className="terminal-val">TestReady.in & Department Internship software</span>
                </div>
                <div className="terminal-data-card">
                  <span className="terminal-key">Reading</span>
                  <span className="terminal-val">Designing Data-Intensive Applications & Pragmatic Programmer</span>
                </div>
                <div className="terminal-data-card">
                  <span className="terminal-key">Exploring</span>
                  <span className="terminal-val">AI agents, system design & hardware automation</span>
                </div>
                <div className="terminal-data-card">
                  <span className="terminal-key">Active Routine</span>
                  <span className="terminal-val">Consistent gym splits & street photography composition</span>
                </div>
              </div>
            </div>
            
            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontFamily: "var(--font-mono)", fontWeight: "600" }}>
              # Page inspired by Derek Sivers nownownow project. Updated June 2026.
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="container section" id="about">
        <div className="about-magazine-grid">
          <div className="about-magazine-left">
            <div className="section-header" style={{ marginBottom: "2rem" }}>
              <span className="section-label">04 / Biography</span>
              <h2 className="section-title">About</h2>
            </div>
            
            <p className="magazine-p">
              <span className="drop-cap">I</span>
              build software by shipping products. I believe the best way to understand systems—whether it&apos;s a quantitative options backtester, a low-level C game loop, or an IoT hardware bridge—is to take an idea all the way to a working, deployed solution.
            </p>
            <p className="magazine-p">
              Currently pursuing my B.Tech in Computer Engineering at FCRIT, I spend my time outside coursework designing tools that solve practical problems. I don&apos;t build tutorial apps; I build software I actually use or put into the hands of real users.
            </p>
            <p className="magazine-p">
              What drives me isn&apos;t just code syntax—it&apos;s product ownership. I enjoy figuring out why a problem matters, architecting a clean system to solve it, and refining the user experience until it feels effortless.
            </p>
            <p className="magazine-p">
              Right now, I&apos;m focused on scaling TestReady.in, researching system design, and exploring how AI agents and edge automation can streamline real-world workflows.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", borderTop: "2px solid var(--border-color)", paddingTop: "1.5rem", fontWeight: "600" }}>
              * Computer Engineering student at FCRIT · Navi Mumbai, India.
            </p>
          </div>

          <div className="about-magazine-right">
            <div className="magazine-quote-card">
              <p className="magazine-quote-text">
                &ldquo;First make it work, then make it right, then make it fast. But above all, ship it to real users.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* PERSONALITY GRID */}
        <div className="personality-grid">
          {/* Card 1: Hobbies */}
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--primary-accent)", opacity: 0 }}>
            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--primary-accent)", marginBottom: "0.75rem", fontWeight: "800", textTransform: "uppercase" }}>
              Outside the Studio
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Behind a camera lens capturing street photography, lifting weights, or discussing system architectures. I love composition, visual framing, and storytelling in both media and software.
            </p>
          </div>

          {/* Card 2: Bookshelf */}
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--accent-red)", opacity: 0 }}>
            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-red)", marginBottom: "0.75rem", fontWeight: "800", textTransform: "uppercase" }}>
              Bookshelf & Reads
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Currently reading <em>Designing Data-Intensive Applications</em> and <em>The Pragmatic Programmer</em>. Previously finished Isaacson&apos;s <em>Steve Jobs</em>, <em>Sapiens</em>, and <em>Atomic Habits</em>.
            </p>
          </div>

          {/* Card 3: Inputs & Philosophy */}
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--primary-accent)", opacity: 0 }}>
            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--primary-accent)", marginBottom: "0.75rem", fontWeight: "800", textTransform: "uppercase" }}>
              Engineering Mindset
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Obsessed with end-to-end execution, micro-interactions, clean system design, and building utilities that survive real-world edge cases.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="container section" id="contact" style={{ paddingBottom: "10rem" }}>
        <div className="contact-minimal">
          <span className="section-label" style={{ marginBottom: "1.5rem" }}>05 / Connection</span>
          <h2 className="contact-title-minimal">Get In Touch</h2>
          <p className="contact-text-minimal">
            Open to internships, collaborations, and interesting conversations.
          </p>
          
          <ul className="contact-links-minimal">
            <li>
              <a href="mailto:swayam.ruparel@gmail.com" className="contact-link-item">
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/gitruparel" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/swayam-ruparel-577925295/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/resume" className="contact-link-item">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer no-print">
        <div className="container footer-container">
          <div className="footer-left">
            <Link href="/" className="logo" style={{ fontSize: "1.1rem" }}>
              Swayam Ruparel<span className="logo-dot"></span>
            </Link>
            <p className="footer-tagline">Builder. Engineer. Product Thinker.</p>
            <p className="footer-meta" style={{ marginTop: "1rem" }}>
              Built with Next.js. Hosted on Vercel.<br />
              Last updated June 2026.
            </p>
          </div>

          <div className="footer-right">
            <div className="footer-column">
              <span className="footer-title">Navigation</span>
              <ul className="footer-links">
                <li>
                  <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="footer-link">Home</a>
                </li>
                <li>
                  <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="footer-link">Things I&apos;ve Built</a>
                </li>
                <li>
                  <Link href="/now" className="footer-link">Now</Link>
                </li>
                <li>
                  <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="footer-link">About</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <span className="footer-title">Socials</span>
              <ul className="footer-links">
                <li>
                  <a href="https://github.com/gitruparel" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/swayam-ruparel-577925295/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:swayam.ruparel@gmail.com" className="footer-link">Email</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <span className="footer-title">Writing</span>
              <ul className="footer-links">
                <li style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span className="footer-link" style={{ color: "var(--text-muted)" }}>Blog</span>
                  <span className="footer-coming-soon">Coming Soon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      <ProjectDrawer 
        project={activeProject} 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  );
}
