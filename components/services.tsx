import { portfolio } from "../data/portfolio";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">

        <div className="about-heading">
          <h2 className="section-title">
            Get to know <em>me.</em>
          </h2>
        </div>

        <div className="about-content">
          <p className="about-text">
            {portfolio.about}
          </p>

          <div className="about-facts">
            {portfolio.stats.map((stat) => (
              <div
                className="fact-card"
                key={stat.label}
              >
                <div className="fact-number">
                  {stat.number}
                </div>

                <div className="fact-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}