const express = require('express');

const router = new express.Router();

// json -routes
async function onLookupWord(req, res) {
    console.log("onLookupWord");

    const routeParams = req.params;
    const word = routeParams.word;

    const query = { word: word.toLowerCase() };
    const result = await req.collection.findOne(query);

    const response = {
        word: word,
        definition: result ? result.definition : ''
    };

    res.json(response);
}
router.get('/lookup/:word', onLookupWord);

async function onSetWord(req, res) {
    const routeParams = req.params;
    const word = routeParams.word;

    const definition = req.body.definition;
    const key = word.toLowerCase();

    const filter = {word: key};
    const update = {definition: definition};
    const options = {upsert: true};

    const response = await req.collection.updateOne(filter, {$set: update}, options);
    
    res.json({success: true});
}
router.post('/set/:word', onSetWord);

module.exports = router;