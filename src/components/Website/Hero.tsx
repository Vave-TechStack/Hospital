import Link from 'next/link';

const Hero = () => {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)', paddingTop: '160px' }}>
      <div className="container grid-2 hero-grid grid-gap-60" style={{ alignItems: 'center' }}>
        <div className="animate-fade-in">
          <h1 style={{ fontSize: '56px', lineHeight: '1.2', marginBottom: '24px' }}>
            Nurturing Dreams, <span style={{ color: 'var(--primary)' }}>Creating Life</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px' }}>
            The most advanced fertility center in Andhra Pradesh & Telangana. Our world-class IVF specialists are here to help you start your journey to parenthood.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '20px' }}>
            <Link href="/appointment">
              <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '18px' }}>Book Consultation</button>
            </Link>
            <button style={{ border: '2px solid var(--secondary)', color: 'var(--secondary)', padding: '15px 40px', borderRadius: 'var(--radius)', fontWeight: 600 }}>Success Stories</button>
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
