import React from 'react';
import Aurora from './ui/Aurora';
import LogoLoop from './LogoLoop';

const HomePage: React.FC = () => {
  // Dummy partner logos data
  const partnerLogos = [
    {
      src: "https://placehold.co/150x80/333333/FFFFFF?text=Partner+1",
      alt: "Partner 1",
      title: "Partner 1"
    },
    {
      src: "https://placehold.co/150x80/333333/FFFFFF?text=Partner+2",
      alt: "Partner 2",
      title: "Partner 2"
    },
    {
      src: "https://placehold.co/150x80/333333/FFFFFF?text=Partner+3",
      alt: "Partner 3",
      title: "Partner 3"
    },
    {
      src: "https://placehold.co/150x80/333333/FFFFFF?text=Partner+4",
      alt: "Partner 4",
      title: "Partner 4"
    },
    {
      src: "https://placehold.co/150x80/333333/FFFFFF?text=Partner+5",
      alt: "Partner 5",
      title: "Partner 5"
    },
    {
      src: "https://placehold.co/150x80/333333/FFFFFF?text=Partner+6",
      alt: "Partner 6",
      title: "Partner 6"
    }
  ];

  return (
    <div style={{ 
      color: 'white',
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a'
    }}>
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
      <section style={{ 
        textAlign: 'center', 
        padding: '4rem 0',
        marginBottom: '3rem'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem' 
        }}>
          Digital IT Solutions
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Your trusted partner for comprehensive IT solutions. We provide cutting-edge services 
          to help your business thrive in the digital world.
        </p>
      </section>

      {/* Partners Section */}
      <section style={{ 
        marginBottom: '3rem',
        padding: '0 2rem'
      }}>
        <h2 style={{  
          textAlign: 'center', 
          marginBottom: '2rem',
          fontSize: '2rem'
        }}>
          Our Partners
        </h2>
        <LogoLoop 
          logos={partnerLogos}
          speed={80}
          logoHeight={80}
          gap={48}
          fadeOut={true}
          scaleOnHover={true}
          ariaLabel="Our technology partners"
        />
      </section>

      {/* Testimonials Section */}
      <section style={{ 
        padding: '5rem'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          fontSize: '2rem'
        }}>
          What Our Clients Say
        </h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {[1, 2].map((item) => (
            <div 
              key={item} 
              style={{ 
                backgroundColor: '#222',
                padding: '1.5rem',
                borderRadius: '8px',
                maxWidth: '400px',
                textAlign: 'center'
              }}
            >
              <p style={{ 
                fontStyle: 'italic',
                marginBottom: '1rem'
              }}>
                "Digital IT Solutions transformed our business with their exceptional service 
                and technical expertise. Highly recommended!"
              </p>
              <p style={{ fontWeight: 'bold' }}>
                - Client {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;