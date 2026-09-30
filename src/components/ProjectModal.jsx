import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Project Modal"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-header">
          <span className="project-category">{project.categoryLabel}</span>
          <h3 className="modal-title" style={{ marginTop: '0.25rem' }}>{project.title}</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Explicit WebP Project Image Render */}
          <div className="project-preview-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/images/avatar_master.webp';
              }}
            />
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.65' }}>
            {project.description}
          </p>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '1.15rem', borderRadius: '10px' }}>
            <h4 style={{ color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.825rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              KEY ARCHITECTURAL HIGHLIGHTS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.features.map((f, idx) => (
                <li key={idx} style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--emerald-accent)', flexShrink: 0 }}>✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-tag">{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
