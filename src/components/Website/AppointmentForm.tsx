'use client';

import { useState } from 'react';

const AppointmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 'ivf', name: 'IVF Treatment', icon: '🧬' },
    { id: 'iui', name: 'IUI Procedure', icon: '✨' },
    { id: 'egg', name: 'Egg Freezing', icon: '❄️' },
    { id: 'icsi', name: 'ICSI Treatment', icon: '🔬' },
  ];

  const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '60px' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎉</div>
            <h2 style={{ marginBottom: '15px' }}>Booking Confirmed!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
              Thank you, <strong>{formData.name}</strong>. Your appointment for <strong>{formData.service}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> has been successfully requested.
            </p>
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px', textAlign: 'left' }}>
              <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Reference:</strong> #VF-{Math.floor(Math.random() * 10000)}</p>
              <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Location:</strong> Banjara Hills Center, Hyderabad</p>
            </div>
            <button className="btn-primary" onClick={() => { setSubmitted(false); setStep(1); }}>Book Another Appointment</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" id="appointment-section">
      <div className="container">
        <div className="card appointment-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Progress Indicator */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '15px', left: '0', width: '100%', height: '2px', backgroundColor: '#eee', zIndex: 1 }}></div>
            <div style={{ position: 'absolute', top: '15px', left: '0', width: `${((step - 1) / 2) * 100}%`, height: '2px', backgroundColor: 'var(--primary)', zIndex: 2, transition: 'width 0.3s ease' }}></div>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                backgroundColor: step >= s ? 'var(--primary)' : '#eee', 
                color: step >= s ? 'white' : '#999',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                zIndex: 3,
                transition: 'background-color 0.3s ease'
              }}>
                {s}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)' }}>
              {step === 1 && "Select Treatment"}
              {step === 2 && "Select Date & Time"}
              {step === 3 && "Finalize Booking"}
            </h2>
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="grid-2 grid-gap-20 animate-fade-in">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  onClick={() => { setFormData({ ...formData, service: service.name }); handleNext(); }}
                  style={{ 
                    padding: '25px', 
                    border: formData.service === service.name ? '2px solid var(--primary)' : '1px solid #eee',
                    borderRadius: '12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: formData.service === service.name ? '#fff5f7' : 'white'
                  }}
                  className="hover-lift"
                >
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '18px' }}>{service.name}</h3>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Date & Time Picker */}
          {step === 2 && (
            <div className="animate-fade-in">
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Select Date</label>
                <input 
                  type="date" 
                  className="input-field"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                />
              </div>
              <label style={{ display: 'block', marginBottom: '15px', fontWeight: 600 }}>Preferred Time Slot</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '15px' }}>
                {timeSlots.map((time) => (
                  <div 
                    key={time}
                    onClick={() => setFormData({ ...formData, time })}
                    style={{ 
                      padding: '12px', 
                      textAlign: 'center', 
                      borderRadius: '8px', 
                      border: formData.time === time ? '2px solid var(--primary)' : '1px solid #eee',
                      cursor: 'pointer',
                      backgroundColor: formData.time === time ? '#fff5f7' : 'white',
                      fontWeight: formData.time === time ? 700 : 400,
                      fontSize: '14px'
                    }}
                  >
                    {time}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                <button className="btn-secondary" onClick={handleBack} style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>Back</button>
                <button 
                  className="btn-primary" 
                  onClick={handleNext} 
                  disabled={!formData.date || !formData.time}
                  style={{ flex: 2, border: 'none', opacity: (!formData.date || !formData.time) ? 0.5 : 1 }}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="animate-fade-in">
              <div className="grid-2 grid-gap-20" style={{ marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                />
              </div>

              <div style={{ backgroundColor: '#f0f2f5', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
                <h4 style={{ marginBottom: '10px' }}>Booking Summary</h4>
                <div style={{ fontSize: '14px' }}>
                  <p style={{ margin: '5px 0' }}>🏥 <strong>Center:</strong> Vave Fertility Center, Banjara Hills</p>
                  <p style={{ margin: '5px 0' }}>🩺 <strong>Service:</strong> {formData.service}</p>
                  <p style={{ margin: '5px 0' }}>📅 <strong>Appointment:</strong> {formData.date} at {formData.time}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <button type="button" className="btn-secondary" onClick={handleBack} style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>Back</button>
                <button type="submit" className="btn-primary" style={{ flex: 2, border: 'none' }}>Confirm Appointment</button>
              </div>
            </form>
          )}

          {/* Quick Support Option */}
          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #eee', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '15px' }}>Prefer an instant booking?</p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                backgroundColor: '#25D366', 
                color: 'white', 
                padding: '12px 25px', 
                borderRadius: '30px',
                fontWeight: 600,
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
              }}
            >
              <span style={{ fontSize: '20px' }}>💬</span> Book via WhatsApp
            </a>
          </div>
        </div>
        <style jsx>{`
          .appointment-card {
            padding: 40px;
          }
          @media (max-width: 768px) {
            .appointment-card {
              padding: 20px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AppointmentForm;
