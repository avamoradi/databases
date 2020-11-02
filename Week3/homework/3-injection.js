var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'world'
});

connection.connect();

function getPopulation() {
 `select * from country  WHERE empl=  ${input_number};`

  // this is the Naive way to write the query and doesnt matter if the first part before first ; is true or false the part after ; would be executed.
 // `SELECT population FROM ${Country} WHERE Name = '${name}' and code = ${code} or 1=1 ; select * from ${Country}`

 //PREPARE xmxm1 from 'select * from country where name = ? and code = ? ;
 //set @pc = 'IRAN';
 //set @pd = 'IRN';
 //execute xmxm1 using @pc , @pd;


  conn.query(
    // this query do not accept anything other than a proper option for name and code!
    `SELECT population FROM ${Country} WHERE Name = ?  and code = ? `,
    function(err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}

getPopulation();


