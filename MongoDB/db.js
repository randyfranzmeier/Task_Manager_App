const mongoose = require('mongoose')
require('dotenv').config()

const callDB = () =>{
     return mongoose.connect(process.env.URI)
}

module.exports = callDB
