"use client";

import React from 'react';

export default function Navbar() {
  return (
    <>
<header id="mainHeader" className="site-header">
    <div className="container nav-container">
      <a href="#" aria-label="LandAI Home" className="brand-logo">
        <div className="brand-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        </div>
        <span>LandAI</span>
      </a>

      <nav aria-label="Main Navigation" className="nav-menu">
        <a href="#problem" className="nav-link">Challenges</a>
        <a href="#workflow" className="nav-link">Workflow</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#ai-approach" className="nav-link">AI Intelligence</a>
        <a href="#land-data" className="nav-link">Predefined Fields</a>
        <a href="#gis" className="nav-link">GIS &amp; Maps</a>
        <a href="#dashboard" className="nav-link">Monitoring</a>
        <a href="#tech-stack" className="nav-link">Tech Stack</a>
      </nav>

      <div className="nav-actions">
        <button type="button" id="cmdSearchTrigger" aria-label="Search sample land records and schema" className="search-trigger-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>Search records, khasra...</span>
          <kbd className="search-kbd">⌘K</kbd>
        </button>

        <a href="#workflow" className="btn btn-secondary">View Workflow</a>
        <a href="#features" className="btn btn-primary">Explore Solution</a>

        <button type="button" id="mobileMenuToggle" aria-label="Toggle mobile menu" aria-expanded="false" className="mobile-menu-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    
    <div id="mobileNavDrawer" className="mobile-nav-drawer">
      <a href="#problem" className="nav-link">Challenges</a>
      <a href="#workflow" className="nav-link">Workflow</a>
      <a href="#features" className="nav-link">Features</a>
      <a href="#ai-approach" className="nav-link">AI Intelligence</a>
      <a href="#land-data" className="nav-link">Predefined Fields</a>
      <a href="#gis" className="nav-link">GIS &amp; Cadastral</a>
      <a href="#dashboard" className="nav-link">Monitoring</a>
      <a href="#tech-stack" className="nav-link">Suggested Tech Stack</a>
      <a href="#stakeholders" className="nav-link">Stakeholders</a>
      <div style={{display: "flex", gap: "12px", marginTop: "8px", }}>
        <a href="#workflow" style={{flex: "1", }} className="btn btn-secondary">View Workflow</a>
        <a href="#features" style={{flex: "1", }} className="btn btn-primary">Explore Solution</a>
      </div>
    </div>
  </header>
    </>
  );
}
