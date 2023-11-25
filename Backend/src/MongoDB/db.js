const mongoose = require('mongoose');

const callDB = async (MONGO_URI) =>{
     console.log("db connected!!!");
     return await mongoose.connect(MONGO_URI);
}

module.exports = callDB;


