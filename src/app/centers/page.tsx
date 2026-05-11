import React from 'react';
import Navbar from '@/components/Website/Navbar';
import Footer from '@/components/Website/Footer';

const CentersPage = () => {
  const regions = [
    {
      state: 'Telangana',
      cities: [
        { name: 'Hyderabad (Banjara Hills)', address: 'Road No. 12, Banjara Hills, Hyderabad' },
        { name: 'Hyderabad (Kukatpally)', address: 'KPHB Phase 1, Kukatpally, Hyderabad' },
        { name: 'Warangal', address: 'Hanamkonda, Warangal' }
      ]
    },
    {
      state: 'Andhra Pradesh',
      cities: [
        { name: 'Visakhapatnam', address: 'Maharani Peta, Vizag' },
        { name: 'Vijayawada', address: 'Benz Circle, Vijayawada' },
        { name: 'Guntur', address: 'Lakshmipuram, Guntur' },
        { name: 'Tirupati', address: 'Renigunta Road, Tirupati' }
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      <div className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>Our IVF Centers</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>World-class fertility care near you across AP & Telangana</p>
          </div>

          {regions.map((region, idx) => (
            <div key={idx} style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                {region.state}
              </h2>
              <div className="grid-3 grid-gap-20">
                {region.cities.map((city, cIdx) => (
                  <div key={cIdx} className="card hover-lift" style={{ padding: '30px' }}>
                    <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{city.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>{city.address}</p>
                    <a href="/appointment" className="text-secondary" style={{ fontWeight: 700, fontSize: '14px' }}>Book Appointment →</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CentersPage;
