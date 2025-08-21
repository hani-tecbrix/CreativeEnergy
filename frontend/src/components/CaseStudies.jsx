import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies, industries } from '../data/mock';
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp,
  Users,
  DollarSign,
  Filter
} from 'lucide-react';

const CaseStudies = ({ selectedIndustry }) => {
  const [filter, setFilter] = useState('all');
  const [expandedCase, setExpandedCase] = useState(null);

  const filteredCases = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.industry.toLowerCase() === filter);

  const industryFilters = ['all', ...industries.map(i => i.name.toLowerCase())];

  return (
    <section className="split-section" id="cases">
      {/* Left Half - Case Studies Filter & Info */}
      <div className="split-half black">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-large mb-6">Showcase</h2>
            <p className="body-large text-text-secondary mb-8">
              Real transformations, measurable results. See how we've helped companies like yours achieve breakthrough growth.
            </p>
            
            {/* Filter Buttons */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="text-brand-primary" size={20} />
                <span className="heading-3">Filter by Industry</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {industryFilters.map((filterOption) => (
                  <motion.button
                    key={filterOption}
                    onClick={() => setFilter(filterOption)}
                    className={`px-4 py-2 text-sm transition-all duration-300 ${
                      filter === filterOption
                        ? 'bg-brand-primary text-black'
                        : 'bg-bg-overlay text-text-secondary hover:text-brand-primary border border-border-subtle hover:border-brand-primary'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-bg-overlay border border-border-subtle p-6">
                <TrendingUp className="text-brand-primary mb-3" size={24} />
                <p className="heading-2 text-brand-primary">340%</p>
                <p className="body-small text-text-muted">Average ROI</p>
              </div>
              <div className="bg-bg-overlay border border-border-subtle p-6">
                <Users className="text-brand-primary mb-3" size={24} />
                <p className="heading-2 text-brand-primary">2.5M</p>
                <p className="body-small text-text-muted">Users Impacted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Case Studies Grid */}
      <div className="split-half content">
        <div className="w-full max-w-4xl">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {filteredCases.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
                >
                  <div className="bg-bg-overlay border border-border-subtle overflow-hidden hover:border-brand-primary transition-all duration-500">
                    {/* Case Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={caseStudy.thumbnail}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-brand-primary text-black text-sm font-medium mb-2">
                          {caseStudy.industry}
                        </span>
                        <h3 className="heading-2 text-white mb-2">{caseStudy.title}</h3>
                        <p className="body-medium text-brand-primary font-semibold">
                          {caseStudy.metric}
                        </p>
                      </div>
                    </div>
                    
                    {/* Case Content */}
                    <div className="p-6">
                      <p className="body-medium text-text-secondary mb-4">
                        {caseStudy.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <motion.div 
                          className="flex items-center gap-2 text-brand-primary"
                          whileHover={{ x: 5 }}
                        >
                          <span className="body-medium">View Case Study</span>
                          <ArrowRight size={16} />
                        </motion.div>
                        
                        <ExternalLink 
                          className="text-text-muted group-hover:text-brand-primary transition-colors" 
                          size={16} 
                        />
                      </div>
                    </div>
                    
                    {/* Expanded Results */}
                    <AnimatePresence>
                      {expandedCase === caseStudy.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="border-t border-border-subtle bg-brand-hover"
                        >
                          <div className="p-6">
                            <h4 className="heading-3 text-brand-primary mb-4">Key Results</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {caseStudy.results.map((result, resultIndex) => (
                                <motion.div
                                  key={resultIndex}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4, delay: resultIndex * 0.1 }}
                                  className="bg-bg-overlay border border-brand-primary p-4 text-center"
                                >
                                  <DollarSign className="text-brand-primary mx-auto mb-2" size={20} />
                                  <p className="body-medium text-brand-primary font-semibold">
                                    {result}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;