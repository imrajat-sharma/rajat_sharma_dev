import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>INITIATE CONTACT</span>
          </div>
          <h2 className="section-title">Let's Connect &amp; Collaborate</h2>
          <p className="section-subtitle">
            Interested in engineering collaboration, full-time roles, or tech consulting? Reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <h3 className="contact-heading">
              Always interested in high-impact technical challenges.
            </h3>
            <p className="contact-desc">
              Whether you are scaling web systems, looking for a passionate GenAI engineer, or wanting to discuss distributed systems and algorithms, my inbox is open.
            </p>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <div className="meta-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="meta-content">
                  <span className="meta-label">Location</span>
                  <span className="meta-val">{personal.location} (IST / UTC+5:30)</span>
                </div>
              </div>

              <div className="contact-meta-item">
                <div className="meta-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 14 14" />
                  </svg>
                </div>
                <div className="meta-content">
                  <span className="meta-label">Availability</span>
                  <span className="meta-val">{personal.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Direct Email & Profiles Card */}
          <div className="contact-card-box">
            <div>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Direct Email
              </label>
              <div className="email-copy-container" style={{ marginTop: '0.5rem' }}>
                <span className="email-text">{personal.email}</span>
                <button
                  type="button"
                  className="copy-btn"
                  id="btn-copy-email"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Social Profiles
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="social-pill"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Copied Toast */}
      <div
        id="copy-toast"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'rgba(16, 185, 129, 0.95)',
          color: '#fff',
          padding: '0.65rem 1.25rem',
          borderRadius: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          fontWeight: 600,
          opacity: copied ? 1 : 0,
          transform: copied ? 'translateY(0)' : 'translateY(10px)',
          pointerEvents: 'none',
          transition: 'all 0.25s ease',
          zIndex: 3000,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        }}
      >
        ✔ Email copied to clipboard!
      </div>
    </section>
  );
}
