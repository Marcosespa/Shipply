import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import Testimonials from "./components/Home/Testimonials";
import Footer from "./components/Footer";
import Clients from "./components/Home/Clients";
import Benefits from "./components/Home/Benefits";
import Integrations from "./components/Home/Integrations";
import AboutUs from "./components/Home/AboutUs";
import Benefits2 from "./components/Home/Benefits2";
import BlogSection from "./components/Blog/BlogSection";
import GuidesPage from "./components/Blog/GuidesPage";
import NewsAnalysisPage from "./components/Blog/NewsAnalysisPage";
import ServiceComparisonPage from "./components/Blog/ServiceComparisonPage";
import UrbanLogisticsPage from "./components/Blog/UrbanLogisticsPage";
import WarehouseAutomationPage from "./components/Blog/WarehouseAutomationPage";
import InventoryControlPage from "./components/Blog/InventoryControlPage";

import WhatsappButton from "./components/WhatsappButton";
import "./styles/Home/chestDrawer.css";
import ScrollToHash from "./components/ScrollToHash"; // Importa el componente

import ProcessSection from "./components/Services/ProcessSection";
import IntegracionesSection from "./components/Services/IntegracionesSection";
import VentajasSection from "./components/Services/VentajasSection";
import PickingPackingSection from "./components/Services/PickingPackingSection";
import DataAnalysisSection from "./components/Services/DataAnalysisSection";
import DevolutionSection from "./components/Services/DevolutionSection";
import EnvioSection from "./components/Services/EnvioSection";
import ContactSection from "./components/Contact/ContactSection";
import TalentSection from "./components/Contact/TalentSection";
import PrivacyPolitic from "./components/Contact/PrivacyPolitic";
import Faq from "./components/Faq/Faq";
import {LogisticaCreceSection,InovacionSection,RetailersLideresSection,RespaldoSection} from "./components/Services/B2B";

// index.js o App.js
import ReactGA from "react-ga4";
// import { InovacionSection } from "./components/Services/B2B";

// Inicializa Google Analytics con tu ID de rastreo
ReactGA.initialize("G-Z7LYPT9LHY"); // Reemplaza con tu ID de Google Analytics, por ejemplo: "G-XXXXXXXXXX"





const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToHash /> {/* Incluye el componente solo una vez aquí */}
      <WhatsappButton/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Services />
                <Integrations />
                <AboutUs />
                <Testimonials />
                <Clients />
                {/* <Services /> */}
                <Benefits2 />
              </>
            }
          />
          <Route
            path="/bussinesToBussines"
            element={<>
            <LogisticaCreceSection/>
            <InovacionSection/>
            <RetailersLideresSection/>
            <RespaldoSection/>
            </>}
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
            path="/blog/logistica-grandes-superficies"
            element={<GuidesPage title="Logistica grandes Superficies" />}
          />
          <Route
            path="/blog/analisis-noticias"
            element={<NewsAnalysisPage title="Análisis de Noticias" />}
          />
          <Route
            path="/blog/apertura-logistica"
            element={<ServiceComparisonPage title="Apertura logistica" />}
          />
          <Route
            path="/blog/transporte-carga-colombia"
            element={<UrbanLogisticsPage title="Transporte de Carga en Colombia" />}
          />
          <Route
            path="/blog/automatizacion-almacenes"
            element={<WarehouseAutomationPage title="Automatización en Almacenes" />}
          />
          <Route
            path="/blog/control-inventarios"
            element={<InventoryControlPage title="Control de inventarios" />}
          />

          <Route
            path="/talento"
            element={
              <>
                <TalentSection />
                {/* PARTE A CAMBIAR POR FORMS PARA CONTRATAR */}
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Faq />
                {/* PARTE A CAMBIAR POR FORMS PARA CONTRATAR */}
              </>
            }
          />

          <Route
            path="/politica-de-privacidad"
            element={
              <>
                <PrivacyPolitic />
                {/* PARTE A CAMBIAR POR FORMS PARA CONTRATAR */}
              </>
            }
          />
        </Routes>
      {/* <WhatsappButton /> */}

      <Footer />
    </Router>
  );
};

export default App;
