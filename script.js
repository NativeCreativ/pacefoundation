/**
 * Pace Foundation CSR Landing Page - Interactive Logic (v5.0)
 * Robust, Fail-Safe Implementation
 */

// ==================== GLOBAL INTERACTIVE FUNCTIONS ====================

// 1. Group Entities Pop-out Modal Data & Controls
const entityData = {
  pdl: {
    title: 'Pace Digitek Limited',
    sector: 'Integrated Infrastructure & Energy Solutions',
    logo: 'assets/images/logo-pdl.png',
    desc: "An integrated infrastructure and energy solutions company operating across the Telecom & ICT and Energy sectors. With capabilities spanning manufacturing, Engineering, Procurement & Construction (EPC), and Operations & Maintenance (O&M), Pace Digitek delivers comprehensive solutions across telecom infrastructure, digital connectivity and advanced energy storage. Through its diverse business capabilities, the company supports critical infrastructure development and India's evolving energy landscape.",
    link: 'https://pacedigitek.com',
    linkText: 'Visit Official Website'
  },
  lppl: {
    title: 'Lineage Power Private Limited',
    sector: 'Telecom Power & Energy Storage Solutions',
    logo: 'assets/images/logo-lppl.png',
    desc: 'A dedicated manufacturing company specialising in telecom passive power and battery energy storage solutions. Lineage Power designs, engineers and manufactures high-availability DC power systems, hybrid platforms and containerised Battery Energy Storage Systems (BESS) for telecom operators, data centres, utilities and renewable energy projects. Combining advanced manufacturing capabilities, engineering expertise and integrated lifecycle services, the company delivers reliable power infrastructure solutions across India and select international markets.',
    link: 'https://lineagepower.com',
    linkText: 'Visit Official Website'
  },
  foundation: {
    title: 'Pace Foundation',
    sector: 'Philanthropic Arm',
    logo: 'assets/images/logo-transparent.png',
    desc: 'Pace Group established Pace Foundation as its philanthropic arm for coordinating and implementing its community initiatives.',
    link: 'https://pacedigitek.com',
    linkText: 'Visit Pace Group Website'
  },
  prepl: {
    title: 'Pace Renewable Energies Private Limited',
    sector: 'Clean Energy Partner',
    logo: 'assets/images/logo-prepl.png',
    desc: 'A dedicated renewable energy company accelerating solar power deployment and clean energy generation across rural and commercial India. Contributing alongside Pace Digitek through sustainable environmental practices, clean energy literacy, and community-centered ecological initiatives that leave a cleaner footprint for the future.',
    link: 'https://pacedigitek.com',
    linkText: 'Visit Official Website'
  }
};

window.openEntityModal = function(key, e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const data = entityData[key];
  if (!data) return;

  const modal = document.getElementById('entityModal');
  const titleEl = document.getElementById('entityModalTitle');
  const sectorEl = document.getElementById('entityModalSector');
  const logoEl = document.getElementById('entityModalLogo');
  const descEl = document.getElementById('entityModalDesc');
  const linkEl = document.getElementById('entityModalLink');
  const linkTextEl = document.getElementById('entityModalLinkText');

  if (titleEl) titleEl.textContent = data.title;
  if (sectorEl) sectorEl.textContent = data.sector;
  if (logoEl) logoEl.src = data.logo;
  if (descEl) descEl.textContent = data.desc;
  if (linkEl) linkEl.href = data.link;
  if (linkTextEl) linkTextEl.textContent = data.linkText || 'Visit Official Website';

  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
};

