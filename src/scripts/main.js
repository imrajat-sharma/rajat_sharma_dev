import { portfolioData } from './data.js';
import { InteractiveSubject } from './interactiveSubject.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Interactive Avatar Showcase
  new InteractiveSubject();

  // Render UI Sections
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCertifications();
  setupNavigation();
  setupEmailCopy();
  setupProjectModal();
});

/* ----------------------------------------------------
   1. Render Skills (Categorized, SVG logos, NO PERCENTAGES)
   ---------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const html = portfolioData.skills.map(cat => `
    <div class="skill-category-card" data-category="${cat.id}">
      <div class="category-header">
        <h3 class="category-title">
          <span>${cat.category}</span>
        </h3>
        <span class="category-badge">${cat.badge}</span>
      </div>
      <div class="skill-items-grid">
        ${cat.items.map(item => `
          <div class="skill-card">
            <div class="skill-icon-wrap">
              <img src="${item.icon}" alt="${item.name} logo" loading="lazy" onerror="this.src='/images/avatar_master.webp'" />
            </div>
            <div class="skill-info">
              <span class="skill-name">${item.name}</span>
              <span class="skill-subtext">${item.subtext}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = html;

  // Category filter tabs
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-filter');

      document.querySelectorAll('.skill-category-card').forEach(card => {
        if (target === 'all' || card.getAttribute('data-category') === target) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ----------------------------------------------------
   2. Render Projects (Featured + Secondary + Filter)
   ---------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container) return;

  const featured = portfolioData.projects.filter(p => p.featured);
  const secondary = portfolioData.projects.filter(p => !p.featured);

  let html = `
    <!-- Featured Projects -->
    <div class="projects-featured-list">
      ${featured.map(p => `
        <article class="project-card-featured" data-category="${p.category}">
          <div class="project-preview-wrap">
            <img class="project-img" src="${p.image}" alt="${p.title}" loading="lazy" />
            <span class="project-badge-featured">★ Featured Project</span>
          </div>
          <div class="project-info">
            <div>
              <div class="project-header-row">
                <span class="project-category">${p.categoryLabel}</span>
              </div>
              <h3 class="project-title">${p.title}</h3>
              <p class="project-desc">${p.tagline}</p>

              <div class="project-features">
                ${p.features.slice(0, 3).map(f => `
                  <div class="feature-bullet">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div>
              <div class="project-tech-tags">
                ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
              </div>

              <div class="project-actions">
                ${p.liveUrl && p.liveUrl !== '#' ? `
                  <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                    <span>Live Demo</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                ` : ''}
                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>Source Code</span>
                </a>
                <button class="btn btn-outline btn-sm btn-inspect-proj" data-id="${p.id}">
                  <span>System Specs</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      `).join('')}
    </div>

    <!-- Secondary Projects Grid -->
    <div class="projects-secondary-grid">
      ${secondary.map(p => `
        <article class="project-card-standard" data-category="${p.category}">
          <div class="project-preview-wrap">
            <img class="project-img" src="${p.image}" alt="${p.title}" loading="lazy" />
          </div>
          <span class="project-category">${p.categoryLabel}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.tagline}</p>
          <div class="project-tech-tags" style="margin-top:auto;">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions" style="margin-top: 1rem;">
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>Repository</span>
            </a>
            <button class="btn btn-outline btn-sm btn-inspect-proj" data-id="${p.id}">
              <span>Details</span>
            </button>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-filter');

      document.querySelectorAll('[data-category]').forEach(card => {
        if (target === 'all' || card.getAttribute('data-category') === target) {
          card.style.display = card.classList.contains('project-card-featured') ? 'grid' : 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ----------------------------------------------------
   3. Render Experience Timeline
   ---------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  const html = portfolioData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-node">
        <div class="timeline-node-inner"></div>
      </div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-role">${exp.role}</h3>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-org">${exp.organization} • ${exp.location}</p>
        <ul class="timeline-bullets">
          ${exp.bullets.map(b => `<li class="timeline-bullet">${b}</li>`).join('')}
        </ul>
        <div class="timeline-tech-row">
          ${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

/* ----------------------------------------------------
   4. Render Education Cards
   ---------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById('education-grid');
  if (!container) return;

  const html = portfolioData.education.map(edu => `
    <div class="education-card">
      <div class="edu-badge-row">
        <span class="edu-year">${edu.period}</span>
      </div>
      <h3 class="edu-degree">${edu.degree}</h3>
      <p class="edu-institution">${edu.institution}</p>
      <p class="edu-desc">${edu.description}</p>
      <div class="edu-coursework-title">Key Core Coursework</div>
      <div class="edu-coursework-tags">
        ${edu.coursework.map(c => `<span class="course-tag">${c}</span>`).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

/* ----------------------------------------------------
   5. Render Certifications
   ---------------------------------------------------- */
function renderCertifications() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  const html = portfolioData.certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-icon-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
      </div>
      <div class="cert-content">
        <h4 class="cert-title">${cert.title}</h4>
        <span class="cert-issuer">Issued by: ${cert.issuer}</span>
        ${cert.url && cert.url !== '#' ? `
          <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="cert-link">
            <span>Verify Credential</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

/* ----------------------------------------------------
   6. Navigation & Active Section Tracking
   ---------------------------------------------------- */
function setupNavigation() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-drawer-links a');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Sticky Navbar Blur & Shrink on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Intersection Observer for active nav links
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));

  // Mobile Drawer Toggle
  if (mobileToggle && mobileDrawer) {
    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    const openDrawer = () => {
      mobileDrawer.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeDrawer();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }
}

/* ----------------------------------------------------
   7. Email Quick Copy & Toast
   ---------------------------------------------------- */
function setupEmailCopy() {
  const btn = document.getElementById('btn-copy-email');
  const toast = document.getElementById('copy-toast');
  const email = portfolioData.personal.email;

  if (btn) {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>Copied!</span>`;
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2200);
        }
        setTimeout(() => {
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> <span>Copy Email</span>`;
        }, 2000);
      });
    });
  }
}

/* ----------------------------------------------------
   8. Project Details Modal
   ---------------------------------------------------- */
function setupProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  const closeBtn = document.getElementById('modal-close-project');
  const titleEl = document.getElementById('project-modal-title');
  const bodyEl = document.getElementById('project-modal-body');

  if (!modal) return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-inspect-proj');
    if (!btn) return;
    const projId = btn.getAttribute('data-id');
    const proj = portfolioData.projects.find(p => p.id === projId);
    if (!proj) return;

    if (titleEl) titleEl.textContent = proj.title;
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          <img src="${proj.image}" alt="${proj.title}" style="width:100%; border-radius:12px; border:1px solid rgba(255,255,255,0.1);" />
          <p style="color:#cbd5e1; font-size:1rem; line-height:1.7;">${proj.description}</p>
          <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:1rem; border-radius:8px;">
            <h4 style="color:#00f2fe; font-family:var(--font-mono); font-size:0.85rem; margin-bottom:0.75rem;">KEY ARCHITECTURAL HIGHLIGHTS</h4>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.4rem;">
              ${proj.features.map(f => `<li style="font-size:0.85rem; color:#94a3b8; display:flex; gap:0.5rem;"><span style="color:#10b981;">✔</span> ${f}</li>`).join('')}
            </ul>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:0.45rem;">
            ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;
    }

    modal.classList.add('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });
}
