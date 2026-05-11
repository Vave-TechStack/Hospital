const services = [
  {
    title: 'IVF Treatment',
    description: 'In Vitro Fertilisation (IVF) is the most successful assisted reproductive technology for many couples.',
    icon: '🧪'
  },
  {
    title: 'IUI Procedure',
    description: 'Intrauterine Insemination (IUI) is a less invasive fertility treatment placed directly into the uterus.',
    icon: '💉'
  },
  {
    title: 'ICSI Treatment',
    description: 'An advanced IVF technique where a single sperm is directly injected into an egg for better results.',
    icon: '🔬'
  },
  {
    title: 'Egg Donation',
    description: 'Helping women achieve pregnancy using eggs from carefully screened and genetic-tested donors.',
    icon: '🥚'
  },
  {
    title: 'Azoospermia',
    description: 'Advanced surgical sperm retrieval techniques to help men father biological children.',
    icon: '👨‍⚕️'
  },
  {
    title: 'Ovulation Induction',
    description: 'Uses medications to stimulate ovaries for women who do not ovulate regularly.',
    icon: '🧬'
  },
  {
    title: 'Surgical Procedures',
    description: 'Expert hysteroscopy, laparoscopy, and fibroid removal by experienced surgeons.',
    icon: '🏥'
  },
  {
    title: 'RPL Treatment',
    description: 'Specialized care and targeted treatment for couples experiencing recurrent pregnancy loss.',
    icon: '❤️'
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
