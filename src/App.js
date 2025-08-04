import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/Home/chestDrawer.css";
import "./styles/loading.css";
import ReactGA from "react-ga4";

// Componentes que se cargan inmediatamente (críticos)
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
import WhatsappButton from "./components/WhatsappButton";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy loading para componentes no críticos
const BlogSection = React.lazy(() => import("./components/Blog/BlogSection"));
const GuidesPage = React.lazy(() => import("./components/Blog/GuidesPage"));
const NewsAnalysisPage = React.lazy(() => import("./components/Blog/NewsAnalysisPage"));
const ServiceComparisonPage = React.lazy(() => import("./components/Blog/ServiceComparisonPage"));
const UrbanLogisticsPage = React.lazy(() => import("./components/Blog/UrbanLogisticsPage"));
const WarehouseAutomationPage = React.lazy(() => import("./components/Blog/WarehouseAutomationPage"));
const InventoryControlPage = React.lazy(() => import("./components/Blog/InventoryControlPage"));
const ValueAddedServicesPage = React.lazy(() => import("./components/Services/ValueAddedServicesPage"));
const ProcessSection = React.lazy(() => import("./components/Services/ProcessSection"));
const IntegracionesSection = React.lazy(() => import("./components/Services/IntegracionesSection"));
const VentajasSection = React.lazy(() => import("./components/Services/VentajasSection"));
const PickingPackingSection = React.lazy(() => import("./components/Services/PickingPackingSection"));
const DataAnalysisSection = React.lazy(() => import("./components/Services/DataAnalysisSection"));
const DevolutionSection = React.lazy(() => import("./components/Services/DevolutionSection"));
const EnvioSection = React.lazy(() => import("./components/Services/EnvioSection"));
const ContactSection = React.lazy(() => import("./components/Contact/ContactSection"));
const TalentSection = React.lazy(() => import("./components/Contact/TalentSection"));
const PrivacyPolitic = React.lazy(() => import("./components/Contact/PrivacyPolitic"));
const Faq = React.lazy(() => import("./components/Faq/Faq"));

// Lazy loading para componentes B2B
const B2BComponents = React.lazy(() => import("./components/Services/B2B").then(module => ({
  default: () => {
    const { LogisticaCreceSection, InovacionSection, RetailersLideresSection, RespaldoSection } = module;
    return (
      <>
        <LogisticaCreceSection/>
        <InovacionSection/>
        <RetailersLideresSection/>
        <RespaldoSection/>
      </>
    );
  }
})));

// Inicializa Google Analytics
ReactGA.initialize("G-Z7LYPT9LHY");

// Componente de carga mejorado
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="text-center">
      <div className="loading-spinner"></div>
      <p className="loading-text">Cargando...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Navbar />
        <ScrollToHash />
        <WhatsappButton/>
        <Suspense fallback={<LoadingSpinner />}>
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
                  <Benefits2 />
                </>
              }
            />
            <Route
              path="/bussinesToBussines"
              element={<B2BComponents />}
            />
            <Route
              path="/valueaddedsservices"
              element={<ValueAddedServicesPage />}
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
            <Route path="/talento" element={<TalentSection />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolitic />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
