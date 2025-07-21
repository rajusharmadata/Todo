const mongoose = require('mongoose')
// it is use to for the process.env.DATABASE
require('dotenv').config()

const dbconnect = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL)

    console.log('mongoose is succesfully connected ...')
  } catch (error) {
    console.log('mongoose is not connected because any error occer', error)
    // iska kya matlab hai
    process.exit(1)
  }
}
// calling the dbconnect method
dbconnect() //
// export the file
module.exports = dbconnect
