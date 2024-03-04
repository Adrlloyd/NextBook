const express = require('express')
const router = express.Router()
const Book = require('../models/book_model')
const { getBooks, getBook } = require('../controllers/booksController')


// returns all books
router.get('/books', getBooks)

// returns one book
router.get('/books/:id', getBook)

module.exports = router