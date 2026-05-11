import React from 'react';

const Journey = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      desc: 'Meet our fertility specialists to discuss your history and goals. No judgment, just understanding.',
      icon: '🩺'
    },
    {
      number: '02',
      title: 'Diagnosis & Testing',
      desc: 'Comprehensive assessments for both partners to identify the best path forward.',
      icon: '🔬'
    },
    {
      number: '03',
      title: 'Personalised Plan',
      desc: 'A treatment protocol tailored specifically to your body and situation.',
      icon: '📋'
    },
    {
      number: '04',
      title: 'Advanced Treatment',
      desc: 'World-class procedures in our AI-monitored labs with international standards.',
      icon: '🧬'
    },
    {
      number: '05',
      title: 'Parenthood',
      desc: 'The moment you’ve been waiting for. We’re with you through every milestone.',
      icon: '👶'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '15px', fontFamily: "'Playfair Display', serif" }}>Your IVF Journey</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Simple, supportive, and step-by-step</p>
        </div>
        
        <div className="grid-5 grid-gap-20" style={{ position: 'relative' }}>
          {steps.map((step, index) => (
            <div key={index} className="card hover-lift" style={{ padding: '30px', textAlign: 'center', backgroundColor: '#fff5f7', border: 'none' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)', marginBottom: '15px' }}>STEP {step.number}</div>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{step.icon}</div>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a href="/appointment" className="btn-primary" style={{ padding: '15px 40px' }}>Start Your Journey Today</a>
        </div>
      </div>
    </section>
  );
};

export default Journey;
