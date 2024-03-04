const Book = require('../models/book_model')

const getBooks = async (req, res) => {
  const result = await Book.find()
  res.send({'books': result})
}

const getBook = async (req, res) => {
  const {id} = req.params
  const result = await Book.findById(id)
  res.send(result)
}

module.exports = {getBooks, getBook}