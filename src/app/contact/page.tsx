'use client';

import { useState } from 'react';
import Navbar from '@/components/Website/Navbar';
import Footer from '@/components/Website/Footer';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const locations = [
    { city: 'Hyderabad', address: 'Plot 42, Road No 10, Banjara Hills, Hyderabad, TS 500034', phone: '+91 98765 43210' },
    { city: 'Vijayawada', address: 'Door No 5-2, MG Road, Labbipet, Vijayawada, AP 520010', phone: '+91 98765 43211' },
    { city: 'Vizag', address: 'Seethammadhara Main Road, Visakhapatnam, AP 530013', phone: '+91 98765 43212' }
  ];

  return (
    <main>
      <Navbar />
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)', paddingTop: '160px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Get in <span style={{ color: 'var(--primary)' }}>Touch</span></h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Have questions about our treatments or want to book an appointment? We are here to help you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2 grid-gap-60">
            <div>
              <h2 style={{ marginBottom: '30px' }}>Our Locations</h2>
              {locations.map((loc, i) => (
                <div key={i} className="card" style={{ marginBottom: '20px' }}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{loc.city}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '10px' }}>{loc.address}</p>
                  <p style={{ fontWeight: 600 }}>{loc.phone}</p>
                </div>
              ))}
            </div>
            <div className="card" style={{ padding: '40px' }}>
              <h2 style={{ marginBottom: '30px' }}>Send us a Message</h2>
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e1f7ef', color: '#1cc88a', padding: '40px', borderRadius: '12px', textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
                  <h3 style={{ marginBottom: '10px' }}>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid-2 grid-gap-20">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 600 }}>Full Name</label>
                    <input type="text" placeholder="Your Name" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 600 }}>Email Address</label>
                    <input type="email" placeholder="email@example.com" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 600 }}>Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 600 }}>Subject</label>
                    <select required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
                      <option value="">Select a Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Appointment Booking">Appointment Booking</option>
                      <option value="Second Opinion">Second Opinion</option>
                    </select>
                  </div>
                  <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 600 }}>Message</label>
                    <textarea rows={5} placeholder="How can we help you?" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}></textarea>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none' }}>Send Message</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ height: '400px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Interactive Map Placeholder</h3>
          <p>Google Maps API integration for Hyderabad, Vijayawada & Vizag centers.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
