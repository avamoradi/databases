const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'meetup'
});

connection.connect((err) => {
  if (err){
    throw err;
  }
  console.log('Mysql Connected');

  //Drop database if exists
  connection.query("DROP DATABASE if exists meetup", (err, result) => {
    if (err) throw err;
    console.log("Database Droped ");
  }); 

  //create Database 
  connection.query("CREATE DATABASE meetup" , (err, result) => {
    if (err) throw err;
    console.log("Database Created");
  });

  //create table invite
  connection.query("CREATE TABLE  meetup.invitee (invitee_no  INT, invitee_name  VARCHAR(10) , invited_by VARCHAR(10))", (err, result) => {
    if (err) throw err;
    console.log("Table Invite Created");
  })

  //rows of invite table
  const inviteRows = "INSERT INTO meetup.invitee (invitee_no, invitee_name, invited_by) VALUES ?";

 const valuesInvite = [
   [308, 'Ava', 'Wassim'],
   [356, 'Fatma', 'Wouter'],
   [373, 'Obada', 'Fede'],
   [321,'Danny', 'Amjad'],
   [315, 'Sadeq', 'Serafima']
 ];
 
  connection.query(inviteRows, [valuesInvite], (err, result) => {
   if (err) throw err;
   console.log("5 recorde inserted to table Invite");
  })

  //create table room
  connection.query("CREATE TABLE  meetup.room (room_no  INT, room_name  VARCHAR(10) , floor_number INT)", (err, result) => {
    if (err) throw err;
    console.log("Table Room Created");
  });

  //rows of Room table 
 const roomRows = "INSERT INTO meetup.room (room_no, room_name, floor_number) VALUES ?";

 const valuesRoom = [
   [01, 'Rose', '1'],
   [02, 'Lily', '1'],
   [03, 'Jasmine', '2'],
   [04,'Daisy', '2'],
   [05, 'Violet', '3']
 ];
 
  connection.query(roomRows, [valuesRoom], (err, result) => {
   if (err) throw err;
   console.log("5 recorde inserted to table Room");
  })

  //create table meeting
  connection.query("CREATE TABLE meetup.meeting (meeting_no  INT, meeting_title  VARCHAR(50) , starting_time DATETIME)", (err, result) => {
    if (err) throw err;
    console.log("Table Meetup Created");
  });

  //rows of meeting table 
 const meetingRows = "INSERT INTO meetup.meeting (meeting_no, meeting_title, starting_time) VALUES ?";

 const valuesMeeting = [
  [101, 'How cute are digs?', '2019-01-01 17:00:00'],
  [102, 'Mango is more delicious of Banana?', '2019-01-01 11:30:00'],
  [103, 'Oatmeal is the best', '2019-01-01 08:00:00'],
  [104,'Spend your money on buying plants', '2019-01-01 10:00:00'],
  [105, '8 hours sleep per day', '2019-01-01 22:00:00']
 ];

 connection.query(meetingRows, [valuesMeeting], (err, result) => {
  if (err) throw err;
  console.log("5 recorde inserted to table Meeting");
 })

  connection.end();
});

  

