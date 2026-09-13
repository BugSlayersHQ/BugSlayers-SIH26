import React from 'react';
export default function HeroDashboard() {
  return (
    <div className="container hero-visual-wrapper">
      <div className="hero-product-window">
        <div className="window-chrome">
          <div className="window-dots">
            <div className="window-dot red"></div>
            <div className="window-dot yellow"></div>
            <div className="window-dot green"></div>
          </div>
        </div>
        <div className="window-body" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Land Record Intelligence Dashboard Mockup</h2>
          <p>Conceptual interface showing document processing</p>
        </div>
      </div>
    </div>
  );
}