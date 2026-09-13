import React from 'react';

export default function Footer() {
  return (
    <>
<footer className="site-footer">
    <div className="container">
      <div className="footer-top-grid">
        <div className="footer-brand-col">
          <a href="#" className="brand-logo">
            <div className="brand-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <span>LandAI</span>
          </a>
          <p>
            Intelligent Land Record Digitization &amp; Validation System. An AI-powered platform for converting legacy registers, scanned PDFs, and cadastral maps into structured, validated digital information.
          </p>
          <div className="status-pill-live">
            <span className="status-dot-live"></span>
            <span>Proposed System Architecture • Study Specifications</span>
          </div>
        </div>

        <div className="footer-col">
          <h5>Platform</h5>
          <ul className="footer-link-list">
            <li><a href="#problem" className="footer-link">Challenges</a></li>
            <li><a href="#workflow" className="footer-link">6-Stage Workflow</a></li>
            <li><a href="#features" className="footer-link">Core Features</a></li>
            <li><a href="#ai-approach" className="footer-link">AI Intelligence</a></li>
            <li><a href="#land-data" className="footer-link">12 Predefined Fields</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Integration</h5>
          <ul className="footer-link-list">
            <li><a href="#gis" className="footer-link">GIS &amp; Cadastral Maps</a></li>
            <li><a href="#architecture" className="footer-link">Proposed LRMS &amp; DILRMP Integration</a></li>
            <li><a href="#tech-stack" className="footer-link">RESTful &amp; GraphQL APIs</a></li>
            <li><a href="#tech-stack" className="footer-link">PostgreSQL / PostGIS</a></li>
            <li><a href="#dashboard" className="footer-link">Monitoring Dashboards</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Technology</h5>
          <ul className="footer-link-list">
            <li><a href="#tech-stack" className="footer-link">OCR &amp; Indic NLP</a></li>
            <li><a href="#tech-stack" className="footer-link">OpenCV, Detectron2, YOLO</a></li>
            <li><a href="#tech-stack" className="footer-link">GeoServer, Leaflet, QGIS</a></li>
            <li><a href="#tech-stack" className="footer-link">NIC Cloud (MeghRaj)</a></li>
            <li><a href="#security" className="footer-link">Security &amp; RBAC</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Stakeholders</h5>
          <ul className="footer-link-list">
            <li><a href="#stakeholders" className="footer-link">Revenue Departments</a></li>
            <li><a href="#stakeholders" className="footer-link">Land Record Offices</a></li>
            <li><a href="#stakeholders" className="footer-link">Survey Departments</a></li>
            <li><a href="#stakeholders" className="footer-link">District Administration</a></li>
            <li><a href="#stakeholders" className="footer-link">State &amp; Central Governance</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div>
          © 2026 Intelligent Land Record Digitization &amp; Validation System. Designed for transparent, data-driven land governance.
        </div>
        <div className="footer-social-links">
          <span style={{fontSize: "12px", color: "var(--color-muted)", }}>Source of Truth: Land Record.pdf • Demonstrations Use Illustrative Fictional Data</span>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}
