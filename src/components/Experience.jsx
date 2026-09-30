import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>TRACK RECORD</span>
          </div>
          <h2 className="section-title">Experience &amp; Open Source</h2>
          <p className="section-subtitle">
            Production engineering initiatives, open source maintainership, and community contributions.
          </p>
        </div>

        <div className="timeline" id="experience-timeline">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node">
                <div className="timeline-node-inner"></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-org">{exp.organization} • {exp.location}</p>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="timeline-bullet">{b}</li>
                  ))}
                </ul>
                <div className="timeline-tech-row">
                  {exp.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
