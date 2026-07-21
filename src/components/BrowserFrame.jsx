"use client";

export default function BrowserFrame({ title, children, className = "", style = {} }) {
  return (
    <div className={`browser-frame-container ${className}`} style={style}>
      <div className="browser-frame-header">
        <div className="browser-frame-dots">
          <span className="browser-dot dot-red" />
          <span className="browser-dot dot-yellow" />
          <span className="browser-dot dot-green" />
        </div>
        <div className="browser-frame-url">
          <span className="lock-icon">🔒</span>
          <span className="url-text">{title || "app.swayamruparel.com"}</span>
        </div>
        <div style={{ width: "40px" }} /> {/* Spacer for balance */}
      </div>
      <div className="browser-frame-body">
        {children}
      </div>
    </div>
  );
}
