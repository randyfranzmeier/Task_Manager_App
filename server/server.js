const express = require('express')
const app = express()
const port = 3000

app.get("/api/getAllTasks", (req, res) => {
    res.send("get all tasks")
})

app.get("/api/getSingleTask/:id", (req, res) => {
    res.json({id:req.params.id})
})

app.post("/api/addTask", (req, res) => {
    res.json(req.body)
})

app.put("/api/updateTask", (req, res) => {
    res.send("update task")
})

app.delete("/api/deleteTask", (req, res) => {
    res.send("delete Task")
})


app.listen(port, () =>
{ console.log("server listening on port 3000")})


