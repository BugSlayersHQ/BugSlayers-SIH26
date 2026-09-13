import React from 'react';

export default function Hero() {
  return (
    <>
<section id="hero" className="hero-section">
    <div className="container hero-content">
      <div className="hero-chip-link">
        <div className="chip">
          <span className="new-pill">PROPOSED SYSTEM</span>
          <span>AI-POWERED LAND RECORD DIGITIZATION</span>
        </div>
      </div>

      <h1 className="headline-display hero-title">
        Transforming Legacy Land Records into Intelligent Digital Data
      </h1>

      <p className="body-lg hero-desc">
        A proposed AI-powered platform utilizing advanced OCR, Computer Vision, and Natural Language Processing to recognize printed and handwritten text in multiple Indian languages, automatically extract structured attributes from legacy registers, maps, and scanned PDFs, and validate records for modern land-management systems.
      </p>

      <div className="hero-cta-group">
        <a href="#features" className="btn btn-primary btn-lg">Explore the Solution</a>
        <a href="#workflow" className="btn btn-secondary btn-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>View How It Works</span>
        </a>
      </div>

      <div className="hero-trust-bar">
        <div className="hero-trust-item">
          <span>Multilingual Indian Language Recognition</span>
        </div>
        <div className="hero-trust-dot"></div>
        <div className="hero-trust-item">
          <span>Human-Assisted Verification Workflow</span>
        </div>
        <div className="hero-trust-dot"></div>
        <div className="hero-trust-item">
          <span>Designed for LRMS &amp; DILRMP Integration (Proposed)</span>
        </div>
      </div>
    </div>

    
    <div className="container hero-visual-wrapper">
      
      <div className="floating-stat-card left">
        <div className="stat-icon-circle green">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-val">Automated Validation</div>
          <div className="stat-lbl">Cross-database &amp; duplicate verification</div>
        </div>
      </div>

      
      <div className="floating-stat-card right">
        <div className="stat-icon-circle orange">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-val">Confidence Scoring</div>
          <div className="stat-lbl">Automatic identification of uncertain fields</div>
        </div>
      </div>

      
      <div className="hero-product-window">
        
        <div className="window-chrome">
          <div className="window-dots">
            <div className="window-dot red"></div>
            <div className="window-dot yellow"></div>
            <div className="window-dot green"></div>
          </div>

          <div className="window-search-bar">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>landrecords.gov.in / demonstration / sample-record-inspector</span>
          </div>

          <div className="window-actions">
            <div className="window-badge-verified">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Demonstration Console</span>
            </div>
          </div>
        </div>

        
        <div className="window-body">
          
          <aside className="workspace-sidebar">
            <div>
              <div className="sidebar-section-title">Navigation Modules</div>
              <ul className="sidebar-nav-list">
                <li className="sidebar-nav-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                  <span>Documents</span>
                  <span className="nav-count">Queue</span>
                </li>
                <li className="sidebar-nav-item active">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                  <span>Digitization</span>
                  <span className="nav-count">Active</span>
                </li>
                <li className="sidebar-nav-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span>Validation</span>
                  <span className="nav-count">Rules</span>
                </li>
                <li className="sidebar-nav-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <span>Verification</span>
                  <span style={{background: "#FFF7ED", color: "#EA580C", }} className="nav-count">Review</span>
                </li>
                <li className="sidebar-nav-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                  <span>GIS &amp; Cadastral</span>
                  <span className="nav-count">Maps</span>
                </li>
                <li className="sidebar-nav-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                  <span>Analytics</span>
                  <span className="nav-count">Monitor</span>
                </li>
                <li className="sidebar-nav-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <span>Audit Trail</span>
                  <span className="nav-count">Log</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="sidebar-section-title">Illustrative Document Queue</div>
              <ul className="sidebar-nav-list">
                <li className="sidebar-nav-item active">
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E", }}></span>
                  <span>Sample_Register_Page_01.pdf</span>
                </li>
                <li className="sidebar-nav-item">
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#FE551B", }}></span>
                  <span>Sample_Handwritten_Deed_02.tiff</span>
                </li>
                <li className="sidebar-nav-item">
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3B82F6", }}></span>
                  <span>Sample_Cadastral_Sheet_03.pdf</span>
                </li>
              </ul>
            </div>
          </aside>

          
          <main className="editor-canvas">
            <div className="doc-breadcrumbs">
              <span style={{color: "var(--color-tertiary)", fontWeight: "700", }}>[Illustrative Demonstration Sample]</span> / <span>District: Sample District</span> / <span>Tehsil: Sample Tehsil</span> / <span>Village: Sample Village</span>
            </div>

            <div className="doc-header-row">
              <h2 className="doc-title">Intelligent Land Record Classification &amp; Extraction (Illustrative Mockup)</h2>
              <div className="doc-authors">
                <div title="Revenue Inspector (Role)" className="author-avatar a1">RI</div>
                <div title="Reviewing Officer (Role)" className="author-avatar a2">RO</div>
                <div title="AI Extraction Pipeline" className="author-avatar a3">AI</div>
              </div>
            </div>

            <div className="doc-meta-tags">
              <span className="doc-meta-pill">Document: Sample Scanned Historical Register</span>
              <span className="doc-meta-pill">Script: Multilingual Recognition</span>
              <span style={{color: "#047857", background: "#ECFDF5", }} className="doc-meta-pill">● Automated Rules Checked</span>
              <span style={{color: "#B45309", background: "#FFFBEB", }} className="doc-meta-pill">● Uncertain Field Identified</span>
            </div>

            <p className="doc-body-text">
              Demonstration of how the proposed system analyzes a sample historical record, automatically maps attributes to predefined fields, applies confidence scoring, and flags uncertain values for human verification. <em>(Note: All names, numbers, and locations below are illustrative fictional demonstration data).</em>
            </p>

            
            <div style={{background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", overflow: "hidden", marginTop: "14px", boxShadow: "var(--shadow-xs)", }}>
              <table className="record-fields-table">
                <thead>
                  <tr>
                    <th>Predefined Field</th>
                    <th>Extracted Value (Demonstration Data)</th>
                    <th>Confidence &amp; Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="record-field-name">Landowner Details</span>
                      <span className="record-field-hindi">खातेदाराचा तपशील</span>
                    </td>
                    <td><strong>Sample Landowner Name (Illustrative Record)</strong></td>
                    <td><span className="badge-status verified">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Survey Number</span>
                      <span className="record-field-hindi">सर्व्हे नंबर</span>
                    </td>
                    <td><code>Sample Survey No. 101</code></td>
                    <td><span className="badge-status confidence-high">● High Confidence</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Khasra Number</span>
                      <span className="record-field-hindi">खसरा क्रमांक</span>
                    </td>
                    <td><code>Sample Khasra No. 101/1</code></td>
                    <td><span className="badge-status confidence-high">● High Confidence</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Khata Number</span>
                      <span className="record-field-hindi">खाते क्रमांक</span>
                    </td>
                    <td><code>Sample Khata No. 45</code></td>
                    <td><span className="badge-status verified">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Plot Area</span>
                      <span className="record-field-hindi">क्षेत्रफळ (हेक्टर / एकर)</span>
                    </td>
                    <td><strong>1.25 Hectares</strong> (3.08 Acres) [Sample]</td>
                    <td><span className="badge-status needs-review">⚠ Needs Review</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Village</span>
                      <span className="record-field-hindi">गाव</span>
                    </td>
                    <td>Sample Village</td>
                    <td><span className="badge-status verified">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Tehsil</span>
                      <span className="record-field-hindi">तहसील / तालुका</span>
                    </td>
                    <td>Sample Tehsil</td>
                    <td><span className="badge-status verified">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">District</span>
                      <span className="record-field-hindi">जिल्हा</span>
                    </td>
                    <td>Sample District</td>
                    <td><span className="badge-status verified">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Land Classification</span>
                      <span className="record-field-hindi">जमिनीचा प्रकार</span>
                    </td>
                    <td>Agricultural (Sample Classification)</td>
                    <td><span className="badge-status confidence-high">● High Confidence</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Ownership Details</span>
                      <span className="record-field-hindi">मालकी हक्क</span>
                    </td>
                    <td>Single Title Holder (Sample Tenure)</td>
                    <td><span className="badge-status confidence-high">● High Confidence</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Mutation Records</span>
                      <span className="record-field-hindi">फेरफार नोंद</span>
                    </td>
                    <td>Sample Mutation Entry No. 101</td>
                    <td><span className="badge-status verified">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="record-field-name">Registration Information</span>
                      <span className="record-field-hindi">नोंदणी माहिती</span>
                    </td>
                    <td>Sample Registration Volume 12, Page 4</td>
                    <td><span className="badge-status verified">✓ Verified</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>

          
          <aside className="workspace-inspector">
            <div className="inspector-card">
              <div className="inspector-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 12 8"></polygon></svg>
                <span>AI Extraction Inspector</span>
              </div>
              <div className="inspector-text">
                Demonstration of confidence assessment and automatic identification of uncertain fields:
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "6px", margin: "10px 0", fontSize: "11px", }}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <span>Landowner Details</span>
                  <span style={{fontSize: "10px", padding: "1px 6px", }} className="badge-status verified">Verified</span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <span>Survey Number</span>
                  <span style={{fontSize: "10px", padding: "1px 6px", }} className="badge-status confidence-high">High Confidence</span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <span>Khasra Number</span>
                  <span style={{fontSize: "10px", padding: "1px 6px", }} className="badge-status confidence-high">High Confidence</span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFFBEB", padding: "4px", borderRadius: "4px", }}>
                  <span style={{fontWeight: "600", color: "#B45309", }}>Plot Area</span>
                  <span style={{fontSize: "10px", padding: "1px 6px", }} className="badge-status needs-review">Needs Review</span>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <span>Mutation Record</span>
                  <span style={{fontSize: "10px", padding: "1px 6px", }} className="badge-status verified">Verified</span>
                </div>
              </div>
              <div className="ai-pill-summary">
                <strong>Illustrative Uncertainty Detection:</strong><br />
                Plot area ink identified as faded. Automatically routed to human-assisted verification workflow.
              </div>
            </div>

            <div className="inspector-card">
              <div className="inspector-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Automated Validation Engine</span>
              </div>
              <div style={{fontSize: "11px", color: "var(--color-secondary)", display: "flex", flexDirection: "column", gap: "8px", }}>
                <div style={{display: "flex", alignItems: "center", gap: "6px", }}>
                  <span style={{width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", }}></span>
                  <span>Predefined Business Rules: Checked</span>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: "6px", }}>
                  <span style={{width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", }}></span>
                  <span>Duplicate Detection: Verified Unique</span>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: "6px", }}>
                  <span style={{width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", }}></span>
                  <span>Master Database Verification: Cross-Checked</span>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: "6px", }}>
                  <span style={{width: "6px", height: "6px", borderRadius: "50%", background: "#FE551B", }}></span>
                  <span>Spatial GIS Link: Sample Khasra Located</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
