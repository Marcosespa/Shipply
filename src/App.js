import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import SearchForm from './components/SearchForm';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Benefits from './components/Benefits';
import Integrations from './components/Integraciones';
import AboutUs from './components/AboutUs';
import Benefits2 from './components/Benefits2';
import WhatsappButton from './components/WhatsappButton';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={
          <>
            <Hero />
            <Clients />
            <Benefits />
            <Integrations />
            <AboutUs />
            <Services />
            <Benefits2 />
            <Testimonials />
            <Contact />
            <WhatsappButton />
          </>
        } />

        {/* Ruta para la página de servicios */}
        <Route path="/servicios" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
