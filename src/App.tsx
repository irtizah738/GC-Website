/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, lazy, Suspense, Component } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { ThemeProvider } from './lib/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatedBackground } from './components/animations/AnimatedBackground';
import { Loading } from './components/ui/Loading';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const SystemsWeBuild = lazy(() => import('./pages/SystemsWeBuild'));
const Industries = lazy(() => import('./pages/Industries'));
const EngineeringApproach = lazy(() => import('./pages/EngineeringApproach'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const AILab = lazy(() => import('./pages/AILab'));
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

const LOGO_URL = "https://res.cloudinary.com/dzeiyvngc/image/upload/v1775507565/WhatsApp_Image_2024-04-27_at_02.22.22_21816fa5_ch75oe.jpg";

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
        <Suspense fallback={<Loading />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/systems" element={<SystemsWeBuild />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/approach" element={<EngineeringApproach />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ai-lab" element={<AILab />} />
            
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

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState;
  props: ErrorBoundaryProps;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 p-4">
          <div className="max-w-md w-full space-y-6 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Something went wrong</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              The application encountered an unexpected error. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <link rel="icon" type="image/jpeg" href={LOGO_URL} />
        </Helmet>
        <Router>
          <ErrorBoundary>
            <ScrollToTop />
            <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-white selection:text-zinc-900 transition-colors duration-300 relative">
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
              <AnimatedBackground />
              <Navbar />
              <main id="main-content" className="relative z-10">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
