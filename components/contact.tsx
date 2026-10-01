import { portfolio } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      className="section contact"
      id="contact"
    >
      <div className="section-inner">

        <div className="contact-box">

          <div className="contact-content">

            <h2 className="section-title">
              Let&apos;s work
              <em> together!</em>
            </h2>

            <p className="contact-text">
              Whether you&apos;re looking for a
              dedicated digital collaborator, a
              creative partner, or someone to help
              bring your project to life, I&apos;d love
              to hear about it.
            </p>

            <p className="contact-email">
              {portfolio.contact.email}
            </p>

          </div>

          <form className="contact-form">

            <input
              className="contact-input"
              type="text"
              placeholder="Name"
            />

            <input
              className="contact-input"
              type="email"
              placeholder="Email"
            />

            <input
              className="contact-input"
              type="text"
              placeholder="Subject"
            />

            <textarea
              className="contact-input textarea"
              placeholder="Tell me about your project..."
            />

            <button
              type="submit"
              className="button contact-submit"
            >
              Send message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}