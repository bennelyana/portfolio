"use client";

import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem("portfolio-theme"); } catch {}
    document.documentElement.dataset.theme = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle dark mode"><span className="theme-dark-label">☾ Dark</span><span className="theme-light-label">☀ Light</span></button>;
}
