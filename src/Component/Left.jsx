import React from 'react';
import { Github, Linkedin, Mail, Instagram, Code2, Download, ArrowRight } from 'lucide-react';
import resume from '../assets/AadLaw-Resume.pdf';

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
        <button className="primary-btn">
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

      {/* CSS in same file */}
      <style>{`
        .left-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0 80px;
          min-height: 100vh;
          background: linear-gradient(135deg, #000000FF 0%, #000000FF 100%);
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .background-glow {
          position: absolute;
          top: 20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .greeting {
          font-size: 18px;
          font-weight: 500;
          color: #8b5cf6;
          margin-bottom: 20px;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeInUp 0.8s ease-out;
        }

        .name {
          font-size: 72px;
          font-weight: 800;
          margin: 0 0 20px 0;
          line-height: 1.1;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .tagline {
          font-size: 24px;
          font-weight: 400;
          color: #9ca3af;
          margin-bottom: 40px;
          max-width: 500px;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .primary-btn, .secondary-btn {
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-btn {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          color: #fff;
          border: none;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(139, 92, 246, 0.4);
        }

        .secondary-btn {
          background: transparent;
          color: #fff;
          border: 2px solid #374151;
        }

        .secondary-btn:hover {
          border-color: #8b5cf6;
          transform: translateY(-2px);
          background: rgba(139, 92, 246, 0.1);
        }
.social-icon {
  position: relative;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
  transform-origin: top;
}

.social-icon:hover .tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(4px);
}

        .social-links {
          display: flex;
          gap: 20px;
          animation: fadeInUp 0.8s ease-out 0.8s backwards;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #9ca3af;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: #8b5cf6;
          color: #8b5cf6;
          transform: translateY(-3px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 80px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          animation: bounce 2s infinite;
        }

        .scroll-indicator .line {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #8b5cf6);
          border-radius: 2px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
