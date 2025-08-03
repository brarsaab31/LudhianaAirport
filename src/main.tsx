import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfUse from './pages/TermsOfUse.tsx';
import Contact from './pages/Contact.tsx';
import Disclaimer from './pages/Disclaimer.tsx';
import About from './pages/About.tsx';
import News from './pages/News.tsx';
import BaggageClaims from './pages/BaggageClaims.tsx';
import FlightStatus from './pages/FlightStatus.tsx';
import TerminalMap from './pages/TerminalMap.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/baggage-claims" element={<BaggageClaims />} />
        <Route path="/flight-status" element={<FlightStatus />} />
        <Route path="/terminal-map" element={<TerminalMap />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  </StrictMode>
);
