'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Overview', href: '/crm' },
    { name: 'Appointments', href: '/crm/appointments' },
    { name: 'Patient Records', href: '/crm/patients' },
    { name: 'Leads Management', href: '/crm/leads' },
    { name: 'Reports', href: '/crm/reports' },
  ];

  return (
    <div className="crm-layout">
      <aside className="crm-sidebar">
        <div style={{ padding: '0 30px 40px', fontSize: '20px', fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
          Vave <span style={{ color: 'var(--primary-light)' }}>CRM</span>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`crm-sidebar-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ marginTop: 'auto', padding: '40px 30px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>← Back to Website</Link>
          </div>
        </nav>
      </aside>
      <main className="crm-content">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ margin: 0 }}>Good Morning, <span style={{ color: 'var(--primary)' }}>Dr. Varma</span></h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span style={{ fontSize: '20px' }}>🔔</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>
              AV
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
