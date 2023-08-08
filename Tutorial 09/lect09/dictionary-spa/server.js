const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(express.static('public'));

const DATABASE_NAME = 'eng-dict';
const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;

let db = null;
let collection = null;

async function startServer() {
  // Set the db and collection variables before starting the server.
  const client = await MongoClient.connect(MONGO_URL);
  db = client.db();
  collection = db.collection('words');
  // Now every route can safely use the db and collection objects.
  app.listen(3000);
  console.log('Listening on port 3000');
}
startServer();

////////////////////////////////////////////////////////////////////////////////

// JSON-returning route

async function onLookupWord(req, res) {
  const routeParams = req.params;
  const word = routeParams.word;

  const query = { word: word.toLowerCase() };
  const result = await collection.findOne(query);

  const response = {
    word: word,
    definition: result ? result.definition : ''
  };
  res.json(response);
}
app.get('/lookup/:word', onLookupWord);

////////////////////////////////////////////////////////////////////////////////

// HTML-returning route

// Must be defined after all other routes in order to be a catch-all.
async function onAllOtherPaths(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}
app.get('*', onAllOtherPaths);
