import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import TrackPage from './pages/TrackPage.jsx'
import LocationsPage from './pages/LocationsPage.jsx'
import ContainersPage from './pages/ContainersPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'

const titles = {
  '/': 'Delivering Your Cargo Worldwide',
  '/services': 'Services',
  '/track': 'Track Package',
  '/locations': 'Locations',
  '/containers': 'Containers',
  '/about': 'About Us',
  '/contact': 'Contact Us',
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    document.title = `CONTX — ${titles[pathname] || 'Page not found'}`
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/containers" element={<ContainersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
