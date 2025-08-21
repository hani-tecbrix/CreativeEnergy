import React from 'react';
import { motion } from 'framer-motion';
import { companyStats, partnerLogos, testimonials } from '../data/mock';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Award,
  Star,
  Quote
} from 'lucide-react';

const statIcons = [TrendingUp, Clock, Target, Award];

const StatsSection = () => {
  return (
    <section className="split-section" id="stats">
      {/* Left Half - Company Stats */}
      <div className="split-half black">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-large mb-6">Prove it</h2>
            <p className="body-large text-text-secondary mb-12">
              Numbers don't lie. Here's the measurable impact we've delivered for our clients.
            </p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {companyStats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group cursor-pointer"
                  >
                    <Icon className="text-brand-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                    <motion.p 
                      className="heading-1 text-brand-primary mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      {stat.value}{stat.suffix}
                    </motion.p>
                    <p className="body-medium text-text-secondary">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Partner Logos */}
            <div>
              <h3 className="heading-3 mb-6 text-center">Trusted Technology Partners</h3>
              <div className="grid grid-cols-3 gap-8">
                {partnerLogos.map((partner, index) => (
                  <motion.div
                    key={partner}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-bg-overlay border border-border-subtle p-4 flex items-center justify-center h-16 hover:border-brand-primary transition-colors duration-300"
                  >
                    <span className="body-medium text-text-muted font-semibold">
                      {partner}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Testimonials */}
      <div className="split-half content">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-2 mb-8">What our clients say</h3>
            
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-bg-overlay border border-border-subtle p-8 relative"
                >
                  <Quote className="absolute top-4 right-4 text-brand-primary opacity-50" size={24} />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-brand-primary"
                    />
                    <div>
                      <h4 className="heading-3">{testimonial.name}</h4>
                      <p className="body-small text-text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="body-large text-text-secondary mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-brand-primary fill-current" size={16} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;