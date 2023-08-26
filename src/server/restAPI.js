const express = require('express')
const app = express()
app.use(express.static('./src'))
app.use(express.json())
const Task = require('../schema/taskModel')
const NotFound = require('../middleware/notFound')
app.use(NotFound)
const AsyncWrapper = require('../middleware/AsyncWrapper')
const eHandler = require('../middleware/eHandler')
app.use(eHandler)




app.get("/api/getAllTasks", AsyncWrapper(async (req, res) => {
    const task = await Task.find({})
    res.status(200).json({task})
}))

app.get("/api/getSingleTask/:id", AsyncWrapper(async(req, res) => {
    const {id:tID} = req.params
    const task = await Task.find({_id:tID})
    if(!task) {
    return res.status(404).json({msg: "cannot find task"})
    } 
    res.status(200).json({task})
}))

app.post("/api/addTask", AsyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(200).json({task})
}))

app.patch("/api/updateTask/:id", AsyncWrapper(async (req, res) => {
    const {id:tID} = req.params
    const task = await Task.findOneAndUpdate({_id:tID}, req.body, {new:true, runValidators:true})
    if(!task){
    return res.status(404).json({msg: "cannot find task"})
    }
    res.status(200).json({id:tID, data:req.body})
}))

app.delete("/api/deleteTask/:id", AsyncWrapper(async (req, res) => {
const {id:tID} = req.params
const task = await Task.findOneAndDelete({_id:tID})
if(!task) {
return res.status(404).json({msg: 'task not found'})
}
res.status(200).json({status:'success'})
}))
