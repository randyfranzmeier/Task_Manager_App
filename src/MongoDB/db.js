const mongoose = require('mongoose')


// mongoose.set('strictQuery', false);
const callDB = async (MONGO_URI) =>{
     console.log("URI: " + MONGO_URI)
     return await mongoose.connect(MONGO_URI)
}

module.exports = callDB
