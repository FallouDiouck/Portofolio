import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import "./App.css"
import "./index.css"
import Projets from "./components/Projet.jsx"
import Technologies from "./components/technologies.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
      <Projets />
    </div>
  )
}

export default App