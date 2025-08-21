import React, { Suspense, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const HeroSection = ({ mousePosition }) => {
  const heroRef = useRef(null);

  // Update CSS custom properties for cursor glow effect
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.setProperty('--mouse-x', `${mousePosition.x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${mousePosition.y}px`);
    }
  }, [mousePosition]);

  return (
    <section className="split-section cursor-glow" ref={heroRef}>
      {/* Left Half - Content */}
      <div className="split-half black">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-brand-primary" size={24} />
              <span className="body-medium text-brand-primary">Transformations, engineered</span>
            </div>
            
            <h1 className="display-huge mb-6">
              Design.{' '}
              <span className="text-brand-primary">Build.</span>{' '}
              Advise.{' '}
              <span className="text-brand-primary">Integrate AI.</span>{' '}
              Scale commerce.
            </h1>
            
            <p className="body-large mb-12 text-text-secondary max-w-xl">
              We transform ambitious ideas into market-leading digital products. 
              From concept to scale, we engineer solutions that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Transformation
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Industry Demos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - 3D Energy Core */}
      <div className="split-half content relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Suspense fallback={
            <div className="flex items-center justify-center w-full h-full">
              <motion.div
                className="w-32 h-32 border-4 border-brand-primary border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          }>
            <div style={{ width: "700px", height: "700px", overflow: "visible", position: "relative" }}>
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </Suspense>
        </div>
        
        {/* Overlay particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-primary rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;