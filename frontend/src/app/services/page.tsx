import Link from 'next/link';
import Navbar from '@/components/Website/Navbar';
import Footer from '@/components/Website/Footer';

const ServicesPage = () => {
  const detailedServices = [
    {
      title: 'IVF (In-Vitro Fertilization)',
      description: 'The most advanced fertility treatment where eggs are fertilized by sperm outside the body in a laboratory setting.',
      features: ['Advanced Lab Culture', 'Blastocyst Transfer', 'Laser Assisted Hatching'],
      icon: '🧬'
    },
    {
      title: 'IUI (Intrauterine Insemination)',
      description: 'A procedure that involves placing sperm inside a woman’s uterus to facilitate fertilization.',
      features: ['Minimally Invasive', 'Natural Cycle Option', 'Donor Sperm Option'],
      icon: '✨'
    },
    {
      title: 'ICSI Treatment',
      description: 'A specialized form of IVF where a single sperm is injected directly into a mature egg.',
      features: ['Best for Male Infertility', 'High Success Rates', 'Expert Embryologists'],
      icon: '🔬'
    },
    {
      title: 'Egg Freezing',
      description: 'Preserving a woman’s reproductive potential by freezing her eggs for future use.',
      features: ['Social Freezing', 'Onco-Fertility', 'Vitrification Technology'],
      icon: '❄️'
    },
    {
      title: 'Donor Programs',
      description: 'High-quality donor egg and sperm programs for couples needing assistance.',
      features: ['Rigorous Screening', 'Confidentiality', 'Diverse Donor Pool'],
      icon: '👥'
    },
    {
      title: 'Surrogacy Support',
      description: 'Compassionate and legal support for gestational surrogacy journeys.',
      features: ['Legal Documentation', 'Medical Support', 'Emotional Counseling'],
      icon: '🏠'
    }
  ];

  return (
    <main>
      <Navbar />
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)', paddingTop: '160px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>World-Class <span style={{ color: 'var(--primary)' }}>Fertility Services</span></h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            We offer a full spectrum of fertility treatments using the latest technology and compassionate care to help you achieve your dream of parenthood.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {detailedServices.map((service, index) => (
              <div key={index} className="card animate-fade-in">
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{service.description}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: '8px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--primary)' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/appointment" style={{ display: 'block', marginTop: '30px' }}>
                  <button className="btn-primary" style={{ width: '100%' }}>Book Consultation</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ color: 'white', fontSize: '40px' }}>Our Success Process</h2>
            <p style={{ opacity: 0.7 }}>A step-by-step journey to your parenthood.</p>
          </div>
          <div className="grid-4 grid-gap-30">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial meeting and assessment.' },
              { step: '02', title: 'Testing', desc: 'Detailed diagnostic screenings.' },
              { step: '03', title: 'Treatment', desc: 'Personalized fertility plan.' },
              { step: '04', title: 'Success', desc: 'Support through pregnancy.' }
            ].map((p, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: 700, opacity: 0.2, marginBottom: '-20px' }}>{p.step}</div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', opacity: 0.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ServicesPage;
