const express = require('express');
const router = express.Router();
const Task = require('../models/task')

router.post('/addTask', async function (req, res) {
    const task = new Task({
        label: req.body.label,
        text: req.body.text,
        date: req.body.date
    })

    try {
        await task.save()
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router