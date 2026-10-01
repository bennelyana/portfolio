import { portfolio } from "../data/portfolio";

export default function WhyMe() {
  return (
    <section
      className="section"
      id="whyme"
    >
      <div className="section-inner">

        <h2 className="section-title">
          Why work with <em>me?</em>
        </h2>

        <div className="whyme-grid">

          {portfolio.whyMe.map((item) => (
            <article
              className="whyme-card"
              key={item.number}
            >

              <div className="whyme-icon">
                {item.number}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}