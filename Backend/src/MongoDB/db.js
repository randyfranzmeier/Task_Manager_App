const mongoose = require('mongoose')

const callDB = async (MONGO_URI) =>{
     return await mongoose.connect(MONGO_URI)
}

module.exports = callDB


