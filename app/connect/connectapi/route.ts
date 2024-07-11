
import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();


export const GET = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: {
      rejectUnauthorized: false, // This is not recommended for production environments
    },
  });
  
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');

    const result = await client.query('SELECT * FROM profiles where id = 1');
    console.log('Query result:', result.rows);

    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Error executing query', details: err });
  } finally {
    await client.end();
    console.log('Connection to PostgreSQL closed');
  }
};

