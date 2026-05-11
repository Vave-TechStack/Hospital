import React from 'react';

const Doctors = () => {
  const specialists = [
    {
      name: 'Dr. Anitha Reddy',
      role: 'Senior Fertility Specialist',
      exp: '20+ Years Experience',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. Suresh Varma',
      role: 'IVF & Laparoscopy Surgeon',
      exp: '15+ Years Experience',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Priya Lakshmi',
      role: 'Consultant Embryologist',
      exp: '12+ Years Experience',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Andrologist & Urologist',
      exp: '18+ Years Experience',
      image: '👨‍⚕️'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', marginBottom: '15px', fontFamily: "'Playfair Display', serif" }}>Meet Our Specialists</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>India's most experienced fertility doctors</p>
        </div>

        <div className="grid-4 grid-gap-20">
          {specialists.map((doc, index) => (
            <div key={index} className="card hover-lift" style={{ padding: '40px 20px', textAlign: 'center' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: '#fff5f7', 
                borderRadius: '50%', 
                margin: '0 auto 25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '50px'
              }}>
                {doc.image}
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{doc.name}</h3>
              <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '14px', marginBottom: '10px' }}>{doc.role}</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{doc.exp}</p>
              <div style={{ marginTop: '20px' }}>
                <a href="/appointment" style={{ fontSize: '14px', color: 'var(--secondary)', fontWeight: 700, textDecoration: 'underline' }}>View Profile →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
