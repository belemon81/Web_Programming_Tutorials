const express = require('express');
const mongodb = require('mongodb');
const ObjectID = require('mongodb').ObjectId;

const app = express();

// serve static files (html, css, js, images...) 
app.use(express.static('public'));
// decode req.body from form-data
app.use(express.urlencoded({ extended: true }));
// decode req.body from post body message
app.use(express.json());

const DATABASE_NAME = 'eng-dict';
const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;
let db = null;
let collection = null;
async function startServer() {
    // connect db
    const client = await mongodb.MongoClient.connect(MONGO_URL);
    db = client.db();
    collection = db.collection('words');
    console.log('Connected to database eng-dict!');

    // Now every route can safely use the db and collection objects.
    await app.listen(3000); 
    console.log('Listening on port 3000');
}
startServer();

// get all words
app.get('/words', async function (req, res) {
    const result = await db.collection('words').find(); 
    const docs = await result.toArray();  
    const WORDS = {};
    for (const doc of docs) {
        WORDS[doc.word] = doc.definition;
    }
    res.json(docs); // OK (by default)
});

// create a new word
app.post('/words', async function (req, res) {
    const word = req.body.word;
    const definition = req.body.definition;

    const doc = await db.collection('words').findOne({word: word});
    if (doc) {
        return res.status(409).end('Word already exists!');
    }

    data = {word: word, definition: definition};
    await db.collection('words').insertOne(data);
    res.json(data);
});

// update a word
app.put('/words/:ID', async function (req, res) {
    const ID = req.params.ID;
    const definition = req.body.definition;

    const doc = await db.collection('words').findOne({_id: ObjectID(ID)});
    if (!doc) {
        return res.status(404).end("Word does NOT exist!"); 
    } 

    await db.collection('words').update({_id: ObjectID(ID)}, {$set: {definition: definition}}); 
    res.json({definition: definition }); // OK (by default)
});

// delete a word
app.delete('/words/:ID', async function (req, res) {
    const ID = req.params.ID; 

    const doc = await db.collection('words').findOne({_id: ObjectID(ID)});
    if (!doc) {
        return res.status(404).end("Word does NOT exist!"); 
    } 

    const definition = doc.definition;

    await db.collection('words').deleteOne({_id: ObjectID(ID)}); 
    res.json({ definition: definition }); // OK (by default)
});