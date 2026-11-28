import { useState } from "react"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { contact } from "../data/contact"
import "./contact.css"

const ENDPOINT = "https://formspree.io/f/[TON-ID]"
const VIDE = { nom: "", email: "", message: "", _gotcha: "" }
const ICONES_RESEAUX = { GitHub: FaGithub, LinkedIn: FaLinkedin, WhatsApp: FaWhatsapp }
function Contact() {
    const [champs, setChamps] = useState(VIDE)
    const [statut, setStatut] = useState("repos") // "repos", "envoi", "succes" ou "erreur"

    function changer(e) {
        setChamps({ ...champs, [e.target.name]: e.target.value })
        if (statut === "succes" || statut === "erreur") setStatut("repos")
    }

    async function envoyer(e) {
        e.preventDefault()
        setStatut("envoi")
        try {
            const reponse = await fetch(ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    ...champs,
                    subject: `Portfolio — message de ${champs.nom}`,
                }),
            })
            if (reponse.ok) {
                setStatut("succes")
                setChamps(VIDE)
            } else {
                setStatut("erreur")
            }
        } catch {
            setStatut("erreur")
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__grille">
                <div className="contact__infos">
                    <p className="contact__etiquette">Contact</p>
                    <h2 className="contact__titre">Travaillons <span>ensemble</span></h2>
                    <p className="contact__texte">
                        Un projet, une question ou une opportunité ? Écris-moi, je réponds rapidement.
                    </p>

                    <ul className="contact__coordonnees">
                        <li className="li">
                            <span className="contact__icone"><FaEnvelope aria-hidden="true" /></span>
                            <div>
                                <span className="contact__label">Email</span>
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </div>
                        </li>
                        <li>
                            <span className="contact__icone"><FaPhoneAlt aria-hidden="true" /></span>
                            <div>
                                <span className="contact__label">Téléphone</span>
                                <a href={`tel:${contact.telephone}`}>{contact.telephone}</a>
                            </div>
                        </li>
                        <li>
                            <span className="contact__icone"><FaMapMarkerAlt aria-hidden="true" /></span>
                            <div>
                                <span className="contact__label">Localisation</span>
                                <span>{contact.lieu}</span>
                            </div>
                        </li>
                    </ul>

                    <ul className="contact__reseaux">
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

                <form className="contact__form" onSubmit={envoyer}>
                    <div className="contact__champ">
                        <label htmlFor="nom">Nom Complet</label>
                        <input
                            id="nom"
                            name="nom"
                            type="text"
                            value={champs.nom}
                            onChange={changer}
                            required
                        />
                    </div>

                    <div className="contact__champ">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={champs.email}
                            onChange={changer}
                            required
                        />
                    </div>

                    <div className="contact__champ">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={champs.message}
                            onChange={changer}
                            required
                        ></textarea>
                    </div>

                    {/* Champ piège contre le spam : invisible pour les vrais visiteurs */}
                    <input
                        type="text"
                        name="_gotcha"
                        value={champs._gotcha}
                        onChange={changer}
                        style={{ display: "none" }}
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    <button type="submit" className="contact__bouton" disabled={statut === "envoi"}>
                        {statut === "envoi" ? "Envoi en cours…" : "Envoyer le message"}
                    </button>

                    <p className={`contact__statut contact__statut--${statut}`} role="status">
                        {statut === "succes" && "Message envoyé, merci ! Je te réponds très vite."}
                        {statut === "erreur" && "Une erreur est survenue. Réessaie ou écris-moi par email."}
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Contact