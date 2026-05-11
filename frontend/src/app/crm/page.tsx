export default function CRMDashboard() {
  const stats = [
    { label: 'Total Appointments', value: '154', trend: '+12%', color: '#4e73df' },
    { label: 'New Patients', value: '42', trend: '+5%', color: '#1cc88a' },
    { label: 'Success Rate', value: '78%', trend: '+2%', color: '#36b9cc' },
    { label: 'Leads (Monthly)', value: '128', trend: '+18%', color: '#f6c23e' },
  ];

  const recentAppointments = [
    { id: 1, patient: 'Anitha Reddy', type: 'IVF Consultation', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Suresh Kumar', type: 'IUI Procedure', time: '11:30 AM', status: 'Pending' },
    { id: 3, patient: 'Priya Lakshmi', type: 'General Checkup', time: '09:00 AM', status: 'Confirmed' },
  ];

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {stats.map((stat, i) => (
          <div key={i} className="card" style={{ borderLeft: `5px solid ${stat.color}` }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: stat.color, textTransform: 'uppercase', marginBottom: '8px' }}>
              {stat.label}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: '#1cc88a' }}>{stat.trend}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Recent Appointments</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
                <th style={{ padding: '12px 0' }}>Patient</th>
                <th style={{ padding: '12px 0' }}>Type</th>
                <th style={{ padding: '12px 0' }}>Time</th>
                <th style={{ padding: '12px 0' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((app, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 0', fontWeight: 500 }}>{app.patient}</td>
                  <td style={{ padding: '15px 0', color: 'var(--text-muted)' }}>{app.type}</td>
                  <td style={{ padding: '15px 0' }}>{app.time}</td>
                  <td style={{ padding: '15px 0' }}>
                    <span style={{ 
                      padding: '4px 10px', 
                      borderRadius: '20px', 
                      fontSize: '12px', 
                      backgroundColor: app.status === 'Confirmed' ? '#e1f7ef' : '#fff4e5',
                      color: app.status === 'Confirmed' ? '#1cc88a' : '#f6c23e'
                    }}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button className="btn-primary" style={{ textAlign: 'left' }}>+ Add New Patient</button>
            <button style={{ textAlign: 'left', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>Schedule Appointment</button>
            <button style={{ textAlign: 'left', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>Generate Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}
