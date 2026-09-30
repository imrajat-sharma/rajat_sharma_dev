import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'ai', label: 'Generative AI' },
    { id: 'databases', label: 'Databases & Cache' },
    { id: 'devops', label: 'DevOps & Tools' },
  ];

  const visibleCategories = portfolioData.skills.filter(cat => 
    filter === 'all' || cat.id === filter
  );

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="section-title">Skills &amp; Technology Stack</h2>
          <p className="section-subtitle">
            Categorized technologies and runtime environments I use to build production systems.
          </p>
        </div>

        <div className="skills-container">
          {/* Filter Tabs */}
          <div className="skill-tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`skill-tab-btn ${filter === tab.id ? 'active' : ''}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="skills-categories-wrapper">
            {visibleCategories.map((cat) => (
              <div key={cat.id} className="skill-category-card">
                <div className="category-header">
                  <h3 className="category-title">
                    <span>{cat.category}</span>
                  </h3>
                  <span className="category-badge">{cat.badge}</span>
                </div>

                <div className="skill-items-grid">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="skill-card">
                      <div className="skill-icon-wrap">
                        <img
                          src={item.icon}
                          alt={`${item.name} logo`}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = '/images/avatar_master.webp';
                          }}
                        />
                      </div>
                      <div className="skill-info">
                        <span className="skill-name">{item.name}</span>
                        <span className="skill-subtext">{item.subtext}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
