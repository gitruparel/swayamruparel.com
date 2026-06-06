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
      id: "algobot",
      name: "AlgoBot",
      category: "Production Software",
      description: "Production-grade trading automation platform used in real-world workflows.",
      longDescription: "AlgoBot is a production-grade algorithmic trading automation platform designed to execute complex trading strategies with precision, speed, and zero emotional bias. It operates under strict security and confidentiality guidelines.",
      whyBuilt: "I built this to automate market order executions based on defined mathematical signals. The goal was to remove manual latency and emotional execution bias from live trading routines, ensuring strategies are executed exactly as backtested.",
      challenges: [
        "Implementing resilient rate-limiting wrappers for exchange REST APIs to prevent IP bans during high-volatility events.",
        "Developing a stable WebSocket buffer system to handle concurrent tick data feeds without memory leaks.",
        "Structuring failsafe state managers that instantly halt active orders if connection anomalies are detected."
      ],
      tech: ["Python", "Automation", "Trading Systems"],
      timeline: "2025",
      isConfidential: true,
      image: "/projects/dashboard.png"
    },
    {
      id: "medsync",
      name: "MedSync",
      category: "Mobile App",
      description: "Cross-platform healthcare management platform for patients, doctors, and admins.",
      longDescription: "MedSync is a cross-platform mobile application designed to streamline healthcare coordination. It acts as a central hub where patients, doctors, and administrators can manage appointments, update medical records, and issue prescriptions securely.",
      whyBuilt: "Built in a team of four, we created MedSync to bridge the communication gap between patients and healthcare providers, ensuring critical medical data is synced in real-time and remains securely accessible.",
      challenges: [
        "Designing a multi-role Firestore access schema that separates medical logs from patient profile files securely.",
        "Optimizing offline-first sync capabilities using Firebase's disk persistence to handle rural network drops.",
        "Co-authoring an IEEE research paper detailing the cloud architecture and scheduling queue algorithms."
      ],
      tech: ["React Native", "Firebase", "Firestore"],
      timeline: "2024 – 2025",
      github: "https://github.com/gitruparel/MedSync",
      isConfidential: false,
      image: "/projects/medsync.png"
    },
    {
      id: "personal-dashboard",
      name: "Personal Dashboard",
      category: "Web App",
      description: "Personal productivity and analytics dashboard.",
      longDescription: "Personal Dashboard is a custom-built, minimalist productivity dashboard that tracks tasks, aggregates personal metrics, and visualizes daily output data.",
      whyBuilt: "I wanted a single 'control center' for my daily developer tasks, habit building, and active metrics. Off-the-shelf productivity tools felt cluttered, so I built a clean dashboard tailored specifically to my flow.",
      challenges: [
        "Implementing performant localStorage-based state persistence to ensure instant initial loads.",
        "Designing responsive analytics charts with vanilla JavaScript and CSS grid without rendering lags."
      ],
      tech: ["JavaScript", "HTML5", "CSS3"],
      timeline: "2025",
      github: "https://github.com/gitruparel/personal-dashboard",
      isConfidential: false,
      image: "/projects/dashboard.png"
    },
    {
      id: "f1-strategy-simulator",
      name: "F1 Strategy Simulator",
      category: "Simulation Engine",
      description: "Physics-based Formula 1 race strategy simulator.",
      longDescription: "F1 Strategy Simulator is a physics-based strategy engine that computes optimal race strategy sequences based on tyre wear patterns, track degradation curves, and dynamic weather simulations.",
      whyBuilt: "I wanted to understand whether race strategy decisions could be modeled mathematically instead of relying on intuition, so I spent a weekend building a simulator and experimenting with tyre degradation models.",
      challenges: [
        "Formulating an exponential decay curve that accurately reflects speed drop-offs for over-stinted tyre compounds.",
        "Creating a server-side API proxy in Node.js to fetch live Ergast F1 telemetry while bypassing client CORS limits."
      ],
      tech: ["JavaScript", "Node.js", "Express"],
      timeline: "2025",
      github: "https://github.com/gitruparel/f1-strategy-simulator",
      isConfidential: false,
      image: "/projects/f1_sim.png"
    },
    {
      id: "shatterblocks",
      name: "ShatterBlocks",
      category: "Game Dev",
      description: "Retro-inspired brick breaker game built entirely in C using SDL2.",
      longDescription: "ShatterBlocks is a retro-inspired brick breaker game written entirely from scratch in C. It bypasses commercial game engines to interact directly with hardware graphics buffers via the SDL2 library.",
      whyBuilt: "I built this to get a firm, low-level grip on memory allocation, system resource cleanup, and custom game loops. It was an exercise in understanding physics vectors and raw graphic rendering.",
      challenges: [
        "Programming pixel-perfect Axis-Aligned Bounding Box (AABB) collision checks and reflection vectors from scratch.",
        "Managing sound asset streams and textures manually in C without memory leaks or buffer overflows."
      ],
      tech: ["C", "SDL2", "SDL_mixer"],
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
                  <span className="terminal-val">AlgoBot & experimenting with photography</span>
                </div>
                <div className="terminal-data-card">
                  <span className="terminal-key">Reading</span>
                  <span className="terminal-val">The Pragmatic Programmer (currently)</span>
                </div>
                <div className="terminal-data-card">
                  <span className="terminal-key">Obsessing Over</span>
                  <span className="terminal-val">Habit compounding & DeepLearning.AI feeds</span>
                </div>
                <div className="terminal-data-card">
                  <span className="terminal-key">Active Hobbies</span>
                  <span className="terminal-val">Regular gym splits & street photography</span>
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
              enjoy solving problems and turning ideas into things people can actually use.
            </p>
            <p className="magazine-p">
              Sometimes that means building a healthcare app. Sometimes it&apos;s automating a real-world workflow. Sometimes it&apos;s spending a weekend creating an F1 strategy simulator because I wanted to understand how race strategy works.
            </p>
            <p className="magazine-p">
              What interests me most isn&apos;t a particular technology. It&apos;s understanding systems, identifying problems worth solving, and figuring out how to deliver useful solutions.
            </p>
            <p className="magazine-p">
              I&apos;m especially interested in products, user experience, and the process of taking something from an idea to something that creates real value.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", borderTop: "2px solid var(--border-color)", paddingTop: "1.5rem", fontWeight: "600" }}>
              * Currently a Computer Engineering student at FCRIT.
            </p>
          </div>

          <div className="about-magazine-right">
            <div className="magazine-quote-card">
              <p className="magazine-quote-text">
                &ldquo;Good technology solves problems. Great technology solves the right ones.&rdquo;
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
              Behind a camera lens capturing street photography, lifting weights, or staying social. If I wasn&apos;t in engineering, I would have pursued movie direction—I love composition, visual framing, and the art of telling stories.
            </p>
          </div>

          {/* Card 2: Bookshelf */}
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--accent-red)", opacity: 0 }}>
            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-red)", marginBottom: "0.75rem", fontWeight: "800", textTransform: "uppercase" }}>
              Bookshelf & Reads
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Currently reading <em>The Pragmatic Programmer</em>. Previously finished Walter Isaacson&apos;s <em>Steve Jobs</em>, <em>Sapiens</em>, <em>Psychology of Money</em>, <em>Atomic Habits</em>, and <em>The Almanack of Naval Ravikant</em>.
            </p>
          </div>

          {/* Card 3: Inputs & Philosophy */}
          <div className="at-a-glance-card" style={{ borderLeft: "4px solid var(--primary-accent)", opacity: 0 }}>
            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--primary-accent)", marginBottom: "0.75rem", fontWeight: "800", textTransform: "uppercase" }}>
              Daily Inputs & Focus
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Tracking machine learning feeds via DeepLearning.AI, and reading James Clear&apos;s essays. Lately I&apos;ve been spending time learning about products, machine learning, and what makes people keep coming back to something they&apos;ve used once.
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
