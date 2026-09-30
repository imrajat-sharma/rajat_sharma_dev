import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const getCertIcon = (icon) => {
    switch (icon) {
      case 'react':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case 'award':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        );
      case 'server':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        );
      case 'database':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case 'layout':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        );
      case 'terminal':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        );
    }
  };

  return (
    <>
      {/* EDUCATION SECTION */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="section-title">Education Background</h2>
            <p className="section-subtitle">
              Academic degrees and computer science coursework from Gurugram University.
            </p>
          </div>

          <div className="education-grid">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="edu-badge-row">
                  <span className="edu-year">{edu.period}</span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-desc">{edu.description}</p>
                <div className="edu-coursework-title">Key Core Coursework</div>
                <div className="edu-coursework-tags">
                  {edu.coursework.map((c, cIdx) => (
                    <span key={cIdx} className="course-tag">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & CERTIFICATIONS */}
      <section id="achievements" className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              <span>CREDENTIALS</span>
            </div>
            <h2 className="section-title">Certifications &amp; Achievements</h2>
            <p className="section-subtitle">
              Verified professional coursework, agile management, and systems engineering certifications.
            </p>
          </div>

          <div className="achievements-grid">
            {portfolioData.certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-icon-box">
                  {getCertIcon(cert.icon)}
                </div>
                <div className="cert-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <span>View Credential</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
