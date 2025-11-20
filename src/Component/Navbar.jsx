import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' }, 
  // { name: 'Contact', href: '#contact' }
];


  return (
    <nav style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '1000',
      padding: isScrolled ? '15px 80px' : '25px 80px',
      background: isScrolled 
        ? 'rgba(0, 0, 0, 0.9)' 
        : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(139, 92, 246, 0.2)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <a 
          href="#home"
          style={{
            fontSize: '24px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            letterSpacing: '1px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)';
            e.currentTarget.style.WebkitBackgroundClip = 'text';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #fff 0%, #8b5cf6 100%)';
            e.currentTarget.style.WebkitBackgroundClip = 'text';
          }}
        >
          AadLaw
        </a>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#8b5cf6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#d1d5db';
              }}
            >
              {link.name}
            </a>
          ))}

          {/* CTA Button */}
          {/* <a
            href="#contact"
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
            }}
          >
            Let's Talk
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{
        display: isMobileMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '20px',
        padding: '30px 0',
        marginTop: '20px',
        borderTop: '1px solid rgba(139, 92, 246, 0.2)'
      }}
      className="mobile-menu"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#8b5cf6';
              e.currentTarget.style.paddingLeft = '10px';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#d1d5db';
              e.currentTarget.style.paddingLeft = '0';
            }}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            marginTop: '10px'
          }}
        >
          Let's Talk
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          nav > div > div:nth-child(2) {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}