/* const mongoose = require("mongoose");
const movieDetailsSchema = mongoose.Schema({
    title: String,
    year: Date
},
    { collection: 'movieDetails' });


module.exports = mongoose.model('movieDetails', movieDetailsSchema); */


/* const movieDetailsSchema = new Schema({
    title: String,
    year: Date
}); */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const movieDetailsSchema = new Schema({
    title: String,
    year: Date
}, { collection: 'movieDetails' });

module.exports = mongoose.model('movieDetails', movieDetailsSchema);