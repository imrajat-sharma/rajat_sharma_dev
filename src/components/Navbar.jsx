import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  // Handle scroll for sticky blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active link highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-brand" aria-label="Rajat Sharma Home">
          <img
            src="/images/avatar_master.webp"
            alt="Rajat Sharma"
            className="brand-avatar-img"
            width="34"
            height="34"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span>Rajat Sharma</span>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-indicator-text">Available</span>
          </div>

          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            id="mobile-toggle"
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(prev => !prev)}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        id="mobile-drawer"
        onClick={() => setMobileOpen(false)}
      >
        <ul className="mobile-drawer-links" onClick={(e) => e.stopPropagation()}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href.slice(1) ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.label}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--cyan-primary)' }}>→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-status">
            <span className="status-dot"></span>
            <span>Available for Select Engineering Roles</span>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/imrajat-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/imrajat-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
