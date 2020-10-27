const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
};

const PRINT_AUTHORS_COLLABORATORS = ` 
  SELECT a1.author_name AS Author,
  a2.author_name AS Collaborator 
  FROM Authors as a1 LEFT JOIN Authors as a2
  ON a1.author_no = a2.collaborator;`;
  
  const PRINT_AUTHORS_PAPERTITLE = `
  SELECT A.* ,R.paper_title from authors A left join author_paper P 
  on A.author_no = P.author_no left join research_papers R on R.paper_id = P.paper_id;
  `;

async function seedDatabase() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);

  const execQuery = util.promisify(connection.query.bind(connection));

  try {
    const result1 = await execQuery(PRINT_AUTHORS_COLLABORATORS);
    console.log(result1);

    const results2 = await execQuery(PRINT_AUTHORS_PAPERTITLE);
    console.log(results2);

    connection.end();

  
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}
seedDatabase();