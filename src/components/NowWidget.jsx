"use client";

import { nowData } from "@/data/now";

export default function NowWidget() {
  return (
    <div className="now-widget-card desktop-only">
      <div className="now-widget-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="live-dot" />
          <span className="now-widget-title">NOW // ACTIVE FOCUS</span>
        </div>
      </div>

      <div className="now-widget-body">
        {/* Status Badge */}
        <div className="now-widget-status-badge">
          <span>●</span> {nowData.statusBadge}
        </div>

        {/* Building */}
        <div className="now-widget-item">
          <span className="now-widget-label">Building</span>
          <span className="now-widget-value">TestReady.in — Quantitative Options Workspace</span>
        </div>

        {/* Role */}
        <div className="now-widget-item">
          <span className="now-widget-label">Role</span>
          <span className="now-widget-value">Treasurer @ FCRIT Student Council</span>
        </div>

        {/* Learning & Exploring */}
        <div className="now-widget-item">
          <span className="now-widget-label">Exploring</span>
          <span className="now-widget-value" style={{ color: "var(--text-secondary)" }}>
            Kubernetes · Distributed Systems · AI Agents
          </span>
        </div>
      </div>
    </div>
  );
}
