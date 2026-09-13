"use client";

import React from 'react';

export default function CommandPalette() {
  return (
    <>
<div id="cmdModalBackdrop" role="dialog" aria-modal="true" aria-hidden="true" className="modal-backdrop">
    <div className="cmd-palette-box">
      <div className="cmd-input-row">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" color="var(--color-secondary)" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="cmdSearchInput" placeholder="Search sample records, khasra numbers, surveys..." autoComplete="off" className="cmd-input-field" />
        <span style={{fontSize: "10px", }} className="chip">ESC to exit</span>
      </div>

      <ul id="cmdResultsList" className="cmd-results-list">
        <li className="cmd-result-item selected">
          <div style={{display: "flex", alignItems: "center", gap: "8px", }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
            <span>Sample Khasra No. 101/1 — Sample Village (Demonstration Data)</span>
          </div>
          <span className="caption">Sample District</span>
        </li>
        <li className="cmd-result-item">
          <div style={{display: "flex", alignItems: "center", gap: "8px", }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon></svg>
            <span>Sample Cadastral Sheet 01 — Vector Boundary Layer (Demonstration)</span>
          </div>
          <span className="caption">GIS Cadastral</span>
        </li>
        <li className="cmd-result-item">
          <div style={{display: "flex", alignItems: "center", gap: "8px", }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 12 8"></polygon></svg>
            <span>Sample Historical Register Volume 01 (Demonstration Data)</span>
          </div>
          <span className="caption">Historical Record</span>
        </li>
        <li className="cmd-result-item">
          <div style={{display: "flex", alignItems: "center", gap: "8px", }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path></svg>
            <span>Validation Rule: Cross-Database LRMS Check</span>
          </div>
          <span className="caption">Validation Engine</span>
        </li>
        <li className="cmd-result-item">
          <div style={{display: "flex", alignItems: "center", gap: "8px", }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect></svg>
            <span>Role-Based Access Control (RBAC) Specification</span>
          </div>
          <span className="caption">Security</span>
        </li>
      </ul>

      <div className="cmd-footer">
        <span>Tip: Press <strong>↑</strong> and <strong>↓</strong> to navigate, <strong>Enter</strong> to select</span>
        <span>LandAI Record Search</span>
      </div>
    </div>
  </div>
    </>
  );
}
