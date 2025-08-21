import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Calendar, 
  FileText, 
  MessageSquare,
  CheckCircle,
  Upload,
  X
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    nextStep: 'call',
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        file: file
      }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      file: null
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        challenge: '',
        nextStep: 'call',
        file: null
      });
    }, 3000);
  };

  const nextStepOptions = [
    { value: 'call', label: 'Schedule a call', icon: Calendar },
    { value: 'workshop', label: 'Strategy workshop', icon: MessageSquare },
    { value: 'rfp', label: 'Full RFP process', icon: FileText }
  ];

  return (
    <section className="split-section" id="contact">
      {/* Left Half - Contact Info (White Background) */}
      <div className="split-half white">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-large mb-6 text-gray-900">Start your transformation</h2>
            <p className="body-large text-gray-600 mb-8">
              Ready to turn your vision into reality? Let's discuss how we can help you achieve breakthrough results.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="heading-3 mb-2 text-gray-900">Quick Brief</h4>
                  <p className="body-medium text-gray-600">
                    Tell us about your challenge in 3 fields
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="heading-3 mb-2 text-gray-900">Choose Next Step</h4>
                  <p className="body-medium text-gray-600">
                    Call, workshop, or full RFP - your choice
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="heading-3 mb-2 text-gray-900">Get Started</h4>
                  <p className="body-medium text-gray-600">
                    Response within 24 hours guaranteed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-primary border border-brand-primary p-6">
              <h4 className="heading-3 text-white mb-2">24-Hour Response Guarantee</h4>
              <p className="body-medium text-white/90">
                We'll review your brief and get back to you with next steps within one business day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Half - Contact Form */}
      <div className="split-half content">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block body-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block body-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block body-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block body-medium text-white mb-2">
                    Challenge Description *
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors resize-none"
                    placeholder="Describe your challenge, goals, and timeline..."
                  />
                </div>

                <div>
                  <label className="block body-medium text-white mb-2">
                    Attach File (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <label 
                      htmlFor="file-upload"
                      className="w-full p-4 bg-gray-800 border border-gray-700 border-dashed text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer flex items-center justify-center gap-3"
                    >
                      <Upload size={20} />
                      <span>Upload brief, requirements, or relevant documents</span>
                    </label>
                    
                    {formData.file && (
                      <div className="mt-2 flex items-center justify-between p-3 bg-brand-primary border border-brand-primary">
                        <span className="body-small text-white">
                          {formData.file.name}
                        </span>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-white hover:text-gray-200 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block body-medium text-white mb-2">
                    Preferred Next Step
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {nextStepOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <motion.label
                          key={option.value}
                          className={`flex items-center gap-4 p-4 border-2 cursor-pointer transition-all duration-300 ${
                            formData.nextStep === option.value
                              ? 'border-brand-primary bg-brand-primary/10'
                              : 'border-gray-700 bg-gray-800 hover:border-brand-primary'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="radio"
                            name="nextStep"
                            value={option.value}
                            checked={formData.nextStep === option.value}
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          <Icon 
                            size={20} 
                            className={formData.nextStep === option.value ? 'text-brand-primary' : 'text-gray-400'} 
                          />
                          <span className={`body-medium ${
                            formData.nextStep === option.value ? 'text-brand-primary' : 'text-white'
                          }`}>
                            {option.label}
                          </span>
                        </motion.label>
                      );
                    })}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send size={16} />
                      </motion.div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Send Brief
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <CheckCircle className="text-brand-primary mx-auto mb-6" size={64} />
                <h3 className="heading-2 text-brand-primary mb-4">Brief Received!</h3>
                <p className="body-large text-gray-300 mb-6">
                  Thank you for your submission. We'll review your brief and get back to you within 24 hours.
                </p>
                <p className="body-medium text-gray-400">
                  Check your email for a confirmation and next steps.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;