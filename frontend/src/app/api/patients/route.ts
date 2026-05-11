import { NextResponse } from 'next/server';

export async function GET() {
  const patients = [
    { id: 1, name: 'Anitha Reddy', age: 32, location: 'Hyderabad', treatments: ['IVF'], lastVisit: '2026-04-20' },
    { id: 2, name: 'Suresh Kumar', age: 35, location: 'Vijayawada', treatments: ['IUI'], lastVisit: '2026-05-01' },
    { id: 3, name: 'Priya Lakshmi', age: 29, location: 'Vizag', treatments: ['Consultation'], lastVisit: '2026-05-05' },
  ];

  return NextResponse.json(patients);
}
