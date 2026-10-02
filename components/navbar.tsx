export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          Yana<span>.</span>
        </a>

        <nav className="nav-links portfolio-nav" aria-label="Main navigation">
          {[
            ["projects", "Explore my work"], ["about", "About me"], ["expertise", "Expertise"],
            ["experience", "Education & work"], ["contact", "Work with me"],
          ].map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
