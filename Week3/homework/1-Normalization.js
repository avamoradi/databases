//1-
// Rule 1 : Single valued attributes (each column should have atomic value, no multiple values)
// but in this table we have several value for column food_code and food _description we should seprate this 2 column as a seprate table .

// Member_id|Member_Name|Member_address|Dinner_id|Dinner_date|Venue _code|Venue_ description|Food_code|


// 2-
// super key could be :
// member_id,dinner_id,venue_code,food_code
// member_name,dinner_id,dinner_date,venue_description,food_descriprion
// member_id,dinner_date,venue_code,food_code

// kandidare key could be :
// member_id, member_name
// primary_key could be :
// member_id,

// 3- 
//because we choose member_id,  as a primary key then we can see that column member_name and  member adress are dependent on  member_id   to solve it we going to make new table with member_id ,member_name ,member_address  and then delet  the column member_name and member _address .

// member_id|member_name|member_address 
// 1	       Amit	       325 Max park



// Member_id|dinner_id|dinner_date|venue_code|venue_description|Food_code|
// 1      	D00001001  2020-03-15  B01        Grand Ball Room   C1	     




// 4- 
//we can see that they are column in the table which are dependent on another column, that they are not  primary key!
// for example dinner_date is dependet to dinner_id and venue_description is dependent to venue code and food_description is dependent on food_code to solve  this problem
//we are going to seprate this column as a seprate tables.

//please Note that food_code, dinner_id, venue_code and memver_id are going to be primary key on seprated table and foreign key on the main table to make a connection with are the tables.


// food_code|food_description 
// C1	        curry

// dinner_id | dinner_date 
// D00001001  2020-03-15

// venue_code |venue_description 
// B01         Grand Ball Room

// Member_id|dinner_id |venue_code |Food_code
// 1       	D00001001   B01         C1       



                                                                                                








