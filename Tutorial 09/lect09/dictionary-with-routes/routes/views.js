const express = require('express');

const router = express.Router();

// html routes
function onGetMain(req, res, next) {
    console.log('onGetMain');

    // res.render('index');
    next();
}
router.get('/', onGetMain);

router.get('/', function(req, res) {
    console.log('after onGetMain');
    res.end('hello');
});

async function onViewWord(req, res) {
    const routeParams = req.params;
    const word = routeParams.word;

    const query = {word: word.toLowerCase()};
    const result = await req.collection.findOne(query);
    const definition = result? result.definition: '';

    res.render('word', {word, definition});
}
router.get('/:word', onViewWord);

module.exports = router;