first of all i went to the mongodb.com/cloud/atlas  and do the registeration.

then make a new cluster for cloud provider & region i choosed Azure , Europe , Netherlands.

then i clicked the connenct button to connect my cluster with Mongodb Compass . first i did the setup connection security and put my ip address there and then went to new tab (choose a connection method)  and select continue useing MongoDB  Compass . 
since I already downloaded Mongodb in my system i choosed I have MongoDB Compass option and then copy the connection string then open MongoDB Compass and paste it in New Connection /Paste your connection string be aware that you should use your password which you used to build a new Cluster instead of <password> in the link. you need to  close your compass once and open it again to see your cluster at the left side ,then click on it and connect.

then click on CREATE DATABASE Button , fill Database Name which is world here and Collection Name City.now we need to exort data and import them here .
for export the data go to your mysql prompt and use the link which we have in reading material:
since i want to save this table as a csv file i inserted to path for downloading before name of file
-select * into outfile 'C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\city.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from city;
-select * into outfile 'C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\country.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from country;
-select * into outfile 'C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\countrylanguage.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from countrylanguage;

then if i go to folder on my laptop i can see the 3 csv files there .but  first we need to add a row as a first row with the name of columns then we can import this tables seprately to our MongoDB compass please make sure that you are choosing the dataType for each filed correctly (if its number or string or boolean...). then we can see the documents.

then we go to Atlas and refresh the page now inside our cluster choose collections and you can see database worl with collection city, country and countrylanguage. 

this are all the step for convert mysql database to MongoDb Database .
