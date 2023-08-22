const mongoose = require('mongoose')

const callDB = (uri) =>{
     return mongoose.connect(uri)
}

module.exports = callDB