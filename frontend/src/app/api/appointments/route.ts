import { NextResponse } from 'next/server';

let appointments = [
  { id: 1, patientName: 'Anitha Reddy', type: 'IVF Consultation', date: '2026-05-12', time: '10:00 AM', status: 'Confirmed' },
  { id: 2, patientName: 'Suresh Kumar', type: 'IUI Procedure', date: '2026-05-12', time: '11:30 AM', status: 'Pending' },
  { id: 3, patientName: 'Priya Lakshmi', type: 'General Checkup', date: '2026-05-13', time: '09:00 AM', status: 'Confirmed' },
  { id: 4, patientName: 'Rajesh Varma', type: 'Semen Analysis', date: '2026-05-13', time: '02:00 PM', status: 'Cancelled' },
];

export async function GET() {
  return NextResponse.json(appointments);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { patientName, type, date } = body;

  if (!patientName || !type || !date) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const newAppointment = {
    id: appointments.length + 1,
    patientName,
    type,
    date,
    time: body.time || 'TBD',
    status: 'Pending'
  };

  appointments.push(newAppointment);
  return NextResponse.json(newAppointment, { status: 201 });
}
