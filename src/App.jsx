import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Powering from './components/Powering.jsx'
import Locations from './components/Locations.jsx'
import Track from './components/Track.jsx'
import Containers from './components/Containers.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Powering />
        <Locations />
        <Track />
        <Containers />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
