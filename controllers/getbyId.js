const Todo = require('../models/Todo')

exports.getbyId = async (req, res) => {
  // take a id  on the url
  const id = req.params.id

  try {
    const response = await Todo.findById({ _id: id })

    // case one when the data was not found
    if (!response) {
      res.status(404).json({
        succes: false,
        data: 'data was not Found ',
        message: 'your id is not exits ...',
      })
    }
    // case Two when the data was found
    res.status(200).json({
      succes: true,
      data: response,
      message: 'data was succesfully get it ',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      succes: false,
      data: 'Not Found because',
      message: error.message,
    })
  }
}
