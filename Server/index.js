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

app.get('/authors', (req, res) => {
  res.send('authors')
})

app.all('*', (req, res) => {
  res.send('not found')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})