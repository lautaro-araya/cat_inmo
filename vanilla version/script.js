/* =================================================================
   Loteo Pargua Sur · vanilla version
   Hero carousel, scroll nav shadow, mobile menu, stats counter,
   lightbox gallery, contact form, smooth scroll active link
   ================================================================= */

(function () {
  'use strict';

  /* -------- Hero carousel -------- */
  const slider = document.getElementById('slider');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const dotsWrap = document.getElementById('slider-dots');
    const dots = Array.from(dotsWrap.querySelectorAll('.dot'));
    const prev = document.getElementById('slider-prev');
    const next = document.getElementById('slider-next');
    let i = 0;
    let timer = null;
    const ROTATE = 6500;

    const goTo = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
      dots.forEach((d, k) => d.classList.toggle('is-active', k === i));
    };

    const advance = () => goTo(i + 1);
    const start = () => { stop(); timer = setInterval(advance, ROTATE); };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };

    prev.addEventListener('click', () => { goTo(i - 1); start(); });
    next.addEventListener('click', () => { goTo(i + 1); start(); });
    dots.forEach((d, k) => d.addEventListener('click', () => { goTo(k); start(); }));

    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);

    /* Keyboard arrows */
    document.addEventListener('keydown', (e) => {
      const lb = document.getElementById('lightbox');
      if (lb && lb.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') { goTo(i - 1); start(); }
      if (e.key === 'ArrowRight') { goTo(i + 1); start(); }
    });

    /* Touch swipe */
    let touchStart = null;
    slider.addEventListener('touchstart', (e) => { touchStart = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      if (touchStart == null) return;
      const dx = e.changedTouches[0].clientX - touchStart;
      if (Math.abs(dx) > 50) {
        if (dx < 0) { goTo(i + 1); } else { goTo(i - 1); }
        start();
      }
      touchStart = null;
    });

    start();
  }

  /* -------- Scroll nav shadow -------- */
  const navWrap = document.getElementById('nav-wrapper');
  if (navWrap) {
    const onScroll = () => {
      navWrap.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------- Mobile menu toggle -------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
    });
    navMenu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -------- Active link on scroll -------- */
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const setActive = () => {
      const y = window.scrollY + 140;
      let current = sections[0];
      for (const s of sections) {
        if (s.offsetTop <= y) current = s;
      }
      const id = '#' + current.id;
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === id));
    };
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  /* -------- Stats counter (scroll-triggered) -------- */
  const stats = document.querySelectorAll('.stat-num');
  if (stats.length && 'IntersectionObserver' in window) {
    const animate = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const fmt = el.dataset.format;
      const duration = 1700;
      const start = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = Math.round(target * eased);
        let out;
        if (fmt === 'thousand') {
          out = val.toLocaleString('es-CL');
        } else {
          out = val.toString();
        }
        el.textContent = out + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.done) {
          entry.target.dataset.done = '1';
          animate(entry.target);
        }
      });
    }, { threshold: 0.4 });

    stats.forEach((s) => io.observe(s));
  }

  /* -------- Lightbox -------- */
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');

  if (galleryItems.length && lb) {
    let lbIndex = 0;

    const open = (idx) => {
      lbIndex = idx;
      const a = galleryItems[idx];
      lbImg.src = a.getAttribute('href');
      lbImg.alt = a.querySelector('img').alt || '';
      lbCap.textContent = a.dataset.caption || '';
      lb.hidden = false;
      requestAnimationFrame(() => lb.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => { lb.hidden = true; lbImg.src = ''; }, 350);
    };
    const step = (delta) => open((lbIndex + delta + galleryItems.length) % galleryItems.length);

    galleryItems.forEach((a, idx) => {
      a.addEventListener('click', (e) => { e.preventDefault(); open(idx); });
    });
    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', () => step(-1));
    lbNext.addEventListener('click', () => step(1));
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });

    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
  }

  /* -------- Contact form -------- */
  const form = document.getElementById('contact-form');
  const formOk = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formOk) formOk.hidden = false;
      form.querySelector('button[type="submit"]').disabled = true;
      setTimeout(() => form.reset(), 50);
    });
  }
})();
