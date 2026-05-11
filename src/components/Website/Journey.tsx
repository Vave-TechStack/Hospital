'use client';

import React from 'react';

const Journey = () => {
  const steps = [
    {
      number: 'STEP 1',
      title: 'Consultation',
      desc: 'Meet our fertility specialist. Discuss your history and goals.',
      icon: '🩺'
    },
    {
      number: 'STEP 2',
      title: 'Diagnosis & Testing',
      desc: 'Comprehensive assessments for both partners.',
      icon: '🔬'
    },
    {
      number: 'STEP 3',
      title: 'Personalised Plan',
      desc: 'A treatment protocol tailored specifically to your body.',
      icon: '📋'
    },
    {
      number: 'STEP 4',
      title: 'Advanced Treatment',
      desc: 'AI-monitored labs with international standards.',
      icon: '🧬'
    },
    {
      number: 'STEP 5',
      title: 'Pregnancy!',
      desc: 'The moment you’ve been waiting for. We’re with you.',
      icon: '👶'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '15px', fontFamily: "'Playfair Display', serif" }}>Your IVF Journey</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Simple, supportive, step by step</p>
        </div>
        
        <div className="journey-container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          position: 'relative',
          gap: '20px'
        }}>
          {/* Connecting Line (Desktop Only) */}
          <div className="journey-line" style={{ 
            position: 'absolute', 
            top: '50px', 
            left: '50px', 
            right: '50px', 
            height: '2px', 
            backgroundColor: '#eee', 
            zIndex: 0 
          }}></div>

          {steps.map((step, index) => (
            <div key={index} className="journey-step" style={{ 
              flex: 1, 
              textAlign: 'center', 
              position: 'relative', 
              zIndex: 1,
              minWidth: '150px'
            }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: '#fff', 
                border: '2px solid #eee',
                borderRadius: '50%', 
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }} className="hover-lift">
                {step.icon}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', marginBottom: '10px', letterSpacing: '1px' }}>{step.number}</div>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            .journey-container {
              flex-direction: column;
              align-items: center;
              gap: 40px;
            }
            .journey-line {
              display: none;
            }
            .journey-step {
              max-width: 300px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Journey;
