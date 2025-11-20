import React, { Component } from 'react';
import { Code, Database, Layers, Zap } from 'lucide-react';
import mypic from '../assets/mypicc.png';

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
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000000FF 0%, #000000FF 100%)',
        color: '#fff',
        padding: '100px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />

        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#8b5cf6',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '15px'
          }}>
            About Me
          </h2>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: '0'
          }}>
            My Journey into Development
          </h1>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '60px',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Photo Section */}
          <div style={{
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
              borderRadius: '20px',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)'
            }}>
              <img
                src={mypic}
                alt="Aadesh Lawate"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              />


              {/* Decorative corner elements */}
              <div style={{
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                width: '60px',
                height: '60px',
                borderTop: '3px solid #8b5cf6',
                borderLeft: '3px solid #8b5cf6',
                borderRadius: '20px 0 0 0'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-1px',
                right: '-1px',
                width: '60px',
                height: '60px',
                borderBottom: '3px solid #8b5cf6',
                borderRight: '3px solid #8b5cf6',
                borderRadius: '0 0 20px 0'
              }} />
            </div>

            {/* Floating accent */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
              borderRadius: '20px',
              opacity: '0.3',
              filter: 'blur(30px)',
              zIndex: '-1'
            }} />
          </div>

          {/* Story Section */}
          <div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '40px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  width: '6px',
                  height: '30px',
                  background: 'linear-gradient(to bottom, #8b5cf6, #6366f1)',
                  borderRadius: '3px'
                }} />
                The Beginning
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#d1d5db',
                marginBottom: '25px'
              }}>
                I began my development journey by building a solid foundation in HTML, CSS, and JavaScript. As my skills grew, I moved into React to create fast, interactive user interfaces. To strengthen my backend understanding, I trained in Java at QSpiders, where I gained practical knowledge of OOP concepts and industry-standard development practices.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#d1d5db',
                marginBottom: '25px'
              }}>
                My project experience includes developing a unified news platform and recreating real-world utility tools to understand architecture, patterns, and clean code principles. My focus is simple: write maintainable code, build reliable solutions, and grow steadily as a full-stack developer.
              </p>

              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#fff',
                marginTop: '40px',
                marginBottom: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  width: '6px',
                  height: '30px',
                  background: 'linear-gradient(to bottom, #8b5cf6, #6366f1)',
                  borderRadius: '3px'
                }} />
                What Drives Me
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#d1d5db'
              }}>
                What drives me is the desire to build efficient, practical solutions that solve real problems. I focus on writing clean, maintainable code, understanding how systems work behind the scenes, and continuously improving my skills to create better user experiences. Every project is an opportunity to learn, refine my approach, and become a more reliable and skilled engineer.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div style={{
          marginTop: '100px',
          maxWidth: '1400px',
          margin: '100px auto 0'
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#fff'
          }}>
            Technologies I Work With
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '25px'
          }}>
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '30px 20px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)'
                  }}
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
                    style={{
                      color: tech.color,
                      marginBottom: '15px'
                    }}
                  />
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#fff',
                    margin: '0'
                  }}>
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