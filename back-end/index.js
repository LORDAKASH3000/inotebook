const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')


connectToMongo();
const app = express()
const port = 3300
app.use(express.json());
app.use(cors())

// Available Routes
app.use('/api/auth', require('./routes/authentication'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})