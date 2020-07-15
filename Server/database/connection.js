const { Pool } = require('pg');

require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DB connection not found');
}

const options = {
  connectionString,
  ssl: false,
};

module.exports = new Pool(options);
