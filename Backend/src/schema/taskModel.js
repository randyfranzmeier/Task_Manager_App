const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:false,
        maxLength:[20,'no more than 20 chars']
    },
    completed: {
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('taskModel', TaskSchema)