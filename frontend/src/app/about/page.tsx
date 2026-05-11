import Navbar from '@/components/Website/Navbar';
import Footer from '@/components/Website/Footer';

const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)', paddingTop: '160px' }}>
        <div className="container">
          <div className="grid-2 grid-gap-60" style={{ alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Dedicated to <span style={{ color: 'var(--primary)' }}>Building Families</span></h1>
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '30px' }}>
                Vave Fertility Center has been a pioneer in reproductive medicine for over 15 years. We combine cutting-edge technology with a human touch to provide the best possible outcomes for our patients in Andhra Pradesh and Telangana.
              </p>
              <div className="grid-2 grid-gap-20">
                <div className="card" style={{ padding: '20px' }}>
                  <h3 style={{ color: 'var(--primary)', fontSize: '32px' }}>15+</h3>
                  <p style={{ margin: 0, fontSize: '14px' }}>Years of Excellence</p>
                </div>
                <div className="card" style={{ padding: '20px' }}>
                  <h3 style={{ color: 'var(--primary)', fontSize: '32px' }}>10k+</h3>
                  <p style={{ margin: 0, fontSize: '14px' }}>Success Stories</p>
                </div>
              </div>
            </div>
            <div style={{ height: '400px', backgroundColor: '#eee', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              <img src="/hero.png" alt="About Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px' }}>Meet Our <span style={{ color: 'var(--primary)' }}>Specialists</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Leading experts in the field of reproductive medicine.</p>
          </div>
          <div className="grid-3 grid-gap-40">
            {[
              { name: 'Dr. Anjali Varma', role: 'Chief Fertility Specialist', exp: '20+ Years' },
              { name: 'Dr. Rajesh Reddy', role: 'Lead Embryologist', exp: '15+ Years' },
              { name: 'Dr. Priya Sharma', role: 'Gynecologist & Obstetrician', exp: '12+ Years' }
            ].map((doc, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto 20px', overflow: 'hidden' }}>
                  {/* Doctor Image Placeholder */}
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>Photo</div>
                </div>
                <h3 style={{ marginBottom: '5px' }}>{doc.name}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '14px', marginBottom: '10px' }}>{doc.role}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{doc.exp} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '30px' }}>Our Mission</h2>
            <p style={{ fontSize: '20px', fontStyle: 'italic', color: 'var(--secondary)' }}>
              "To provide accessible, high-quality, and compassionate fertility care to every aspiring parent, utilizing the most advanced medical innovations and a patient-centric approach."
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
