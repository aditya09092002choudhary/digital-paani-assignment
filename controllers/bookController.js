const Book = require('../models/Book');

async function getBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
}

async function createBook(req, res) {
  try {
    const { title, author, publicationYear } = req.body;
    const book = new Book({ title, author, publicationYear });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error creating book' });
  }
}

async function updateBook(req, res) {
  try {
    const { title, author, publicationYear } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, { title, author, publicationYear }, { new: true });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error updating book' });
  }
}

async function deleteBook(req, res) {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting book' });
  }
}

module.exports = { getBooks, createBook, updateBook, deleteBook };
