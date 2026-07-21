"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { leadershipTimeline } from "@/data/experience";
import { projects } from "@/data/projects";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page-wrapper">
      {/* Control bar */}
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

      {/* Mobile Download View */}
      <div className="mobile-resume-view no-print">
        <div className="mobile-resume-card">
          <div className="mobile-resume-icon">
            <Download size={36} style={{ color: "var(--primary-accent)" }} />
          </div>
          <h2>Swayam Ruparel</h2>
          <p>B.Tech Computer Engineering Student</p>
          
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

      {/* Printable Resume */}
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
                  <span className="skill-tag">TypeScript</span>
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-cat">Frameworks & Tools</div>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">React Native</span>
                  <span className="skill-tag">Flask</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">TailwindCSS</span>
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-cat">Cloud & DB</div>
                <div className="skill-tags">
                  <span className="skill-tag">Firebase</span>
                  <span className="skill-tag">Firestore</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Cloudflare</span>
                  <span className="skill-tag">Git</span>
                </div>
              </div>
            </div>

            <div>
              <div className="l-section-title">Certification</div>
              <div className="cert-item">
                <strong>CS50P</strong>
                Introduction to Programming with Python<br />
                <span style={{ fontFamily: "monospace", fontSize: "6pt", color: "#6A6060" }}>HARVARD UNIVERSITY</span>
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
                    <div className="entry-sub">B.Tech — Computer Engineering, Navi Mumbai</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <span className="entry-date">2024 – 2028</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="r-section">
              <div className="r-section-title">Projects</div>

              {projects.map((p) => (
                <div key={p.id} className="entry">
                  <div className="entry-head">
                    <div className="entry-title">
                      {p.name} {p.status && <span className="confidential-badge">{p.status}</span>}
                    </div>
                    <span className="entry-date">{p.timeline}</span>
                  </div>
                  <div className="entry-sub">{p.category} · {p.builtWith.join(", ")}</div>
                  {p.liveUrl && <a className="entry-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer">{p.liveUrl.replace("https://", "")}</a>}
                  <ul className="bullets">
                    <li><strong>Problem:</strong> {p.problem}</li>
                    <li><strong>Solution:</strong> {p.solution}</li>
                    {p.impact && <li><strong>Impact:</strong> {p.impact}</li>}
                  </ul>
                </div>
              ))}
            </div>

            {/* LEADERSHIP */}
            <div className="r-section">
              <div className="r-section-title">Leadership & Governance</div>
              {leadershipTimeline.map((item, idx) => (
                <div key={idx} className="entry">
                  <div className="entry-head">
                    <div className="entry-title">{item.role} — {item.organization}</div>
                    <span className="entry-date">{item.period}</span>
                  </div>
                  <ul className="bullets">
                    <li>{item.description}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .resume-page-wrapper {
          background-color: var(--bg-color);
          min-height: 100vh;
          padding: 6rem 1rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .resume-controls {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 800px;
          margin-bottom: 2rem;
        }

        .mobile-resume-view {
          display: none;
          width: 100%;
          max-width: 400px;
        }

        .mobile-resume-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
        }

        .mobile-resume-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .resume-print-area {
          width: 100%;
          max-width: 800px;
          background: #FFFFFF;
          color: #1A1A1A;
          border-radius: 8px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8);
        }

        .page {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 2rem;
        }

        .left {
          border-right: 1px solid #E5E7EB;
          padding-right: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .name-block h1 {
          color: #111827;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .degree {
          font-size: 0.8rem;
          color: #4B5563;
          margin-top: 0.5rem;
          line-height: 1.4;
        }

        .l-section-title {
          font-size: 0.75rem;
          font-family: monospace;
          font-weight: 700;
          text-transform: uppercase;
          color: #2563EB;
          border-bottom: 1px solid #E5E7EB;
          padding-bottom: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.75rem;
        }

        .contact-list a {
          color: #374151;
        }

        .skill-group {
          margin-bottom: 0.75rem;
        }

        .skill-cat {
          font-size: 0.7rem;
          font-weight: 700;
          color: #6B7280;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
          margin-top: 0.25rem;
        }

        .skill-tag {
          font-size: 0.68rem;
          background: #F3F4F6;
          padding: 0.1rem 0.4rem;
          border-radius: 3px;
          color: #1F2937;
        }

        .cert-item {
          font-size: 0.75rem;
          color: #374151;
        }

        .right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .r-section-title {
          font-size: 1rem;
          font-weight: 800;
          color: #111827;
          border-bottom: 2px solid #2563EB;
          padding-bottom: 0.25rem;
          margin-bottom: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .entry {
          margin-bottom: 1rem;
        }

        .entry-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .entry-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #111827;
        }

        .entry-date {
          font-size: 0.75rem;
          color: #6B7280;
          font-family: monospace;
        }

        .entry-sub {
          font-size: 0.78rem;
          color: #2563EB;
          font-weight: 600;
        }

        .entry-link {
          font-size: 0.72rem;
          color: #6B7280;
          font-family: monospace;
          display: block;
        }

        .bullets {
          margin-top: 0.35rem;
          padding-left: 1rem;
          font-size: 0.78rem;
          color: #374151;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .confidential-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.1rem 0.35rem;
          background: #EFF6FF;
          color: #2563EB;
          border-radius: 3px;
          border: 1px solid #BFDBFE;
          margin-left: 0.4rem;
        }

        @media (max-width: 768px) {
          .resume-controls, .resume-print-area {
            display: none !important;
          }
          .mobile-resume-view {
            display: block !important;
          }
        }

        @media print {
          .no-print, .navbar, .bg-orb-container {
            display: none !important;
          }
          .resume-page-wrapper {
            padding: 0 !important;
            background: #FFF !important;
          }
          .resume-print-area {
            box-shadow: none !important;
            max-width: 100% !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
