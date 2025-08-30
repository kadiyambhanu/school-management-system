import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/database';

export async function GET() {
  try {
    const result = await query('SELECT id, name, address, city, image FROM schools ORDER BY created_at DESC');
    // For in-memory database, result[0] contains the array of schools
    const schools = Array.isArray(result) && result.length > 0 ? result[0] : [];
    return NextResponse.json(schools);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch schools' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, address, city, state, contact, image, email_id } = data;

    if (!name || !address || !city || !state || !contact || !email_id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await query(
      'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, address, city, state, contact, image || null, email_id]
    );

    return NextResponse.json({ message: 'School added successfully' });
  } catch {
    return NextResponse.json({ error: 'Failed to add school' }, { status: 500 });
  }
}
