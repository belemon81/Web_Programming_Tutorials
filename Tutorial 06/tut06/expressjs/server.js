const express = require('express');
const app = express();

//server static files
app.use(express.static('resources'));

//process form & json.data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const WORDS = {
    '네': 'yes',
    '아니요': 'no'
};

app.get('/', function(req, res){
    res.send('Hello World');
})

app.get('/hello', function (req, res){
    const name = req.query.name;
    res.send('Hello ' + name);
})

app.get('/card', function (req, res){
    return res.status(200).json(WORDS);
})

app.post('/card', function (req, res){
    const body = req.body;  
    const word = body.word;
    const definition = body.definition;

    if (word in WORDS) {
        return res.status(409).end('Word already exists!');
    }
    
    WORDS[word] = definition;
    const data = {}; 
    data[word] = definition;
    
    return res.status(201).json(data);
})

app.put('/card/:card', function (req, res){
    const routeParams = req.params;
    const card = routeParams.card; 
    const definition = req.body.definition;

    if (! card in WORDS) {
        return res.status(404).end('Word does NOT exist!');
    }
    
    WORDS[card] = definition;
    const data = {}; 
    data[card] = definition;
    
    return res.status(200).json(data);
})

app.delete('/card/:card', function (req, res){
    const routeParams = req.params;
    const card = routeParams.card;  

    if (! card in WORDS) {
        return res.status(404).end('Word does NOT exist!');
    }
    
    const data = {}; 
    data[card] = WORDS[card];

    delete WORDS[card];
    
    return res.status(200).json(data);
})

// app.get('/words', function (req, res){
//     res.send('Get all flashcards!');
// })

// app.post('/words', function (req, res){
//     console(req.body);
//     res.send('Add a new card!');
// })

app.listen(3000, function(){
    console.log('Listening on port 3000!'); 
});