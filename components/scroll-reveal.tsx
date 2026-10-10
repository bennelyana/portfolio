"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>(".section-title, .section-description, .process-list li, .project-card, .about-trait, .credential-card, .technology-grid li, .career-entry, .whyme-card, .contact-box");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    elements.forEach((element) => {
      const index = Array.from(element.parentElement?.children ?? []).indexOf(element);
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 65}ms`);
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });
    const showAll = () => {
      if (!media.matches) return;
      observer.disconnect();
      elements.forEach((element) => element.classList.add("is-visible"));
    };
    media.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", showAll);
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);
  return null;
}
