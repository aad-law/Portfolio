import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        
        <a href="#home" className="navbar-logo" >
          AadLaw
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}

          {/* CTA Button */}
          {/* <a
            href="#contact"
            className="navbar-cta-button"
          >
            Let's Talk
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-menu-link"
          >
            {link.name}
          </a>
        ))}

        {/* <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mobile-menu-cta"
        >
          Let's Talk
        </a> */}
      </div>
    </nav>
  );
}