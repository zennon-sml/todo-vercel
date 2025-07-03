require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

todoRoutes = require("./routes/todo")
app.use("/todo", todoRoutes)

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})