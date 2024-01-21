const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
app.use(express.static('./src'));//(express.static('src/server'));
app.use(express.json());
const Task = require('../schema/taskModel.js');
const AsyncWrapper = require('../middleware/AsyncWrapper.js');
const eHandler = require('../middleware/eHandler.js');
app.use(eHandler);
const callDB = require('../MongoDB/db.js');
const cors = require('cors');
//const { cwd } = require('process');
const port = process.env.PORT || 3005;
app.use(cors());

app.get("/api/getAllTasks", AsyncWrapper(async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const task = await Task.find({});
    res.status(200).json({ task } || { "msg:": "No tasks available!" });
}));

app.get("/api/getSingleTask/:id", AsyncWrapper(async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const { id: tID } = req.params;
    const task = await Task.find({ _id: tID });
    if (!task) {
        return res.status(404).json({ msg: "cannot find task" });
    }
    res.status(200).json({ task });
}));

app.post("/api/addTask", AsyncWrapper(async (req, res) => {
     res.header('Access-Control-Allow-Origin', '*');
    try {
        if (req.body.description != '' || req.body.description != NULL) {
            const task = await Task.create({ title: req.body.title, description: req.body.description, completed: req.body.completed });
            res.status(200).json({status: "success"});
        }
        else { //no description provided
            const task = await Task.create({ title: req.body.title, completed: req.body.completed });
            res.status(200).json({ status: "success" });
        }
    }
    catch (err) {
        console.log("An error occured: ", err);
        res.status(500).send("An internal error occured!");
    }
}));

app.patch("/api/updateTask/:id", AsyncWrapper(async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const { id: tID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: tID }, req.body, { new: true, runValidators: true });
    if (!task) {
        return res.status(404).json({ msg: "cannot find task" });
    }
    res.status(200).json({ id: tID, data: req.body });
}));

app.delete("/api/deleteTask/:id", AsyncWrapper(async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const { id: tID } = req.params;
    const task = await Task.findOneAndDelete({ _id: tID });
    if (!task) {
        return res.status(404).json({ msg: 'task not found' });
    }
    res.status(200).json({ status: 'success' });
}));


//start the server if database is connected correctly
const start = async () => {
    try {
        const uri = process.env.MONGO_URI;
        await callDB(uri);
        app.listen(port, () => { console.log('server listening on port ' + JSON.stringify(port)) })
    }
    catch (err) {
        console.error(err);
    }
}

start();



