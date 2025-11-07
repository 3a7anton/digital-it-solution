import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ flex: 1, minWidth: '250px', marginBottom: '1rem' }}>
          <h3>Digital IT Solutions</h3>
          <p>Providing innovative IT solutions since 2024</p>
          <p>50+ jobs completed</p>
        </div>
        
        <div style={{ flex: 1, minWidth: '250px', marginBottom: '1rem' }}>
          <h3>Contact Us</h3>
          <p>Email: info@digitalitsolutions.com</p>
          <p>Phone: +1234567890</p>
        </div>
        
        <div style={{ flex: 1, minWidth: '250px', marginBottom: '1rem' }}>
          <h3>Follow Us</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>WhatsApp</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Gmail</a>
          </div>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid #333'
      }}>
        <p>&copy; 2024 Digital IT Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;