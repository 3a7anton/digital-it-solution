import React from 'react';
import Aurora from './ui/Aurora';

const HomePage: React.FC = () => {
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
        marginBottom: '3rem' 
      }}>
        <h2 style={{  
          textAlign: 'center', 
          marginBottom: '2rem',
          fontSize: '2rem'
        }}>
          Our Partners
        </h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {/* Empty partner slots - to be filled later */}
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              style={{ 
                width: '150px', 
                height: '100px', 
                backgroundColor: '#333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px'
              }}
            >
              <span>Partner {item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
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