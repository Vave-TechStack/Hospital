import React from 'react';

const Promise = () => {
  const principles = [
    {
      title: 'Best-in-Class Success Rates',
      desc: '~75% IVF success rate — among the highest in India across our centers.',
      icon: '📈'
    },
    {
      title: 'Safety First',
      desc: 'Rigorous clinical protocols to ensure the safety of both mother and baby at every step.',
      icon: '🛡️'
    },
    {
      title: 'Ethical Practices',
      desc: 'No unnecessary procedures. We recommend only what is medically needed for you.',
      icon: '🤝'
    },
    {
      title: 'Full Transparency',
      desc: 'Clear communication. You will always know your options, progress, and what to expect.',
      icon: '💎'
    },
    {
      title: 'Compassionate Care',
      desc: 'Every couple is unique. We provide emotional support throughout your entire journey.',
      icon: '❤️'
    },
    {
      title: 'Advanced Technology',
      desc: 'State-of-the-art labs with AI monitoring and electronic witness systems.',
      icon: '⚙️'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge" style={{ marginBottom: '15px' }}>Our Commitment</div>
          <h2 style={{ fontSize: '42px', marginBottom: '15px', fontFamily: "'Playfair Display', serif" }}>The Vave Promise</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Six principles that guide every decision we make for you</p>
        </div>

        <div className="grid-3 grid-gap-30">
          {principles.map((p, index) => (
            <div key={index} style={{ padding: '20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '20px' }}>{p.icon}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>{p.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promise;
