const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: { //title
        type:String,
        required:false,
        maxLength:[20,'no more than 20 chars']
    },
    description: {
        type:String,
        required:false
    },
    completed: {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('taskModel', TaskSchema)