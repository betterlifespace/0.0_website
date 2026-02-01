// Mobile nav toggle and small enhancements
document.addEventListener('DOMContentLoaded', function(){
  var nav = document.getElementById('siteNav');
  var btn = document.getElementById('navToggle');
  btn.addEventListener('click', function(){
    if (nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // Set current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Basic form validation for demonstration
  var form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', function(e){
      // Let mailto submission proceed; if you integrate Formspree/Netlify replace behavior
      // Provide a tiny UX improvement
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Sending...';
        btn.disabled = true;
        setTimeout(function(){ btn.textContent = 'Send Message'; btn.disabled = false; }, 1500);
      }
    });
  }
});
