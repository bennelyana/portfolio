"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const elements = document.querySelectorAll(".section-inner, .project-card, .about-trait, .credential-card");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.classList.toggle("is-visible", entry.isIntersecting);
    }, { threshold: 0.06 });
    elements.forEach((element) => { element.classList.add("scroll-reveal"); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach((element) => element.classList.remove("scroll-reveal", "is-visible")); };
  }, []);
  return null;
}
