import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HireTalent from './pages/HireTalent';
import ServiceDetail from './pages/ServiceDetail';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Fallback for unknown routes
function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '24px', paddingTop: '80px' }}>
      <div style={{ fontSize: '80px' }}>🔍</div>
      <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '48px', fontWeight: 900, color: '#f0f4ff' }}>404</h1>
      <p style={{ color: '#94a3b8', fontSize: '18px' }}>Page not found</p>
      <a href="/" className="btn btn-primary btn-lg">Go Home</a>
    </main>
  );
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/sectors" element={<Services />} />
        <Route path="/resources/*" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire" element={<HireTalent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
