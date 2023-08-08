const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectId;

router.get('/admin/hello', function (req, res) {
    res.send('Hello admin!');
});

router.get('/admin/words', async function (req, res) {
    const docs = await req.db.collection('words').find().toArray();
    res.render('admin/words/index', { docs });
});

router.get('/admin/words/create', async function (req, res) {
    res.render('add');
});

// create a new word
router.post('/admin/words', async function (req, res) {
    const word = req.body.word;
    const definition = req.body.definition;

    const doc = await req.db.collection('words').findOne({ word: word });

    if (doc == null) { // word already exists
        const result = await req.db.collection('words').insertOne({ word: word, definition: definition });
        console.log(result);
    }
    res.redirect('/admin/words');
});

router.post('/admin/words/:id/edit', async function (req, res) {
    const id = req.params.id;
    const doc = await req.db.collection('words').findOne({ _id: ObjectID(id) });
    res.render('edit', { doc });
});

// update a word
router.post('/admin/words/:id', async function (req, res) {
    const id = req.params.id;
    if (req.query.method == 'put') { 
        const word = req.body.word;
        const definition = req.body.definition;
        const doc = await req.db.collection('words').findOne({ _id: ObjectID(id) });

        if (doc != null) { // word exist 
            const result = await req.db.collection('words').update({ _id: ObjectID(id) }, { word: word, definition: definition });
            console.log(result);
        }
        res.redirect('/admin/words');
    } else if (req.query.method == 'delete') { 
        const doc = await req.db.collection('words').findOne({ _id: ObjectID(id) }); 
        if (doc != null) { // word exist
            const result = await req.db.collection('words').deleteOne({ _id: ObjectID(id) });
            console.log(result);
        }
        res.redirect('/admin/words');
    }
});

router.post('/admin/words/:id/delete', async function (req, res, next) {
    const id = req.params.id;
    const doc = await req.db.collection('words').findOne({ _id: ObjectID(id) });
    res.render('delete', { doc });
});

module.exports = router;