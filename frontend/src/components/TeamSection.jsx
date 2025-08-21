import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/mock';
import { 
  Play, 
  User, 
  Linkedin, 
  Twitter,
  Github
} from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="split-section" id="team">
      {/* Left Half - Team Intro */}
      <div className="split-half black">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-large mb-6">We hire the right humans</h2>
            <p className="body-large text-text-secondary mb-8">
              Our team combines deep technical expertise with creative problem-solving. 
              Meet the people who will transform your vision into reality.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-bg-overlay border border-border-subtle">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">12</span>
                </div>
                <div>
                  <h4 className="heading-3">Senior Specialists</h4>
                  <p className="body-small text-text-muted">10+ years average experience</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-bg-overlay border border-border-subtle">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">4</span>
                </div>
                <div>
                  <h4 className="heading-3">Core Disciplines</h4>
                  <p className="body-small text-text-muted">Design, Engineering, AI, Growth</p>
                </div>
              </div>
            </div>

            <motion.button 
              className="btn-primary mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Meet the Full Team
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Team Members */}
      <div className="split-half content">
        <div className="w-full max-w-3xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-bg-overlay border border-border-subtle overflow-hidden hover:border-brand-primary transition-all duration-500"
              >
                {/* Video Preview Section */}
                <div className="relative h-48 bg-gradient-to-br from-brand-primary/20 to-transparent flex items-center justify-center overflow-hidden">
                  {/* Placeholder for video - in real implementation, this would be actual video */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
                  <motion.div 
                    className="relative z-10 flex flex-col items-center text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-4 cursor-pointer">
                      <Play className="text-black ml-1" size={24} />
                    </div>
                    <p className="body-small text-white">Watch {member.name} at work</p>
                  </motion.div>
                  
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-brand-primary rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="heading-3 group-hover:text-brand-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="body-medium text-brand-primary font-semibold">
                        {member.role}
                      </p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button 
                        className="p-2 bg-bg-overlay border border-border-subtle hover:border-brand-primary text-text-muted hover:text-brand-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin size={16} />
                      </motion.button>
                      <motion.button 
                        className="p-2 bg-bg-overlay border border-border-subtle hover:border-brand-primary text-text-muted hover:text-brand-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={16} />
                      </motion.button>
                    </div>
                  </div>
                  
                  <p className="body-small text-text-secondary mb-4">
                    {member.expertise}
                  </p>
                  
                  <div className="flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <User size={16} />
                    <span className="body-small">View Full Profile</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;