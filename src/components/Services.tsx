import React from 'react';
import Aurora from './ui/Aurora';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Branding & Printing",
      description: "Professional branding solutions and high-quality printing services to establish your brand identity.",
      icon: "🎨",
      color: "rgba(132, 0, 255, 0.2)"
    },
    {
      id: 2,
      title: "Motion Graphics",
      description: "Engaging motion graphics for marketing, presentations, and digital media with voice over and models.",
      icon: "🎬",
      color: "rgba(255, 148, 180, 0.2)"
    },
    {
      id: 3,
      title: "Website Development",
      description: "Custom website development with responsive design and modern technologies tailored to your needs.",
      icon: "💻",
      color: "rgba(58, 41, 255, 0.2)"
    },
    {
      id: 4,
      title: "Animation Video",
      description: "Creative animation videos for marketing, education, and entertainment purposes that captivate audiences.",
      icon: "🎭",
      color: "rgba(255, 50, 50, 0.2)"
    },
    {
      id: 5,
      title: "OVC Production",
      description: "Complete video production including models, voice over, scriptwriting, shooting, photography, and editing.",
      icon: "🎥",
      color: "rgba(132, 0, 255, 0.2)"
    },
    {
      id: 6,
      title: "AV Company Portfolio",
      description: "Professional audiovisual portfolio creation to showcase your company's capabilities and achievements.",
      icon: "📂",
      color: "rgba(255, 148, 180, 0.2)"
    },
    {
      id: 7,
      title: "Photography",
      description: "High-quality product photography with optional model services to showcase your products effectively.",
      icon: "📸",
      color: "rgba(58, 41, 255, 0.2)"
    },
    {
      id: 8,
      title: "Videography",
      description: "Professional videography services for events, commercials, documentaries, and promotional content.",
      icon: "🎞️",
      color: "rgba(255, 50, 50, 0.2)"
    },
    {
      id: 9,
      title: "Software Development",
      description: "Custom software development solutions tailored to your business requirements and industry standards.",
      icon: "⚙️",
      color: "rgba(132, 0, 255, 0.2)"
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
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.4}
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
            background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)',
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
            margin: '0 auto'
          }}>
            Comprehensive digital solutions to elevate your business
          </p>
        </section>
        
        {/* Services Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {services.map((service) => (
            <div 
              key={service.id} 
              style={{ 
                backgroundColor: 'rgba(6, 0, 16, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(132, 0, 255, 0.3)',
                padding: '2rem',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(132, 0, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(132, 0, 255, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(132, 0, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(132, 0, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(132, 0, 255, 0.3)';
              }}
            >
              {/* Gradient Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${service.color}, rgba(132, 0, 255, 0.5))`,
                borderRadius: '20px 20px 0 0'
              }} />
              
              {/* Icon Badge */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${service.color}, rgba(132, 0, 255, 0.1))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '2rem',
                border: '1px solid rgba(132, 0, 255, 0.2)',
                boxShadow: '0 4px 15px rgba(132, 0, 255, 0.1)'
              }}>
                {service.icon}
              </div>

              {/* Service Number */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(132, 0, 255, 0.2)',
                border: '1px solid rgba(132, 0, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: '#a78bfa'
              }}>
                {String(service.id).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <h3 style={{ 
                marginBottom: '1rem',
                fontSize: '1.5rem',
                color: '#fff',
                fontWeight: '600'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                lineHeight: '1.7',
                opacity: 0.9,
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.85)'
              }}>
                {service.description}
              </p>

              {/* Decorative corner */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: `radial-gradient(circle at bottom right, ${service.color}, transparent 70%)`,
                pointerEvents: 'none',
                borderRadius: '0 0 20px 0'
              }} />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <section style={{
          backgroundColor: 'rgba(6, 0, 16, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(132, 0, 255, 0.3)',
          borderRadius: '20px',
          padding: '3rem',
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(132, 0, 255, 0.15)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#fff'
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Let's discuss how our services can help you achieve your goals and bring your vision to life.
          </p>
          <button
            style={{
              background: 'linear-gradient(135deg, rgba(132, 0, 255, 0.8) 0%, rgba(255, 148, 180, 0.6) 100%)',
              border: '1px solid rgba(132, 0, 255, 0.5)',
              borderRadius: '12px',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(132, 0, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(132, 0, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(132, 0, 255, 0.3)';
            }}
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

export default Services;