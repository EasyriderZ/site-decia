/* ==========================================================================
   DecIA — Runtime des composants de la bibliothèque (css/components.css)
   Auto-init : chaque bloc ci-dessous cherche ses éléments par sélecteur et
   ne fait rien s'il n'y en a pas sur la page. Peut être inclus tel quel
   dans n'importe quelle future présentation qui réutilise ces composants.
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------------
     dc-network — réseau de particules sur <canvas data-dc-network>
     ------------------------------------------------------------------------ */
  function initNetwork(canvas) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var particles = [];
    var w = 0, h = 0;
    var count = parseInt(canvas.getAttribute("data-count"), 10) || 42;

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = "rgba(92, 156, 255, " + (0.22 * (1 - dist / 120)) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      for (var j = 0; j < particles.length; j++) {
        ctx.fillStyle = "rgba(92, 156, 255, 0.85)";
        ctx.beginPath();
        ctx.arc(particles[j].x, particles[j].y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(step);
    }

    resize();
    seed();
    step();

    var ro = new ResizeObserver(function () {
      resize();
    });
    ro.observe(canvas.parentElement);
  }

  document.querySelectorAll("canvas[data-dc-network]").forEach(initNetwork);

  /* ------------------------------------------------------------------------
     dc-activity — flux d'automatisations "en direct"
     ------------------------------------------------------------------------ */
  document.querySelectorAll(".dc-activity").forEach(function (feed) {
    var rows = feed.querySelectorAll(".dc-activity-row");
    if (!rows.length || reduceMotion) return;
    var idx = 0;
    rows[0].classList.add("is-live");
    setInterval(function () {
      rows[idx].classList.remove("is-live");
      idx = (idx + 1) % rows.length;
      rows[idx].classList.add("is-live");
    }, 1600);
  });

  /* ------------------------------------------------------------------------
     dc-rotator — carte d'exemples qui tournent automatiquement
     ------------------------------------------------------------------------ */
  document.querySelectorAll(".dc-rotator").forEach(function (rotator) {
    var slides = rotator.querySelectorAll(".dc-rotator-slide");
    var dots = rotator.querySelectorAll(".dc-rotator-dots span");
    if (slides.length < 2) return;
    var idx = 0;
    function show(next) {
      slides[idx].classList.remove("is-active");
      if (dots[idx]) dots[idx].classList.remove("is-active");
      idx = next;
      slides[idx].classList.add("is-active");
      if (dots[idx]) dots[idx].classList.add("is-active");
    }
    if (!reduceMotion) {
      setInterval(function () {
        show((idx + 1) % slides.length);
      }, 4200);
    }
  });

  /* ------------------------------------------------------------------------
     dc-compare — déclenche le remplissage des barres à l'entrée dans l'écran
     ------------------------------------------------------------------------ */
  if ("IntersectionObserver" in window) {
    var compareObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          compareObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".dc-compare").forEach(function (el) {
      compareObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".dc-compare").forEach(function (el) {
      el.classList.add("is-inview");
    });
  }
})();
