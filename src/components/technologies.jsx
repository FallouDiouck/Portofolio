import { technologies } from "../data/technologies.js"
import "./technologies.css"

function Technologies() {
    return (
        <section className="technologies" id="technologies">
            <h2 className="technologies__titre">Mes <br /><span>compétences</span></h2>
            <div className="technologies__liste">
                {technologies.map((groupe) => (
                    <div key={groupe.id} className="technologies__groupe">
                        <h3>{groupe.categorie}</h3>
                        <ul className="technologies__items">
                            {groupe.items.map((item) => {
                                return (
                                    <li key={item.nom} className={`technologies__item ${item.niveau}`}>
                                        <img
                                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icone}/${item.icone}-original.svg`}
                                            alt=""
                                            width="15"
                                            height="15"
                                            className={item.mono ? "icone--mono" : ""}
                                        />
                                        {item.nom}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technologies