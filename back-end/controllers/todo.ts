const model = require("../models/todo")

async function getAllTodos(req, res) {
    try {
        const todos = await model.getAllTodos()
        res.json(todos)
    } catch (error) {
        res.status(500).json({ message: "error finding all todos"})
    }

}

async function createTodo(req, res) {
    try {
        const { description } = req.body
        console.log(description)
        res.json(description)
    } catch (error) {
        res.status(500).json({ message: "Error creating todo" + error })
    }
}

module.exports = { getAllTodos, createTodo }