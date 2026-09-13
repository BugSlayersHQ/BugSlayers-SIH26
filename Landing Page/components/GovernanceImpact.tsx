import React from 'react';

export default function GovernanceImpact() {
  return (
    <>
<section style={{background: "#FAF8F6", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", }} className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip chip-accent">Intended Impact</div>
        <h2 className="headline-lg">Designed for Transparent, Data-Driven Land Governance</h2>
        <p className="body-md">
          Outcomes articulated in the study to advance India's land administration ecosystem through intelligent automation and verified data.
        </p>
      </div>

      <div style={{gridTemplateColumns: "repeat(3, 1fr)", }} className="bento-grid">
        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "8px", }} className="chip">OUTCOME 01</div>
            <h4>Reduce Manual Effort</h4>
            <p style={{fontSize: "13px", color: "var(--color-secondary)", marginTop: "6px", }}>
              Automating character recognition and field classification significantly reduces manual data-entry overhead and administrative backlogs.
            </p>
          </div>
        </div>

        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "8px", }} className="chip">OUTCOME 02</div>
            <h4>Improve Accuracy &amp; Reliability</h4>
            <p style={{fontSize: "13px", color: "var(--color-secondary)", marginTop: "6px", }}>
              Automated validation against master databases combined with confidence scoring minimizes transcription errors and inconsistencies.
            </p>
          </div>
        </div>

        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "8px", }} className="chip">OUTCOME 03</div>
            <h4>Accelerate Modernization</h4>
            <p style={{fontSize: "13px", color: "var(--color-secondary)", marginTop: "6px", }}>
              Supports modernization goals aligned with programs such as DILRMP by turning legacy paper registers into standardized digital datasets.
            </p>
          </div>
        </div>

        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "8px", }} className="chip">OUTCOME 04</div>
            <h4>LRMS &amp; GIS Interoperability</h4>
            <p style={{fontSize: "13px", color: "var(--color-secondary)", marginTop: "6px", }}>
              Enables seamless data flow between textual land records, cadastral maps, and modern land information systems via standard APIs.
            </p>
          </div>
        </div>

        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "8px", }} className="chip">OUTCOME 05</div>
            <h4>Data-Driven Governance</h4>
            <p style={{fontSize: "13px", color: "var(--color-secondary)", marginTop: "6px", }}>
              Provides revenue authorities and district administrations with reliable data for infrastructure planning, taxation, and dispute resolution.
            </p>
          </div>
        </div>

        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "8px", }} className="chip">OUTCOME 06</div>
            <h4>Citizen-Centric Transparency</h4>
            <p style={{fontSize: "13px", color: "var(--color-secondary)", marginTop: "6px", }}>
              Supports clear ownership verification, easier title searches, and transparent land administration for citizens.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
