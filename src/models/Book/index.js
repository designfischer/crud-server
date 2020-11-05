const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    author: String,
    coAuthor: [String],
    ISBN: String,
    category: [String],
    releaseYear: Number,
    price: Number
})

module.exports = mongoose.model('Book', Schema)