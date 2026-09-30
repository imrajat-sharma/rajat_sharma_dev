import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'systems', label: 'Systems & Algorithms' },
    { id: 'ai', label: 'GenAI & RAG' },
    { id: 'fullstack', label: 'Full-Stack Apps' },
  ];

  const filteredProjects = portfolioData.projects.filter(p => 
    filter === 'all' || p.category === filter
  );

  const featured = filteredProjects.filter(p => p.featured);
  const secondary = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span>ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real web applications, algorithmic simulators, and GenAI workflows with production code.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${filter === tab.id ? 'active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Container */}
        <div className="projects-container">
          {/* Featured Projects List */}
          {featured.length > 0 && (
            <div className="projects-featured-list">
              {featured.map((p) => (
                <article key={p.id} className="project-card-featured" style={{ marginBottom: '2rem' }}>
                  {/* Media / Preview Wrap - Explicit WebP Image */}
                  <div className="project-preview-wrap">
                    <img
                      className="project-img"
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/images/avatar_master.webp';
                      }}
                    />
                    <span className="project-badge-featured">★ Featured Project</span>
                  </div>

                  {/* Content Column */}
                  <div className="project-info">
                    <div>
                      <div className="project-header-row">
                        <span className="project-category">{p.categoryLabel}</span>
                      </div>
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-desc">{p.tagline}</p>

                      <div className="project-features">
                        {p.features.slice(0, 3).map((f, idx) => (
                          <div key={idx} className="feature-bullet">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="project-tech-tags">
                        {p.tech.map((t, idx) => (
                          <span key={idx} className="tech-tag">{t}</span>
                        ))}
                      </div>

                      <div className="project-actions">
                        {p.liveUrl && p.liveUrl !== '#' && (
                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                            <span>Live Demo</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span>Source Code</span>
                        </a>
                        <button
                          type="button"
                          className="btn btn-outline btn-sm btn-inspect-proj"
                          onClick={() => setSelectedProject(p)}
                        >
                          <span>System Specs</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Secondary Projects Grid */}
          {secondary.length > 0 && (
            <div className="projects-secondary-grid">
              {secondary.map((p) => (
                <article key={p.id} className="project-card-standard">
                  {/* Media Wrap - Explicit WebP Image */}
                  <div className="project-preview-wrap">
                    <img
                      className="project-img"
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/images/avatar_master.webp';
                      }}
                    />
                  </div>
                  <span className="project-category">{p.categoryLabel}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.tagline}</p>

                  <div className="project-tech-tags" style={{ marginTop: 'auto' }}>
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions" style={{ marginTop: '1rem' }}>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Repository</span>
                    </a>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm btn-inspect-proj"
                      onClick={() => setSelectedProject(p)}
                    >
                      <span>Details</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
