const mongoose = require('mongoose')
//  it is the syntex of  the mongose Schema declera
const todoSchema = new mongoose.Schema({
  title: {
    type: String, // define the type of the my title
    required: true, // it gives the requiered or not
    maxLength: 50, // define the length of the tite
  },
  descritption: {
    type: String,
    required: true,
    maxLength: 50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

// ✅ Correct: Pass name and schema as two arguments
const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
