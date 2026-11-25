import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import "./App.css"
import "./index.css"
import Projets from "./components/Projet.jsx"
import Technologies from "./components/technologies.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
      <Projets />
      <Contact />
    </div>
  )
}

export default App