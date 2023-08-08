const express = require('express');

const app = express();

// serve static files
app.use(express.static('public'));

// process form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const englishDictionary = {
    'dog': 'friend',
    'cat': 'boss'
};

function onLookupWord(req, res) {
    const routeParams = req.params;
    const word = routeParams.word;

    const key = word.toLowerCase();
    const definition = englishDictionary[key];

    res.json({
        word: word,
        definition: definition
    });
}
app.get('/lookup/:word', onLookupWord);

function onSetWord(req, res) {
    const routeParams = req.params;
    const word = routeParams.word;

    const definition = req.body.definition;
    const key = word.toLowerCase();
    englishDictionary[key] = definition;

    res.json({success: true});
}
app.post('/set/:word', onSetWord);

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
