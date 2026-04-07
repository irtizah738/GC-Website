/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'motion/react';
import { ThemeProvider } from './lib/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatedBackground } from './components/animations/AnimatedBackground';
import Home from './pages/Home';
import SystemsWeBuild from './pages/SystemsWeBuild';
import Industries from './pages/Industries';
import EngineeringApproach from './pages/EngineeringApproach';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';

// Lazy load demo pages
const GCErpDemo = lazy(() => import('./pages/demo/GCErpDemo'));
const GHimsDemo = lazy(() => import('./pages/demo/GHimsDemo'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

const LOGO_URL = "https://res.cloudinary.com/dzeiyvngc/image/upload/v1775507001/123_kfb1me.jpg";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-zinc-900 dark:border-white border-t-transparent rounded-full animate-spin" /></div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/systems" element={<SystemsWeBuild />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/approach" element={<EngineeringApproach />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Demo Routes */}
            <Route path="/demo/gc-erp" element={<GCErpDemo />} />
            <Route path="/demo/g-hims" element={<GHimsDemo />} />
            
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <link rel="icon" type="image/jpeg" href={LOGO_URL} />
        </Helmet>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900 transition-colors duration-300 relative">
            <AnimatedBackground />
            <Navbar />
            <main className="relative z-10">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
