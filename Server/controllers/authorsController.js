const Author = require('../models/author_model')

const getAuthors = async (req, res) => {
  const result = await Author.find()
  res.send({'authors': result})
}

const getAuthor = async (req, res) => {
  const {id} = req.params
  const result = await Author.findById(id)
  res.send(result)
}

module.exports = {getAuthors, getAuthor}