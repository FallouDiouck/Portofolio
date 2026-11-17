import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import "./App.css"
import "./index.css"
import Projets from "./components/Projet.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projets />
    </div>
  )
}

export default App