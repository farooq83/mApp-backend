const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movies = require('./movieModel');

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