window.closeEntityModal = function() {
  const modal = document.getElementById('entityModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
};

// 2. Focus Themes: Bosch-Style Dropdowns / Accordions
window.toggleThemeAccordion = function(themeKey, e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const targetItem = document.getElementById('accordion-theme-' + themeKey);
  if (!targetItem) return;

  const isAlreadyActive = targetItem.classList.contains('active');
  const allItems = document.querySelectorAll('.theme-accordion-item');

  allItems.forEach(item => {
    item.classList.remove('active');
    const btn = item.querySelector('.accordion-header');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });

  if (!isAlreadyActive) {
    targetItem.classList.add('active');
    const btn = targetItem.querySelector('.accordion-header');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
};

// 3. Post-SDG Dropdowns (Governance & Oversight, Statutory Disclosures)
window.toggleDropdownSection = function(sectionKey, e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const targetItem = document.getElementById('accordion-' + sectionKey);
  if (!targetItem) return;

  const isExpanded = targetItem.classList.toggle('active');
  const btn = targetItem.querySelector('.accordion-header');
  if (btn) btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
};

// 4. Statutory Disclosures Company Switcher (Pace Digitek, LPPL, PREPL)
window.selectDisclosureCompany = function(compKey, e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const allButtons = document.querySelectorAll('.statutory-comp-btn');
  const allPanels = document.querySelectorAll('.statutory-comp-panel');

  allButtons.forEach(btn => {
    const isTarget = btn.id === ('btn-comp-' + compKey);
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  allPanels.forEach(panel => {
    const isTarget = panel.id === ('panel-comp-' + compKey);
    panel.classList.toggle('active', isTarget);
  });
};

// Legacy compatibility aliases
window.toggleThemeTab = window.toggleThemeAccordion;
window.switchStatutoryTab = window.selectDisclosureCompany;
window.selectEntityNode = window.openEntityModal;

// 5. Mobile Navigation Menu Toggle
window.toggleMobileMenu = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    const isOpen = navMenu.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
};

window.closeMobileMenu = function() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (navMenu) navMenu.classList.remove('open');
  if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
};

// 6. Photo Lightbox Modal
window.openLightbox = function(photoSrc, title, desc) {
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');

  if (!lightboxModal || !lightboxImg) return;
  lightboxImg.src = photoSrc;
  if (lightboxTitle) lightboxTitle.textContent = title || 'Infrastructure Photograph';
  if (lightboxDesc) lightboxDesc.textContent = desc || 'Pace Group Corporate Social Responsibility Field Initiative';
  lightboxModal.classList.add('active');
  lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const lightboxModal = document.getElementById('lightboxModal');
  if (!lightboxModal) return;
  lightboxModal.classList.remove('active');
  lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

// 6. Statutory Documents Data & Reader Modal
const statutoryDocs = {
  'pdl-policy': {
    title: 'CSR Policy Framework — Pace Digitek Limited',
    entity: 'Pace Digitek Limited (CIN: U74210KA2007PLC044390)',
    statutoryRef: 'Section 135(1) of Companies Act, 2013 & CSR Rules 2014',
    status: 'Board Approved • Active Statutory Policy',
    sections: [
      {
        heading: '1. Vision & Schedule VII Alignment',
        text: 'Pace Digitek Limited views Corporate Social Responsibility not as an external statutory compliance requirement, but as an integral commitment to inclusive Indian development. In accordance with Schedule VII of the Companies Act, 2013, our CSR programs focus on: (i) Promoting education through comprehensive turnkey civil infrastructure modernization of government primary and secondary schools; (ii) Strengthening public healthcare institutions and facilitating locomotor mobility assistive aids (wheelchairs) for differently-abled beneficiaries; and (iii) Formulating dignified senior citizen care infrastructure.'
      },
      {
        heading: '2. Budgetary Allocation & 2% Statutory Formula',
        text: 'Pursuant to Section 135(5) of the Act, the Company shall allocate at least 2% of the average net profits earned during the three immediately preceding financial years, computed strictly according to Section 198. Any surplus generated from CSR activities shall not form part of business profits and shall be immediately redeployed into the approved CSR fund.'
      },
      {
        heading: '3. Execution & Implementation Modalities',
        text: 'Programs are executed through direct corporate oversight and Pace Foundation as the dedicated philanthropic arm (bearing valid MCA CSR-1 registration). All contracts enforce direct vendor milestone payments, verified material quality certificates, and zero intermediary fee leakage.'
      },
      {
        heading: '4. Fiduciary Oversight & Impact Reporting',
        text: 'The CSR Committee conducts bi-annual physical inspection evaluations and tables statutory monitoring reports to the Board of Directors. The comprehensive Annual Report on CSR is incorporated into the annual Board Report.'
      }
    ]
  },
  'pdl-plan': {
    title: 'Annual Action Plan FY 2025–26 — Pace Digitek Limited',
    entity: 'Pace Digitek Limited',
    statutoryRef: 'Rule 5(2) of Companies (CSR Policy) Rules, 2014',
    status: 'Sanctioned by CSR Committee & Board of Directors',
    sections: [
      {
        heading: '1. Approved Projects & Physical Targets',
        text: '• Project Shiksha Infrastructure: Civil renovation, structural plastering, roof waterproofing, wall painting, and provision of dual benches across 3 Bengaluru government schools (Gangasandra, Ramohalli, Doddabasti).\n• Project Sugamya Mobility: Provision of 50 customized manual wheelchairs to locomotor-disabled individuals through Pragathi Charitable Trust, with an additional 50 units planned for phase 2.\n• Project Aarogya Support: Grants for pediatric and critical care vital monitoring instrumentation in public hospital wards.'
      },
      {
        heading: '2. Timelines & Fund Disbursement Schedule',
        text: 'Disbursements are phased across four quarters strictly linked to third-party civil inspection milestones and vendor installation proofs.'
      },
      {
        heading: '3. Monitoring & Impact Assessment',
        text: 'Quarterly review by the CSR Committee; site inspections by Pace Foundation officers; baseline vs endline evaluation of student enrollment metrics and beneficiary mobility independence.'
      }
    ]
  },
  'pdl-committee': {
    title: 'Composition of CSR Committee — Pace Digitek Limited',
    entity: 'Pace Digitek Limited',
    statutoryRef: 'Section 135(1) & (2) of Companies Act, 2013',
    status: 'Duly Constituted by Board of Directors',
    sections: [
      {
        heading: '1. Committee Charter & Statutory Duties',
        text: 'The Corporate Social Responsibility Committee is constituted pursuant to Section 135 of the Companies Act, 2013. Key duties include formulating and recommending the CSR Policy, formulating the Annual Action Plan, recommending fund outlays, and monitoring milestone progress.'
      },
      {
        heading: '2. Committee Members',
        text: '• Chairperson: Director & CSR Committee Head\n• Member: Whole-time Executive Director\n• Member: Independent Director (Fiduciary & Statutory Oversight)'
      },
      {
        heading: '3. Meeting Schedule & Reporting Mechanism',
        text: 'The Committee meets at minimum twice annually. Quorum requirements strictly follow statutory guidelines, and formal minutes are presented at subsequent Board of Directors meetings.'
      }
    ]
  },
  'lppl-policy': {
    title: 'CSR Policy Framework — Lineage Power Private Limited',
    entity: 'Lineage Power Private Limited (CIN: U31909KA2008PTC047321)',
    statutoryRef: 'Section 135(1) of Companies Act, 2013 & CSR Rules 2014',
    status: 'Board Approved • Active Statutory Policy',
    sections: [
      {
        heading: '1. Corporate Philosophy & Scope',
        text: 'Lineage Power Private Limited is committed to utilizing corporate resources to empower marginalized communities. The policy governs our shared philanthropic investments in school modernization, clean energy applications, and healthcare support in underserved regions.'
      },
      {
        heading: '2. Budgetary Outlay',
        text: 'Allocation of 2% average net profits under Section 198 of the Companies Act, 2013. Funds are dedicated entirely to non-commercial community projects.'
      },
      {
        heading: '3. Implementation & Governance',
        text: 'Programs are co-funded and executed via Pace Foundation, ensuring robust verification, audit trails, and zero diversion of charitable capital.'
      }
    ]
  },
  'lppl-plan': {
    title: 'Annual Action Plan FY 2025–26 — Lineage Power Private Limited',
    entity: 'Lineage Power Private Limited',
    statutoryRef: 'Rule 5(2) of Companies (CSR Policy) Rules, 2014',
    status: 'Sanctioned for FY 2025–26',
    sections: [
      {
        heading: '1. Approved Projects',
        text: '• Joint funding for school sanitation blocks and hygienic drinking water facilities.\n• Rural educational equipment and learning kits distribution.\n• Locomotor assistance and wheelchair co-sponsorship.'
      },
      {
        heading: '2. Disbursement Milestones',
        text: 'Direct vendor settlements following physical verification of completed civil and equipment works.'
      }
    ]
  },
  'lppl-committee': {
    title: 'Composition of CSR Committee — Lineage Power Private Limited',
    entity: 'Lineage Power Private Limited',
    statutoryRef: 'Section 135(1) & (2) of Companies Act, 2013',
    status: 'Board Constituted',
    sections: [
      {
        heading: '1. Charter & Responsibilities',
        text: 'Oversees CSR expenditure allocations, action plan execution, and ensures statutory compliance under Rule 5 of the Companies (CSR Policy) Rules, 2014.'
      },
      {
        heading: '2. Composition',
        text: 'Comprises executive leadership and designated board members ensuring statutory transparency and accountability.'
      }
    ]
  },
  'prepl-policy': {
    title: 'CSR Policy Framework — Pace Renewable Energies Private Limited',
    entity: 'Pace Renewable Energies Private Limited',
    statutoryRef: 'Section 135(1) of Companies Act, 2013 & CSR Rules 2014',
    status: 'Board Approved • Active Statutory Policy',
    sections: [
      {
        heading: '1. Sustainable Energy & Community Scope',
        text: 'Pace Renewable Energies Private Limited channels CSR contributions toward environmental sustainability, rural clean energy support, and school infrastructure improvements in rural Karnataka.'
      },
      {
        heading: '2. Statutory Spending Formula',
        text: 'In full accordance with Section 135(5), allocating 2% of statutory net profits toward Schedule VII initiatives.'
      }
    ]
  },
  'prepl-plan': {
    title: 'Annual Action Plan FY 2025–26 — Pace Renewable Energies',
    entity: 'Pace Renewable Energies Private Limited',
    statutoryRef: 'Rule 5(2) of Companies (CSR Policy) Rules, 2014',
    status: 'Sanctioned for FY 2025–26',
    sections: [
      {
        heading: '1. Sanctioned Allocations',
        text: '• Co-funding of civil repairs and solar lighting readiness in rural educational institutions.\n• Contribution to regional community health initiatives and mobility equipment.'
      }
    ]
  },
  'prepl-committee': {
    title: 'Composition of CSR Committee — Pace Renewable Energies',
    entity: 'Pace Renewable Energies Private Limited',
    statutoryRef: 'Section 135(1) & (2) of Companies Act, 2013',
    status: 'Board Constituted',
    sections: [
      {
        heading: '1. Mandate & Oversight',
        text: 'Formulates and monitors project-level allocations and ensures transparent reporting in the Directors Report.'
      }
    ]
  },
  'privacy': {
    title: 'Statutory Transparency & Public Disclosure Notice',
    entity: 'Pace Group Corporate Social Responsibility (PDL, LPPL, PREPL)',
    statutoryRef: 'Companies Act 2013 & Information Technology Act 2000',
    status: 'Public Information Notice',
    sections: [
      {
        heading: '1. Statutory Public Disclosure Commitment',
        text: 'In adherence to Rule 9 of the Companies (Corporate Social Responsibility Policy) Rules, 2014, all Board-approved CSR policies, project approvals, action plans, and committee details are published openly on this website for public access and statutory transparency.'
      },
      {
        heading: '2. Privacy & Data Handling',
        text: 'Pace Foundation does not collect, commercialize, or share personal visitor data. Inquiries received via csr@pacedigitek.com are utilized strictly for official correspondence, grievance resolution, or audit documentation.'
      },
      {
        heading: '3. Grievance Redressal & Official Nodal Officer',
        text: 'Stakeholders, partners, and community members may submit formal grievances, verification requests, or inquiries to the CSR Nodal Officer at csr@pacedigitek.com.'
      }
    ]
  }
};

let currentActiveDocKey = 'pdl-policy';

window.openDocModal = function(docKey) {
  const docModal = document.getElementById('docModal');
  const docModalTitle = document.getElementById('docModalTitle');
  const docModalBody = document.getElementById('docModalBody');

  if (!docModal) return;
  const docData = statutoryDocs[docKey] || statutoryDocs['pdl-policy'];
  currentActiveDocKey = docKey;

  if (docModalTitle) docModalTitle.textContent = docData.title;

  let bodyHtml = `
    <div class="doc-meta-banner">
      <div><strong>Entity:</strong> ${docData.entity}</div>
      <div><strong>Statutory Basis:</strong> ${docData.statutoryRef}</div>
      <div><strong>Status:</strong> ${docData.status}</div>
    </div>
  `;

  docData.sections.forEach(sec => {
    bodyHtml += `
      <h4>${sec.heading}</h4>
      <p>${sec.text.replace(/\n/g, '<br>')}</p>
    `;
  });

  if (docModalBody) docModalBody.innerHTML = bodyHtml;
  docModal.classList.add('active');
  docModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeDocModal = function() {
  const docModal = document.getElementById('docModal');
  if (!docModal) return;
  docModal.classList.remove('active');
  docModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

window.downloadDocSummary = function(docKey) {
  const docData = statutoryDocs[docKey] || statutoryDocs[currentActiveDocKey] || statutoryDocs['pdl-policy'];
  let content = `=========================================================================\n`;
  content += `${docData.title.toUpperCase()}\n`;
  content += `Pace Group Corporate Social Responsibility\n`;
  content += `=========================================================================\n\n`;
  content += `Corporate Entity: ${docData.entity}\n`;
  content += `Statutory Mandate: ${docData.statutoryRef}\n`;
  content += `Status: ${docData.status}\n`;
  content += `Date of Public Disclosure: FY 2025-26\n\n`;
  content += `-------------------------------------------------------------------------\n\n`;

  docData.sections.forEach(sec => {
    content += `${sec.heading}\n`;
    content += `${sec.text}\n\n`;
  });

  content += `-------------------------------------------------------------------------\n`;
  content += `Verified by CSR Committee & Secretariat, Pace Digitek Limited / Pace Foundation\n`;
  content += `Official Inquiries: csr@pacedigitek.com | +91 80 4040 4040\n`;
  content += `=========================================================================\n`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${docKey || 'statutory-disclosure'}-pace-csr.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ==================== APP INITIALIZER ====================
function initPaceApp() {
  // 0. Keep the footer copyright year current
  const copyrightYear = document.getElementById('copyrightYear');
  if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();

  // 1. Sticky Header
  const header = document.getElementById('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Menu links auto-close
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.querySelectorAll('.nav-link, .nav-cta-wrapper a').forEach(link => {
      link.addEventListener('click', () => {
        window.closeMobileMenu();
      });
    });
  }

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    const mobileToggle = document.getElementById('mobileToggle');
    if (navMenu && mobileToggle && !navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
      window.closeMobileMenu();
    }
  });

  // 3. Document Modal close buttons
  const docModalClose = document.getElementById('docModalClose');
  const docModalBackdrop = document.getElementById('docModalBackdrop');
  const docModalPrintBtn = document.getElementById('docModalPrintBtn');
  const docModalDownloadBtn = document.getElementById('docModalDownloadBtn');

  if (docModalClose) docModalClose.addEventListener('click', window.closeDocModal);
  if (docModalBackdrop) docModalBackdrop.addEventListener('click', window.closeDocModal);

  if (docModalPrintBtn) {
    docModalPrintBtn.addEventListener('click', () => { window.print(); });
  }

  if (docModalDownloadBtn) {
    docModalDownloadBtn.addEventListener('click', () => { window.downloadDocSummary(currentActiveDocKey); });
  }

  // 4. Lightbox close buttons
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  if (lightboxClose) lightboxClose.addEventListener('click', window.closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', window.closeLightbox);

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeEntityModal();
      window.closeLightbox();
      window.closeDocModal();
    }
  });

  // 5. Photo ribbon clicks
  document.querySelectorAll('.ribbon-item').forEach(item => {
    item.addEventListener('click', () => {
      const photo = item.getAttribute('data-photo');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      if (photo) window.openLightbox(photo, title, desc);
    });
  });

  // 6. Media preview clicks
  document.querySelectorAll('.media-preview-card img, .media-thumb').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      const img = el.tagName === 'IMG' ? el : el.querySelector('img');
      const caption = el.parentElement.querySelector('.media-caption, span');
      if (img) {
        window.openLightbox(img.src, caption ? caption.textContent : 'Pace CSR Project Photo', 'On-ground infrastructure upgrade');
      }
    });
  });

  // 7. Focus Card Accordion Keyboard Support
  document.querySelectorAll('.theme-square-card').forEach(header => {
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = header.id.replace('card-', '');
        window.toggleThemeTab(key);
      }
    });
  });

  // 8. Global Anchor Smooth Scrolling & Deep Linking
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const themeTarget = this.getAttribute('data-theme');
      const tabTarget = this.getAttribute('data-tab');

      // Theme link
      if (themeTarget) {
        e.preventDefault();
        const targetCard = document.getElementById(themeTarget);
        if (targetCard) {
          window.expandFocusCard(targetCard);
          const navHeight = header ? header.offsetHeight : 70;
          const targetPos = targetCard.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
        return;
      }

      // Tab link
      if (tabTarget) {
        e.preventDefault();
        window.switchStatutoryTab(tabTarget);
        const docSection = document.getElementById('documents');
        if (docSection) {
          const navHeight = header ? header.offsetHeight : 70;
          const targetPos = docSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
        return;
      }

      // If anchor is for modal, let modal open
      if (targetId === '#docModal' || targetId === '#lightboxModal') {
        return;
      }

      // Default smooth scroll
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = header ? header.offsetHeight : 70;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // 9. Participating Entities Diagram Hover & Keyboard Support
  const allSatNodes = document.querySelectorAll('.entity-satellite-node');
  allSatNodes.forEach(node => {
    const key = node.id.replace('node-', '');
    const spoke = document.getElementById('spoke-' + key);
    const joint = document.getElementById('joint-' + key);

    node.addEventListener('mouseenter', () => {
      if (spoke) spoke.classList.add('hovered');
      if (joint) joint.classList.add('hovered');
    });

    node.addEventListener('mouseleave', () => {
      if (spoke) spoke.classList.remove('hovered');
      if (joint) joint.classList.remove('hovered');
    });

    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.selectEntityNode(key, e);
      }
    });
  });

  const hubNode = document.getElementById('node-pdl');
  if (hubNode) {
    hubNode.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.selectEntityNode('pdl', e);
      }
    });
  }
}

// Inline onclick handles explicit click events with zero duplicate triggers.

// Run initializer
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPaceApp);
} else {
  initPaceApp();
}
