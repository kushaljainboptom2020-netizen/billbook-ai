import React from 'react';
import '@/App.css';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Comparison from '@/components/landing/Comparison';
import Features from '@/components/landing/Features';
import VoiceAI from '@/components/landing/VoiceAI';
import Trust from '@/components/landing/Trust';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import MobileStickyCTA from '@/components/landing/MobileStickyCTA';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Comparison />
        <Features />
        <VoiceAI />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
