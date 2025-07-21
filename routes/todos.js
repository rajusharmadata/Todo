const express = require('express')
const route = express.Router()

// import controller

const { createTodo } = require('../controllers/createTodo')
const { getTodo } = require('../controllers/getTodo')
const { getoneTodo } = require('../controllers/getoneTodo')
const { getbyId } = require('../controllers/getbyId')
const { updateAt } = require('../controllers/updateAt')
const { deletTodo } = require('../controllers/deletTodo')
// define the API route
route.post('/createTodo', createTodo)
route.get('/getTodo', getTodo)
route.get('/getoneTodo/:title', getoneTodo)
route.get('/getbyid/:id', getbyId)
// update operation perform
route.put('/updateAt/:id', updateAt)
// delet Todo
route.delete('/deletTodo/:id', deletTodo)

// export the router
module.exports = route
