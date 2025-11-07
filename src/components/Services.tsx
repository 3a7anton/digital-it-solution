import React, { useState } from 'react';
import Aurora from './ui/Aurora';

const Services: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Branding & Printing",
      description: "Professional branding solutions and high-quality printing services to establish your brand identity.",
      icon: "🎨",
      color: "rgba(132, 0, 255, 0.15)"
    },
    {
      id: 2,
      title: "Motion Graphics",
      description: "Engaging motion graphics for marketing, presentations, and digital media with optional voice over and models.",
      icon: "🎬",
      color: "rgba(255, 0, 132, 0.15)"
    },
    {
      id: 3,
      title: "Website Development",
      description: "Custom website development tailored to your business needs with responsive design and modern technologies.",
      icon: "💻",
      color: "rgba(0, 132, 255, 0.15)"
    },
    {
      id: 4,
      title: "Animation Video",
      description: "Creative animation videos for marketing, education, and entertainment purposes.",
      icon: "🎞️",
      color: "rgba(255, 132, 0, 0.15)"
    },
    {
      id: 5,
      title: "OVC Production",
      description: "Complete video production services including models, voice over, scriptwriting, shooting, photography, and editing.",
      icon: "🎥",
      color: "rgba(132, 255, 0, 0.15)"
    },
    {
      id: 6,
      title: "AV Company Portfolio",
      description: "Professional audiovisual portfolio creation to showcase your company's capabilities and achievements.",
      icon: "📁",
      color: "rgba(255, 0, 255, 0.15)"
    },
    {
      id: 7,
      title: "Photography",
      description: "High-quality product photography with optional model services to showcase your products effectively.",
      icon: "📸",
      color: "rgba(0, 255, 255, 0.15)"
    },
    {
      id: 8,
      title: "Videography",
      description: "Professional videography services for events, commercials, documentaries, and promotional content.",
      icon: "🎦",
      color: "rgba(255, 255, 0, 0.15)"
    },
    {
      id: 9,
      title: "Software Development",
      description: "Custom software development solutions tailored to your business requirements and industry standards.",
      icon: "⚙️",
      color: "rgba(0, 255, 132, 0.15)"
    }
  ];

  return (
    <div style={{ 
      color: 'white',
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a'
    }}>
      {/* Aurora Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: 0.7
      }}>
        <Aurora
          colorStops={["#FF3232", "#3A29FF", "#FF94B4"]}
          blend={0.5}
          amplitude={1.3}
          speed={0.6}
        />
      </div>

      {/* Content */}
      <div style={{ 
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Hero Section */}
        <section style={{ 
          textAlign: 'center',
          padding: '3rem 0',
          marginBottom: '3rem'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff 0%, #ff94b4 50%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700'
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Comprehensive digital solutions to elevate your business and bring your vision to life
          </p>
        </section>
        
        {/* Services Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          paddingBottom: '2rem'
        }}>
          {services.map((service) => (
            <div 
              key={service.id} 
              style={{ 
                backgroundColor: 'rgba(6, 0, 16, 0.7)',
                backdropFilter: 'blur(10px)',
                border: hoveredId === service.id 
                  ? '1px solid rgba(132, 0, 255, 0.6)' 
                  : '1px solid rgba(132, 0, 255, 0.3)',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: hoveredId === service.id
                  ? '0 12px 40px rgba(132, 0, 255, 0.25)'
                  : '0 4px 20px rgba(132, 0, 255, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                transform: hoveredId === service.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient Overlay on Hover */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 50% 0%, ${service.color}, transparent 70%)`,
                opacity: hoveredId === service.id ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }} />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '16px',
                  background: hoveredId === service.id
                    ? 'linear-gradient(135deg, rgba(132, 0, 255, 0.4) 0%, rgba(132, 0, 255, 0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(132, 0, 255, 0.3) 0%, rgba(132, 0, 255, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  fontSize: '2rem',
                  transition: 'all 0.3s ease',
                  transform: hoveredId === service.id ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                  boxShadow: hoveredId === service.id ? '0 8px 25px rgba(132, 0, 255, 0.3)' : 'none'
                }}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 style={{ 
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  color: '#fff',
                  fontWeight: '600',
                  transition: 'color 0.3s ease'
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{ 
                  lineHeight: '1.7',
                  opacity: 0.9,
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div style={{
                  marginTop: '1.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#a78bfa',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  opacity: hoveredId === service.id ? 1 : 0,
                  transform: hoveredId === service.id ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'all 0.3s ease'
                }}>
                  Learn more
                  <span style={{
                    transform: hoveredId === service.id ? 'translateX(5px)' : 'translateX(0)',
                    transition: 'transform 0.3s ease',
                    display: 'inline-block'
                  }}>
                    →
                  </span>
                </div>
              </div>

              {/* Corner Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle at 100% 0%, rgba(132, 0, 255, 0.2), transparent 70%)',
                opacity: hoveredId === service.id ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '3rem 2rem',
          backgroundColor: 'rgba(6, 0, 16, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(132, 0, 255, 0.3)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(132, 0, 255, 0.15)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#fff'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Let's bring your ideas to life with our comprehensive digital solutions
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#fff',
            background: 'linear-gradient(135deg, rgba(132, 0, 255, 0.8) 0%, rgba(255, 0, 132, 0.8) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(132, 0, 255, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(132, 0, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(132, 0, 255, 0.3)';
          }}
          >
            Contact Us Today
          </button>
        </section>
      </div>
    </div>
  );
};

export default Services;