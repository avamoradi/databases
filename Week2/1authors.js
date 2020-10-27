const util = require('util');
const mysql = require('mysql');
const fs = require('fs');

const CONNECTION_CONFIG = {
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
};

const CREATE_AUTHOR_TABLE = `
  CREATE TABLE IF NOT EXISTS authors (
  author_no INT,
  author_name VARCHAR(50),
  university VARCHAR(50),
  date_of_birth DATE, 
  h_index INT,
  gender ENUM('m', 'f'),
  PRIMARY KEY (author_no)
  );`;

  //const CREATE_COLUMN = `ALTER TABLE Authors ADD Collaborator int;`;
  //const ADD_FOREIGN_KEY = `ALTER TABLE Authors ADD FOREIGN KEY(Collaborator) REFERENCES Authors(author_no);`

  const CREATE_FOREIGNKEY = `ALTER TABLE authors ADD collaborator INT REFERENCES author(author_no);`;


async function seedDatabase() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const readFile = util.promisify(fs.readFile);
   const execQuery = util.promisify(connection.query.bind(connection));

  try {
    await execQuery(CREATE_AUTHOR_TABLE);
    //await execQuery(CREATE_COLUMN);
    //await execQuery(CADD_FOREIGN_KEY);

    await execQuery(CREATE_FOREIGNKEY);

    const data = await readFile(__dirname + '/authors.json', 'utf8');
    const authors = JSON.parse(data);

    const promises = authors.map(author => execQuery('INSERT INTO authors SET ?', author));
    await Promise.all(promises);
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

seedDatabase();