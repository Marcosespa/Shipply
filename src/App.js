import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
import BlogSection from "./components/Blog/BlogSection";
import GuidesPage from "./components/Blog/GuidesPage";
import NewsAnalysisPage from "./components/Blog/NewsAnalysisPage"
import ServiceComparisonPage from "./components/Blog/ServiceComparisonPage"
import UrbanLogisticsPage from "./components/Blog/UrbanLogisticsPage"
import WarehouseAutomationPage from "./components/Blog/WarehouseAutomationPage"



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

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh", minWidth: "100vh" }}>
        {" "}
        <ScrollToHash />
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
          <Route path="/contacto" element={<ContactSection />} />
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogSection />} />
          <Route
            path="/blog/guias-practicas"
            element={<GuidesPage title="Guías Prácticas" />}
          />
          <Route
            path="/blog/analisis-noticias"
            element={<NewsAnalysisPage title="Análisis de Noticias" />}
          />
          <Route
            path="/blog/comparativas-servicios"
            element={<ServiceComparisonPage title="Comparativas de Servicios" />}
          />
          <Route
            path="/blog/logistica-urbana"
            element={<UrbanLogisticsPage title="Logística Urbana" />}
          />
          <Route
            path="/blog/automatizacion-almacenes"
            element={<WarehouseAutomationPage title="Automatización en Almacenes" />}
          />
        </Routes>
      </div>
      <WhatsappButton />

      <Footer />
    </Router>
  );
};

export default App;
