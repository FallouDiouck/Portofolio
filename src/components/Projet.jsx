import { FiGithub, FiExternalLink } from "react-icons/fi"
import { LuSquareArrowOutUpRight } from "react-icons/lu"
import {projets} from "../data/projets"
import "./Projets.css"

function CarteProjets({titre, description, image, technologies, code, demo}) {
    return(
        <div className="carte-projet">
            <img src={image} alt={titre} className="carte-projet__image" />
            <div className="carte-projet__contenu">
                <h3 className="carte-projet__titre">{titre}</h3>
                <p className="carte-projet__description">{description}</p>
                <ul className="carte-projet__technologies">
                    {technologies.map((tech) => (
                        <li key={tech} className="carte-projet__technologie">{tech}</li>
                    ))}
                </ul>
                <div className="carte-projet__liens">
                    <a href={code} target="_blank" rel="noopener noreferrer" className="carte-projet__lien"><FiGithub size={18} aria-hidden="true" /> Code</a>
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="carte-projet__lien carte-projet__lien--voir"><LuSquareArrowOutUpRight size={18} aria-hidden="true" /> Voir</a>
                </div>
            </div>
        </div>
    )
}

function Projets() {
    return (
        <section className="projets" id="projets">
            <h2 className="projets__titre">Ce que j'ai <br /><span>réalisé</span></h2>
            <div className="projets__grille">
                {projets.map((projet) => (
                    <CarteProjets key={projet.id} {...projet} />
                ))}
            </div>
        </section>
    )
}

export default Projets