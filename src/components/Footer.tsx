import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 0, 0, 1) 100%)',
      color: 'white',
      padding: '3rem 2rem 1.5rem',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff 0%, #a8a8a8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700'
            }}>
              RTech Lead
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              lineHeight: '1.6',
              marginBottom: '0.5rem'
            }}>
              Providing innovative IT solutions and creative services since 2024
            </p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}>
              ✨ 50+ jobs completed
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Contact Us
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href="mailto:3a7anton@gmail.com"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                <span>📧</span>
                <span>3a7anton@gmail.com</span>
              </a>
              <a 
                href="tel:+8801771778880"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                <span>📱</span>
                <span>+880 1771 778880</span>
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Connect With Us
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href="https://www.facebook.com/profile.php?id=61578853751293"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#1877f2'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                <span style={{ fontSize: '1.2rem' }}>👥</span>
                <span>Facebook</span>
              </a>
              <a 
                href="https://wa.me/8801771778880"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#25d366'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                <span style={{ fontSize: '1.2rem' }}>💬</span>
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:3a7anton@gmail.com"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ea4335'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                <span style={{ fontSize: '1.2rem' }}>✉️</span>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0,
            fontSize: '0.9rem'
          }}>
            © 2024 RTech Lead. All rights reserved.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem',
            fontSize: '0.9rem'
          }}>
            <a 
              href="#privacy" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;