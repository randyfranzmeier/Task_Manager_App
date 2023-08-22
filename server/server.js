const express = require('express')
const app = express()
require('../MongoDB/db')
const port = 3000

app.get("/api/getAllTasks", (req, res) => {
    res.send("get all tasks")
})

app.get("/api/getSingleTask/:id", (req, res) => {
    res.json({id:req.params.id})
})

app.post("/api/addTask", (req, res) => {
    res.send("new task")
})

app.patch("/api/updateTask/:id", (req, res) => {
    res.json({id: req.params.id})
})

app.delete("/api/deleteTask/:id", (req, res) => {
    res.json({id: req.params.id})
})


app.listen(port, () =>
{ console.log("server listening on port 3000")})


