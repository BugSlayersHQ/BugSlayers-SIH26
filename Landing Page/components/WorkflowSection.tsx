"use client";

import React from 'react';

export default function WorkflowSection() {
  return (
    <>
<section id="workflow" className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip">Proposed Operational Architecture</div>
        <h2 className="headline-lg">How the system works from intake to integration.</h2>
        <p className="body-md">
          A structured 6-stage lifecycle designed to convert unstandardized legacy land records into verified, modern digital datasets.
        </p>
      </div>

      
      <div className="pipeline-flow-container">
        <div className="pipeline-step-box">
          <span className="pipeline-step-number">01</span>
          <span className="pipeline-step-title">Upload</span>
          <span className="pipeline-step-desc">Scanned PDFs &amp; maps</span>
        </div>
        <div className="pipeline-step-box">
          <span className="pipeline-step-number">02</span>
          <span className="pipeline-step-title">AI Recognition</span>
          <span className="pipeline-step-desc">OCR &amp; Computer Vision</span>
        </div>
        <div className="pipeline-step-box">
          <span className="pipeline-step-number">03</span>
          <span className="pipeline-step-title">Extraction</span>
          <span className="pipeline-step-desc">NLP/ML field mapping</span>
        </div>
        <div className="pipeline-step-box">
          <span className="pipeline-step-number">04</span>
          <span className="pipeline-step-title">Validation</span>
          <span className="pipeline-step-desc">Business rules &amp; checks</span>
        </div>
        <div className="pipeline-step-box">
          <span className="pipeline-step-number">05</span>
          <span className="pipeline-step-title">Verification</span>
          <span className="pipeline-step-desc">Human-in-the-loop</span>
        </div>
        <div className="pipeline-step-box">
          <span className="pipeline-step-number">06</span>
          <span className="pipeline-step-title">Integration</span>
          <span className="pipeline-step-desc">LRMS &amp; GIS platforms</span>
        </div>
      </div>

      
      <div className="workflow-grid-6">
        
        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "10px", }} className="chip chip-accent">STAGE 01</div>
            <h3 className="headline-sm">Document Upload</h3>
            <p style={{color: "var(--color-secondary)", marginBottom: "12px", }} className="body-sm">
              Upload scanned PDFs, images, handwritten registers, cadastral maps, and historical land-record documents through a user-friendly interface.
            </p>
            <div style={{fontSize: "11px", color: "var(--color-muted)", }}>
              Input formats: Scanned PDF, TIFF, PNG, JPEG, Cadastral sheets
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "10px", }} className="chip chip-accent">STAGE 02</div>
            <h3 className="headline-sm">AI Recognition</h3>
            <p style={{color: "var(--color-secondary)", marginBottom: "12px", }} className="body-sm">
              Advanced OCR and Computer Vision analyze document layouts, recognize printed and handwritten text in multiple Indian languages, and process visual features.
            </p>
            <div style={{fontSize: "11px", color: "var(--color-muted)", }}>
              Capabilities: Multilingual character recognition, layout segmentation
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "10px", }} className="chip chip-accent">STAGE 03</div>
            <h3 className="headline-sm">Intelligent Extraction</h3>
            <p style={{color: "var(--color-secondary)", marginBottom: "12px", }} className="body-sm">
              Natural Language Processing and Machine Learning classify recognized data into predefined fields such as landowner, survey number, khasra, khata, and plot area.
            </p>
            <div style={{fontSize: "11px", color: "var(--color-muted)", }}>
              Output: Structured land attributes mapped to predefined schemas
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "10px", }} className="chip chip-accent">STAGE 04</div>
            <h3 className="headline-sm">Automated Validation</h3>
            <p style={{color: "var(--color-secondary)", marginBottom: "12px", }} className="body-sm">
              The validation engine applies predefined business rules, performs cross-database verification against master databases, detects duplicates, and checks consistency.
            </p>
            <div style={{fontSize: "11px", color: "var(--color-muted)", }}>
              Validation: Rule consistency, master database verification, duplicate checks
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "10px", }} className="chip chip-accent">STAGE 05</div>
            <h3 className="headline-sm">Human Verification</h3>
            <p style={{color: "var(--color-secondary)", marginBottom: "12px", }} className="body-sm">
              Fields with low confidence or flagged ambiguities are automatically routed to revenue officials for manual review and human-assisted verification.
            </p>
            <div style={{fontSize: "11px", color: "var(--color-muted)", }}>
              Governance: Official review queue, side-by-side image comparison
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div style={{marginBottom: "10px", }} className="chip chip-accent">STAGE 06</div>
            <h3 className="headline-sm">Digital Integration</h3>
            <p style={{color: "var(--color-secondary)", marginBottom: "12px", }} className="body-sm">
              Verified, structured records are designed for proposed integration with LRMS, DILRMP databases, GIS platforms, cadastral maps, and other government databases via APIs.
            </p>
            <div style={{fontSize: "11px", color: "var(--color-muted)", }}>
              Proposed Integration: RESTful APIs, GraphQL, GIS spatial integration
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
