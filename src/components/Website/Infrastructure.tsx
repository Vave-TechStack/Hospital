import React from 'react';

const Infrastructure = () => {
  const techs = [
    {
      title: 'Advanced Cleanroom Lab',
      desc: 'Controlled environment ensures zero contamination during fertilisation and embryo culture.',
      icon: '🏛️'
    },
    {
      title: 'Private Incubators',
      desc: 'Benchtop incubators with built-in time-lapse imaging — optimal CO₂ & O₂ levels.',
      icon: '📦'
    },
    {
      title: 'Real-Time Witness System',
      desc: 'Electronic witnessing system — every sample verified in real time, eliminating risk of mix-ups.',
      icon: '👁️'
    },
    {
      title: '24/7 AI Monitoring',
      desc: 'AI-driven continuous monitoring of incubator environment with instant alerts.',
      icon: '🤖'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge" style={{ marginBottom: '15px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>World-Class Infrastructure</div>
          <h2 style={{ fontSize: '42px', marginBottom: '15px', fontFamily: "'Playfair Display', serif", color: 'white' }}>International Standard Labs</h2>
          <p style={{ opacity: 0.8, fontSize: '18px' }}>Every embryo is treated with the highest level of care using global technology</p>
        </div>

        <div className="grid-4 grid-gap-20">
          {techs.map((t, index) => (
            <div key={index} className="card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '30px' }}>
              <div style={{ fontSize: '32px', marginBottom: '20px' }}>{t.icon}</div>
              <h3 style={{ fontSize: '18px', marginBottom: '15px', color: 'var(--primary-light)' }}>{t.title}</h3>
              <p style={{ fontSize: '14px', opacity: 0.8, lineHeight: '1.6' }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
