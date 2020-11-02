const {MongoClient} = require('mongodb');

async function main() {
    // we  need to go to Atlas/Cluster/Connect/connect your application/copy and paste the URL 
    const uri = "mongodb+srv://ava:860937966@cluster0.8jbf4.mongodb.net/world?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        await listDatabases(client);

        // CREAT NEW DOCUMENT
        const  city1 = {Id : 4080, Name : "Shiraz", CountryCode: "IRN", District: "Fars", Population : 1566000};
        const result = await client.db("world").collection("city").insertOne(city1);
        console.log(result);

        //UPDATE THE DOCUMENT 
        const filter = { Id: 4080};
        const updateDoc = {
            $set: {Population: 1600000,},
          };
          const result2 = await client.db('world').collection('city').updateOne(filter, updateDoc);
          console.log(result2);


        // //READ THE DOCUMENT
        const query1 = {Name : "Shiraz"};
        const query2 = {CountryCode : "IRN"};
        const result3 = await client.db('world').collection('city').findOne(query1);
        const result4 = await client.db('world').collection('city').findOne(query2);
        console.log(result3, result4);

        //DELET THE CITY
        const query3 = {Id : 4080};
        const result4 = await client.db('world').collection('city').deleteOne(query3);
        console.log(result4);
        
     } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 
