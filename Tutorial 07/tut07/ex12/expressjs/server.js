const express = require("express");
const app = express();
const cors = require("cors");

//server static files
app.use(express.static('public'));

//process form & json.data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

const WORDS = {
    '네': 'yes',
    '아니요': 'no'
}; 

app.get('/words', function (req, res){
    return res.status(200).json(WORDS);
})

app.post('/words', function (req, res){
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

app.put('/words/:word', function (req, res){
    const routeParams = req.params;
    const word = routeParams.word; 
    const definition = req.body.definition;

    if (!(word in WORDS)) {
        return res.status(404).end('Word does NOT exist!');
    }
    
    WORDS[word] = definition;
    const data = {}; 
    data[word] = definition;
    
    return res.status(200).json(data);
})

app.delete('/words/:word', function (req, res){
    const routeParams = req.params;
    const word = routeParams.word;  

    if (!(word in WORDS)) {
        return res.status(404).end('Word does NOT exist!');
    }
    
    const data = {}; 
    data[word] = WORDS[word];

    delete WORDS[word];
    
    return res.status(204).json(data);
}) 

app.listen(3000, function(){
    console.log('Listening on port 3000!'); 
});