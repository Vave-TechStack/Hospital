export default function CRMLeads() {
  const leads = [
    { id: 'LD-101', name: 'Naveen Kumar', phone: '+91 9848012345', source: 'Website Form', service: 'IVF Inquiry', date: '2026-05-11', status: 'New', priority: 'High' },
    { id: 'LD-102', name: 'Lakshmi Narayana', phone: '+91 9966554433', source: 'Google Ads', service: 'IUI Procedure', date: '2026-05-10', status: 'Contacted', priority: 'Medium' },
    { id: 'LD-103', name: 'Srikanth Reddy', phone: '+91 9700112233', source: 'Social Media', service: 'General Consultation', date: '2026-05-09', status: 'Converted', priority: 'Low' },
    { id: 'LD-104', name: 'Bhavani Shankar', phone: '+91 9440099887', source: 'Referral', service: 'Egg Freezing', date: '2026-05-08', status: 'Follow Up', priority: 'High' },
    { id: 'LD-105', name: 'Divya Sree', phone: '+91 9000111222', source: 'Website Form', service: 'ICSI Treatment', date: '2026-05-08', status: 'Lost', priority: 'Low' },
  ];

  return (
    <div className="card">
      <div className="grid-2" style={{ alignItems: 'center', marginBottom: '30px' }}>
        <h2>Leads Management</h2>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
          <select style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <option>All Statuses</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Converted</option>
          </select>
          <button className="btn-primary" style={{ padding: '10px 20px' }}>Export to CSV</button>
        </div>
      </div>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee', backgroundColor: '#f9f9f9' }}>
              <th style={{ padding: '15px' }}>Lead ID</th>
              <th style={{ padding: '15px' }}>Name & Contact</th>
              <th style={{ padding: '15px' }}>Source</th>
              <th style={{ padding: '15px' }}>Service Requested</th>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>Status</th>
              <th style={{ padding: '15px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px', fontWeight: 600, color: 'var(--secondary)' }}>{lead.id}</td>
                <td style={{ padding: '15px' }}>
                  <div style={{ fontWeight: 600 }}>{lead.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{lead.phone}</div>
                </td>
                <td style={{ padding: '15px' }}>
                  <span style={{ backgroundColor: '#f0f2f5', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>{lead.source}</span>
                </td>
                <td style={{ padding: '15px' }}>{lead.service}</td>
                <td style={{ padding: '15px', fontSize: '14px', color: 'var(--text-muted)' }}>{lead.date}</td>
                <td style={{ padding: '15px' }}>
                  <span style={{ 
                    padding: '6px 12px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: 600,
                    backgroundColor: 
                      lead.status === 'New' ? '#e3f2fd' : 
                      lead.status === 'Converted' ? '#e1f7ef' : 
                      lead.status === 'Lost' ? '#ffebee' : '#fff4e5',
                    color: 
                      lead.status === 'New' ? '#1976d2' : 
                      lead.status === 'Converted' ? '#1cc88a' : 
                      lead.status === 'Lost' ? '#e53935' : '#f6c23e'
                  }}>
                    {lead.status}
                  </span>
                </td>
                <td style={{ padding: '15px' }}>
                  <button style={{ color: 'white', backgroundColor: 'var(--secondary)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', border: 'none', cursor: 'pointer' }}>Process Lead</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
