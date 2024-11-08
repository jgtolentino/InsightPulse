import React from 'react';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-dark">
      <Hero />
      <ValueProposition />
      <Features />
      <Demo />
      <Footer />
    </main>
  );
}