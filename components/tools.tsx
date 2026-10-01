import { portfolio } from "../data/portfolio";

export default function Tools() {
  return (
    <section
      className="section tools"
      id="tools"
    >
      <div className="section-inner">

        <h2 className="section-title">
          What&apos;s in my <em>toolkit.</em>
        </h2>

        <p className="section-description">
          Tools and platforms I use to design,
          organize, create, and communicate.
        </p>

        <div className="tools-grid">
          {portfolio.tools.map((tool) => (
            <div
              className="tool-card"
              key={tool.name}
            >
              <span className="tool-name">
                {tool.name}
              </span>

              <span className="tool-type">
                {tool.type}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}