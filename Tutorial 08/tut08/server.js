const mongodb = require('mongodb');
const express = require("express");

const app = express();

//server static files
app.use(express.static('public'));

//process form & json.data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const DATABASE_NAME = 'eng-dict2';
const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;
let db = null;
let collection = null;
async function startServer() { 
    // Set the db and collection variables before starting the server.
    const client = await mongodb.MongoClient.connect(MONGO_URL);
    db = client.db();
    collection = db.collection('words'); 
    // Now every route can safely use the db and collection objects.
    app.listen(3000);
    console.log('Listening on port 3000');
}
startServer();