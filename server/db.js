// Connect lucid to database
const pg = require('pg');
const db = new pg.Client("postgresql:///lucid_db");

db.connect();

module.exports = db;