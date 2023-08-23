const mongoose = require('mongoose')

if(process.env.NODE_ENV !== 'production')  { //only show private var if not in production mode
     require('dotenv').config()
}

// mongoose.set('strictQuery', false);
const callDB = async () =>{
     console.log("URI: " + process.env.URI)
     return await mongoose.connect(process.env.URI)
}

module.exports = callDB
