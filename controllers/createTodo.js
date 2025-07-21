// import the model
const Todo = require('../models/Todo.js')

// define the route handler
exports.createTodo = async (req, res) => {
  try {
    // extract titele and description from request body
    const { title, descritption } = req.body
    // create a new Todo object and insert in  Db
    const response = await Todo.create({ title, descritption })
    res.status(200).json({
      success: true,
      data: response,
      message: 'Entry Created Succesfully',
    })
    // case of the failer then give the respons ...
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      data: 'internal error',
      message: error.message,
    })
  }
}
