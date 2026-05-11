'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Playfair Display', serif" }}>
          Vave Fertility <span style={{ color: 'var(--secondary)' }}>Center</span>
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Link href="/login" style={{ fontSize: '14px', color: 'var(--text-muted)' }} onClick={() => setIsOpen(false)}>CRM</Link>
            <Link href="/appointment" className="btn-primary" style={{ padding: '10px 25px', fontSize: '15px', boxShadow: '0 4px 15px rgba(209, 77, 114, 0.4)' }} onClick={() => setIsOpen(false)}>Book Appointment</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
