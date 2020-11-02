const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
};

const INSERT_TABLE_ACCOUNT = `
 INSERT into account values('NL101', 6000),('NL102', 3000);`;

const INSERT_TABLE_ACCOUNT_CHANGES = `
INSERT into account_changes values(1, 'NL101', 5000, '2020-05-30', 'THIS ACCOUNT IS CHANGED');`;

  
async function seedDatabase() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));

  try {
    await execQuery(INSERT_TABLE_ACCOUNT);
    await execQuery(INSERT_TABLE_ACCOUNT_CHANGES);
       
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

seedDatabase();