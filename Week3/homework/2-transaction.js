const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
};

const connection = mysql.createConnection(CONNECTION_CONFIG);
const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  try {
    await execQuery("START TRANSACTION");
    await execQuery('UPDATE account SET balance = 5000 WHERE account_number = "NL101"');
    await execQuery('UPDATE account SET balance = 4000 WHERE account_number = "NL102"');
    await execQuery("COMMIT");
       
    connection.end();
  } catch (err) {
    console.error(err.message);
    await execQuery("ROLLBACK");
    connection.end();
  }
}

seedDatabase();
