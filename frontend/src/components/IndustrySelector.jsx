import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '../data/mock';
import { TrendingUp, DollarSign, Users, Zap, Shield, GraduationCap } from 'lucide-react';

const industryIcons = {
  finance: DollarSign,
  healthcare: Shield,
  retail: Users,
  manufacturing: Zap,
  government: Shield,
  education: GraduationCap
};

const IndustrySelector = ({ selectedIndustry, setSelectedIndustry }) => {
  const selectedData = industries.find(ind => ind.id === selectedIndustry);

  return (
    <section className="split-section cursor-glow" id="industries">
      {/* Left Half - Industry Selector (White Background) */}
      <div className="split-half white scroll-reveal-left">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-medium mb-4">Which industry are you?</h2>
            <p className="body-medium text-gray-600 mb-12">
              Select your industry to see personalized solutions and case studies.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {industries.map((industry) => {
                const Icon = industryIcons[industry.id];
                const isSelected = selectedIndustry === industry.id;
                
                return (
                  <motion.button
                    key={industry.id}
                    className={`p-6 border-2 transition-all duration-300 cursor-pointer hover-lift ${
                      isSelected 
                        ? 'border-brand-primary bg-brand-hover' 
                        : 'border-gray-300 hover:border-brand-primary bg-white hover:bg-brand-hover'
                    }`}
                    onClick={() => setSelectedIndustry(industry.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon 
                      size={32} 
                      className={`mb-4 ${isSelected ? 'text-brand-primary' : 'text-gray-600'}`} 
                    />
                    <h3 className={`heading-3 mb-2 ${isSelected ? 'text-brand-primary' : 'text-gray-900'}`}>
                      {industry.name}
                    </h3>
                    <p className="body-small text-gray-600">
                      {industry.description}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Selected Industry Details (Grey Background) */}
      <div className="split-half grey scroll-reveal-right">
        <div className="w-full max-w-2xl">
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Industry Visualization */}
            <div className="relative mb-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_bespoke-landing/artifacts/xukonw81_Brand_Image_Dodle.png"
                alt="Brand Doodle Art"
                className="w-full max-w-md opacity-30 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-500 parallax-element"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-4 mx-auto hover-glow">
                    {React.createElement(industryIcons[selectedData.id], { 
                      size: 32, 
                      className: "text-white" 
                    })}
                  </div>
                  <h3 className="heading-2 mb-2 text-gray-900">{selectedData.name}</h3>
                  <p className="body-medium text-gray-600">{selectedData.description}</p>
                </div>
              </div>
            </div>

            {/* Key Metric */}
            <motion.div 
              className="bg-brand-primary border border-brand-primary p-6 mb-8 hover-lift"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-white" size={24} />
                <span className="body-medium text-white">Case Study Result</span>
              </div>
              <p className="heading-2 text-white">{selectedData.caseMetric}</p>
            </motion.div>

            {/* Services for Industry */}
            <div>
              <h4 className="heading-3 mb-4 text-gray-900">Key Solutions</h4>
              <div className="space-y-3">
                {selectedData.services.map((service, index) => (
                  <motion.div 
                    key={service}
                    className="flex items-center gap-3 p-3 bg-white border border-gray-200 hover:border-brand-primary transition-colors hover-lift"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    <span className="body-medium text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySelector;