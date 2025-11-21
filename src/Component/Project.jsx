import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Retext from "../assets/Project_pics/Retext.png";
import NewsPic from "../assets/Project_pics/Wnews.png";
import PortfolioPic from "../assets/Project_pics/Portfolio-web.png";
import './Project.css';

// Enhanced Card Component
function ProjectCard({ title, description, image, tech = [], link, githubLink }) {
  return (
    <div className="project-card">
      {/* Image Container with Overlay */}
      <div className="project-image-container">
        <img
          src={image}
          alt={title}
          className="project-image"
        />
        
        {/* Gradient Overlay */}
        <div className="project-image-gradient" />

        {/* Links Overlay */}
        <div className="project-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="project-content">
        <h2 className="project-title">
          {title}
        </h2>

        <p className="project-description">
          {description}
        </p>

        {/* Tech Stack */}
        {tech && tech.length > 0 && (
          <div className="project-tech-stack">
            {tech.map((technology, index) => (
              <span key={index} className="project-tech-tag">
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Accent Line */}
      <div className="project-card-accent" />
    </div>
  );
}

// Main Project Section Component
export default function Project() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "TextUtils Clone",
      description: "A web application that provides various text manipulation utilities such as converting text to uppercase/lowercase, removing extra spaces, counting words and characters, and more. Built with React for a responsive and user-friendly experience.",
      tech: ["React", "Bootstrap","Redux"],
      githubLink: "https://github.com/aad-law/ReText",
      image: Retext
    },
    {
      title: "News Website",
      description: "A dynamic news website that aggregates the latest news articles from various sources using NewsAPI. Features include category-based filtering, search functionality, and a responsive design for optimal viewing on all devices.",
      tech: ["React", "Rest APi", "Bootstrap"],
      githubLink: "https://github.com/aad-law/WNews",
      image: NewsPic
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects, skills, and experience. Built with modern web technologies to ensure a sleek design and smooth user experience.",
      tech: ["React", "SPLine", "vite"],
      githubLink: "https://github.com/aad-law/portfolio",
      image: PortfolioPic
    },
  ];

  return (
    <div className="project-section">
      {/* Background Glow Effects */}
      <div className="project-glow-left" />
      <div className="project-glow-right" />

      {/* Section Header */}
      <div className="project-header">
        <h2 className="project-header-subtitle">
          My Work
        </h2>
        <h1 className="project-header-title">
          Featured Projects
        </h1>
        <p className="project-header-description">
          A collection of projects that showcase my skills in web development, 
          problem-solving, and creating user-friendly applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            link={project.link}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="project-cta">
        <a
          href="https://github.com/aad-law"
          target="_blank"
          rel="noopener noreferrer"
          className="project-cta-button"
        >
          <Github size={22} />
          View More on GitHub
        </a>
      </div>
    </div>
  );
}