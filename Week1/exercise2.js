var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'world'
});
 

con.connect(function(err) {
  if (err) throw err;

//1.What are the names of countries with population greater than 8 million?
 con.query("SELECT Name FROM country WHERE Population > 8000000",function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

//2.What are the names of countries that have “land” in their names?
 con.query("SELECT Name FROM country WHERE Name LIKE '%land%' ",function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

//3.What are the names of the cities with population in between 500,000 and 1 million?
 con.query("SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000 ",function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

//4.What's the name of all the countries on the continent ‘Europe’?
 con.query("SELECT Name FROM country WHERE continent = 'Europe' ",function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

//5.List all the countries in the descending order of their surface areas.
 con.query("SELECT Name , SurfaceArea FROM country ORDER by SurfaceArea DESC ",
   function (err, result, fields) {
    if (err) throw err;
    console.log(result);
 });

//6.What are the names of all the cities in the Netherlands?
 con.query("SELECT Name FROM city where CountryCode = 'NLD' ",function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

//7.What is the population of Rotterdam?
 con.query("SELECT Population,Name FROM city where Name = 'Rotterdam' ", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

//8.What's the top 10 countries by Surface Area?
 con.query("SELECT Name, SurfaceArea FROM country ORDER by SurfaceArea DESC LIMIT 10 ", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

//9.What's the top 10 most populated cities?
 con.query("SELECT Name, Population FROM city ORDER by Population DESC LIMIT 10 ",  function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

//10.What is the population number of the world?
 con.query("SELECT SUM (Population) from country", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
 });

  con.end();
});
 
