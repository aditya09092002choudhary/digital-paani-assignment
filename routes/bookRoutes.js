const express = require('express');
const { getBooks, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/books', authenticate, getBooks);
router.post('/books', authenticate, createBook);
router.put('/books/:id', authenticate, updateBook);
router.delete('/books/:id', authenticate, deleteBook);

module.exports = router;
