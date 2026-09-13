import React from 'react';

export default function MonitoringDashboard() {
  return (
    <>
<section id="dashboard" style={{background: "#FCFBFA", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", }} className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip">Oversight &amp; Monitoring</div>
        <h2 className="headline-lg">Digitization Monitoring Dashboards</h2>
        <p className="body-md">
          Interactive administrative dashboards displaying key monitoring categories outlined in the study to track progress and validation quality.
        </p>
      </div>

      <div className="dashboard-categories-grid">
        
        <div className="dashboard-cat-card">
          <div className="dashboard-cat-header">
            <span className="dashboard-cat-title">Documents Processed</span>
            <span style={{fontSize: "10px", }} className="chip">VOLUME</span>
          </div>
          <p className="dashboard-cat-scope">
            Track intake volume across legacy registers, maps, scanned PDFs, and historical mutation records.
          </p>
        </div>

        
        <div className="dashboard-cat-card">
          <div className="dashboard-cat-header">
            <span className="dashboard-cat-title">Extraction Accuracy</span>
            <span style={{fontSize: "10px", }} className="chip">AI QUALITY</span>
          </div>
          <p className="dashboard-cat-scope">
            Monitor model confidence assessments, character recognition fidelity, and field extraction metrics.
          </p>
        </div>

        
        <div className="dashboard-cat-card">
          <div className="dashboard-cat-header">
            <span className="dashboard-cat-title">Validation Status</span>
            <span style={{fontSize: "10px", }} className="chip">RULES</span>
          </div>
          <p className="dashboard-cat-scope">
            Evaluate pass/fail rates for predefined business rules, master database matches, and duplicate checks.
          </p>
        </div>

        
        <div className="dashboard-cat-card">
          <div className="dashboard-cat-header">
            <span className="dashboard-cat-title">Pending Verification</span>
            <span style={{fontSize: "10px", }} className="chip">HUMAN REVIEW</span>
          </div>
          <p className="dashboard-cat-scope">
            Review workload backlogs and pending verification queues assigned to revenue officials.
          </p>
        </div>

        
        <div className="dashboard-cat-card">
          <div className="dashboard-cat-header">
            <span className="dashboard-cat-title">Error Statistics</span>
            <span style={{fontSize: "10px", }} className="chip">ANOMALIES</span>
          </div>
          <p className="dashboard-cat-scope">
            Identify common failure modes such as severe ink fading, torn pages, and missing cadastral references.
          </p>
        </div>

        
        <div className="dashboard-cat-card">
          <div className="dashboard-cat-header">
            <span className="dashboard-cat-title">State-Wise Progress</span>
            <span style={{fontSize: "10px", }} className="chip">STATE LEVEL</span>
          </div>
          <p className="dashboard-cat-scope">
            Comparative progress tracking across state land-administration programs and modernization initiatives.
          </p>
        </div>

        
        <div className="dashboard-cat-card">
          <div className="dashboard-cat-header">
            <span className="dashboard-cat-title">District-Wise Progress</span>
            <span style={{fontSize: "10px", }} className="chip">DISTRICT LEVEL</span>
          </div>
          <p className="dashboard-cat-scope">
            Granular tracking of digitization completion across tehsils, circles, and village revenue units.
          </p>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
