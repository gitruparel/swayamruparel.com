"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Download } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page-wrapper">
      {/* Control bar for recruiters */}
      <div className="resume-controls no-print">
        <Link href="/" className="btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
          <ArrowLeft size={16} />
          Back to Site
        </Link>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a 
            href="/swayam_ruparel_resume_ATS.pdf" 
            download="Swayam_Ruparel_Resume.pdf" 
            className="btn-secondary" 
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            <Download size={16} />
            Download PDF
          </a>
          <button onClick={handlePrint} className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
            <Printer size={16} />
            Print Resume
          </button>
        </div>
      </div>

      {/* Mobile-Only Download View */}
      <div className="mobile-resume-view no-print">
        <div className="mobile-resume-card">
          <div className="mobile-resume-icon">
            <Download size={36} style={{ color: "var(--primary-accent)" }} />
          </div>
          <h2>Swayam Ruparel</h2>
          <p>B.Tech Computer Engineering</p>
          
          <a 
            href="/swayam_ruparel_resume_ATS.pdf" 
            download="Swayam_Ruparel_Resume.pdf" 
            className="btn-primary" 
            style={{ 
              marginTop: "1.5rem", 
              width: "100%", 
              justifyContent: "center",
              display: "flex",
              gap: "0.5rem"
            }}
          >
            <Download size={18} />
            Download Resume (PDF)
          </a>
        </div>
        
        <Link 
          href="/" 
          className="btn-secondary" 
          style={{ 
            marginTop: "1.5rem", 
            width: "100%", 
            justifyContent: "center",
            display: "flex",
            gap: "0.5rem"
          }}
        >
          <ArrowLeft size={16} />
          Back to Site
        </Link>
      </div>

      {/* Main Resume Render */}
      <div className="resume-print-area">
        <div className="page">
          {/* LEFT COLUMN */}
          <div className="left">
            <div className="name-block">
              <h1>Swayam<br />Ruparel</h1>
              <div className="degree">B.Tech Computer<br />Engineering · 2024–28<br />FCRIT, Navi Mumbai</div>
            </div>

            <div>
              <div className="l-section-title">Contact</div>
              <ul className="contact-list">
                <li><span className="icon">✉</span><a href="mailto:swayam.ruparel@gmail.com">swayam.ruparel@gmail.com</a></li>
                <li><span className="icon">◎</span><a href="https://swayamruparel.com" target="_blank">swayamruparel.com</a></li>
                <li><span className="icon">in</span><a href="https://www.linkedin.com/in/swayam-ruparel-577925295/" target="_blank">linkedin/swayam-ruparel</a></li>
                <li><span className="icon">⌥</span><a href="https://github.com/gitruparel" target="_blank">github/gitruparel</a></li>
              </ul>
            </div>

            <div>
              <div className="l-section-title">Technical Skills</div>
              <div className="skill-group">
                <div className="skill-cat">Languages</div>
                <div className="skill-tags">
                  <span className="skill-tag">C</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML/CSS</span>
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-cat">Frameworks</div>
                <div className="skill-tags">
                  <span className="skill-tag">React Native</span>
                  <span className="skill-tag">React</span>
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-cat">Tools & Platforms</div>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Firebase</span>
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-cat">CS Core</div>
                <div className="skill-tags">
                  <span className="skill-tag">DSA</span>
                  <span className="skill-tag">OS</span>
                  <span className="skill-tag">CN</span>
                  <span className="skill-tag">AOA</span>
                  <span className="skill-tag">IoT</span>
                </div>
              </div>
            </div>

            <div>
              <div className="l-section-title">Certification</div>
              <div className="cert-item">
                <strong>CS50P</strong>
                Introduction to Programming with Python<br />
                <span style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "6pt", color: "#6A6060", letterSpacing: ".08em" }}>HARVARD UNIVERSITY</span>
              </div>
            </div>

            <div>
              <div className="l-section-title">Interests</div>
              <div className="interests-list">
                Mobile App Development<br />
                Software Engineering<br />
                Startups & Entrepreneurship<br />
                AI Applications<br />
                Product Design
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right">
            {/* EDUCATION */}
            <div className="r-section">
              <div className="r-section-title">Education</div>
              <div className="entry">
                <div className="edu-row">
                  <div>
                    <div className="entry-title">Fr. C. Rodrigues Institute of Technology</div>
                    <div className="entry-sub">B.Tech — Computer Engineering, Vashi, Navi Mumbai</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                    <span className="entry-date">2024 – 2028</span>
                    <span className="cgpa-badge">CGPA 8.25</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="r-section">
              <div className="r-section-title">Projects</div>

              {/* MedSync */}
              <div className="entry">
                <div className="entry-head">
                  <div className="entry-title">MedSync</div>
                  <span className="entry-date">2024 – 2025</span>
                </div>
                <div className="entry-sub">Cloud-Based Healthcare Management System · React Native, Firebase</div>
                <a className="entry-link" href="https://github.com/gitruparel/MedSync" target="_blank" rel="noopener noreferrer">github.com/gitruparel/MedSync</a>
                <ul className="bullets">
                  <li>Built a cross-platform mobile app for managing appointments, medical records, and prescriptions with real-time sync via Firebase.</li>
                  <li>Implemented multi-role architecture supporting patient, doctor, and admin workflows with Firebase Authentication and Firestore.</li>
                  <li>Developed in a 4-member team; co-authored an IEEE research paper documenting system architecture and clinical use-cases.</li>
                </ul>
              </div>

              {/* AlgoBot */}
              <div className="entry">
                <div className="entry-head">
                  <div className="entry-title">AlgoBot <span className="confidential-badge">Production · Confidential</span></div>
                  <span className="entry-date">2025</span>
                </div>
                <div className="entry-sub">Algorithmic Trading Automation Platform</div>
                <ul className="bullets">
                  <li>Designed and deployed a production-grade trading automation system currently used in real-world workflows.</li>
                  <li>Built automation logic, monitoring pipelines, and backend integrations; maintained under business confidentiality constraints.</li>
                </ul>
              </div>

              {/* Personal Dashboard */}
              <div className="entry">
                <div className="entry-head">
                  <div className="entry-title">Personal Dashboard</div>
                  <span className="entry-date">2025</span>
                </div>
                <div className="entry-sub">Productivity & Personal Analytics Dashboard · JavaScript</div>
                <a className="entry-link" href="https://github.com/gitruparel/personal-dashboard" target="_blank" rel="noopener noreferrer">github.com/gitruparel/personal-dashboard</a>
                <ul className="bullets">
                  <li>Built a personal productivity hub with task tracking, goal monitoring, and data visualisation for daily analytics.</li>
                </ul>
              </div>

              {/* F1 Simulator */}
              <div className="entry">
                <div className="entry-head">
                  <div className="entry-title">F1 Strategy Simulator</div>
                  <span className="entry-date">2025</span>
                </div>
                <div className="entry-sub">Physics-Based Race Strategy Engine · JavaScript, Node.js</div>
                <a className="entry-link" href="https://github.com/gitruparel/f1-strategy-simulator" target="_blank" rel="noopener noreferrer">github.com/gitruparel/f1-strategy-simulator</a>
                <ul className="bullets">
                  <li>Engineered a physics-based tyre degradation model with exponential penalty curves for over-stinted compounds and dynamic weather parameters.</li>
                  <li>Implemented a server-side API proxy to fetch live Ergast F1 telemetry data, bypassing CORS restrictions for real race data.</li>
                  <li>Supports multi-stop strategies with configurable tyre compound allocation per stint.</li>
                </ul>
              </div>

              {/* ShatterBlocks */}
              <div className="entry">
                <div className="entry-head">
                  <div className="entry-title">ShatterBlocks</div>
                  <span className="entry-date">2024</span>
                </div>
                <div className="entry-sub">Brick Breaker Game Built from Scratch · C, SDL2</div>
                <a className="entry-link" href="https://github.com/gitruparel/ShatterBlocks" target="_blank" rel="noopener noreferrer">github.com/gitruparel/ShatterBlocks</a>
                <ul className="bullets">
                  <li>Implemented a full game loop, collision detection system, and score persistence in C using SDL2, SDL_mixer, and SDL_ttf.</li>
                  <li>Integrated synthwave audio and real-time visual effects from scratch — no game engine used.</li>
                </ul>
              </div>
            </div>

            {/* RESEARCH */}
            <div className="r-section">
              <div className="r-section-title">Research</div>
              <div className="paper-box">
                <div className="paper-title">MedSync: A Real-Time Healthcare Management System Using Cloud-Based Architecture</div>
                <div className="paper-meta">IEEE · ICCUBEA Conference &nbsp;·&nbsp; Co-Author &nbsp;·&nbsp; 2025</div>
              </div>
            </div>

            {/* LEADERSHIP */}
            <div className="r-section">
              <div className="r-section-title">Leadership & Positions</div>
              <div className="entry">
                <div className="entry-head">
                  <div className="entry-title">Deputy PR Head — Green Club, FCRIT</div>
                  <span className="entry-date">Sem 4 · 2025</span>
                </div>
                <ul className="bullets">
                  <li>Managed communications and outreach for a student council overseeing ~150 members.</li>
                  <li>Coordinated event promotion and cross-team collaboration for college-wide sustainability initiatives.</li>
                </ul>
              </div>
            </div>

            {/* HACKATHONS */}
            <div className="r-section">
              <div className="r-section-title">Hackathons</div>
              <div className="hack-row">
                <span className="hack-tag">Smart India Hackathon (SIH)</span>
                <span className="hack-tag">EY Techathon</span>
                <span className="hack-tag">HackQuinox</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Embed of the custom stylesheet */}
      <style jsx global>{`
        .resume-page-wrapper {
          background-color: var(--bg-color);
          min-height: 100vh;
          padding: 8rem 1rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mobile-resume-view {
          display: none;
        }

        .resume-controls {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 800px;
          margin-bottom: 1.5rem;
          align-items: center;
        }

        .resume-print-area {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        /* ─── CLAUDE RESUME STYLING EMBED ─── */
        :root {
          --res-bg: #F7F4EF;
          --res-page: #FEFCF9;
          --res-ink: #181412;
          --res-mid: #3D3530;
          --res-muted: #857870;
          --res-light: #B5AAA2;
          --res-accent: #C0392B;
          --res-accent2: #8B1A0F;
          --res-rule: #D8CFC8;
          --res-tag-bg: #EDE8E2;
        }

        .resume-print-area .page {
          width: 100%;
          max-width: 800px;
          background: var(--res-page);
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.5);
          display: grid;
          grid-template-columns: 220px 1fr;
          min-height: 1040px;
          border-radius: 8px;
          overflow: hidden;
        }

        /* LEFT COLUMN */
        .resume-print-area .left {
          background: #1C1714;
          color: #E8E0D8;
          padding: 40px 24px 40px 28px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .resume-print-area .name-block h1 {
          font-family: var(--font-playfair), serif;
          font-size: 22pt;
          font-weight: 700;
          line-height: 1.1;
          color: #FAF6F2;
          letter-spacing: -0.01em;
        }

        .resume-print-area .name-block .degree {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6.5pt;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #9A8F87;
          margin-top: 8px;
          line-height: 1.6;
        }

        .resume-print-area .l-section-title {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6pt;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--res-accent);
          border-bottom: 1px solid #3A302C;
          padding-bottom: 6px;
          margin-bottom: 10px;
        }

        .resume-print-area .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .resume-print-area .contact-list li {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6.8pt;
          color: #B0A5A0;
          word-break: break-all;
          line-height: 1.4;
          display: flex;
          align-items: flex-start;
          gap: 4px;
        }

        .resume-print-area .contact-list li a {
          color: #C8BEB8;
          text-decoration: none;
        }

        .resume-print-area .contact-list li a:hover {
          color: var(--res-accent);
        }

        .resume-print-area .contact-list li .icon {
          display: inline-block;
          width: 14px;
          color: var(--res-accent);
          font-style: normal;
          flex-shrink: 0;
        }

        .resume-print-area .skill-group {
          margin-bottom: 12px;
        }

        .resume-print-area .skill-group:last-child {
          margin-bottom: 0;
        }

        .resume-print-area .skill-cat {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6pt;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: #7A6F6A;
          margin-bottom: 5px;
        }

        .resume-print-area .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .resume-print-area .skill-tag {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6.5pt;
          background: #2C2320;
          color: #C8BEB8;
          padding: 2px 7px;
          border-radius: 2px;
          border: 1px solid #3D3330;
          letter-spacing: .04em;
        }

        .resume-print-area .cert-item {
          font-size: 8pt;
          color: #B0A5A0;
          line-height: 1.5;
          padding-left: 10px;
          position: relative;
        }

        .resume-print-area .cert-item::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--res-accent);
          font-size: 7pt;
        }

        .resume-print-area .cert-item strong {
          color: #D8D0C8;
          display: block;
          font-weight: 500;
        }

        .resume-print-area .interests-list {
          font-size: 8pt;
          color: #9A908A;
          line-height: 1.8;
          font-family: var(--font-ibm-plex-sans), sans-serif;
          font-weight: 300;
          font-style: italic;
        }

        /* RIGHT COLUMN */
        .resume-print-area .right {
          padding: 40px 36px 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
          background: var(--res-page);
          color: var(--res-ink);
        }

        .resume-print-area .r-section {
          margin-bottom: 22px;
          text-align: left;
        }

        .resume-print-area .r-section:last-child {
          margin-bottom: 0;
        }

        .resume-print-area .r-section-title {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6.2pt;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--res-accent);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }

        .resume-print-area .r-section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--res-rule);
        }

        .resume-print-area .entry {
          margin-bottom: 14px;
        }

        .resume-print-area .entry:last-child {
          margin-bottom: 0;
        }

        .resume-print-area .entry-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .resume-print-area .entry-title {
          font-family: var(--font-playfair), serif;
          font-size: 10.5pt;
          font-weight: 700;
          color: var(--res-ink);
          line-height: 1.2;
        }

        .resume-print-area .entry-title a {
          color: var(--res-ink);
          text-decoration: none;
        }

        .resume-print-area .entry-date {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6.5pt;
          color: var(--res-light);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .resume-print-area .entry-sub {
          font-family: var(--font-ibm-plex-sans), sans-serif;
          font-size: 8.5pt;
          font-weight: 300;
          font-style: italic;
          color: var(--res-muted);
          margin-top: 1px;
        }

        .resume-print-area .entry-link {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6.5pt;
          color: var(--res-accent);
          text-decoration: none;
          display: inline-block;
          margin-top: 2px;
          letter-spacing: .02em;
          border-bottom: 1px solid transparent;
        }

        .resume-print-area .entry-link:hover {
          border-color: var(--res-accent);
        }

        .resume-print-area .bullets {
          list-style: none;
          margin-top: 5px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .resume-print-area .bullets li {
          font-family: var(--font-ibm-plex-sans), sans-serif;
          font-size: 8.5pt;
          font-weight: 300;
          color: var(--res-mid);
          padding-left: 13px;
          position: relative;
          line-height: 1.45;
        }

        .resume-print-area .bullets li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--res-accent);
          font-size: 7pt;
          top: 1px;
        }

        .resume-print-area .confidential-badge {
          display: inline-block;
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 5.8pt;
          letter-spacing: .15em;
          text-transform: uppercase;
          background: #FFF0EE;
          color: var(--res-accent);
          border: 1px solid #F5C8C4;
          padding: 1px 6px;
          border-radius: 2px;
          vertical-align: middle;
          margin-left: 6px;
          font-weight: 500;
        }

        /* education */
        .resume-print-area .edu-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
        }

        .resume-print-area .cgpa-badge {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 7pt;
          background: var(--res-tag-bg);
          color: var(--res-mid);
          padding: 2px 8px;
          border-radius: 2px;
          border: 1px solid var(--res-rule);
          flex-shrink: 0;
        }

        /* hackathons row */
        .resume-print-area .hack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .resume-print-area .hack-tag {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6.8pt;
          background: var(--res-tag-bg);
          color: var(--res-mid);
          padding: 3px 10px;
          border-radius: 2px;
          border: 1px solid var(--res-rule);
          letter-spacing: .04em;
        }

        /* research */
        .resume-print-area .paper-box {
          border-left: 2px solid var(--res-accent);
          padding: 8px 0 8px 12px;
          margin-top: 4px;
        }

        .resume-print-area .paper-title {
          font-family: var(--font-playfair), serif;
          font-size: 9.5pt;
          font-style: italic;
          color: var(--res-ink);
          line-height: 1.4;
        }

        .resume-print-area .paper-meta {
          font-family: var(--font-ibm-plex-mono), monospace;
          font-size: 6.5pt;
          color: var(--res-muted);
          margin-top: 3px;
          letter-spacing: .04em;
        }

        /* PRINT MEDIA SCOPE */
        @media print {
          body, html {
            background: #FEFCF9 !important;
            color: #181412 !important;
          }
          
          .no-print, .resume-controls {
            display: none !important;
          }

          .resume-page-wrapper {
            padding: 0 !important;
            background: #FEFCF9 !important;
            min-height: 0 !important;
          }

          .resume-print-area {
            width: 100% !important;
            padding: 0 !important;
          }

          .resume-print-area .page {
            max-width: none !important;
            margin: 0 !important;
            box-shadow: none !important;
            grid-template-columns: 198px 1fr !important;
            min-height: 0 !important;
            border-radius: 0 !important;
          }

          .resume-print-area .left {
            padding: 28px 20px 28px 24px !important;
          }

          .resume-print-area .right {
            padding: 28px 28px 28px 28px !important;
          }
        }

        @media (max-width: 768px) {
          .resume-print-area {
            display: none !important;
          }
          
          .resume-controls {
            display: none !important;
          }
          
          .mobile-resume-view {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 400px;
            padding: 0 1rem;
            margin-top: 2rem;
          }
          
          .mobile-resume-card {
            width: 100%;
            background-color: var(--surface-color);
            border: 3px solid var(--border-color);
            border-radius: 8px;
            padding: 2.5rem 2rem;
            text-align: center;
            box-shadow: 6px 6px 0px 0px var(--primary-accent);
          }
          
          .mobile-resume-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 3px solid var(--border-color);
            background-color: var(--surface-hover);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem auto;
            box-shadow: 4px 4px 0px 0px var(--accent-red);
          }
          
          .mobile-resume-card h2 {
            font-family: var(--font-space-grotesk);
            font-size: 1.75rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
          }
          
          .mobile-resume-card p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            font-weight: 600;
          }
        }
      `}</style>
    </div>
  );
}
