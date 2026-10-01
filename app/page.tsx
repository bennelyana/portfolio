import Image from "next/image";
import { projects, certificates } from "../data/showcase";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <div className="hero-grid">

              <div className="hero-content">
                <p className="hero-small">
                  Hi, I&apos;m
                </p>

                <h1 className="hero-title">
                  Mary Iana
                  <span>Bennel B.</span>
                  Buisan
                </h1>

                <h2 className="hero-role">
                  IT Professional &amp; Educator
                </h2>

                <p className="hero-tags">
                  Technology <span>|</span> Education{" "}
                  <span>|</span> Creativity
                </p>

                <p className="hero-description">
                  I create practical digital solutions by combining
                  technology, creativity, and a people-centered
                  approach. I enjoy learning, designing, developing,
                  and turning ideas into meaningful experiences.
                </p>

                <div className="hero-buttons">
                  <a
                    href="#contact"
                    className="button button-primary"
                  >
                    Get In Touch
                  </a>

                  <a
                    href="#projects"
                    className="button button-outline"
                  >
                    View My Work
                  </a>
                </div>
              </div>

              <div className="hero-photo-wrap">
                <div className="hero-photo-background"></div>

                <div className="hero-photo-frame">
                  <img
                    src="/images/profile.jpg"
                    alt="Mary Iana Bennel Buisan"
                    className="hero-photo"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-inner">
            <h2 className="section-title">
              Get to know <em>me.</em>
            </h2>

            <p className="about-text">
              I am an IT professional and educator passionate about
              technology, creativity, digital solutions, and
              meaningful learning experiences.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-inner">
            <h2 className="section-title">
              What I <em>do.</em>
            </h2>

            <div className="services-grid">
              <div className="service-card">
                <h3>Digital Marketing</h3>
                <p>
                  Creating engaging digital content and strategies.
                </p>
              </div>

              <div className="service-card">
                <h3>Content Creation</h3>
                <p>
                  Designing visual and written content for digital
                  platforms.
                </p>
              </div>

              <div className="service-card">
                <h3>Web &amp; Design</h3>
                <p>
                  Building clean and practical digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section tools" id="tools">
          <div className="section-inner">
            <h2 className="section-title">
              What&apos;s in my <em>toolkit.</em>
            </h2>

            <div className="tools-grid">
              <div className="tool-card">
                <span className="tool-name">Canva</span>
                <span className="tool-type">Design</span>
              </div>

              <div className="tool-card">
                <span className="tool-name">Adobe Photoshop</span>
                <span className="tool-type">Design</span>
              </div>

              <div className="tool-card">
                <span className="tool-name">Google Workspace</span>
                <span className="tool-type">Productivity</span>
              </div>

              <div className="tool-card">
                <span className="tool-name">Microsoft Office</span>
                <span className="tool-type">Productivity</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-inner">
            <p className="section-eyebrow">Selected work ? 05 projects</p>
            <h2 className="section-title">Ideas turned into <em>projects.</em></h2>
            <p className="section-description">A collection of my web, mobile, and desktop projects, built around everyday needs in healthcare, business, and personal productivity.</p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-heading">
                    <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <span className="technology-badge">{project.technology}</span>
                  </div>
                  <div className="project-gallery">
                    {project.images.map((image, imageIndex) => (
                      <a key={image} href={`/projects/${image}.png`} target="_blank" rel="noopener noreferrer" className="project-screenshot" aria-label={`View ${project.title} screenshot ${imageIndex + 1} (opens in a new tab)`}>
                        <Image src={`/projects/${image}.png`} alt={`${project.title} ${image.includes("login") ? "login and registration" : "application screen"}`} fill sizes="(max-width: 900px) 90vw, 550px" />
                      </a>
                    ))}
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-highlights" aria-label="Project features">
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section certificates" id="certificates">
          <div className="section-inner">
            <p className="section-eyebrow">Learning &amp; achievements</p>
            <h2 className="section-title">My <em>certifications.</em></h2>
            <p className="section-description">Three Information Technology Specialist certifications in networking and security, awarded through Certiport.</p>
            <div className="credential-grid">
              {certificates.map((certificate) => (
                <article className="credential-card" key={certificate.title}>
                  <a className="credential-preview" href={certificate.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${certificate.title} certificate (opens in a new tab)`}>
                    <Image src={certificate.image} alt={`${certificate.title} certificate awarded to Mary Iana Bennel Balais Buisan`} width={1651} height={1275} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className="credential-image" />
                  </a>
                  <div className="credential-content">
                    <span className="project-category">IT Specialist</span>
                    <h3>{certificate.title}</h3>
                    <p className="credential-issuer">Certiport ? Pearson VUE</p>
                    <time dateTime={certificate.dateTime}>{certificate.date}</time>
                    <p className="credential-id">Credential ID: <span>{certificate.credential}</span></p>
                    <a className="project-link" href={certificate.image} target="_blank" rel="noopener noreferrer">View certificate <span aria-hidden="true">?</span><span className="sr-only"> (opens in a new tab)</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="whyme">
          <div className="section-inner">

            <h2 className="section-title">
              Why work with <em>me?</em>
            </h2>

            <div className="whyme-grid">

              <div className="whyme-card">
                <div className="whyme-icon">01</div>
                <h3>Creative Thinking</h3>
                <p>
                  I approach projects with curiosity and creativity.
                </p>
              </div>

              <div className="whyme-card">
                <div className="whyme-icon">02</div>
                <h3>Detail Oriented</h3>
                <p>
                  I care about the small details that make a project
                  better.
                </p>
              </div>

              <div className="whyme-card">
                <div className="whyme-icon">03</div>
                <h3>Always Learning</h3>
                <p>
                  I continuously learn new tools and technologies.
                </p>
              </div>

            </div>

          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-inner">

            <div className="contact-box">

              <div>
                <h2 className="section-title">
                  Let&apos;s work
                  <em> together!</em>
                </h2>

                <p className="contact-text">
                  Whether you&apos;re looking for a dedicated digital
                  collaborator, a creative partner, or someone to
                  help bring your project to life, I&apos;d love to
                  hear about it.
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

                <textarea
                  className="contact-input textarea"
                  placeholder="Tell me about your project..."
                />

                <button
                  type="submit"
                  className="button contact-submit"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>
        </section>

      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Yana Buisan
        </p>

        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </footer>
    </>
  );
}
