const { response } = require('express')
const Todo = require('../models/Todo')

exports.deletTodo = async (req, res) => {
  // take id
  const { id } = req.params

  try {
    const respons = await Todo.findByIdAndDelete({ _id: id })

    // firs conditon is the useris not exits
    if (!respons) {
      res.status(404).json({
        success: false,
        data: 'data was not Found',
        message: 'User is Not exits',
      })
    }
    // when user is exits then delet the user
    res.status(202).json({
      success: true,
      data: respons,
      message: 'Succesfully deleted ..........',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: true,
      data: 'data is not Found',
      message: error.message,
    })
  }
}
