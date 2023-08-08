const express = require('express');
const mongodb = require('mongodb');
const admin = require('./modules/admin');

const app = express();

app.use(express.static('public'));                      // serve static files (html, css, js, images...)
app.use(express.urlencoded({extended: true}));          // decode req.body from form-data
app.use(express.json());                                // decode req.body from post body message

const exphbs = require('express-handlebars'); 
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

function setDb(req, res, next) {
    req.db = db;
    next();
}
app.use(setDb);
app.use(admin);

//ADMIN SPACE

let db = null;
async function startServer() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/flashcards-db');
    db = client.db();
    console.log('connected to db.');

    await app.listen(3000);
    console.log('Listening on port 3000!');
}
startServer();