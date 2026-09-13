import React from 'react';

export default function AIPipeline() {
  return (
    <>
<section id="ai-approach" className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip chip-accent">Technical Approach</div>
        <h2 className="headline-lg">AI-Powered Document Intelligence</h2>
        <p className="body-md">
          A multi-tiered artificial intelligence pipeline designed to handle complex historical land records from document intake to validated digital output.
        </p>
      </div>

      
      <div style={{background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "var(--space-xl)", marginBottom: "var(--space-3xl)", boxShadow: "var(--shadow-sm)", }}>
        <div style={{fontSize: "11px", fontWeight: "700", color: "var(--color-tertiary)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px", textAlign: "center", }}>
          Document Transformation Pipeline
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", fontSize: "12px", fontWeight: "600", color: "var(--color-primary)", textAlign: "center", }}>
          <span style={{background: "var(--color-neutral)", padding: "6px 12px", borderRadius: "var(--radius-md)", }}>Legacy Document</span>
          <span style={{color: "var(--color-tertiary)", }}>→</span>
          <span style={{background: "var(--color-neutral)", padding: "6px 12px", borderRadius: "var(--radius-md)", }}>OCR</span>
          <span style={{color: "var(--color-tertiary)", }}>→</span>
          <span style={{background: "var(--color-neutral)", padding: "6px 12px", borderRadius: "var(--radius-md)", }}>Computer Vision</span>
          <span style={{color: "var(--color-tertiary)", }}>→</span>
          <span style={{background: "var(--color-neutral)", padding: "6px 12px", borderRadius: "var(--radius-md)", }}>NLP / ML</span>
          <span style={{color: "var(--color-tertiary)", }}>→</span>
          <span style={{background: "var(--color-neutral)", padding: "6px 12px", borderRadius: "var(--radius-md)", }}>Structured Data</span>
          <span style={{color: "var(--color-tertiary)", }}>→</span>
          <span style={{background: "var(--color-neutral)", padding: "6px 12px", borderRadius: "var(--radius-md)", }}>Validation</span>
          <span style={{color: "var(--color-tertiary)", }}>→</span>
          <span style={{background: "var(--color-neutral)", padding: "6px 12px", borderRadius: "var(--radius-md)", }}>Human Verification</span>
          <span style={{color: "var(--color-tertiary)", }}>→</span>
          <span style={{background: "#ECFDF5", color: "#047857", border: "1px solid #A7F3D0", padding: "6px 12px", borderRadius: "var(--radius-md)", }}>Digital Record</span>
        </div>
      </div>

      
      <div className="feature-split">
        <div className="feature-text-block">
          <div className="chip chip-accent">01 • OPTICAL CHARACTER RECOGNITION</div>
          <h3 className="headline-md">Extracting text from scanned and printed records.</h3>
          <p className="body-md">
            The OCR engine processes scanned historical registers, deeds, and revenue sheets across multiple Indian languages, converting raw pixel imagery into machine-readable text while accounting for regional typography.
          </p>
          <ul className="feature-checklist">
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Recognition of printed and handwritten characters</span>
            </li>
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Support for regional Indian languages and revenue scripts</span>
            </li>
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Preprocessing filters for faded ink, contrast enhancement, and deskewing</span>
            </li>
          </ul>
        </div>

        <div className="feature-visual-panel">
          <div style={{background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "20px", boxShadow: "var(--shadow-sm)", }}>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "11px", color: "var(--color-muted)", }}>
              <span>OCR LAYER INSPECTION (DEMO SAMPLE)</span>
              <span style={{fontSize: "9px", padding: "2px 6px", }} className="chip">MULTILINGUAL ENGINE</span>
            </div>
            <div style={{background: "#FAF8F6", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", fontFamily: "var(--font-family-mono)", fontSize: "11px", lineHeight: "20px", }}>
              <span style={{color: "var(--color-muted)", }}>// Illustrative text recognition buffer (Mock Data):</span><br />
              <span style={{color: "#047857", }}>[OCR_DETECT]</span> Script: Multilingual Regional Character Recognition<br />
              <span style={{color: "#047857", }}>[OCR_TEXT]</span> Sample Village, Sample Tehsil, Sample District<br />
              <span style={{color: "#047857", }}>[OCR_TEXT]</span> Survey No: 101, Khasra: 101/1, Area: 1.25 Hectares<br />
              <span style={{color: "#047857", }}>[OCR_CONFIDENCE]</span> Characters processed: Qualitative Confidence Assigned
            </div>
          </div>
        </div>
      </div>

      <div style={{marginTop: "var(--space-4xl)", }} className="feature-split reverse">
        <div className="feature-text-block">
          <div className="chip chip-accent">02 • COMPUTER VISION &amp; LAYOUT ANALYSIS</div>
          <h3 className="headline-md">Segmenting tables, cadastral boundaries, and document layouts.</h3>
          <p className="body-md">
            Computer vision techniques (using suggested frameworks such as OpenCV, Detectron2, and YOLO) identify document structures, bounding boxes for revenue tables, seal locations, and boundary lines in cadastral map sheets.
          </p>
          <ul className="feature-checklist">
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Automated table and column boundary detection</span>
            </li>
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Processing visual layout structures and map coordinates</span>
            </li>
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Cadastral map parcel boundary segmentation</span>
            </li>
          </ul>
        </div>

        <div className="feature-visual-panel">
          <div style={{background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "20px", boxShadow: "var(--shadow-sm)", }}>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "11px", color: "var(--color-muted)", }}>
              <span>COMPUTER VISION SEGMENTATION (DEMO)</span>
              <span style={{fontSize: "9px", padding: "2px 6px", }} className="chip">LAYOUT DETECTION</span>
            </div>
            <div style={{background: "#FAF8F6", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", fontFamily: "var(--font-family-mono)", fontSize: "11px", lineHeight: "20px", }}>
              <span style={{color: "var(--color-muted)", }}>// Vision model bounding box detections (Illustrative):</span><br />
              <span style={{color: "#2563EB", }}>[BOUNDING_BOX]</span> Table Header Segment: (x:40, y:80, w:700, h:32)<br />
              <span style={{color: "#2563EB", }}>[BOUNDING_BOX]</span> Survey Column Segment: (x:40, y:112, w:100, h:400)<br />
              <span style={{color: "#2563EB", }}>[BOUNDING_BOX]</span> Ownership Column Segment: (x:140, y:112, w:260, h:400)<br />
              <span style={{color: "#2563EB", }}>[MAP_FEATURE]</span> Cadastral Boundary Line Segment Detected
            </div>
          </div>
        </div>
      </div>

      <div style={{marginTop: "var(--space-4xl)", }} className="feature-split">
        <div className="feature-text-block">
          <div className="chip chip-accent">03 • NLP &amp; MACHINE LEARNING</div>
          <h3 className="headline-md">Classifying unstructured text into predefined fields.</h3>
          <p className="body-md">
            Using Natural Language Processing (such as spaCy, Hugging Face Transformers, and the Indic NLP Library), the platform understands revenue terminology, extracts entity relations, and intelligently classifies data into standardized land attributes.
          </p>
          <ul className="feature-checklist">
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Entity recognition for landowners, relatives, tehsils, and plots</span>
            </li>
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>Classification into predefined land record attributes</span>
            </li>
            <li className="feature-checklist-item">
              <div className="check-icon">✓</div>
              <span>AI-driven learning mechanism that improves extraction accuracy over time</span>
            </li>
          </ul>
        </div>

        <div className="feature-visual-panel">
          <div style={{background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "20px", boxShadow: "var(--shadow-sm)", }}>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "11px", color: "var(--color-muted)", }}>
              <span>NLP ENTITY CLASSIFIER (DEMO)</span>
              <span style={{fontSize: "9px", padding: "2px 6px", }} className="chip">INDIC NLP</span>
            </div>
            <div style={{background: "#FAF8F6", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", fontFamily: "var(--font-family-mono)", fontSize: "11px", lineHeight: "20px", }}>
              <span style={{color: "var(--color-muted)", }}>// NLP classification output (Illustrative Sample):</span><br />
              <span style={{color: "#7C3AED", }}>[ENTITY_OWNER]</span> 'Sample Landowner Name' → Landowner Details<br />
              <span style={{color: "#7C3AED", }}>[ENTITY_SURVEY]</span> '101' → Survey Number<br />
              <span style={{color: "#7C3AED", }}>[ENTITY_KHASRA]</span> '101/1' → Khasra Number<br />
              <span style={{color: "#7C3AED", }}>[ENTITY_MUTATION]</span> 'Entry 101' → Mutation Records
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
