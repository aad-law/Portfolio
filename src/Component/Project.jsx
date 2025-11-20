import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Retext from "../assets/Project_pics/Retext.png";
import NewsPic from "../assets/Project_pics/Wnews.png";
// Enhanced Card Component
function ProjectCard({ title, description, image, tech = [], link, githubLink }) {
  return (
    <div
      className="group relative"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px)';
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(139, 92, 246, 0.3)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Image Container with Overlay */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '240px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)'
      }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
          pointerEvents: 'none'
        }} />

        {/* Links Overlay */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          display: 'flex',
          gap: '10px',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
        className="card-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.9)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
       
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        padding: '28px'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '12px',
          background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.3'
        }}>
          {title}
        </h2>

        <p style={{
          fontSize: '15px',
          lineHeight: '1.7',
          color: '#9ca3af',
          marginBottom: '20px'
        }}>
          {description}
        </p>

        {/* Tech Stack */}
        {tech && tech.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {tech.map((technology, index) => (
              <span
                key={index}
                style={{
                  padding: '6px 14px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#a78bfa',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Accent Line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #8b5cf6, #6366f1, transparent)',
        opacity: 0,
        transition: 'opacity 0.3s ease'
      }}
      className="card-accent" />

      <style>{`
        .group:hover .card-links {
          opacity: 1 !important;
        }
        
        .group:hover .card-accent {
          opacity: 1 !important;
        }
      `}</style>
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
    // {
    //   title: "Weather Dashboard",
    //   description: "Real-time weather tracking application with detailed forecasts, interactive maps, and location-based weather alerts.",
    //   tech: ["React", "OpenWeather API", "Chart.js"],
    //   githubLink: "https://github.com",
    //   image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
    // },
    
    
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000FF 0%, #000000FF 100%)',
      color: '#fff',
      padding: '100px 80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '80px',
        maxWidth: '800px',
        margin: '0 auto 80px'
      }}>
        <h2 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#8b5cf6',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '15px'
        }}>
          My Work
        </h2>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '20px'
        }}>
          Featured Projects
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#9ca3af',
          lineHeight: '1.7'
        }}>
          A collection of projects that showcase my skills in web development, 
          problem-solving, and creating user-friendly applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
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
      <div style={{
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <a
          href="https://github.com/aad-law"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 32px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Github size={22} />
          View More on GitHub
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}