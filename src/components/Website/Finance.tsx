import React from 'react';

const Finance = () => {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #1a2a3a 100%)', color: 'white' }}>
      <div className="container">
        <div className="grid-2 grid-gap-60" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '42px', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>Don't let cost come between you and your baby.</h2>
            <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '30px' }}>
              We provide flexible EMI options and 0% interest finance to make your parenthood journey stress-free.
            </p>
            <div style={{ display: 'flex', gap: '30px' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--primary-light)' }}>₹8,333/mo</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>Starting EMI</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--primary-light)' }}>0%</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>Interest Rate</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="card" style={{ backgroundColor: 'white', color: 'var(--secondary)', padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '20px' }}>Check Your Eligibility</h3>
              <p style={{ fontSize: '14px', marginBottom: '25px', color: 'var(--text-muted)' }}>Get an instant finance quote for your IVF treatment.</p>
              <a href="/appointment" className="btn-primary" style={{ width: '100%', display: 'block', border: 'none' }}>Apply for Finance</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finance;
