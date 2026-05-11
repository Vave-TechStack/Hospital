export default function CRMPatients() {
  const patients = [
    { id: 1, name: 'Anitha Reddy', age: 32, location: 'Hyderabad', treatments: ['IVF'], lastVisit: '2026-04-20', status: 'Active' },
    { id: 2, name: 'Suresh Kumar', age: 35, location: 'Vijayawada', treatments: ['IUI'], lastVisit: '2026-05-01', status: 'Active' },
    { id: 3, name: 'Priya Lakshmi', age: 29, location: 'Vizag', treatments: ['Consultation'], lastVisit: '2026-05-05', status: 'Inactive' },
    { id: 4, name: 'Kiran Goud', age: 41, location: 'Warangal', treatments: ['ICSI'], lastVisit: '2026-04-15', status: 'Active' },
  ];

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Patient Records</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <input type="text" placeholder="Search patients..." style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }} />
          <button className="btn-primary" style={{ padding: '10px 20px' }}>+ Register Patient</button>
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
            <th style={{ padding: '15px' }}>Name</th>
            <th style={{ padding: '15px' }}>Age</th>
            <th style={{ padding: '15px' }}>Location</th>
            <th style={{ padding: '15px' }}>Treatments</th>
            <th style={{ padding: '15px' }}>Last Visit</th>
            <th style={{ padding: '15px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '15px', fontWeight: 600 }}>{p.name}</td>
              <td style={{ padding: '15px' }}>{p.age}</td>
              <td style={{ padding: '15px' }}>{p.location}</td>
              <td style={{ padding: '15px' }}>
                {p.treatments.map((t, i) => (
                  <span key={i} style={{ backgroundColor: '#f0f2f5', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', marginRight: '5px' }}>{t}</span>
                ))}
              </td>
              <td style={{ padding: '15px' }}>{p.lastVisit}</td>
              <td style={{ padding: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: p.status === 'Active' ? '#1cc88a' : '#ccc' }}></div>
                  {p.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
