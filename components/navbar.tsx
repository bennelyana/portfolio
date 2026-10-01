export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          Yana<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>

          <a href="#contact" className="nav-button">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}