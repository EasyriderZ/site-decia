/**
 * DecIA — comportements front
 * Aucune dépendance externe. Chaque fonction est isolée pour rester facile
 * à étendre quand de nouvelles sections/interactions arriveront.
 */

/** Header : fond opaque après un léger scroll. */
function initStickyHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const toggle = () => header.classList.toggle("scrolled", window.scrollY > 24);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/**
 * Apparition douce des blocs marqués .reveal au scroll.
 * Le CSS n'applique l'effet (opacity/translate) qu'une fois la classe
 * .reveal-armed posée ici : si ce script ne tourne pas, le contenu reste
 * visible par défaut au lieu de disparaître.
 */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length || !("IntersectionObserver" in window)) return;

  els.forEach((el) => el.classList.add("reveal-armed"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  els.forEach((el) => io.observe(el));
}

/** Accordéon FAQ : une question ouverte à la fois, accessible au clavier. */
function initFaq() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    question.setAttribute("aria-expanded", "false");

    question.addEventListener("click", () => {
      const isOpen = item.getAttribute("data-open") === "true";

      // Ferme les autres items ouverts.
      items.forEach((other) => {
        if (other === item) return;
        other.setAttribute("data-open", "false");
        other.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
        const otherAnswer = other.querySelector(".faq-answer");
        if (otherAnswer) otherAnswer.style.maxHeight = "0px";
      });

      const next = !isOpen;
      item.setAttribute("data-open", String(next));
      question.setAttribute("aria-expanded", String(next));
      answer.style.maxHeight = next ? `${answer.scrollHeight}px` : "0px";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initReveal();
  initFaq();
});
