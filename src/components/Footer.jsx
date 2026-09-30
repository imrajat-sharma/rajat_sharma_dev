import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-copy">
          © {new Date().getFullYear()} Rajat Sharma. Built with React, Vanilla CSS &amp; Vite.
        </div>
        <div className="footer-links">
          <a href="#hero" className="footer-link">Top of Page</a>
          <a
            href="https://github.com/imrajat-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/imrajat-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
