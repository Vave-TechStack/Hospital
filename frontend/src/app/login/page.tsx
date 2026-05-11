'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CRMLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/crm');
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f0f2f5 0%, #e2e8f0 100%)' }}>
      <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '40px', textAlign: 'center' }}>
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '10px' }}>Vave CRM</h1>
          <p style={{ color: 'var(--text-muted)' }}>Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Email Address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@vave.com" 
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} 
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600 }}>Password</label>
              <a href="#" style={{ fontSize: '12px', color: 'var(--primary)' }}>Forgot Password?</a>
            </div>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} 
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={loading}
            style={{ width: '100%', border: 'none', opacity: loading ? 0.7 : 1, transition: 'var(--transition)' }}
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div style={{ marginTop: '30px', fontSize: '14px' }}>
          <Link href="/" style={{ color: 'var(--text-muted)' }}>← Back to Website</Link>
        </div>
      </div>
    </div>
  );
}
