import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import About from './components/NavPages/AboutUs.jsx'; // Assuming you have an About component
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurStrength from './components/NavPages/OurStrength.jsx';
import OurServices from './components/NavPages/OurServices.jsx';
import ContactUs from './components/NavPages/ContactUs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-strength" element={<OurStrength />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
