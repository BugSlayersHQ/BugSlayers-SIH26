import React from 'react';

export default function FeatureGrid() {
  return (
    <>
<section id="features" style={{background: "#FCFBFA", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", }} className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip">Core System Capabilities</div>
        <h2 className="headline-lg">Features designed for intelligent land governance.</h2>
        <p className="body-md">
          Key capabilities outlined in the project study to automate legacy document extraction while maintaining data integrity and administrative transparency.
        </p>
      </div>

      <div className="bento-grid">
        
        <div className="card bento-card bento-card-normal">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div className="bento-content">
              <h4>Multilingual Recognition</h4>
              <p>
                Support for printed and handwritten document recognition across major Indian languages and regional revenue scripts.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card bento-card-normal">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div className="bento-content">
              <h4>Automatic Data Extraction</h4>
              <p>
                Automatically extract key land record attributes from scanned PDFs, handwritten registers, maps, and historical deeds.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card bento-card-normal">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </div>
            <div className="bento-content">
              <h4>Intelligent Classification</h4>
              <p>
                Classify extracted textual and tabular information into predefined standardized land-record fields.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card bento-card-normal">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div className="bento-content">
              <h4>Automated Validation</h4>
              <p>
                Validate extracted data using predefined business rules, cross-database verification, and duplicate detection.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card bento-card-normal">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <div className="bento-content">
              <h4>Confidence Scoring</h4>
              <p>
                Assess extraction confidence for each field with automatic identification of uncertain or damaged values.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card bento-card-normal">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="bento-content">
              <h4>Human-Assisted Verification</h4>
              <p>
                Dedicated workflow allowing revenue officials to manually verify and confirm low-confidence records.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card bento-card-normal">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
            </div>
            <div className="bento-content">
              <h4>GIS &amp; Database Integration</h4>
              <p>
                Designed for proposed integration with existing Land Records Management Systems (LRMS), DILRMP databases, GIS platforms, and cadastral maps.
              </p>
            </div>
          </div>
        </div>

        
        <div className="card bento-card bento-card-normal">
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div className="bento-content">
              <h4>Secure Repository &amp; Audit Trail</h4>
              <p>
                Maintain document metadata, digital repository records, audit trails, and role-based access control.
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
