const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((error, client, release) => {
  if (error) {
    console.error('Erro na conexão ao banco de dados:', error);
    return;
  }
  console.log('Conexão bem-sucedida com o banco de dados PostgreSQL');
  release();
});

module.exports = pool;
