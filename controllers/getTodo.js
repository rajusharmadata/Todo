// requier the modle
const Todo = require('../models/Todo')

exports.getTodo = async (req, res) => {
  try {
    // using mongoose function find the all Todo
    // find method use to find the data on the data base
    const response = await Todo.find({})
    res.status(200).json({
      // give the response in the form of the data
      succes: true,
      data: response,
      message: 'data is succesfully get ',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      succes: false,
      data: 'internal error',
      message: error.message,
    })
  }
}
