import React from 'react';
import Aurora from './ui/Aurora';

const HomePage = () => {
  const partnerLogos = [
    { src: "/partners/1.png", alt: "Partner 1" },
    { src: "/partners/308796719_191823933241237_4600577206313874969_n.png", alt: "Partner 2" },
    { src: "/partners/311497023_110511711840076_9016268039703762972_n.jpg", alt: "Partner 3" },
    { src: "/partners/358694471_582397210730521_5670017943227116780_n.jpg", alt: "Partner 4" },
    { src: "/partners/476345221_122138246474434435_5575174931371062212_n.jpg", alt: "Partner 5" },
    { src: "/partners/499169488_122229632384089701_1799245916172908297_n.jpg", alt: "Partner 6" },
    { src: "/partners/logo-lead.jpg", alt: "Partner 7" },
    { src: "/partners/logo.jpg", alt: "Partner 8" }
  ];

  const services = [
    { icon: "🎨", title: "Branding & Printing", desc: "Create memorable brand identities and high-quality print materials" },
    { icon: "🎬", title: "Motion Graphics", desc: "Eye-catching animated graphics that bring your ideas to life" },
    { icon: "💻", title: "Website Development", desc: "Responsive and modern websites tailored to your business" },
    { icon: "✨", title: "Animation Video", desc: "Engaging animated videos that tell your story" },
    { icon: "🎥", title: "OVC Production", desc: "Professional online video content creation and production" },
    { icon: "📂", title: "AV Company Portfolio", desc: "Comprehensive audiovisual solutions and portfolio development" },
    { icon: "📸", title: "Photography", desc: "Stunning photography that captures your brand essence" },
    { icon: "🎞️", title: "Videography", desc: "Professional video production for all your needs" },
    { icon: "⚙️", title: "Software Development", desc: "Custom software solutions to streamline your operations" }
  ];

  const testimonials = [
    {
      text: "RTech Lead transformed our business with their exceptional service and technical expertise. The team's professionalism and dedication exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechCorp"
    },
    {
      text: "Outstanding results and seamless communication throughout the project. RTech Lead delivered ahead of schedule with exceptional quality.",
      author: "Michael Chen",
      position: "CTO, Innovation Labs"
    }
  ];

  return (
    <div style={{
      color: 'white',
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Aurora Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: 0.8
      }}>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          padding: '6rem 2rem 4rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'inline-block',
            marginBottom: '2rem',
            animation: 'fadeInDown 1s ease-out'
          }}>
            <img 
              src="/rtech.png" 
              alt="RTech Lead Logo" 
              style={{
                maxWidth: '300px',
                height: 'auto',
                filter: 'drop-shadow(0 10px 30px rgba(58, 41, 255, 0.3))'
              }}
            />
          </div>
          
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '1.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #fff 0%, #a8a8a8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>
            Your Trusted Partner for IT Excellence
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.85)'
          }}>
            We deliver cutting-edge technology solutions that drive business growth and innovation in the digital era.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '0.875rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #3A29FF 0%, #FF94B4 100%)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 15px rgba(58, 41, 255, 0.4)'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(58, 41, 255, 0.6)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(58, 41, 255, 0.4)';
            }} onClick={() => window.open('https://wa.me/8801771778880', '_blank')}>
              Get Started
            </button>
            
            <button style={{
              padding: '0.875rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }} onClick={() => window.open('/Services.tsx', '_blank')}>
              Learn More
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section style={{
          padding: '4rem 0',
          maxWidth: '100%',
          margin: '0 auto',
          overflow: 'hidden'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            marginBottom: '3rem',
            fontWeight: '700',
            padding: '0 2rem'
          }}>
            Our Services
          </h2>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '1rem 2rem 2rem 2rem',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth'
          }}
          className="services-scroll">
            {services.map((service, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                minWidth: '280px',
                maxWidth: '280px',
                flexShrink: 0
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(58, 41, 255, 0.3)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section style={{
          padding: '4rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            marginBottom: '3rem',
            fontWeight: '700'
          }}>
            Trusted by Industry Leaders
          </h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {partnerLogos.map((logo, index) => (
              <div key={index} style={{
                width: '90px',
                height: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.style.transform = 'scale(1.15)'}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.style.transform = 'scale(1)'}>
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  style={{
                    width: '75px',
                    height: '75px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    filter: 'brightness(0.9) grayscale(0.3)',
                    transition: 'filter 0.3s'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => e.currentTarget.style.filter = 'brightness(1.1) grayscale(0)'}
                  onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => e.currentTarget.style.filter = 'brightness(0.9) grayscale(0.3)'}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{
          padding: '4rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            marginBottom: '3rem',
            fontWeight: '700'
          }}>
            What Our Clients Say
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '3rem',
                  color: 'rgba(255, 255, 255, 0.2)',
                  position: 'absolute',
                  top: '1rem',
                  left: '1.5rem',
                  lineHeight: '1'
                }}>"</div>
                
                <p style={{
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.85)',
                  paddingTop: '1rem'
                }}>
                  {testimonial.text}
                </p>
                
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                    {testimonial.author}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '5rem 2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            marginBottom: '1.5rem',
            fontWeight: '700'
          }}>
            Ready to Transform Your Business?
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.7'
          }}>
            Let's discuss how we can help you achieve your technology goals.
          </p>
          
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1.125rem',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #3A29FF 0%, #FF94B4 100%)',
            border: 'none',
            borderRadius: '50px',
            color: 'white',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 15px rgba(58, 41, 255, 0.4)'
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(58, 41, 255, 0.6)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(58, 41, 255, 0.4)';
          }}>
            Contact Us Today
          </button>
        </section>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          <p>© 2024 RTech Lead. All rights reserved.</p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .services-scroll {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        
        .services-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default HomePage;