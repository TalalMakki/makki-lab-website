(function(){
  "use strict";

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky header ---------- */
  var header = document.getElementById('siteHeader');
  function onScroll(){
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  var mobileNavClose = document.getElementById('mobileNavClose');
  function openNav(){ mobileNav.classList.add('open'); }
  function closeNav(){ mobileNav.classList.remove('open'); }
  if (navToggle) navToggle.addEventListener('click', openNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeNav);
  if (mobileNav) mobileNav.addEventListener('click', function(e){ if (e.target === mobileNav) closeNav(); });
  document.querySelectorAll('.mobile-nav-panel a').forEach(function(a){ a.addEventListener('click', closeNav); });

  /* ---------- GSAP scroll reveal ---------- */
  if (window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);

    if (prefersReduced){
      gsap.set('.reveal', { opacity:1, y:0 });
    } else {
      // Hero elements: reveal on load
      gsap.timeline({ defaults:{ ease:'power2.out' } })
        .to('.hero-copy .eyebrow', { opacity:1, y:0, duration:.5 }, 0)
        .to('.hero-copy h1.reveal', { opacity:1, y:0, duration:.6 }, .08)
        .to('.hero-copy p.reveal', { opacity:1, y:0, duration:.6 }, .16)
        .to('.hero-actions.reveal', { opacity:1, y:0, duration:.6 }, .24)
        .to('.hero-trust.reveal', { opacity:1, y:0, duration:.6 }, .32)
        .to('.hero-visual.reveal', { opacity:1, y:0, duration:.7, scale:1, from:{scale:.94} }, .2);

      gsap.set('.hero-copy .eyebrow', { opacity:0, y:16 });

      // Everything else: reveal on scroll
      document.querySelectorAll('section:not(.hero) .reveal, .cta-banner.reveal').forEach(function(el){
        gsap.fromTo(el, { opacity:0, y:26 }, {
          opacity:1, y:0, duration:.7, ease:'power2.out',
          scrollTrigger:{ trigger:el, start:'top 88%', toggleActions:'play none none reverse' }
        });
      });

      // Stagger feature/social cards within their grids
      [['.features-grid', '.feature-card'], ['.services-grid', '.service-card'], ['.testimonials-grid', '.testimonial-card'], ['.contact-grid', '.social-card'], ['.stats-grid', '.stat']].forEach(function(pair){
        var grid = document.querySelector(pair[0]);
        if (!grid) return;
        gsap.fromTo(grid.querySelectorAll(pair[1]), { opacity:0, y:26 }, {
          opacity:1, y:0, duration:.6, stagger:.08, ease:'power2.out',
          scrollTrigger:{ trigger:grid, start:'top 85%' }
        });
      });
    }
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.style.opacity = 1; el.style.transform = 'none'; });
  }

  /* ---------- Hero flask animation ---------- */
  if (window.gsap && !prefersReduced){
    var flaskStage = document.getElementById('flaskStage');
    if (flaskStage){
      gsap.fromTo(flaskStage, { opacity:0, y:16, scale:.92 }, { opacity:1, y:0, scale:1, duration:.9, ease:'power2.out', delay:.3 });
      gsap.to(flaskStage, { y:-10, duration:3, ease:'sine.inOut', yoyo:true, repeat:-1, delay:1.1 });
    }
    gsap.to('.flask-card', { y:-8, duration:3.4, ease:'sine.inOut', yoyo:true, repeat:-1 });
    gsap.to('.chip-1', { y:-8, duration:2.6, ease:'sine.inOut', yoyo:true, repeat:-1, delay:.2 });
    gsap.to('.chip-2', { y:8, duration:2.8, ease:'sine.inOut', yoyo:true, repeat:-1, delay:.4 });
    gsap.to('.chip-3', { y:-6, duration:2.4, ease:'sine.inOut', yoyo:true, repeat:-1, delay:.6 });
  }

  /* ---------- Branches map (Leaflet) ---------- */
  var mapEl = document.getElementById('branches-map');
  if (mapEl && window.L){
    var branches = Array.prototype.map.call(document.querySelectorAll('.branch-card'), function(card){
      return {
        el: card,
        lat: parseFloat(card.dataset.lat),
        lng: parseFloat(card.dataset.lng)
      };
    });

    var map = L.map('branches-map', { scrollWheelZoom:false, zoomControl:true });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:'&copy; OpenStreetMap contributors',
      maxZoom:19
    }).addTo(map);

    var pinIcon = L.divIcon({
      className:'',
      html:'<div class="lab-pin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>',
      iconSize:[36,36],
      iconAnchor:[18,34],
      popupAnchor:[0,-32]
    });

    var markers = [];
    var bounds = [];
    branches.forEach(function(b, i){
      var marker = L.marker([b.lat, b.lng], { icon:pinIcon }).addTo(map);
      marker.bindPopup(function(){
        var name = b.el.querySelector('h3').textContent;
        var addr = b.el.querySelector('p').textContent;
        return '<div class="popup-title">' + name + '</div><div class="popup-addr">' + addr + '</div>';
      });
      marker.on('click', function(){ setActive(i); });
      markers.push(marker);
      bounds.push([b.lat, b.lng]);
    });

    if (bounds.length) map.fitBounds(bounds, { padding:[50,50], maxZoom:13 });

    function setActive(i){
      branches.forEach(function(b, idx){
        b.el.classList.toggle('active', idx === i);
      });
      markers[i].openPopup();
      map.flyTo([branches[i].lat, branches[i].lng], 14.5, { duration:.9 });
    }

    branches.forEach(function(b, i){
      b.el.addEventListener('click', function(e){
        if (e.target.closest('a')) return;
        setActive(i);
      });
    });

    // Fix Leaflet sizing inside flex/grid layouts once fonts/layout settle
    setTimeout(function(){ map.invalidateSize(); }, 300);
    window.addEventListener('resize', function(){ map.invalidateSize(); });
  }

  /* ---------- Smooth-scroll offset for fixed header on anchor clicks ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = 84;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top:top, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  });
})();
