const mongoose = require('mongoose')
require('dotenv').config()

// mongoose.set('strictQuery', false);
const callDB = async () =>{
     console.log(process.env.URI)
     return await mongoose.connect(process.env.URI)
}

module.exports = callDB
