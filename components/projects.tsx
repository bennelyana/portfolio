import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      className="section"
      id="projects"
    >
      <div className="section-inner">

        <h2 className="section-title">
          My previous <em>projects.</em>
        </h2>

        <p className="section-description">
          A selection of projects, creative work,
          digital content, and designs.
        </p>

        <div className="projects-grid">

          {portfolio.projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <a
                  href="#"
                  className="project-link"
                >
                  View project →
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}