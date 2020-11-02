const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
};

const TABLE_ACCOUNT = `
  CREATE TABLE IF NOT EXISTS account (
  account_number VARCHAR(15),
  balance INT,
  PRIMARY KEY(account_number)
  );`;

  const TABLE_ACCOUNT_CHANGES = `
  CREATE TABLE IF NOT EXISTS account_changes (
  change_number INT,
  account_number VARCHAR(20),
  amount INT,
  changed_date date,
  remark TEXT,
  PRIMARY KEY (change_number),
  FOREIGN KEY (account_number) REFERENCES account (account_number)
  );`;

  
async function seedDatabase() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));

  try {
    await execQuery(TABLE_ACCOUNT);
    await execQuery(TABLE_ACCOUNT_CHANGES);
       
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

seedDatabase();