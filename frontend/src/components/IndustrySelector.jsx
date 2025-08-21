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
    <section className="split-section" id="industries">
      {/* Left Half - Industry Selector */}
      <div className="split-half black">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-medium mb-4">Which industry are you?</h2>
            <p className="body-medium text-text-secondary mb-12">
              Select your industry to see personalized solutions and case studies.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {industries.map((industry) => {
                const Icon = industryIcons[industry.id];
                const isSelected = selectedIndustry === industry.id;
                
                return (
                  <motion.button
                    key={industry.id}
                    className={`p-6 border-2 transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? 'border-brand-primary bg-brand-hover' 
                        : 'border-border-subtle hover:border-brand-primary bg-bg-overlay'
                    }`}
                    onClick={() => setSelectedIndustry(industry.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon 
                      size={32} 
                      className={`mb-4 ${isSelected ? 'text-brand-primary' : 'text-text-muted'}`} 
                    />
                    <h3 className={`heading-3 mb-2 ${isSelected ? 'text-brand-primary' : 'text-text-primary'}`}>
                      {industry.name}
                    </h3>
                    <p className="body-small text-text-secondary">
                      {industry.description}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Selected Industry Details */}
      <div className="split-half content">
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
                className="w-full max-w-md opacity-20 grayscale hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    {React.createElement(industryIcons[selectedData.id], { 
                      size: 32, 
                      className: "text-black" 
                    })}
                  </div>
                  <h3 className="heading-2 mb-2">{selectedData.name}</h3>
                  <p className="body-medium text-text-secondary">{selectedData.description}</p>
                </div>
              </div>
            </div>

            {/* Key Metric */}
            <motion.div 
              className="bg-brand-hover border border-brand-primary p-6 mb-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-brand-primary" size={24} />
                <span className="body-medium text-brand-primary">Case Study Result</span>
              </div>
              <p className="heading-2 text-brand-primary">{selectedData.caseMetric}</p>
            </motion.div>

            {/* Services for Industry */}
            <div>
              <h4 className="heading-3 mb-4">Key Solutions</h4>
              <div className="space-y-3">
                {selectedData.services.map((service, index) => (
                  <motion.div 
                    key={service}
                    className="flex items-center gap-3 p-3 bg-bg-overlay"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    <span className="body-medium">{service}</span>
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