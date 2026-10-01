import { portfolio } from "../data/portfolio";

export default function Certificate() {
  return (
    <section
      className="section certificates"
      id="certificates"
    >
      <div className="section-inner">

        <h2 className="section-title">
          Skills & <em>certifications.</em>
        </h2>

        <div className="certificates-grid">

          <div className="skills-column">

            <p className="section-description">
              Skills I have developed through
              education, experience, and continuous
              learning.
            </p>

            <div className="skills-list">
              {portfolio.skills.map((skill) => (
                <div
                  className="skill-item"
                  key={skill}
                >
                  <span>{skill}</span>
                  <span>✓</span>
                </div>
              ))}
            </div>

          </div>

          <div className="certificates-grid-right">

            {portfolio.certificates.map(
              (certificate) => (
                <div
                  className="certificate-card"
                  key={certificate.title}
                >

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-image"
                  />

                  <p>
                    {certificate.title}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}