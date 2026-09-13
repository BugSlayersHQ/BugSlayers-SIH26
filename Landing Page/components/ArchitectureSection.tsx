import React from 'react';

export default function ArchitectureSection() {
  return (
    <>
<section id="architecture" className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip chip-accent">Proposed Deployment Architecture</div>
        <h2 className="headline-lg">Built for Modern Land Administration</h2>
        <p className="body-md">
          A proposed multi-tier deployment framework designed to integrate with state land administration infrastructure and national digital governance platforms.
        </p>
      </div>

      <div className="pricing-grid">
        
        <div className="card pricing-card">
          <div style={{fontSize: "10px", marginBottom: "12px", }} className="chip">TIER 1</div>
          <h3 className="pricing-plan-title">Ingestion &amp; Preprocessing</h3>
          <p className="pricing-plan-desc">Intake layer for physical and scanned document archives.</p>
          <ul className="pricing-features-list">
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Scanned PDFs, TIFFs, and image batch upload</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Image deskewing, denoising &amp; enhancement</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Metadata extraction and document cataloging</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Secure document repository integration</span>
            </li>
          </ul>
        </div>

        
        <div className="card pricing-card featured">
          <div className="pricing-badge-popular">CORE ENGINE</div>
          <div style={{fontSize: "10px", marginBottom: "12px", }} className="chip chip-accent">TIER 2</div>
          <h3 className="pricing-plan-title">AI Processing &amp; Validation</h3>
          <p className="pricing-plan-desc">Intelligent recognition, extraction, and validation pipeline.</p>
          <ul className="pricing-features-list">
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Multilingual OCR for Indian scripts</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Computer Vision table &amp; boundary segmentation</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>NLP field classification into 12 predefined attributes</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Business rules &amp; cross-database validation</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Confidence scoring &amp; human verification queue</span>
            </li>
          </ul>
        </div>

        
        <div className="card pricing-card">
          <div style={{fontSize: "10px", marginBottom: "12px", }} className="chip">TIER 3</div>
          <h3 className="pricing-plan-title">Interoperability Gateway</h3>
          <p className="pricing-plan-desc">Integration with governance platforms and GIS systems.</p>
          <ul className="pricing-features-list">
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>RESTful APIs and GraphQL interfaces</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Proposed LRMS and DILRMP database connectors</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>GeoServer &amp; PostGIS spatial layer sync</span>
            </li>
            <li className="pricing-feature-item">
              <span className="check-icon">✓</span>
              <span>Interactive administrative monitoring dashboards</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
