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

module.exports = Book