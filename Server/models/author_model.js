require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
const { Schema } = mongoose

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

module.exports = Author