import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  const containerRef = useRef(null);
  
  // Enhanced mouse tracking for cursor effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState([]);
  
  // Parallax transforms
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y1 = useTransform(smoothProgress, [0, 1], [0, -50]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -150]);
  
  // Enhanced mouse tracking with trail effect
  useEffect(() => {
    const updateCursor = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Create trailing effect
      setCursorTrail(prev => {
        const newTrail = [newPosition, ...prev.slice(0, 4)];
        return newTrail;
      });
      
      // Update CSS custom properties for cursor glow
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);
  
  // Scroll-driven reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);
    
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    revealElements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  // Magnetic button effect
  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
  };
  
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
  };

  return (
    <div className="dark-container" ref={containerRef}>
      <Header />
      
      {/* Cursor Trail Effect */}
      {cursorTrail.map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: pos.x - 10,
            top: pos.y - 10,
            opacity: (5 - index) * 0.2,
            transform: `scale(${(5 - index) * 0.2})`,
          }}
        />
      ))}
      
      {/* Hero Section with Enhanced Parallax */}
      <motion.div style={{ y: y1 }}>
        <HeroSection 
          mousePosition={mousePosition} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </motion.div>
      
      {/* Industry Personalization with Different Background */}
      <motion.div style={{ y: y2 }}>
        <IndustrySelector 
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
        />
      </motion.div>
      
      {/* Services Rail with Parallax */}
      <motion.div style={{ y: y1 }}>
        <ServicesSection />
      </motion.div>
      
      {/* Interactive Process Timeline */}
      <motion.div style={{ y: y3 }}>
        <ProcessTimeline />
      </motion.div>
      
      {/* AI Playground with Enhanced Effects */}
      <motion.div style={{ y: y2 }}>
        <AIPlayground />
      </motion.div>
      
      {/* Case Studies */}
      <motion.div style={{ y: y1 }}>
        <CaseStudies selectedIndustry={selectedIndustry} />
      </motion.div>
      
      {/* Stats & Partners */}
      <motion.div style={{ y: y2 }}>
        <StatsSection />
      </motion.div>
      
      {/* Pricing */}
      <motion.div style={{ y: y3 }}>
        <PricingSection />
      </motion.div>
      
      {/* Team */}
      <motion.div style={{ y: y1 }}>
        <TeamSection />
      </motion.div>
      
      {/* Contact */}
      <motion.div style={{ y: y2 }}>
        <ContactSection />
      </motion.div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;