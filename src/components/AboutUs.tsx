import React from 'react';
import Aurora from './ui/Aurora';

const AboutUs: React.FC = () => {
  const goals = [
    {
      title: 'Innovation First',
      description: 'We strive to deliver excellence in every project by embracing cutting-edge technologies and innovative approaches that set new industry standards.'
    },
    {
      title: 'Client Success',
      description: 'Building lasting relationships through trust, quality, and exceptional service. Your success is our primary mission and driving force.'
    },
    {
      title: 'Continuous Growth',
      description: 'We continuously evolve our services, expand our expertise, and stay ahead of technology trends to better serve our clients.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed', description: 'Successful deliveries across industries' },
    { number: '2024', label: 'Founded', description: 'Leading IT solutions provider' },
    { number: '100%', label: 'Client Satisfaction', description: 'Dedicated to excellence' }
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
          amplitude={1.2}
          speed={0.4}
        />
      </div>

      {/* Content */}
      <div style={{ 
        padding: '2rem',
        maxWidth: '1200px',
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
            About Us
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Empowering businesses through innovative technology solutions
          </p>
        </section>
        
        {/* Our Story Section */}
        <section style={{ 
          marginBottom: '4rem' 
        }}>
          <div style={{
            backgroundColor: 'rgba(6, 0, 16, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(132, 0, 255, 0.3)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(132, 0, 255, 0.1)'
          }}>
            <h2 style={{ 
              marginBottom: '1.5rem',
              fontSize: '2rem',
              color: '#a78bfa'
            }}>
              Our Story
            </h2>
            <p style={{ 
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              opacity: 0.95
            }}>
              Founded in 2024, Digital IT Solutions has quickly established itself as a leading provider 
              of innovative IT services. With a team of dedicated professionals and a passion for technology, 
              we've successfully completed over 50 projects for clients across various industries.
            </p>
            <p style={{ 
              lineHeight: '1.8',
              fontSize: '1.1rem',
              opacity: 0.95
            }}>
              Our mission is to empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and competitive advantage. We believe in building long-term partnerships with our 
              clients based on trust, quality, and exceptional service.
            </p>
          </div>
        </section>
        
        {/* Our Goals Section */}
        <section style={{ 
          marginBottom: '4rem' 
        }}>
          <h2 style={{ 
            marginBottom: '2rem',
            fontSize: '2rem',
            textAlign: 'center',
            color: '#a78bfa'
          }}>
            Our Goals
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {goals.map((goal, index) => (
              <div 
                key={index} 
                style={{ 
                  backgroundColor: 'rgba(6, 0, 16, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(132, 0, 255, 0.3)',
                  padding: '2rem',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(132, 0, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(132, 0, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(132, 0, 255, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(132, 0, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(132, 0, 255, 0.3)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(132, 0, 255, 0.3) 0%, rgba(132, 0, 255, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  fontSize: '1.5rem'
                }}>
                  {index === 0 ? '🚀' : index === 1 ? '🎯' : '📈'}
                </div>
                <h3 style={{ 
                  marginBottom: '1rem',
                  fontSize: '1.4rem',
                  color: '#fff'
                }}>
                  {goal.title}
                </h3>
                <p style={{
                  lineHeight: '1.6',
                  opacity: 0.9
                }}>
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Achievements Section */}
        <section>
          <h2 style={{ 
            marginBottom: '2rem',
            fontSize: '2rem',
            textAlign: 'center',
            color: '#a78bfa'
          }}>
            Our Achievements
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'rgba(6, 0, 16, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(132, 0, 255, 0.3)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(132, 0, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(132, 0, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(132, 0, 255, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(132, 0, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(132, 0, 255, 0.3)';
                }}
              >
                <h3 style={{ 
                  fontSize: '3rem',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #a78bfa 0%, #fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: '700'
                }}>
                  {achievement.number}
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#fff'
                }}>
                  {achievement.label}
                </p>
                <p style={{
                  opacity: 0.8,
                  fontSize: '0.95rem'
                }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;