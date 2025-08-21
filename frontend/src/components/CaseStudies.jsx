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
            <h2 className="display-large mb-6 text-white">Showcase</h2>
            <p className="body-large text-gray-300 mb-8">
              Real transformations, measurable results. See how we've helped companies like yours achieve breakthrough growth.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="text-brand-primary" size={20} />
                <span className="heading-3 text-white">Filter by Industry</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {industryFilters.map((filterOption) => (
                  <motion.button
                    key={filterOption}
                    onClick={() => setFilter(filterOption)}
                    className={`px-4 py-2 text-sm transition-all duration-300 ${
                      filter === filterOption
                        ? 'bg-brand-primary text-white'
                        : 'bg-gray-800 text-gray-300 hover:text-brand-primary border border-gray-700 hover:border-brand-primary'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6">
                <TrendingUp className="text-brand-primary mb-3" size={24} />
                <p className="heading-2 text-brand-primary">340%</p>
                <p className="body-small text-gray-400">Average ROI</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-6">
                <Users className="text-brand-primary mb-3" size={24} />
                <p className="heading-2 text-brand-primary">2.5M</p>
                <p className="body-small text-gray-400">Users Impacted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Case Studies Grid (White Background) */}
      <div className="split-half white">
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
                  <div className="bg-white border border-gray-200 overflow-hidden hover:border-brand-primary hover:shadow-lg transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={caseStudy.thumbnail}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-brand-primary text-white text-sm font-medium mb-2">
                          {caseStudy.industry}
                        </span>
                        <h3 className="heading-2 text-white mb-2">{caseStudy.title}</h3>
                        <p className="body-medium text-brand-primary font-semibold">
                          {caseStudy.metric}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="body-medium text-gray-600 mb-4">
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
                          className="text-gray-400 group-hover:text-brand-primary transition-colors" 
                          size={16} 
                        />
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedCase === caseStudy.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="border-t border-gray-200 bg-gray-50"
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
                                  className="bg-white border border-brand-primary p-4 text-center"
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