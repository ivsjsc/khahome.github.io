import React from 'react';
import { Card, Button } from 'antd';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* ... existing code ... */}
      
      <div className="trusted-section">
        <Card
          title="TRUSTED IN TAMPA BAY LICENSED · INSURED"
          style={{
            width: '100%',
            maxWidth: 'none', // Remove max-width restriction
            margin: '0 auto',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#1a237e',
            color: '#fff',
          }}
          headStyle={{
            background: '#1a237e',
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '14px',
            letterSpacing: '1px',
            padding: '8px 16px',
            borderRadius: '8px',
          }}
        >
          <p style={{ color: '#e0e0e0', marginBottom: '20px' }}>
            Mr. Kha Do and the Kha Dock & Homes team stay on-site daily, syncing progress updates with your calendar and managing every subcontractor so you stay informed.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#ffeb3b' }}>📍</span>
              <div>
                <span style={{ color: '#9e9e9e', fontSize: '14px' }}>OFFICE</span>
                <p style={{ color: '#ffeb3b', margin: '4px 0 0 0', fontSize: '14px' }}>
                  2025 W Bearss Ave, Tampa, FL 33618
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#ffeb3b' }}>📞</span>
              <div>
                <span style={{ color: '#9e9e9e', fontSize: '14px' }}>CALL</span>
                <p style={{ color: '#ffeb3b', margin: '4px 0 0 0', fontSize: '14px' }}>
                  +1 813-939-3989
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#ffeb3b' }}>📧</span>
              <div>
                <span style={{ color: '#9e9e9e', fontSize: '14px' }}>EMAIL</span>
                <p style={{ color: '#ffeb3b', margin: '4px 0 0 0', fontSize: '14px' }}>
                  khalc3989@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <Button type="primary" style={{ backgroundColor: '#ffeb3b', borderColor: '#ffeb3b', color: '#1a237e' }}>
              Book a Walkthrough
            </Button>
            <Button style={{ backgroundColor: '#1a237e', borderColor: '#ffeb3b', color: '#ffeb3b' }}>
              Send a Message
            </Button>
          </div>
        </Card>
      </div>

      {/* ... existing code ... */}
    </div>
  );
};

export default ContactPage;