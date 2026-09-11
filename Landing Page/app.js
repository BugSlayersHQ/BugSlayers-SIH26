/**
 * INTELLIGENT LAND RECORD DIGITIZATION & VALIDATION SYSTEM
 * Interactive client-side interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile drawer when clicking any link inside
    mobileDrawer.querySelectorAll('.nav-link, .btn').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Product Showcase Interactive Tabs
  const tabButtons = document.querySelectorAll('.showcase-tab-btn');
  const tabPanes = document.querySelectorAll('.showcase-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');
      if (!targetTabId) return;

      // Update button states
      tabButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      // Update pane states
      tabPanes.forEach(pane => {
        if (pane.id === targetTabId) {
          pane.classList.add('is-active');
        } else {
          pane.classList.remove('is-active');
        }
      });
    });
  });

  // 3. Interactive Extraction Pass Sandbox Simulation
  const runApiBtn = document.getElementById('runApiTestBtn');
  const apiOutput = document.getElementById('apiConsoleOutput');

  if (runApiBtn && apiOutput) {
    let callCount = 0;
    const sampleRecords = [
      {
        doc: "Sample_Register_Page_01.pdf",
        type: "Sample Record of Rights (Demonstration Data)",
        script: "Multilingual Recognition (Demonstration)",
        owner: "Sample Landowner Name (Illustrative Record)",
        survey: "Sample Survey 101",
        khasra: "Sample Khasra 101/1",
        khata: "Sample Khata 45",
        area: "1.25 Hectares (3.08 Acres) [Sample]",
        village: "Sample Village",
        tehsil: "Sample Tehsil",
        district: "Sample District",
        classification: "Agricultural (Sample)",
        flagged: "plot_area (identified as uncertain: faded ink)"
      },
      {
        doc: "Sample_Handwritten_Sheet_02.tiff",
        type: "Sample Khasra Sheet (Demonstration Data)",
        script: "Multilingual Recognition (Demonstration)",
        owner: "Sample Title Holder Details (Illustrative Record)",
        survey: "Sample Survey 204",
        khasra: "Sample Khasra 204/2",
        khata: "Sample Khata 78",
        area: "0.95 Hectares [Sample]",
        village: "Sample Village B",
        tehsil: "Sample Tehsil B",
        district: "Sample District B",
        classification: "Agricultural (Sample)",
        flagged: "ownership_tenure (high confidence)"
      },
      {
        doc: "Sample_Mutation_Entry_03.pdf",
        type: "Sample Mutation Record (Demonstration Data)",
        script: "Multilingual Recognition (Demonstration)",
        owner: "Sample Successor Details (Illustrative Record)",
        survey: "Sample Survey 88",
        khasra: "Sample Khasra 88/1A",
        khata: "Sample Khata 32",
        area: "2.10 Hectares [Sample]",
        village: "Sample Village C",
        tehsil: "Sample Tehsil C",
        district: "Sample District C",
        classification: "Agricultural (Sample)",
        flagged: "registration_record (verified)"
      }
    ];

    runApiBtn.addEventListener('click', () => {
      callCount++;
      const currentSample = sampleRecords[(callCount - 1) % sampleRecords.length];
      const originalText = runApiBtn.innerHTML;
      runApiBtn.innerHTML = `<span>Processing AI Models...</span>`;
      runApiBtn.disabled = true;

      setTimeout(() => {
        apiOutput.innerHTML = `<span class="c-str">// AI PIPELINE: OCR + Layout Detection + Indic NLP Classification Completed</span>
{
  <span class="c-prop">"document_id"</span>: <span class="c-str">"DOC-LRMS-${Math.random().toString(36).substring(2, 8).toUpperCase()}"</span>,
  <span class="c-prop">"source_file"</span>: <span class="c-str">"${currentSample.doc}"</span>,
  <span class="c-prop">"document_type"</span>: <span class="c-str">"${currentSample.type}"</span>,
  <span class="c-prop">"recognized_script"</span>: <span class="c-str">"${currentSample.script}"</span>,
  <span class="c-prop">"extracted_attributes"</span>: {
    <span class="c-prop">"landowner_name"</span>: <span class="c-str">"${currentSample.owner}"</span>,
    <span class="c-prop">"survey_number"</span>: <span class="c-str">"${currentSample.survey}"</span>,
    <span class="c-prop">"khasra_number"</span>: <span class="c-str">"${currentSample.khasra}"</span>,
    <span class="c-prop">"khata_number"</span>: <span class="c-str">"${currentSample.khata}"</span>,
    <span class="c-prop">"plot_area"</span>: <span class="c-str">"${currentSample.area}"</span>,
    <span class="c-prop">"village"</span>: <span class="c-str">"${currentSample.village}"</span>,
    <span class="c-prop">"tehsil"</span>: <span class="c-str">"${currentSample.tehsil}"</span>,
    <span class="c-prop">"district"</span>: <span class="c-str">"${currentSample.district}"</span>,
    <span class="c-prop">"land_classification"</span>: <span class="c-str">"${currentSample.classification}"</span>
  },
  <span class="c-prop">"validation_and_audit"</span>: {
    <span class="c-prop">"business_rules_check"</span>: <span class="c-str">"Passed"</span>,
    <span class="c-prop">"master_database_match"</span>: <span class="c-str">"LRMS Verified"</span>,
    <span class="c-prop">"duplicate_detection"</span>: <span class="c-str">"No Duplicate"</span>,
    <span class="c-prop">"flagged_status"</span>: <span class="c-str">"${currentSample.flagged}"</span>
  }
}`;
        runApiBtn.innerHTML = originalText;
        runApiBtn.disabled = false;
      }, 500);
    });
  }

  // 4. Command Palette (⌘K) Modal
  const cmdTrigger = document.getElementById('cmdSearchTrigger');
  const cmdModal = document.getElementById('cmdModalBackdrop');
  const cmdInput = document.getElementById('cmdSearchInput');
  const cmdResultsList = document.getElementById('cmdResultsList');

  function openCmdModal() {
    if (cmdModal) {
      cmdModal.classList.add('is-active');
      cmdModal.setAttribute('aria-hidden', 'false');
      setTimeout(() => cmdInput?.focus(), 50);
    }
  }

  function closeCmdModal() {
    if (cmdModal) {
      cmdModal.classList.remove('is-active');
      cmdModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (cmdTrigger) {
    cmdTrigger.addEventListener('click', openCmdModal);
  }

  // Keyboard shortcut: Cmd+K or Ctrl+K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdModal?.classList.contains('is-active')) {
        closeCmdModal();
      } else {
        openCmdModal();
      }
    } else if (e.key === 'Escape' && cmdModal?.classList.contains('is-active')) {
      closeCmdModal();
    }
  });

  // Close modal when clicking backdrop outside box
  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) {
        closeCmdModal();
      }
    });
  }

  // Filter command results
  if (cmdInput && cmdResultsList) {
    const originalItems = Array.from(cmdResultsList.querySelectorAll('.cmd-result-item'));
    cmdInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      originalItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });

    // Clicking an item closes modal
    originalItems.forEach(item => {
      item.addEventListener('click', () => {
        closeCmdModal();
      });
    });
  }

  // 5. Header shadow on scroll
  const siteHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.style.setProperty('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.05)');
    } else {
      siteHeader?.style.removeProperty('box-shadow');
    }
  }, { passive: true });
});
