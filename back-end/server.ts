require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json());
const port = 4000

const todoRoutes = require("./routes/todo")
app.use("/todo", todoRoutes)

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})