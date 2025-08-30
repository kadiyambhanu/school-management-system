import { NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/database';

export async function GET() {
  try {
    await initializeDatabase();
    return NextResponse.json({ status: 'OK', message: 'Database initialized successfully' });
  } catch {
    return NextResponse.json(
      { status: 'Error', message: 'Database initialization failed' },
      { status: 500 }
    );
  }
}
