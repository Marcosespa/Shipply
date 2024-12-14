import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import Features from "./components/Home/Features";
import Services from "./components/Home/Services";
import SearchForm from "./components/Home/SearchForm";
import Testimonials from "./components/Home/Testimonials";
import Contact from "./components/Home/Contact";
import Footer from "./components/Footer";
import Clients from "./components/Home/Clients";
import Benefits from "./components/Home/Benefits";
import Integrations from "./components/Home/Integraciones";
import AboutUs from "./components/Home/AboutUs";
import Benefits2 from "./components/Home/Benefits2";
import BlogIndex from "./components/Blog/BlogIndex";
import WhatsappButton from "./components/WhatsappButton";
import ChestDrawer from "./components/Home/ChestDrawer";
import { Player } from "@lottiefiles/react-lottie-player";
import images from "./assets/images/images";
import ProcessSection from "./components/Services/ProcessSection";
import IntegracionesSection from "./components/Services/IntegracionesSection";
import VentajasSection from "./components/Services/VentajasSection";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta para la página principal */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* Ruta para la página de servicios */}
        <Route
          path="/servicios"
          element={
            <>
              <ProcessSection />
              <IntegracionesSection />
              <VentajasSection/>
            </>
          }
        />

        {/* Ruta para la página de contacto */}
        <Route path="/contacto" element={<Contact />} />

        {/* Ruta para la página de blog */}
        <Route path="/blog" element={<BlogIndex />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
