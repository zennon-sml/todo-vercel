const { db } = require('@vercel/postgres')

type Todo = {
    id: number
    descripption: string
    done: boolean
    created_at: Date
}

async function getAllTodos() {
    try {
        const { rows } = await db.sql`SELECT * FROM todos ORDER BY created_at DESC` 
        return rows
    } catch (error) {
        console.error('Error getting all todos: ', error)
        throw error
    }
}

module.exports = {
    getAllTodos,
}