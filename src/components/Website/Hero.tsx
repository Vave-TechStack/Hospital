import Link from 'next/link';

const Hero = () => {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)', paddingTop: '160px' }}>
      <div className="container grid-2 hero-grid grid-gap-60" style={{ alignItems: 'center' }}>
        <div className="animate-fade-in">
          <div className="badge" style={{ marginBottom: '20px', fontSize: '14px', color: 'var(--primary)', fontWeight: 600 }}>✨ India's Most Trusted Fertility Network</div>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 56px)', lineHeight: '1.2', marginBottom: '24px' }}>
            The journey to being called <span style={{ color: 'var(--primary)' }}>'Amma'</span> starts here.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px' }}>
            We've helped 3,00,000+ families embrace the joy of parenthood. With a 75% success rate and 39+ years of excellence, we're with you at every step.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
            <Link href="/appointment">
              <button className="btn-primary" style={{ minWidth: '220px' }}>Start Your Journey</button>
            </Link>
            <a href="https://wa.me/919962700000" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ minWidth: '220px' }}>
              <span>💬</span> WhatsApp Us
            </a>
          </div>
          <div className="hero-stats" style={{ marginTop: '50px', display: 'flex', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '32px', color: 'var(--primary)' }}>15,000+</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Successful Pregnancies</p>
            </div>
            <div>
              <h3 style={{ fontSize: '32px', color: 'var(--primary)' }}>98%</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Patient Satisfaction</p>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ 
            width: '100%', 
            height: '500px', 
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
            overflow: 'hidden',
            boxShadow: '20px 20px 60px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="/hero.png" 
              alt="Premium Fertility Care" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
