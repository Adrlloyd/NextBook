const express = require('express')
const router = express.Router()
const Author = require('../models/author_model')
const { getAuthors, getAuthor } = require('../controllers/authorsController')

// returns all authors
router.get('/authors', getAuthors)

//returns one author
router.get('/authors/:id', getAuthor)

module.exports = router