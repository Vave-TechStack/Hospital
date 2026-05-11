import { NextResponse } from 'next/server';

export async function GET() {
  const dashboardStats = {
    totalAppointments: 154,
    newPatients: 42,
    successRate: '78%',
    leadsThisMonth: 128
  };

  return NextResponse.json(dashboardStats);
}
