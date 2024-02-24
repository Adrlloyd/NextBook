const express = require('express')
const path = require('path')

const app = express();
module.exports = app;

const PORT = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const router = require('./router');
app.use('/router', router);

app.get('/', (req, res) => {
  res.send('homepage')
})

app.get('/books', (req, res) => {
  res.send('books')
})

app.get('/books/id', (req, res) => {
  res.send('bookid')
})

app.get('/authors', (req, res) => {
  res.send('authors')
})

app.get('/authors/id', (req, res) => {
  res.send('author/id')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})