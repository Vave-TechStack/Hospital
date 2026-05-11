import React from 'react';
import Navbar from '@/components/Website/Navbar';
import Footer from '@/components/Website/Footer';

const CostPage = () => {
  const plans = [
    {
      name: 'IUI Treatment',
      price: '₹15,000 - ₹25,000',
      features: ['Consultation included', 'Follicular monitoring', 'Procedure charges', 'Post-procedure support']
    },
    {
      name: 'IVF Basic',
      price: '₹1,25,000 - ₹1,75,000',
      features: ['Egg retrieval', 'Embryo transfer', 'Lab charges', 'Standard medications'],
      highlight: true
    },
    {
      name: 'IVF Advanced (ICSI)',
      price: '₹1,75,000 - ₹2,25,000',
      features: ['ICSI procedure', 'Laser assisted hatching', 'Blastocyst culture', 'Advanced screening']
    }
  ];

  return (
    <main>
      <Navbar />
      <div className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>Transparent IVF Cost</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>High-quality treatment that fits your budget</p>
          </div>

          <div className="grid-3 grid-gap-30" style={{ marginBottom: '60px' }}>
            {plans.map((plan, idx) => (
              <div key={idx} className={`card ${plan.highlight ? 'hover-lift' : ''}`} style={{ 
                padding: '40px', 
                border: plan.highlight ? '2px solid var(--primary)' : 'none',
                position: 'relative'
              }}>
                {plan.highlight && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '-15px', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '5px 20px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700
                  }}>MOST POPULAR</div>
                )}
                <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>{plan.name}</h3>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--secondary)', marginBottom: '25px' }}>{plan.price}</div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ marginBottom: '12px', fontSize: '14px', display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--primary)' }}>✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <a href="/appointment" className={`btn-${plan.highlight ? 'primary' : 'secondary'}`} style={{ width: '100%', display: 'block', textAlign: 'center', padding: '12px' }}>
                  Inquire Now
                </a>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: '40px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Financial Support</h2>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>We offer 0% Interest EMI options starting from ₹8,333/month.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button className="btn-primary" style={{ padding: '15px 40px' }}>Apply for EMI</button>
              <button className="btn-secondary" style={{ padding: '15px 40px' }}>Download Price List</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CostPage;
