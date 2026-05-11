export default function CRMReports() {
  const performanceData = [
    { month: 'Jan', ivf: 82, iui: 65, consults: 120 },
    { month: 'Feb', ivf: 85, iui: 70, consults: 135 },
    { month: 'Mar', ivf: 90, iui: 68, consults: 140 },
    { month: 'Apr', ivf: 88, iui: 75, consults: 150 },
    { month: 'May', ivf: 95, iui: 80, consults: 165 },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Analytics & Reports</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <select style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <option>Last 6 Months</option>
            <option>This Year</option>
            <option>All Time</option>
          </select>
          <button className="btn-primary" style={{ padding: '10px 20px' }}>Download PDF Report</button>
        </div>
      </div>

      <div className="grid-2 grid-gap-30" style={{ marginBottom: '30px' }}>
        {/* Mock Chart 1: Success Rates */}
        <div className="card">
          <h3 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>Treatment Success Rates</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '14px', fontWeight: 600 }}>
                <span>IVF Procedures</span>
                <span>78%</span>
              </div>
              <div style={{ width: '100%', height: '10px', backgroundColor: '#eee', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '78%', height: '100%', backgroundColor: 'var(--primary)' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '14px', fontWeight: 600 }}>
                <span>IUI Procedures</span>
                <span>45%</span>
              </div>
              <div style={{ width: '100%', height: '10px', backgroundColor: '#eee', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '45%', height: '100%', backgroundColor: '#36b9cc' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '14px', fontWeight: 600 }}>
                <span>ICSI Treatments</span>
                <span>82%</span>
              </div>
              <div style={{ width: '100%', height: '10px', backgroundColor: '#eee', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '82%', height: '100%', backgroundColor: '#1cc88a' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Chart 2: Revenue/Patient Demographics */}
        <div className="card">
          <h3 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>Lead Sources Overview</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', height: '180px' }}>
            {/* Simple CSS Pie Chart representation */}
            <div style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              background: 'conic-gradient(var(--primary) 0% 45%, #36b9cc 45% 75%, #f6c23e 75% 90%, #eee 90% 100%)',
              boxShadow: 'inset 0 0 0 20px white' // Creates a donut chart look
            }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '12px', height: '12px', backgroundColor: 'var(--primary)', borderRadius: '3px' }}></span> Website Form (45%)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '12px', height: '12px', backgroundColor: '#36b9cc', borderRadius: '3px' }}></span> Google Ads (30%)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '12px', height: '12px', backgroundColor: '#f6c23e', borderRadius: '3px' }}></span> Referrals (15%)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '12px', height: '12px', backgroundColor: '#eee', borderRadius: '3px' }}></span> Others (10%)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>Monthly Performance (2026)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee', backgroundColor: '#f9f9f9' }}>
              <th style={{ padding: '15px', textAlign: 'left' }}>Month</th>
              <th style={{ padding: '15px' }}>Consultations</th>
              <th style={{ padding: '15px' }}>IVF Cycles</th>
              <th style={{ padding: '15px' }}>IUI Cycles</th>
              <th style={{ padding: '15px' }}>Total Growth</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((data, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px', textAlign: 'left', fontWeight: 600 }}>{data.month}</td>
                <td style={{ padding: '15px' }}>{data.consults}</td>
                <td style={{ padding: '15px', color: 'var(--primary)' }}>{data.ivf}</td>
                <td style={{ padding: '15px', color: '#36b9cc' }}>{data.iui}</td>
                <td style={{ padding: '15px', color: '#1cc88a', fontWeight: 600 }}>+{(i * 2.5 + 5).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
