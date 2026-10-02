export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          Yana<span>.</span>
        </a>

        <nav className="nav-links portfolio-nav" aria-label="Main navigation">
          {[
            ["projects", "Projects"], ["about", "About me"], ["expertise", "Expertise"],
            ["experience", "Experience"], ["contact", "Work with me"],
          ].map(([id, label], index) => (
            <a href={`#${id}`} key={id}>
              <span className="nav-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span><span className="nav-slashes" aria-hidden="true">{"// "}</span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
