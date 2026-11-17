import { useState, useEffect } from "react"

function Typewriter({ phrases }) {
  const [index, setIndex] = useState(0)      // quelle phrase on écrit
  const [texte, setTexte] = useState("")     // ce qui est affiché
  const [efface, setEfface] = useState(false) // on écrit ou on efface ?

  useEffect(() => {
    const phrase = phrases[index]
    let delai = efface ? 40 : 90

    if (!efface && texte === phrase) delai = 1500   // pause quand la phrase est finie

    const timer = setTimeout(() => {
      if (!efface && texte === phrase) {
        setEfface(true)
      } else if (efface && texte === "") {
        setEfface(false)
        setIndex((index + 1) % phrases.length)
      } else if (efface) {
        setTexte(phrase.slice(0, texte.length - 1))
      } else {
        setTexte(phrase.slice(0, texte.length + 1))
      }
    }, delai)

    return () => clearTimeout(timer)
  }, [texte, efface, index, phrases])

  return (
    <span>
      {texte}
      <span className="curseur">|</span>
    </span>
  )
}

export default Typewriter