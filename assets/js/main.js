/**
 * BetterLifeSpace — Main JavaScript
 *
 * Handles:
 * - Mobile navigation toggle
 * - Footer year auto-update
 * - Contact form UX enhancement
 * - Smooth scroll for anchor links
 */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  var nav = document.getElementById('siteNav');
  var btn = document.getElementById('navToggle');

  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });

    // Close nav when clicking a link (mobile)
    var navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // --- Set current year in footer ---
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Contact form UX ---
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function () {
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        setTimeout(function () {
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  }

  // --- Smooth scroll for on-page anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
