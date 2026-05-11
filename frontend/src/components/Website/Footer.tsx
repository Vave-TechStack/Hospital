const Footer = () => {
  return (
    <footer className="section-padding" style={{ backgroundColor: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Vave Fertility Center</h2>
        <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto 40px' }}>
          Empowering couples to build families with compassion and advanced medical care across Andhra Pradesh and Telangana.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
          <a href="/" style={{ color: 'white', opacity: 0.8 }}>Home</a>
          <a href="/services" style={{ color: 'white', opacity: 0.8 }}>Services</a>
          <a href="/about" style={{ color: 'white', opacity: 0.8 }}>About Us</a>
          <a href="/contact" style={{ color: 'white', opacity: 0.8 }}>Contact Us</a>
        </div>
        <p style={{ opacity: 0.5, fontSize: '14px' }}>
          © 2026 Vave TechStack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
