const express = require("express")
const router = express.Router()
const model = require("../models/todo")

router.get("/", async (req, res) => {
    const todos = await model.getAllTodos()
    res.json(todos)
    console.log(todos)
})

module.exports = router