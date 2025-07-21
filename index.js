const express = require('express')
const app = express()
// load  the env files using dotenv.config()
require('dotenv').config()
const PORT = 8080 || process.env.PORT

// midlerware to parse json request Body
app.use(express.json())
// import routes Todo Api // yaha par ham rotes ko import kye hai

const todoRotes = require('./routes/todos')
// mount the todo Api routes
app.use('/api/v1', todoRotes)

// default rote
app.get('/', (req, res) => {
  res.send('Hello Every are you ready to the Husstel')
})
app.listen(PORT, () => {
  console.log('app is listen on the the port number ', PORT)
})
// connect the Db
const dbConnection = require('./config/database')
dbConnection()
