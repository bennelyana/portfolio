import Image from "next/image";
import { projects, certificates } from "../data/showcase";
import { technologies, technicalSkills, experience } from "../data/resume";
import Navbar from "../components/navbar";
import ContactForm from "../components/contact-form";
import ScrollReveal from "../components/scroll-reveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-inner">
            <div className="hero-intro">
            <div className="hero-copy">
            <p className="hero-name">Mary Iana Bennel Buisan</p>
            <h1 className="statement">
              <span className="statement-line">Hello, I&apos;m <em>Yana!</em></span>
              <span className="statement-line">I create <span className="inline-symbol" aria-hidden="true">&#10035;</span> &amp; build</span>
              <span className="statement-line">digital <em>experiences.</em></span>
            </h1>
            <div className="hero-bottom"><p>Technology, creativity, and a little curiosity.<br />Thoughtful solutions for everyday life.</p><a className="round-link" href="#projects">Explore my work</a></div>
            </div>
            <div className="hero-photo-column">
            <div className="hero-portrait"><div className="hero-portrait-frame"><Image src="/images/profile.jpg" alt="Mary Iana Bennel Buisan" fill sizes="(max-width: 600px) 85vw, (max-width: 900px) 420px, 32vw" loading="eager" /></div></div>
            <p className="hero-photo-caption">IT professional &amp; educator<br /><span>Based in the Philippines</span></p>
            </div>
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-inner process-layout">
            <div><p className="section-eyebrow">A little about my approach</p><h2 className="section-title">From an idea<br />to something <em>useful.</em></h2></div>
            <ol className="process-list">
              <li><span>01</span><div><h3>Understand the need.</h3><p>Start with the people, the problem, and what would make everyday tasks easier.</p></div></li>
              <li><span>02</span><div><h3>Make it clear.</h3><p>Turn ideas into simple layouts and approachable, user-friendly experiences.</p></div></li>
              <li><span>03</span><div><h3>Build with purpose.</h3><p>Bring the design to life, pay attention to the details, and keep improving.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-inner">
            <h2 className="section-title">A few things<br />I&apos;ve <em>built.</em></h2>
            <p className="section-description">A collection of my web, mobile, and desktop projects, built around everyday needs in healthcare, business, and personal productivity.</p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className={`project-card project-kind-${project.technology === "Flutter" ? "mobile" : "desktop"}`} id={`project-${index + 1}`} key={project.title}>
                  <div className="project-heading">
                    <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <span className="technology-badge">{project.technology}</span>
                  </div>
                  <div className="project-gallery" aria-label="Project screenshots">
                    {project.images.map((image, imageIndex) => (
                      <a key={image} href={`/projects/${image}.png`} target="_blank" rel="noopener noreferrer" className="project-screenshot" aria-label={`View ${project.title} screenshot ${imageIndex + 1} (opens in a new tab)`}>
                        <Image src={`/projects/${image}-preview.png`} alt={`${project.title} refreshed ${image.includes("login") ? "login and registration" : "application screen"} preview`} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" />
                      </a>
                    ))}
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-teaser">{project.highlights.slice(0, 2).join(" · ")}</p>
                    <p className="preview-caption">Refreshed UI preview · tap image for original</p>
                    <details className="project-details">
                      <summary>About this project</summary>
                      <p className="project-description">{project.description}</p>
                    <ul className="project-highlights" aria-label="Project features">
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-inner">
            <div className="about-intro">
              <div>
                <div className="about-orbit" aria-hidden="true"><span className="orbit-mark orbit-code">&lt;/&gt;</span><span className="orbit-mark orbit-spark">✦</span><span className="orbit-mark orbit-plus">+</span></div>
                <p className="section-eyebrow">Get to know me</p>
                <h2 className="about-title">Who am I?</h2>
              </div>
              <div className="about-copy">
                <p>I am an Information Technology professional and educator with a passion for technology, creativity, learning, and helping people.</p>
                <p>My experience includes web development, UI/UX design, technical support, customer service, education, virtual assistance, and administrative work.</p>
                <p>I enjoy creating websites, exploring new technologies, designing user-friendly interfaces, and finding practical solutions to everyday problems.</p>
                <p>I believe that technology should be useful, accessible, and meaningful. I am continuously learning and improving my skills through new experiences, challenges, and projects.</p>
              </div>
            </div>
            <div className="about-traits">
              {[
                { title: "Tech Enthusiast", description: "I enjoy exploring new technologies, learning new tools, and discovering better ways to solve problems." },
                { title: "Creative Thinker", description: "I enjoy combining technology and creativity to create simple, useful, and visually appealing digital experiences." },
                { title: "Educator", description: "I believe learning becomes more meaningful when knowledge is shared and used to help others." },
                { title: "Lifelong Learner", description: "I continuously improve my skills by embracing new challenges, learning from experience, and staying curious." },
              ].map((trait, index) => (
                <article className="about-trait" key={trait.title}>
                  <span className="about-trait-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{trait.title}</h3>
                  <p>{trait.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="section expertise" id="expertise">
          <div className="section-inner">
            <h2 className="section-title">Technologies I <em>use.</em></h2>
            <p className="section-description">The languages, tools, and platforms I use for development, design, and everyday work.</p>
            <ul className="technology-grid" aria-label="Technologies and tools">
              {technologies.map(([name, logo]) => (
                <li key={name}><span className="technology-icon"><Image src={logo} alt="" width={42} height={42} unoptimized /></span><span>{name}</span></li>
              ))}
            </ul>
            <div className="technical-skills-grid">
              {technicalSkills.map((group) => <article className="technical-skill" key={group.title}><h3>{group.title}</h3><p>{group.skills}</p></article>)}
            </div>

          </div>
        </section>

        <section className="section certificates" id="certificates">
          <div className="section-inner">
            <p className="section-eyebrow">Learning &amp; achievements</p>
            <h2 className="section-title">My <em>certifications.</em></h2>
            <div className="credential-grid">
              {certificates.map((certificate) => (
                <article className="credential-card" key={certificate.title}>
                  <a className="credential-preview" href="https://www.credly.com/users/mary-iana-bennel-buisan" target="_blank" rel="noopener noreferrer" aria-label={`View Credly profile for ${certificate.title} (opens in a new tab)`}>
                    <Image src={certificate.image} alt={`${certificate.title} certificate awarded to Mary Iana Bennel Balais Buisan`} width={1651} height={1275} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className="credential-image" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-inner">
            <h2 className="section-title">Education and <em>Work.</em></h2>
            <div className="career-panel">
              <article className="career-entry">
                <h3 className="career-label">College education</h3>
                <div className="career-row">
                  <span className="career-icon" aria-hidden="true">UM</span>
                  <div className="career-copy"><h4>Bachelor of Science in Information Technology</h4><p>University of Mindanao</p><span className="career-status">College graduate</span></div>
                  <p className="career-period">2021 - 2025</p>
                </div>
              </article>
              <div className="career-work">
                <h3 className="career-label">Work experience</h3>
                <ol className="career-list">
                  {experience.map((job) => (
                    <li className="career-row" key={job.company}>
                      <span className="career-icon" aria-hidden="true">{job.company.split(" ").map((word) => word[0]).slice(0, 2).join("")}</span>
                      <div className="career-copy"><h4>{job.role}</h4><p>{job.company}</p></div>
                      <p className="career-period">{job.period}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="whyme">
          <div className="section-inner">

            <h2 className="section-title">
              Why work with <em>me?</em>
            </h2>

            <div className="whyme-grid">
              {[
                { title: "Creative Thinking", description: "I approach projects with curiosity and creativity, turning ideas into practical solutions." },
                { title: "Detail Oriented", description: "I pay attention to the small details that make a project clear, reliable, and easy to use." },
                { title: "Always Learning", description: "I keep exploring new tools and technologies to improve my skills and the work I deliver." },
                { title: "Clear Communication", description: "I listen carefully, explain ideas clearly, and keep you informed throughout the project." },
                { title: "People First", description: "I build approachable experiences around the people who will use them and their everyday needs." },
                { title: "Adaptable Support", description: "I bring experience in technology, education, and customer support to help with a variety of tasks." },
              ].map((reason, index) => (
                <details className="whyme-card" key={reason.title}>
                  <summary>
                    <span className="whyme-icon" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <span className="whyme-title">{reason.title}</span>
                    <span className="whyme-toggle" aria-hidden="true">+</span>
                  </summary>
                  <p>{reason.description}</p>
                </details>
              ))}
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

              <ContactForm />

            </div>

          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} Mary Iana Bennel B. Buisan</p></div>
      </footer>
    </>
  );
}
