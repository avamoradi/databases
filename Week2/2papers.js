const util = require('util');
const mysql = require('mysql');
const fs = require('fs');

const CONNECTION_CONFIG = {
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
};

const CREATE_RESEARCH_TABLE = `
  CREATE TABLE IF NOT EXISTS Research_Papers (
  paper_id INT,
  paper_title VARCHAR(200) unique,
  conference VARCHAR(100),
  publish_date DATE,
  PRIMARY KEY (paper_id)
  );`;


  const CREAT_AUTHOR_PAPER_TABLE = `
  CREATE TABLE IF NOT EXISTS author_paper (
    author_no INT not null ,
    paper_id INT  not null ,
    constraint fk_authorno FOREIGN KEY(author_no) REFERENCES authors(author_no),
    constraint fk_paperno FOREIGN KEY(paper_id ) REFERENCES Research_Papers(paper_id),
    primary key(author_no, paper_id) 
  );`

async function seedDatabase() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const readFile = util.promisify(fs.readFile);

  const execQuery = util.promisify(connection.query.bind(connection));

  try {
    await execQuery(CREATE_RESEARCH_TABLE);
    await execQuery(CREAT_AUTHOR_PAPER_TABLE);

    const data = await readFile(__dirname + '/papers.json', 'utf8');
    const papers = JSON.parse(data);
    const promises = papers.map(paper => execQuery('INSERT INTO Research_Papers SET ?', paper));
   
    const data2 = await readFile(__dirname + '/author_paper.json', 'utf8');
    const array = JSON.parse(data2);
    const promises2 = array.map(item=> execQuery('INSERT INTO author_paper SET ?', item));
    await Promise.all([promises, promises2]);
    
    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}
seedDatabase();