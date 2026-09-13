import React from 'react';

export default function GISSection() {
  return (
    <>
<section id="gis" className="section">
    <div className="container">
      <div className="feature-split">
        <div className="feature-text-block">
          <div className="chip chip-accent">SPATIAL INTEGRATION</div>
          <h2 className="headline-md">From Documents to Maps.</h2>
          <p className="body-md">
            Validated textual land records are designed for proposed integration with GIS platforms, cadastral maps, Land Records Management Systems (LRMS), and DILRMP databases.
          </p>
          <ul className="feature-checklist">
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Link survey and khasra numbers directly to vector cadastral parcel boundaries</span>
            </li>
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Integration with proposed GIS platforms: GeoServer, OpenLayers, Leaflet, and QGIS</span>
            </li>
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Spatial database support via PostgreSQL with PostGIS</span>
            </li>
          </ul>
        </div>

        <div className="feature-visual-panel">
          <div className="cadastral-map-box">
            <div className="cadastral-toolbar">
              <div style={{fontWeight: "700", color: "var(--color-primary)", display: "flex", alignItems: "center", gap: "6px", }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon></svg>
                <span>Illustrative Cadastral Map Viewer (Sample Demonstration Data)</span>
              </div>
              <div className="cadastral-layers">
                <span className="cadastral-layer-pill active">Sample Parcel 101/1</span>
                <span className="cadastral-layer-pill">Roads</span>
                <span className="cadastral-layer-pill">Boundaries</span>
              </div>
            </div>

            
            <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="cadastral-svg-canvas">
              <rect width="500" height="240" fill="#F8FAFC"></rect>
              
              <path d="M0 40H500M0 80H500M0 120H500M0 160H500M0 200H500" stroke="#E2E8F0" strokeWidth="1"></path>
              <path d="M50 0V240M100 0V240M150 0V240M200 0V240M250 0V240M300 0V240M350 0V240M400 0V240M450 0V240" stroke="#E2E8F0" strokeWidth="1"></path>
              
              
              <polygon points="60,30 180,20 190,90 70,100" fill="#EDF2F7" stroke="#CBD5E1" strokeWidth="1.5"></polygon>
              <text x="95" y="65" font-size="10" font-family="sans-serif" fill="#64748B">Sample Parcel 100</text>
              
              <polygon points="190,90 320,80 340,160 200,170" fill="#EDF2F7" stroke="#CBD5E1" strokeWidth="1.5"></polygon>
              <text x="230" y="130" font-size="10" font-family="sans-serif" fill="#64748B">Sample Parcel 101/2</text>

              <polygon points="320,80 440,70 450,150 340,160" fill="#EDF2F7" stroke="#CBD5E1" strokeWidth="1.5"></polygon>
              <text x="360" y="120" font-size="10" font-family="sans-serif" fill="#64748B">Sample Parcel 102</text>

              
              <polygon points="70,100 190,90 200,170 80,180" fill="#FFF7ED" stroke="#FE551B" strokeWidth="2.5"></polygon>
              <text x="90" y="135" font-size="11" font-weight="bold" font-family="sans-serif" fill="#C2410C">Sample Parcel 101/1</text>
              <text x="90" y="150" font-size="9" font-family="sans-serif" fill="#EA580C">1.25 Hectares (Sample)</text>

              
              <polygon points="80,180 200,170 210,230 90,235" fill="#EDF2F7" stroke="#CBD5E1" strokeWidth="1.5"></polygon>
              <text x="110" y="210" font-size="10" font-family="sans-serif" fill="#64748B">Sample Parcel 101/3</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
