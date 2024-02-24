require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
const { Schema } = mongoose

const bookSchema = new Schema( {
  title: String,
  author: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String
  },
  authorImg: {
    data: Buffer,
    contentType: String
  } 
})

const Book = mongoose.model('Book', bookSchema)

module.exports = mongoose.model('Book', bookSchema)

const authorSchema = new Schema( {
  name: String,
  book_count: Number,
  genre: String,
  bio: String,
  authorImg: {
    data: Buffer,
    contentType: String
  }
})

const Author = mongoose.model('Author', authorSchema)

module.exports = mongoose.model('Author', authorSchema)