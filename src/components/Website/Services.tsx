const services = [
  {
    title: 'IVF Treatment',
    description: 'In-Vitro Fertilization (IVF) is the most effective form of assisted reproductive technology.',
    icon: '🧬'
  },
  {
    title: 'IUI Procedure',
    description: 'Intrauterine Insemination (IUI) is a simple fertility treatment that places sperm inside a woman’s uterus.',
    icon: '✨'
  },
  {
    title: 'Egg Freezing',
    description: 'Preserve your fertility for the future with our state-of-the-art cryopreservation technology.',
    icon: '❄️'
  },
  {
    title: 'ICSI Treatment',
    description: 'Intracytoplasmic Sperm Injection (ICSI) is used to help with male infertility factors.',
    icon: '🔬'
  }
];

const Services = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Our Specialized <span style={{ color: 'var(--primary)' }}>Services</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            We provide a comprehensive range of fertility treatments tailored to your unique needs.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => (
            <div key={index} className="card animate-fade-in" style={{ 
              textAlign: 'center', 
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
              <h3 style={{ marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>{service.description}</p>
              <button style={{ marginTop: '20px', color: 'var(--primary)', fontWeight: 600 }}>Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
