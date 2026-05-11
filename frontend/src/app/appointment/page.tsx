import Navbar from '@/components/Website/Navbar';
import Footer from '@/components/Website/Footer';
import AppointmentForm from '@/components/Website/AppointmentForm';

const AppointmentPage = () => {
  return (
    <main>
      <Navbar />
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)', paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Schedule Your <span style={{ color: 'var(--primary)' }}>Visit</span></h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Ready to take the next step? Book a consultation with our fertility specialists at a time that works best for you.
          </p>
        </div>
      </section>
      
      {/* Reusing the existing AppointmentForm component, but removing its top padding to fit seamlessly */}
      <div style={{ marginTop: '-40px' }}>
        <AppointmentForm />
      </div>

      <Footer />
    </main>
  );
};

export default AppointmentPage;
