const { parse } = require('dotenv')
const Todo = require('../models/Todo')

exports.getoneTodo = async (req, res) => {
  try {
    // take the current url of the api tilte
    const title = req.params.title
    // find the current titlte and give the response
    const respons = await Todo.findOne({ title: title })
    res.status(200).json({
      succes: true,
      data: respons,
      message: 'data is getoneTodo',
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      succes: false,
      data: 'internal Error',
      message: err.message,
    })
  }
}
