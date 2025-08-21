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
    <section className="split-section" id="services">
      {/* Left Half - Services Title */}
      <div className="split-half black">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-large mb-6">What we do</h2>
            <p className="body-large text-text-secondary mb-8">
              End-to-end transformation services that turn ambitious ideas into market-leading products.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">6</span>
                </div>
                <div>
                  <p className="heading-3">Core Services</p>
                  <p className="body-small text-text-muted">Integrated approach</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">150+</span>
                </div>
                <div>
                  <p className="heading-3">Projects Delivered</p>
                  <p className="body-small text-text-muted">Proven track record</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Services Grid */}
      <div className="split-half content">
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
                  className="group bg-bg-overlay border border-border-subtle p-6 cursor-pointer dark-transition hover:border-brand-primary"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(0, 255, 209, 0.05)"
                  }}
                >
                  <div className="mb-4">
                    <Icon 
                      size={32} 
                      className="text-brand-primary group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  
                  <h3 className="heading-3 mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="body-small text-text-secondary mb-4">
                    {service.description}
                  </p>
                  
                  <div className="border-t border-border-subtle pt-4 mt-4">
                    <p className="body-small text-text-muted mb-2">Impact:</p>
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