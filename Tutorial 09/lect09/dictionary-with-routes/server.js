const express = require('express');
const mongodb = require('mongodb');
const exphbs = require('express-handlebars');

const app = express();

// set template engine
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// serve static files
app.use(express.static('public'));

// process post body message -> req.body
app.use(express.urlencoded({extended: true})); // form data
app.use(express.json()); // json data

// function checkAuthentication(req, res, next) {
    //     console.log('checkAuthentication');
    //     next();
    // }
    // app.use(checkAuthentication);
    
    // function checkAuthorization(req, res, next) {
    //     console.log('checkAuthorization');
    //     next();
    // }
    // app.use(checkAuthorization);

function setCollection(req, res, next) {
    req.collection = collection;

    console.log("setCollection");

    next();
}
app.use(setCollection);

// ...
const api = require('./routes/api');
app.use(api);

const views = require('./routes/views');
app.use(views);

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