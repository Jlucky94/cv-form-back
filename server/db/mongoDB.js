const {MongoClient} = require("mongodb");

const connectionString = "mongodb+srv://lucky10291994:Zaqwsx1994@cluster0.0ek8iea.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let connection;

async function connect() {
    try {
        connection = await client.connect();
        await listDatabases(client)
        return client.db("test");
    } catch (e) {
        console.error(e);
    }
}

connect().catch(console.error)


async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    ``
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`)
    })
}

module.exports = {connect}