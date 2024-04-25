const mongoose = require('../config/db');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: { type: Number, required: true },
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
