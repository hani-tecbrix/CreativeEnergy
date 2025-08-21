import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Cases', href: '#cases' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="dark-header">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="https://customer-assets.emergentagent.com/job_bespoke-landing/artifacts/o8n6nqc5_Logo_ce.png" 
          alt="Creative Energy" 
          className="dark-logo"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="dark-nav hidden md:flex">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="dark-nav-link dark-transition"
          >
            {item.label}
          </button>
        ))}
        <button className="btn-primary ml-8">
          Start Transformation
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="dark-nav-link text-left"
              >
                {item.label}
              </button>
            ))}
            <button className="btn-primary mt-4">
              Start Transformation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;