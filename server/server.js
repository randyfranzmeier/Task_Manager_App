const express = require('express');
const app = require(express)
const port = 3000

app.get("/getAllTasks", (req, res) => {
    res.send("get all tasks")
})

app.get("/getSingleTask", (req, res) => {
    res.send(" get Single task")
})

http.put("/addTask", (req, res) => {
    res.send("add task")
})

app.post("/updateTask", (req, res) => {
    res.send("update task")
})

app.delete("/deleteTask", (req, res) => {
    res.send("delete Task")
})


app.listen(port, console.log("server listening on port 3000"))


