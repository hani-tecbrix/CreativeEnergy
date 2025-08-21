import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mock';
import { 
  Palette, 
  Code, 
  Target, 
  Brain, 
  TrendingUp, 
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

const serviceIcons = {
  Palette,
  Code,
  Target,
  Brain,
  TrendingUp,
  ShoppingCart
};

const ServicesSection = () => {
  return (
    <section className="split-section cursor-glow" id="services">
      {/* Left Half - Services Title (Primary Color Background) */}
      <div className="split-half primary scroll-reveal-left">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-large mb-6 text-white">What we do</h2>
            <p className="body-large text-white/90 mb-8">
              End-to-end transformation services that turn ambitious ideas into market-leading products.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover-glow">
                  <span className="text-brand-primary font-bold">6</span>
                </div>
                <div>
                  <p className="heading-3 text-white">Core Services</p>
                  <p className="body-small text-white/70">Integrated approach</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover-glow">
                  <span className="text-brand-primary font-bold">150+</span>
                </div>
                <div>
                  <p className="heading-3 text-white">Projects Delivered</p>
                  <p className="body-small text-white/70">Proven track record</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Services Grid (White Background) */}
      <div className="split-half white scroll-reveal-right">
        <div className="w-full max-w-4xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              
              return (
                <motion.div 
                  key={service.id}
                  className="group bg-white border border-gray-200 p-6 cursor-pointer hover-lift hover:border-brand-primary hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(255, 91, 77, 0.1)"
                  }}
                >
                  <div className="mb-4">
                    <Icon 
                      size={32} 
                      className="text-brand-primary group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  
                  <h3 className="heading-3 mb-3 text-gray-900 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="body-small text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="body-small text-gray-500 mb-2">Impact:</p>
                    <p className="body-medium text-brand-primary font-semibold">
                      {service.kpi}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="mt-4 flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    <span className="body-small">Show me a plan</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;