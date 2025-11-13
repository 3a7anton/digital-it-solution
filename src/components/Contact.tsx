import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      color: 'white',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>Contact Us</h1>
      <p>Get in touch with our team for any inquiries or support.</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        <div>
          <h2>Get in Touch</h2>
          <p>Have questions about our services? Reach out to us and we'll get back to you as soon as possible.</p>
          
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Email:</strong> 3a7anton@gmail.com</p>
            <p><strong>Phone:</strong> +8801771778880</p>
            <p><strong>Address:</strong> 123 Tech Street, Dhaka, Bangladesh</p>
          </div>
        </div>
        
        <div>
          <h2>Send a Message</h2>
          <form style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem' 
          }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ 
                padding: '0.5rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              style={{ 
                padding: '0.5rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
            />
            <textarea 
              placeholder="Your Message" 
              rows={5} 
              style={{ 
                padding: '0.5rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
            ></textarea>
            <button 
              type="submit" 
              style={{ 
                padding: '0.75rem', 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;