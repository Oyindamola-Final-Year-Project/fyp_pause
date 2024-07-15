import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  const { first_name, last_name, city, state, specialty, phone_no, email } = await req.json();

  try {
    const result = await pool.query(
      'INSERT INTO profiles (first_name, last_name, city, state, specialty, phone_no, email) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [first_name, last_name, city, state, specialty, phone_no, email]
    );
    console.log('Data inserted successfully:');
    return NextResponse.json({ success: true, data: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}