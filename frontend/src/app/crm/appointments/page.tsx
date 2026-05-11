export default function CRMAppointments() {
  const appointments = [
    { id: 1, patientName: 'Anitha Reddy', type: 'IVF Consultation', date: '2026-05-12', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patientName: 'Suresh Kumar', type: 'IUI Procedure', date: '2026-05-12', time: '11:30 AM', status: 'Pending' },
    { id: 3, patientName: 'Priya Lakshmi', type: 'General Checkup', date: '2026-05-13', time: '09:00 AM', status: 'Confirmed' },
    { id: 4, patientName: 'Rajesh Varma', type: 'Semen Analysis', date: '2026-05-13', time: '02:00 PM', status: 'Cancelled' },
    { id: 5, patientName: 'Kavitha Devi', type: 'Egg Freezing', date: '2026-05-14', time: '10:30 AM', status: 'Confirmed' },
  ];

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Appointments Schedule</h2>
        <button className="btn-primary" style={{ padding: '10px 20px' }}>+ New Appointment</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
            <th style={{ padding: '15px' }}>ID</th>
            <th style={{ padding: '15px' }}>Patient Name</th>
            <th style={{ padding: '15px' }}>Type</th>
            <th style={{ padding: '15px' }}>Date</th>
            <th style={{ padding: '15px' }}>Time</th>
            <th style={{ padding: '15px' }}>Status</th>
            <th style={{ padding: '15px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app) => (
            <tr key={app.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '15px' }}>#{app.id}</td>
              <td style={{ padding: '15px', fontWeight: 600 }}>{app.patientName}</td>
              <td style={{ padding: '15px' }}>{app.type}</td>
              <td style={{ padding: '15px' }}>{app.date}</td>
              <td style={{ padding: '15px' }}>{app.time}</td>
              <td style={{ padding: '15px' }}>
                <span style={{ 
                  padding: '6px 12px', 
                  borderRadius: '20px', 
                  fontSize: '12px', 
                  backgroundColor: app.status === 'Confirmed' ? '#e1f7ef' : app.status === 'Cancelled' ? '#ffebee' : '#fff4e5',
                  color: app.status === 'Confirmed' ? '#1cc88a' : app.status === 'Cancelled' ? '#e53935' : '#f6c23e'
                }}>
                  {app.status}
                </span>
              </td>
              <td style={{ padding: '15px' }}>
                <button style={{ color: 'var(--primary)', marginRight: '10px' }}>Edit</button>
                <button style={{ color: 'var(--text-muted)' }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
