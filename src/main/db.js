import pg from 'pg';
const { Client } = pg;

export default async () => {
    const client = new Client({
      user: 'postgres',
      password: '123456',
      host: 'localhost',
      port: '5432',
      database: 'demo',
    });
  
    await client.connect();
    return client;
  };