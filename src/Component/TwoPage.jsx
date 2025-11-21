import React, { Component } from 'react';
import { Code, Database, Layers, Zap } from 'lucide-react';
import mypic from '../assets/mypicc.png';
import './TwoPage.css';

export default class TwoPage extends Component {
  render() {
    const techStack = [
      { name: 'Java', icon: Code, color: '#f89820' },
      { name: 'React.js', icon: Layers, color: '#61dafb' },
      { name: 'JavaScript', icon: Zap, color: '#f7df1e' },
      { name: 'HTML', icon: Code, color: '#e34c26' },
      { name: 'CSS', icon: Layers, color: '#264de4' },
      { name: 'PostgreSQL', icon: Database, color: '#336791' }
    ];

    return (
      <div className="two-page-container">
        {/* Background Elements */}
        <div className="background-gradient" />

        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-subtitle">About Me</h2>
          <h1 className="section-title">My Journey into Development</h1>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Photo Section */}
          <div className="photo-section">
            <div className="photo-container">
              <img
                src={mypic}
                alt="Aadesh Lawate"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                className="profile-image"
              />

              {/* Decorative corner elements */}
              <div className="corner-top-left" />
              <div className="corner-bottom-right" />
            </div>

            {/* Floating accent */}
            <div className="floating-accent" />
          </div>

          {/* Story Section */}
          <div>
            <div className="story-card">
              <h3 className="story-heading">
                <span className="heading-accent" />
                The Beginning
              </h3>
              <p className="story-text">
                I began my development journey by building a solid foundation in HTML, CSS, and JavaScript. As my skills grew, I moved into React to create fast, interactive user interfaces. To strengthen my backend understanding, I trained in Java at QSpiders, where I gained practical knowledge of OOP concepts and industry-standard development practices.
              </p>
              <p className="story-text">
                My project experience includes developing a unified news platform and recreating real-world utility tools to understand architecture, patterns, and clean code principles. My focus is simple: write maintainable code, build reliable solutions, and grow steadily as a full-stack developer.
              </p>

              <h3 className="story-heading story-heading-spaced">
                <span className="heading-accent" />
                What Drives Me
              </h3>
              <p className="story-text">
                What drives me is the desire to build efficient, practical solutions that solve real problems. I focus on writing clean, maintainable code, understanding how systems work behind the scenes, and continuously improving my skills to create better user experiences. Every project is an opportunity to learn, refine my approach, and become a more reliable and skilled engineer.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-stack-section">
          <h3 className="tech-stack-title">
            Technologies I Work With
          </h3>

          <div className="tech-grid">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="tech-card"
                  style={{ '--tech-color': tech.color }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = tech.color;
                    e.currentTarget.style.background = `rgba(${parseInt(tech.color.slice(1, 3), 16)}, ${parseInt(tech.color.slice(3, 5), 16)}, ${parseInt(tech.color.slice(5, 7), 16)}, 0.1)`;
                    e.currentTarget.style.boxShadow = `0 15px 40px ${tech.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon
                    size={40}
                    style={{ color: tech.color }}
                    className="tech-icon"
                  />
                  <h4 className="tech-name">
                    {tech.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}