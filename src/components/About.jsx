import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <span>ENGINEERING IDENTITY</span>
          </div>
          <h2 className="section-title">About My Work</h2>
          <p className="section-subtitle">
            Bridging full-stack system architecture with practical Generative AI pipelines.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Narrative */}
          <div className="about-narrative">
            <p className="about-intro-lead">
              I am a Full Stack Developer &amp; GenAI Engineer driven by crafting resilient, high-speed applications that solve concrete engineering problems.
            </p>
            <p className="about-text">
              My core foundation is built on modern JavaScript/TypeScript, React/Next.js, Node.js, and Python. I have designed algorithms for operating systems simulations, built high-throughput REST APIs with MongoDB &amp; Redis, and architected retrieval-augmented generation (RAG) agent systems.
            </p>
            <p className="about-text">
              I believe in clean system design, thoughtful UX, strict type safety, and radical performance — writing code that stays fast and stable under constraint.
            </p>

            <div className="about-highlights">
              <div className="highlight-box">
                <div className="highlight-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  <span>GenAI &amp; Agentic AI</span>
                </div>
                <p className="highlight-desc">
                  Building LangChain pipelines, semantic vector retrieval (RAG), and autonomous function calling agents.
                </p>
              </div>

              <div className="highlight-box">
                <div className="highlight-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="14" x2="23" y2="14" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="14" x2="4" y2="14" />
                  </svg>
                  <span>Systems &amp; Performance</span>
                </div>
                <p className="highlight-desc">
                  Deep knowledge in concurrency, CPU process scheduling policies, memory caching, and sub-100ms response targets.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Card */}
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">rajat@system:~</span>
            </div>

            {/* Developer Identity Strip Rendering rajat_avatar_square.webp */}
            <div className="terminal-user-strip">
              <div className="terminal-avatar-wrapper">
                <img
                  src="/images/rajat_avatar_square.webp"
                  alt="Rajat Sharma developer portrait"
                  className="terminal-avatar"
                  width="48"
                  height="48"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.src = '/images/rajat_photo.webp';
                    e.currentTarget.onerror = () => {
                      e.currentTarget.src = '/images/avatar_master.webp';
                    };
                  }}
                />
                <span className="terminal-avatar-status" title="Status: Online"></span>
              </div>
              <div className="terminal-user-meta">
                <div className="terminal-user-meta-top">
                  <span className="terminal-user-name">Rajat Sharma</span>
                  <span className="terminal-badge-live">LIVE</span>
                </div>
                <span className="terminal-user-tag">@imrajat-sharma // Full Stack &amp; GenAI</span>
              </div>
            </div>

            <div className="terminal-body">
              <div className="terminal-row">
                <span className="t-prompt">$</span>
                <span className="t-cmd">whoami</span>
              </div>
              <div className="terminal-row">
                <span className="t-key">Identity:</span>
                <span className="t-val">Rajat Sharma</span>
              </div>
              <div className="terminal-row">
                <span className="t-key">Role:</span>
                <span className="t-val highlight">Full Stack Engineer &amp; GenAI Developer</span>
              </div>
              <div className="terminal-row">
                <span className="t-key">Location:</span>
                <span className="t-val">Gurugram, Haryana, India</span>
              </div>
              <div className="terminal-row">
                <span className="t-key">Education:</span>
                <span className="t-val">Gurugram University (MCA &amp; BCA)</span>
              </div>

              <div className="terminal-row" style={{ marginTop: '1rem' }}>
                <span className="t-prompt">$</span>
                <span className="t-cmd">cat focus.json</span>
              </div>
              <div className="terminal-row">
                <span className="t-key">Current:</span>
                <span className="t-val">LangChain, Multi-Agent Systems, System Design</span>
              </div>
              <div className="terminal-row">
                <span className="t-key">Mindset:</span>
                <span className="t-val highlight">Build things that are useful and blisteringly fast.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
