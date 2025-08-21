import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './Header';
import HeroSection from './HeroSection';
import IndustrySelector from './IndustrySelector';
import ServicesSection from './ServicesSection';
import ProcessTimeline from './ProcessTimeline';
import AIPlayground from './AIPlayground';
import CaseStudies from './CaseStudies';
import StatsSection from './StatsSection';
import PricingSection from './PricingSection';
import TeamSection from './TeamSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const [selectedIndustry, setSelectedIndustry] = useState('finance');
  
  // Mouse tracking for cursor effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="dark-container">
      <Header />
      
      {/* Hero Section with 3D Energy Core */}
      <HeroSection mousePosition={mousePosition} />
      
      {/* Industry Personalization */}
      <IndustrySelector 
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
      />
      
      {/* Services Rail */}
      <ServicesSection />
      
      {/* Interactive Process Timeline */}
      <ProcessTimeline />
      
      {/* AI Playground */}
      <AIPlayground />
      
      {/* Case Studies */}
      <CaseStudies selectedIndustry={selectedIndustry} />
      
      {/* Stats & Partners */}
      <StatsSection />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* Team */}
      <TeamSection />
      
      {/* Contact */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;