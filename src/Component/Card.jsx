import React from "react";
import { ExternalLink, Github } from "lucide-react";
import './Card.css';

export default function Card({ title, description, image, tech = [], link, githubLink }) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={image}
          alt={title}
          className="card-image"
        />
        
        
        <div className="card-gradient-overlay" />

        {/* Links Overlay */}
        <div className="card-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link-btn card-link-github"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link-btn card-link-external"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="card-content">
        {/* Title */}
        <h2 className="card-title">
          {title}
        </h2>

        {/* Description */}
        <p className="card-description">
          {description}
        </p>

        {/* Tech Stack */}
        {tech && tech.length > 0 && (
          <div className="card-tech-stack">
            {tech.map((technology, index) => (
              <span key={index} className="card-tech-tag">
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Accent Line */}
      <div className="card-accent" />
    </div>
  );
}