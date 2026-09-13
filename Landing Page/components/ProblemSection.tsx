import React from 'react';

export default function ProblemSection() {
  return (
    <>
<section id="problem" style={{background: "#FAF8F6", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", }} className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip chip-accent">The Core Challenge</div>
        <h2 className="headline-lg">Land records were not built for the digital age.</h2>
        <p className="body-md">
          Across India, historical land records continue to exist in the form of handwritten registers, scanned documents, cadastral maps, and legacy PDF files maintained across various administrative levels.
        </p>
      </div>

      <div style={{gridTemplateColumns: "repeat(3, 1fr)", }} className="bento-grid">
        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="11" y2="17"></line></svg>
            </div>
            <div className="bento-content">
              <h4>Handwritten Registers &amp; Faded Text</h4>
              <p>
                Decades-old physical registers frequently suffer from faded ink, damaged pages, and varying handwriting styles that impede standard transcription.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
            <div className="bento-content">
              <h4>Poor Image Quality &amp; Scanned PDFs</h4>
              <p>
                Scanned legacy documents often contain noise, skew, low resolution, stains, and handwritten annotations that break conventional OCR engines.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div className="bento-content">
              <h4>Multiple Indian Regional Languages</h4>
              <p>
                Land records exist across multiple regional scripts and languages with complex localized terminology, requiring specialized multilingual recognition.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <div className="bento-content">
              <h4>Inconsistent Document Formats</h4>
              <p>
                Formats differ across states, tehsils, and historical eras—lacking standardized layouts for Khasra, Khatauni, Jamabandi, and deed documents.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
            </div>
            <div className="bento-content">
              <h4>Manual Data Entry &amp; Inconsistencies</h4>
              <p>
                Manual data entry is time-consuming, expensive, and error-prone, introducing data inconsistencies that affect decision-making and land governance.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
            </div>
            <div className="bento-content">
              <h4>Ownership Verification &amp; Disconnected Systems</h4>
              <p>
                The lack of standardized digital records creates hurdles in verifying ownership, resolving disputes, and integrating with modern land information systems.
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
