import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FiArrowUp } from "react-icons/fi"
import { contact } from "../data/contact"
import "./Footer.css"

const liens = [
    { nom: "Accueil", href: "#accueil" },
    { nom: "Compétences", href: "#technologies" },
    { nom: "Projets", href: "#projets" },
    { nom: "Contact", href: "#contact" },
]

const ICONES_RESEAUX = { GitHub: FaGithub, LinkedIn: FaLinkedin, WhatsApp: FaWhatsapp }

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__contenu">
                <div className="footer__marque">
                    <p className="footer__nom">Fallou</p>
                    <p className="footer__texte">
                        Développeur web. Je conçois des sites clairs, rapides et adaptés à tous les écrans.
                    </p>
                </div>

                <nav className="footer__nav" aria-label="Navigation du pied de page">
                    <h3>Navigation</h3>
                    {liens.map((lien) => (
                        <a key={lien.nom} href={lien.href}>{lien.nom}</a>
                    ))}
                </nav>

                <div className="footer__contact">
                    <h3>Contact</h3>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    <span>{contact.lieu}</span>
                    <ul className="footer__reseaux">
                        {contact.reseaux.map((reseau) => {
                            const Icone = ICONES_RESEAUX[reseau.nom]
                            return (
                                <li key={reseau.nom}>
                                    <a
                                        href={reseau.lien}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={reseau.nom}
                                    >
                                        {Icone && <Icone aria-hidden="true" />}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="footer__bas">
                <p>© {new Date().getFullYear()} Fallou. Tous droits réservés.</p>
                <a href="#accueil" className="footer__haut">
                    Retour en haut <FiArrowUp aria-hidden="true" />
                </a>
            </div>
        </footer>
    )
}

export default Footer