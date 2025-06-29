import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
// import EnhancedHeader from './components/EnhancedHeader';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-lavender-50/30 dark:from-dark-bg dark:via-dark-surface dark:to-dark-card transition-colors duration-300">
        <Header />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/services"
              element={
                <div className="pt-20">
                  <Services />
                </div>
              }
            />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </motion.div>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
