const Todo = require('../models/Todo')

exports.updateAt = async (req, res) => {
  try {
    // take a current id
    const id = req.params.id
    // take a title and description
    const { title, descritption } = req.body
    // updata logic
    const respons = await Todo.findByIdAndUpdate(
      { _id: id }, // in this i try to find the which todo update it
      {
        title, // in this line update the tiltel
        descritption, //also descreption
        updateAt: Date.now(), // update At the current Data
      }
    )
    // fist case is user is not fond
    if (!respons) {
      res.status(404).json({
        succes: false,
        data: 'data is not found ',
        message: 'This id is not exits...',
      })
    }
    res.status(200).json({
      succes: true,
      data: respons,
      message: 'Update succesfully',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      succes: false,
      data: 'internal Error  ',
      message: error.message,
    })
  }
}
