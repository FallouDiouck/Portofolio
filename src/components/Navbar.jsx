import ThemeToggle from "./ThemeToggle"

function Navbar() {
  return (
    <header className="navbar">
      <a href="#accueil" className="navbar__logo">Fallou</a>

      <nav className="navbar__liens">
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Navbar