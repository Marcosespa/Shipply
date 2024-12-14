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
import Integrations from "./components/Home/Integrations";
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
import PickingPackingSection from "./components/Services/PickingPackingSection";
import DataAnalysisSection from "./components/Services/DataAnalysisSection";
import DevolutionSection from "./components/Services/DevolutionSection";
import EnvioSection from "./components/Services/EnvioSection";
import ContactSection from "./components/Contact/ContactSection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh", minWidth:"100vh"}}>
        {" "}
        <Routes>
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

          <Route
            path="/servicios"
            element={
              <>
                <ProcessSection />
                <IntegracionesSection />
                <VentajasSection />
                <PickingPackingSection />
                <EnvioSection />
                <DevolutionSection />
                <DataAnalysisSection />
              </>
            }
          />

          {/* Ruta para la página de contacto */}
          <Route path="/contacto" element={<ContactSection />} />

          {/* Ruta para la página de blog */}
          <Route path="/blog" element={<BlogIndex />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
