"use client";

import { nowData } from "@/data/now";

export default function NowWidget() {
  return (
    <div className="now-widget-card desktop-only">
      <div className="now-widget-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="live-dot" />
          <span className="now-widget-title">SYSTEM STATUS // NOW</span>
        </div>
        <span className="now-widget-updated">Updated {nowData.lastUpdated}</span>
      </div>

      <div className="now-widget-body">
        <div className="now-widget-item">
          <span className="now-widget-label">Building</span>
          <ul className="now-widget-list">
            {nowData.building.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="now-widget-item">
          <span className="now-widget-label">Role</span>
          <span className="now-widget-value">Treasurer @ FCRIT Student Council</span>
        </div>

        <div className="now-widget-item">
          <span className="now-widget-label">Learning & Exploring</span>
          <div className="now-widget-tags">
            {nowData.currentlyExploring.map((tech, i) => (
              <span key={i} className="now-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="now-widget-status-badge">
          <span style={{ color: "#10B981" }}>●</span> {nowData.statusBadge}
        </div>
      </div>
    </div>
  );
}
