const express = require('express');
const mongodb = require('mongodb');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// serve static files
app.use(express.static('public'));

// process form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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

async function onSetWord(req, res) {
    const routeParams = req.params;
    const word = routeParams.word;

    const definition = req.body.definition;
    const key = word.toLowerCase();

    const filter = {word: key};
    const update = {definition: definition};
    const options = {upsert: true};

    const response = await collection.updateOne(filter, {$set: update}, options);
    
    res.json({success: true});
}
app.post('/set/:word', onSetWord);

async function onViewWord(req, res) {
    const routeParams = req.params;
    const word = routeParams.word;

    const query = {word: word.toLowerCase()};
    const result = await collection.findOne(query);
    const definition = result? result.definition: '';

    res.render('word', {word, definition});
}
app.get('/:word', onViewWord);

const DATABASE_NAME = 'eng-dict';
const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;

let db = null;
let collection = null;

async function startServer() {
    // connect db
    const client = await mongodb.MongoClient.connect(MONGO_URL);
    // Set the db and collection variables before starting the server.
    db = client.db();
    collection = db.collection('words');

    // Now every route can safely use the db and collection objects.
    app.listen(3000);
    console.log('Listening on port 3000');
}

startServer();