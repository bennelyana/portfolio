import Image from "next/image";
import { projects, certificates } from "../data/showcase";
import { technologies, technicalSkills, experience } from "../data/resume";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-inner">
            <div className="hero-intro">
            <div className="hero-copy">
            <p className="hero-name">Mary Iana Bennel Buisan</p>
            <h1 className="statement">
              <span className="statement-line"><span className="line-number" aria-hidden="true">01</span>Hello, I&apos;m <em>Yana!</em></span>
              <span className="statement-line"><span className="line-number" aria-hidden="true">02</span>I create <span className="inline-symbol" aria-hidden="true">&#10035;</span> &amp; build</span>
              <span className="statement-line"><span className="line-number" aria-hidden="true">03</span>digital <em>experiences.</em></span>
            </h1>
            <div className="hero-bottom"><p>Technology, creativity, and a little curiosity.<br />Thoughtful solutions for everyday life.</p><a className="round-link" href="#projects">Explore my work</a></div>
            </div>
            <div className="hero-photo-column">
            <div className="hero-portrait"><div className="hero-portrait-frame"><Image src="/images/profile.jpg" alt="Mary Iana Bennel Buisan" fill sizes="(max-width: 600px) 85vw, (max-width: 900px) 420px, 32vw" loading="eager" /></div></div>
            <p className="hero-photo-caption">IT professional &amp; educator<br /><span>Based in the Philippines</span></p>
            </div>
            </div>
            <div className="hero-previews" aria-label="A preview of my projects">
              {[projects[0], projects[4], projects[1]].map((project, index) => <a href={`#project-${projects.indexOf(project) + 1}`} className="hero-preview" key={project.title}><div className="preview-image"><Image src={`/projects/${project.images[0]}.png`} alt={project.title} width={930} height={447} sizes="(max-width: 600px) 90vw, 30vw" /></div><span className="preview-category">{project.category}</span><span className="preview-title"><span>{project.title}</span><span className="preview-index">0{index + 1}</span></span></a>)}
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
            <p className="section-eyebrow">Selected work &middot; 05 projects</p>
            <h2 className="section-title">A few things<br />I&apos;ve <em>built.</em></h2>
            <p className="section-description">A collection of my web, mobile, and desktop projects, built around everyday needs in healthcare, business, and personal productivity.</p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" id={`project-${index + 1}`} key={project.title}>
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
                    <a className="project-link" href={`/projects/${project.images[0]}.png`} target="_blank" rel="noopener noreferrer">Explore project<span className="sr-only"> (opens in a new tab)</span></a>
                    <ul className="project-highlights" aria-label="Project features">
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
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

        <section className="section expertise" id="expertise">
          <div className="section-inner">
            <p className="section-eyebrow">My technical skills</p>
            <h2 className="section-title">Technologies I <em>use.</em></h2>
            <p className="section-description">The languages, tools, and platforms I use for development, design, and everyday work.</p>
            <ul className="technology-grid" aria-label="Technologies and tools">
              {technologies.map(([name, mark]) => (
                <li key={name}><span className="technology-icon" aria-hidden="true">{mark}</span><span>{name}</span></li>
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
                    <p className="credential-issuer">Certiport &middot; Pearson VUE</p>
                    <time dateTime={certificate.dateTime}>{certificate.date}</time>
                    <p className="credential-id">Credential ID: <span>{certificate.credential}</span></p>
                    <a className="project-link" href={certificate.image} target="_blank" rel="noopener noreferrer">View certificate<span className="sr-only"> (opens in a new tab)</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-inner">
            <p className="section-eyebrow">My journey</p>
            <h2 className="section-title">Work &amp; <em>education.</em></h2>
            <div className="resume-grid">
              <div>
                <h3 className="resume-heading">Work experience</h3>
                <ol className="experience-list">
                  {experience.map((job) => (
                    <li className="experience-item" key={job.company}>
                      <p className="experience-period">{job.period}</p>
                      <h4>{job.role}</h4>
                      <p className="experience-company">{job.company}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="resume-heading">College education</h3>
                <article className="education-card">
                  <p className="section-eyebrow">2021 - 2025</p>
                  <h4>Bachelor of Science in Information Technology</h4>
                  <p>University of Mindanao</p>
                  <span className="education-status">College graduate</span>
                </article>
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

              <address className="contact-details">
                <a href="mailto:marybuisan65@gmail.com" className="contact-detail">
                  <span className="contact-label">Email me</span>
                  <span>marybuisan65@gmail.com</span>
                </a>
                <a href="tel:+639161138339" className="contact-detail">
                  <span className="contact-label">Call me</span>
                  <span>0916 113 8339</span>
                </a>
                <a href="mailto:marybuisan65@gmail.com" className="button contact-submit">Let&apos;s get in touch &rarr;</a>
              </address>

            </div>

          </div>
        </section>

      </main>

      <footer className="footer">
        <a className="footer-wordmark" href="#home">YANA<span>.</span></a>
        <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} Mary Iana Bennel B. Buisan</p><div className="footer-socials"><a href="https://github.com/bennelyana" target="_blank" rel="noopener noreferrer">GitHub</a><a href="mailto:marybuisan65@gmail.com">Email</a><a href="#home">Back to top &uarr;</a></div></div>
      </footer>
    </>
  );
}
