import React from 'react';

export default function ValidationSection() {
  return (
    <>
<section style={{background: "#FAF8F6", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", }} className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip chip-accent">Human-Assisted Verification</div>
        <h2 className="headline-lg">AI handles the scale. Humans handle the uncertainty.</h2>
        <p className="body-md">
          The proposed system does not blindly accept every extracted value. It assesses confidence, detects potential discrepancies, and routes uncertain fields for manual verification.
        </p>
      </div>

      <div style={{gridTemplateColumns: "repeat(3, 1fr)", }} className="workflow-grid-6">
        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div className="bento-content">
              <h4>Automated Validation</h4>
              <p>
                Predefined business rules, cross-database verification against master registries, and duplicate detection check consistency across all extracted records.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <div className="bento-content">
              <h4>Confidence Scoring &amp; Flagging</h4>
              <p>
                Every extracted field receives a qualitative confidence evaluation. Uncertain characters, ambiguous handwriting, or faded text are automatically flagged.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="bento-content">
              <h4>Human-Assisted Verification</h4>
              <p>
                Revenue officials review flagged values in an intuitive side-by-side interface showing original scans and extracted data, ensuring full administrative accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
