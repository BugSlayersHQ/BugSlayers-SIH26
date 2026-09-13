import React from 'react';

export default function TechnologyStack() {
  return (
    <>
<section id="tech-stack" style={{background: "#FAF8F6", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", }} className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip chip-accent">Component Architecture</div>
        <h2 className="headline-lg">Suggested Technology Stack</h2>
        <p className="body-md">
          Components and technologies suggested in the study to deliver high-performance digitization, validation, and integration.
        </p>
      </div>

      <div className="tech-stack-grid">
        
        <div className="tech-card">
          <span className="tech-card-badge">DATABASE</span>
          <h4 className="tech-card-title">Database</h4>
          <ul className="tech-card-items">
            <li className="tech-item"><span className="tech-item-bullet"></span>PostgreSQL with PostGIS</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>MySQL</li>
          </ul>
        </div>

        
        <div className="tech-card">
          <span className="tech-card-badge">COMPUTER VISION</span>
          <h4 className="tech-card-title">Computer Vision</h4>
          <ul className="tech-card-items">
            <li className="tech-item"><span className="tech-item-bullet"></span>OpenCV</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Detectron2</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>YOLO</li>
          </ul>
        </div>

        
        <div className="tech-card">
          <span className="tech-card-badge">GIS PLATFORM</span>
          <h4 className="tech-card-title">GIS Platform</h4>
          <ul className="tech-card-items">
            <li className="tech-item"><span className="tech-item-bullet"></span>GeoServer</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>OpenLayers</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Leaflet</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>QGIS</li>
          </ul>
        </div>

        
        <div className="tech-card">
          <span className="tech-card-badge">INTEGRATION APIS</span>
          <h4 className="tech-card-title">APIs</h4>
          <ul className="tech-card-items">
            <li className="tech-item"><span className="tech-item-bullet"></span>RESTful APIs</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>GraphQL</li>
          </ul>
        </div>

        
        <div className="tech-card">
          <span className="tech-card-badge">NATURAL LANGUAGE</span>
          <h4 className="tech-card-title">NLP</h4>
          <ul className="tech-card-items">
            <li className="tech-item"><span className="tech-item-bullet"></span>spaCy</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Hugging Face Transformers</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Indic NLP Library</li>
          </ul>
        </div>

        
        <div className="tech-card">
          <span className="tech-card-badge">CLOUD INFRASTRUCTURE</span>
          <h4 className="tech-card-title">Cloud Infrastructure</h4>
          <ul className="tech-card-items">
            <li className="tech-item"><span className="tech-item-bullet"></span>NIC Cloud (MeghRaj)</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>AWS</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Azure Government Cloud</li>
          </ul>
        </div>

        
        <div className="tech-card">
          <span className="tech-card-badge">VISUALIZATION</span>
          <h4 className="tech-card-title">Analytics &amp; Visualization</h4>
          <ul className="tech-card-items">
            <li className="tech-item"><span className="tech-item-bullet"></span>Power BI</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Apache Superset</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Plotly</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Grafana</li>
          </ul>
        </div>

        
        <div className="tech-card">
          <span className="tech-card-badge">NOTIFICATIONS</span>
          <h4 className="tech-card-title">Notification Services</h4>
          <ul className="tech-card-items">
            <li className="tech-item"><span className="tech-item-bullet"></span>SMS Gateway</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Email APIs</li>
            <li className="tech-item"><span className="tech-item-bullet"></span>Push Notifications</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
