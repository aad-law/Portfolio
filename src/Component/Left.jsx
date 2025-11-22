import React from 'react';
import { Github, Linkedin, Mail, Instagram, Code2, Download, ArrowRight } from 'lucide-react';
import resume from '../assets/Aadesh lawate Resume.pdf';
import './Left.css';

export default function Left() {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/aad-law', label: 'GitHub: aad-law' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/aad-law', label: 'LinkedIn: aad-law' },
    { Icon: Instagram, href: 'https://www.instagram.com/aadlaw1/', label: 'Instagram: aadlaw1' },
    { Icon: Code2, href: 'https://leetcode.com/u/aad-law/', label: 'LeetCode: aad-law' },
    { Icon: Mail, href: 'mailto:aadeshlawate19@gmail.com', label: 'Email: aadeshlawate19@gmail.com' }
  ];

  return (
    <div className="left-container">
      <div className="background-glow" />

      <div className="greeting">Hello, I'm</div>

      <h1 className="name">AADESH<br />LAWATE</h1>

      <p className="tagline">
        Creative Developer crafting immersive digital experiences with code and design
      </p>

      <div className="buttons">
        <button
          className="primary-btn"
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
          View Projects <ArrowRight size={20} />
        </button>

        <a href={resume} download className="secondary-btn">
          <Download size={20} /> Resume
        </a>
      </div>

      <div className="social-links">
        {socialLinks.map(({ Icon, href, label }) => (
          <a key={label} href={href} aria-label={label} className="social-icon">
            <Icon size={22} />
            <span className="tooltip">{label}</span>
          </a>
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="line" />
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}