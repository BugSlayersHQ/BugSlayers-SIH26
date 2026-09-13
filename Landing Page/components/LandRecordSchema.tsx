"use client";

import React from 'react';

export default function LandRecordSchema() {
  return (
    <>
<section id="land-data" className="section">
    <div className="container">
      <div className="section-header">
        <div className="chip">Predefined Data Schema</div>
        <h2 className="headline-lg">12 Predefined Land-Record Fields</h2>
        <p className="body-md">
          The proposed system automatically extracts and classifies information into the twelve predefined fields explicitly specified in the project study document.
        </p>
      </div>

      <div style={{gridTemplateColumns: "repeat(4, 1fr)", }} className="bento-grid">
        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 01</div>
            <h4 style={{marginBottom: "6px", }}>Landowner Details</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Name and details of title holders, co-sharers, parentage, and legal identification references.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 02</div>
            <h4 style={{marginBottom: "6px", }}>Survey Number</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Official revenue survey identification assigned during administrative land surveys.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 03</div>
            <h4 style={{marginBottom: "6px", }}>Khasra Number</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Specific plot or parcel identifier representing land subdivisions within the revenue boundary.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 04</div>
            <h4 style={{marginBottom: "6px", }}>Khata Number</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Account ledger identifier grouping landholdings belonging to a single title holder or family unit.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 05</div>
            <h4 style={{marginBottom: "6px", }}>Plot Area</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Land measurement recorded in standardized metric units and legacy regional measurement units.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 06</div>
            <h4 style={{marginBottom: "6px", }}>Village</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Revenue village (Mauza) jurisdiction indicating the local administrative origin of the parcel.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 07</div>
            <h4 style={{marginBottom: "6px", }}>Tehsil</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Sub-district administrative revenue division (Taluka/Tehsil) overseeing the village records.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 08</div>
            <h4 style={{marginBottom: "6px", }}>District</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Primary district revenue jurisdiction encompassing the sub-district administrative boundaries.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 09</div>
            <h4 style={{marginBottom: "6px", }}>Land Classification</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Official categorization of the parcel (e.g. agricultural, irrigated, residential, or commercial).
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 10</div>
            <h4 style={{marginBottom: "6px", }}>Ownership Details</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Tenure status, occupant classification, shareholding proportions, and registered rights.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 11</div>
            <h4 style={{marginBottom: "6px", }}>Mutation Records</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Historical record of title transfers, inheritance, succession entries, partitions, and amendments.
            </p>
          </div>
        </div>

        
        <div className="card bento-card">
          <div className="card-inner">
            <div className="tech-card-badge">FIELD 12</div>
            <h4 style={{marginBottom: "6px", }}>Registration Information</h4>
            <p style={{fontSize: "12px", color: "var(--color-secondary)", }}>
              Deed registration references, document numbers, dates, and sub-registrar office details.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
