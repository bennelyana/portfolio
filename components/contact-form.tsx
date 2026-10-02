"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") || "");
    const email = String(fields.get("email") || "");
    const message = String(fields.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:marybuisan65@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact-form-panel">
      <form className="contact-form" onSubmit={sendMessage}>
        <label className="sr-only" htmlFor="contact-name">Your name</label>
        <input className="contact-input" id="contact-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} />
        <label className="sr-only" htmlFor="contact-email">Your email</label>
        <input className="contact-input" id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
        <label className="sr-only" htmlFor="contact-message">What do you want to build?</label>
        <textarea className="contact-input textarea" id="contact-message" name="message" placeholder="What do you want to build?" required maxLength={3000} />
        <button className="button contact-send" type="submit"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13" /></svg>Send message</button>
      </form>
      <div className="contact-socials">
      <a className="contact-github" href="https://github.com/bennelyana" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile (opens in a new tab)"><svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.53-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.63 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.28-5.15 5.56.41.35.77 1.03.77 2.08v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" /></svg></a>
      <a className="contact-github" href="https://www.linkedin.com/in/buisan-mary-iana" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile (opens in a new tab)"><svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H5V9h3v10ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-5.2c0-1.2-.02-2.75-1.68-2.75-1.69 0-1.95 1.32-1.95 2.66V19h-3V9h2.88v1.37h.04a3.16 3.16 0 0 1 2.84-1.56c3.04 0 3.6 2 3.6 4.6V19Z"/></svg></a>
      <a className="contact-github" href="mailto:marybuisan65@gmail.com" aria-label="Email me"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a>
      </div>
    </div>
  );
}
