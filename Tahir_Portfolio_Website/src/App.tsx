import './App.css'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>402 : Page Not Found!</h1>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
