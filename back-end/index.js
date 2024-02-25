const connectToMongo = require('./db');
const express = require('express');
const { query } = require('express-validator');
connectToMongo();
const app = express()
const port = 3000
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/authentication'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})