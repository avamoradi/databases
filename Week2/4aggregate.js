const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
};

const PAPETS_NUMBERS_AUTHORS = `SELECT R.paper_title, count(author_name) from research_papers R inner join author_paper P on P.paper_id = R.paper_id inner join authors A on A.author_no = P.author_no group by (paper_title);`;

const SUM_PAPAER_FEMALE = `select count(paper_title) as number_of_papers_by_females from research_papers r inner join author_paper p on p.paper_id = r.paper_id inner join authors a on a.author_no = p.author_no where gender = 'f'; `;

const AVERAGE_HINDEX_AUTHORS = `select university , avg(h_index) from authors group by (university)`;

const SUM_PAPAER_AUTHORS_UNIVERSITY = `select university, count(paper_title) from research_papers r inner join author_paper p on r.paper_id = p.paper_id inner join authors a on a.author_no =  p.author_no group by (university);`;

const MIN_MAX_HINDEX_UNIVERSITY = `select university,min(h_index),max(h_index) from authors a left join author_paper p on a.author_no = p.author_no inner join research_papers r on r.paper_id = p.paper_id group by (university);`;


async function seedDatabase() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);

  const execQuery = util.promisify(connection.query.bind(connection));

  try {
    const result1 = await execQuery(PAPETS_NUMBERS_AUTHORS);
    console.log(result1);

    const results2 = await execQuery(SUM_PAPAER_FEMALE);
    console.log(results2);

    const result3 = await execQuery(AVERAGE_HINDEX_AUTHORS);
    console.log(result3);

    const results4 = await execQuery(SUM_PAPAER_AUTHORS_UNIVERSITY);
    console.log(results4);

    const results5 = await execQuery(MIN_MAX_HINDEX_UNIVERSITY);
    console.log(results5);

    connection.end();

  
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}
seedDatabase();