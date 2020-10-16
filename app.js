/* const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movies = require('./moviesModel');

app.get('/', (req, res) => {
    res.status(200).send({ msg: 'hello' });
});

app.get('/movies', (req, res) => {

    try {
        const result = Movies.find().limit(2);
        res.json(result);
    }
    catch (err) {

        res.json({ error: err })
    }
});

mongoose.connect('mongodb+srv://admin1:335335335@cluster0.61ph2.mongodb.net/video?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('connected to db')) */

/* var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
 
     connection.db.collection("movieDetails", function (err, collection) {
         collection.find({}).limit(20).toArray(function (err, data) {
             console.log(data); // it will print your collection data
         })
     });
 
}); */

/* app.get('/', (req, res) => {
    movieDetails.find({}).limit(20)
        .then(result => {
            res.status(200).json({ movieData: result });
        })
}) */


const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movies = require('./moviesModel');

mongoose.connect('mongodb+srv://admin1:335335335@cluster0.61ph2.mongodb.net/video?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('connected to db'))

app.get('/', (req, res) => {
    res.status(200).send({ msg: 'hello' });
});

app.get('/movies', async (req, res) => {
    try {
        const result = await Movies.find().limit(2);
        res.status(200).send(result);
    } catch (err) {
        console.error(err, 'err');
        res.status(500).send(err);
    }
});

app.listen(3000);