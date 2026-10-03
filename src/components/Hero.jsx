import React, { useRef, useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mascot } from 'page-mascot';

export default function Hero() {
  const { personal } = portfolioData;

  const stageWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const sheenRef = useRef(null);

  useEffect(() => {
    const stageWrapper = stageWrapperRef.current;
    const container = containerRef.current;
    const sheen = sheenRef.current;
    if (!stageWrapper || !container) return;

    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let sheenX = 50;
    let sheenY = 50;
    let targetSheenX = 50;
    let targetSheenY = 50;
    let isHovered = false;
    let isTouchActive = false;
    let rafId = null;
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (!isVisible && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (isVisible && !rafId && (isHovered || isTouchActive)) {
        startLoop();
      }
    }, { threshold: 0.1 });
    observer.observe(stageWrapper);

    const handlePointerCoords = (clientX, clientY) => {
      if (prefersReducedMotion || !isVisible) return;

      const rect = container.getBoundingClientRect();
      const clampedX = Math.max(-1, Math.min(1, ((clientX - rect.left) / rect.width) * 2 - 1));
      const clampedY = Math.max(-1, Math.min(1, ((clientY - rect.top) / rect.height) * 2 - 1));

      targetRotateY = clampedX * 5;
      targetRotateX = -clampedY * 5;
      targetSheenX = 50 + clampedX * 35;
      targetSheenY = 50 + clampedY * 35;
      if (!rafId) startLoop();
    };

    const onPointerMove = (e) => {
      if (e.pointerType !== 'touch') {
        handlePointerCoords(e.clientX, e.clientY);
      }
    };

    const onPointerEnter = (e) => {
      if (e.pointerType === 'touch') return;
      isHovered = true;
    };

    const resetTargets = () => {
      isHovered = false;
      targetRotateX = 0;
      targetRotateY = 0;
      targetSheenX = 50;
      targetSheenY = 50;
      if (isVisible && !rafId && !prefersReducedMotion) startLoop();
    };

    const onTouchStart = (e) => {
      isTouchActive = true;
      if (e.touches.length > 0) {
        handlePointerCoords(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        handlePointerCoords(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchEnd = () => {
      isTouchActive = false;
      resetTargets();
    };

    container.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerenter', onPointerEnter);
    container.addEventListener('pointerleave', resetTargets);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    container.addEventListener('touchcancel', onTouchEnd, { passive: true });

    const startLoop = () => {
      const render = () => {
        if (!isVisible) {
          rafId = null;
          return;
        }

        const lerp = 0.12;
        currentRotateX += (targetRotateX - currentRotateX) * lerp;
        currentRotateY += (targetRotateY - currentRotateY) * lerp;
        sheenX += (targetSheenX - sheenX) * lerp;
        sheenY += (targetSheenY - sheenY) * lerp;

        const settled =
          Math.abs(currentRotateX - targetRotateX) < 0.01 &&
          Math.abs(currentRotateY - targetRotateY) < 0.01 &&
          Math.abs(sheenX - targetSheenX) < 0.1 &&
          Math.abs(sheenY - targetSheenY) < 0.1;
        if (settled) {
          currentRotateX = targetRotateX;
          currentRotateY = targetRotateY;
          sheenX = targetSheenX;
          sheenY = targetSheenY;
        }

        const finalX = currentRotateX.toFixed(2);
        const finalY = currentRotateY.toFixed(2);
        const scale = isHovered ? 1.025 : 1;

        container.style.transform = `perspective(1000px) rotateX(${finalX}deg) rotateY(${finalY}deg) scale3d(${scale}, ${scale}, ${scale})`;

        if (sheen) {
          sheen.style.background = `radial-gradient(circle at ${sheenX.toFixed(1)}% ${sheenY.toFixed(1)}%, rgba(0, 242, 254, 0.18) 0%, rgba(255, 255, 255, 0.08) 35%, transparent 70%)`;
        }

        if (settled) {
          rafId = null;
          return;
        }
        rafId = requestAnimationFrame(render);
      };

      rafId = requestAnimationFrame(render);
    };

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerenter', onPointerEnter);
      container.removeEventListener('pointerleave', resetTargets);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        {/* Left: Persona & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            <span>FULL STACK &amp; GENAI ENGINEER</span>
          </div>

          <h1 className="hero-name">{personal.name}</h1>

          <div className="hero-title">
            Building <span className="text-cyan-gradient">high-performance web systems</span> &amp; <span className="text-emerald-gradient">practical AI workflows</span>.
          </div>

          <p className="hero-statement">
            Engineering distributed web platforms, real-time algorithmic simulators, and autonomous RAG agent architectures with strict performance and zero bloat.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Get in Touch</span>
            </a>
          </div>

          <div className="hero-social-row">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="GitHub Profile"
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
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="Twitter Profile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter</span>
            </a>
          </div>

          <div className="hero-metrics">
            {personal.metrics.map((m, idx) => (
              <div key={idx} className="metric-item">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CORE CYBERNETIC AVATAR SHOWCASE (STATIC WEBP) */}
        <div className="subject-showcase" id="hero-avatar-showcase">
          <div className="subject-stage-wrapper" id="stage-wrapper" ref={stageWrapperRef}>
            <div className="subject-ambient-glow"></div>


            {/* Bottom Floating Telemetry Badge */}
            <div className="hud-badge-br">
              <div className="hud-pill">
                <span id="telemetry-fps">ENG // GURUGRAM, IN</span>
              </div>
            </div>

            {/* Subject Avatar Container */}
            <div className="subject-frame-container" id="subject-frame-container" ref={containerRef}>
              {/* 4 Cybernetic HUD Corner Brackets */}
              <div className="frame-corner frame-corner-tl"></div>
              <div className="frame-corner frame-corner-tr"></div>
              <div className="frame-corner frame-corner-bl"></div>
              <div className="frame-corner frame-corner-br"></div>

              {/* Cyber HUD Top Strip inside frame */}
              <div className="frame-cyber-header">
                <div className="frame-cyber-tag">
                  <span className="cyber-pulse-dot"></span>
                  <span>RAJAT SHARMA</span>
                </div>
                <div className="cyber-sys-badge">FULL-STACK / AI</div>
              </div>

              {/* Static Avatar Master Image - Explicitly Rendering WebP */}
              <img
                id="hero-avatar-image"
                className="subject-avatar-img"
                src={personal.avatarImage}
                alt="Rajat Sharma — Full Stack Engineer & GenAI Developer"
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.src = '/images/avatar_master.jpg';
                }}
              />

              <div className="hero-mascot">
                <Mascot
                  directions="/mascots/cat-directions.webp"
                  reactions="/mascots/cat-reactions.webp"
                  size={153}
                  label="storybook cat"
                  className="hero-mascot-button"
                />
              </div>

              {/* Dynamic Holographic Specular Sheen & Scanlines */}
              <div className="frame-sheen-overlay" id="frame-sheen-overlay" ref={sheenRef}></div>
              <div className="subject-scanline-overlay"></div>

              {/* Cyber HUD Bottom Strip inside frame */}
              <div className="frame-cyber-footer">
                <span className="frame-footer-coords">28.4595° N, 77.0266° E</span>
                <span>GURUGRAM, INDIA</span>
              </div>
            </div>
          </div>

          {/* Telemetry Status Bar */}
          <div className="subject-telemetry">
            <div className="telemetry-item">
              <span className="telemetry-label">DISCIPLINE</span>
              <span className="telemetry-value">Full Stack &amp; GenAI</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">SYSTEMS</span>
              <span className="telemetry-value">&lt; 15ms Response</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">STATUS</span>
              <span className="telemetry-value">Available for Roles</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">CORE STACK</span>
              <span className="telemetry-value">TypeScript / Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
