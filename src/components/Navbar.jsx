import ThemeToggle from "./ThemeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

const liens = [
  { nom: "Accueil", id: "accueil" },
  { nom: "Technologies", id: "technologies" },
  { nom: "Projets", id: "projets" },
  { nom: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [actif, setActif] = useState("accueil");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((e) => {
          if (e.isIntersecting) setActif(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    liens.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <a href="#accueil" className="navbar__logo" onClick={closeMenu}>
        Fallou
      </a>

      <nav className={`navbar__liens ${isOpen ? "open" : ""}`} id="menu-principal">
        {liens.map(({ nom, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={actif === id ? "active" : ""}
            onClick={closeMenu}
          >
            {nom}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <ThemeToggle />
        <button
          className="nav__burger"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
        >
          <GiHamburgerMenu aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;