const express = require('express')
const path = require('path')

const app = express();
module.exports = app;

const PORT = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const booksRoute = require('./routes/booksRoute');
app.use('/', booksRoute);

const authorsRoute = require('./routes/authorsRoute');
app.use('/', authorsRoute);

app.get('/', (req, res) => {
  res.send('homepage')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})