/**
 * Interactive Avatar Showcase Controller
 * 
 * Provides ultra-smooth 3D card tilt, holographic specular sheen,
 * compass polar angle tracking, and touch/gyro responsive physics
 * for the static hero avatar image (/images/avatar_master.webp).
 */

export class InteractiveSubject {
  constructor(options = {}) {
    this.container = options.container || document.getElementById('subject-frame-container');
    this.stageWrapper = options.stageWrapper || document.getElementById('stage-wrapper') || document.querySelector('.subject-stage-wrapper');
    this.sheen = document.getElementById('frame-sheen-overlay');

    if (!this.container) return;

    // Motion parameters
    this.targetRotateX = 0;
    this.targetRotateY = 0;
    this.currentRotateX = 0;
    this.currentRotateY = 0;
    this.sheenX = 50;
    this.sheenY = 50;
    this.targetSheenX = 50;
    this.targetSheenY = 50;

    this.isHovered = false;
    this.isTouchActive = false;
    this.rafId = null;
    this.isVisible = true;

    // Check motion preferences
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    this.bindEvents();
    this.setupIntersectionObserver();
    this.startLoop();
  }

  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window) || !this.stageWrapper) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible && !this.rafId) {
          this.startLoop();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(this.stageWrapper);
  }

  bindEvents() {
    if (!this.stageWrapper) return;

    // Desktop pointer tracking across stage or window
    const handlePointerMove = (e) => {
      if (this.prefersReducedMotion || !this.isVisible) return;

      const rect = this.stageWrapper.getBoundingClientRect();
      const stageCenterX = rect.left + rect.width / 2;
      const stageCenterY = rect.top + rect.height / 2;

      // Distance from stage center (-1 to 1 normalized)
      const maxDistance = Math.max(window.innerWidth / 2, 400);
      const dx = (e.clientX - stageCenterX) / maxDistance;
      const dy = (e.clientY - stageCenterY) / maxDistance;

      const clampedX = Math.max(-1, Math.min(1, dx));
      const clampedY = Math.max(-1, Math.min(1, dy));

      // Perspective tilt (max 14 degrees)
      this.targetRotateY = clampedX * 14;
      this.targetRotateX = -clampedY * 14;

      // Sheen reflection position
      this.targetSheenX = 50 + clampedX * 40;
      this.targetSheenY = 50 + clampedY * 40;

      this.isHovered = true;
      if (!this.rafId) this.startLoop();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Stage hover state
    this.stageWrapper.addEventListener('pointerenter', () => {
      this.isHovered = true;
    });

    this.stageWrapper.addEventListener('pointerleave', () => {
      this.isHovered = false;
      this.targetRotateX = 0;
      this.targetRotateY = 0;
      this.targetSheenX = 50;
      this.targetSheenY = 50;
    });

    // Touch device support: touch drag tilts the avatar
    this.stageWrapper.addEventListener('touchstart', (e) => {
      this.isTouchActive = true;
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointerMove({ clientX: touch.clientX, clientY: touch.clientY });
      }
    }, { passive: true });

    this.stageWrapper.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointerMove({ clientX: touch.clientX, clientY: touch.clientY });
      }
    }, { passive: true });

    const endTouch = () => {
      this.isTouchActive = false;
      this.targetRotateX = 0;
      this.targetRotateY = 0;
      this.targetSheenX = 50;
      this.targetSheenY = 50;
    };

    this.stageWrapper.addEventListener('touchend', endTouch, { passive: true });
    this.stageWrapper.addEventListener('touchcancel', endTouch, { passive: true });

    // Optional device orientation (mobile gyroscope)
    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== 'function') {
      window.addEventListener('deviceorientation', (e) => {
        if (!this.isVisible || this.isHovered || this.isTouchActive) return;
        if (e.gamma !== null && e.beta !== null) {
          const gamma = Math.max(-30, Math.min(30, e.gamma)); // left to right [-90,90]
          const beta = Math.max(-30, Math.min(30, e.beta - 45)); // front back [-180,180]
          this.targetRotateY = (gamma / 30) * 10;
          this.targetRotateX = -(beta / 30) * 10;
          this.targetSheenX = 50 + (gamma / 30) * 35;
          this.targetSheenY = 50 + (beta / 30) * 35;
          if (!this.rafId) this.startLoop();
        }
      }, { passive: true });
    }
  }

  startLoop() {
    if (this.rafId) return;

    const render = (time) => {
      if (!this.isVisible) {
        this.rafId = null;
        return;
      }

      // Smooth interpolation (lerp)
      const lerpFactor = 0.08;
      this.currentRotateX += (this.targetRotateX - this.currentRotateX) * lerpFactor;
      this.currentRotateY += (this.targetRotateY - this.currentRotateY) * lerpFactor;
      this.sheenX += (this.targetSheenX - this.sheenX) * lerpFactor;
      this.sheenY += (this.targetSheenY - this.sheenY) * lerpFactor;

      // Subtle ambient breathing float when resting
      let ambientX = 0;
      let ambientY = 0;
      if (!this.isHovered && !this.isTouchActive && !this.prefersReducedMotion) {
        ambientX = Math.sin(time * 0.0015) * 1.5;
        ambientY = Math.cos(time * 0.0012) * 2;
      }

      const finalRotateX = (this.currentRotateX + ambientX).toFixed(2);
      const finalRotateY = (this.currentRotateY + ambientY).toFixed(2);

      // Apply 3D transform to cyber frame
      if (this.container) {
        const scale = this.isHovered ? 1.025 : 1;
        this.container.style.transform = `perspective(1000px) rotateX(${finalRotateX}deg) rotateY(${finalRotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      }

      // Update holographic reflection sheen
      if (this.sheen) {
        this.sheen.style.background = `radial-gradient(circle at ${this.sheenX.toFixed(1)}% ${this.sheenY.toFixed(1)}%, rgba(0, 242, 254, 0.18) 0%, rgba(255, 255, 255, 0.08) 35%, transparent 70%)`;
      }

      // Check if settled to sleep loop and save GPU cycles
      const diffX = Math.abs(this.targetRotateX - this.currentRotateX);
      const diffY = Math.abs(this.targetRotateY - this.currentRotateY);
      if (diffX < 0.01 && diffY < 0.01 && !this.isHovered && !this.isTouchActive && this.prefersReducedMotion) {
        this.rafId = null;
        return;
      }

      this.rafId = requestAnimationFrame(render);
    };

    this.rafId = requestAnimationFrame(render);
  }
}
