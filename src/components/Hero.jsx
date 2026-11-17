import Typewriter from "./Typewriter"

const phrases = [
    "Developpeur en formation ",
    "Je construis des sites web ",
    "Sites web sur mesure ",
]

function Hero() {
    return (
        <section className="hero" id="accueil">
            <div className="hero__contenu">
                <h1>Fallou <br /><span className="hero__nom">Diouck</span>
                </h1>
                
                <p className="hero__phrases"><Typewriter phrases={phrases} /></p>

                <p className="hero__texte">Je crée des sites web sur mesure, de la maquette à 
                    la mise en ligne. Je m’occupe de la structure, du design responsive, des 
                    animations et des formulaires, avec des technologies modernes. Chaque projet 
                    est pensé pour être lisible, fluide et simple à faire évoluer.</p>

                <a href="#projets" className="hero__bouton">VOIR MES PROJETS</a>
            </div>

            <div className="hero__photo">
                <img src="/moi.jpeg" alt="Portrait de Fallou" />
            </div>
        </section>
    )
}

export default Hero