import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/value-proposition" element={<ValueProposition />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/cta" element={<CTA />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 