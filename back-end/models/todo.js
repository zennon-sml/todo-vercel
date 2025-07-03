const { db } = require('@vercel/postgres')


async function getAllTodos() {
    try {
        const { rows } = await db.sql`SELECT * FROM todos ORDER BY created_at DESC` 
        return rows
        console.log(rows)
    } catch (error) {
        console.error('Error getting all todos: ', error)
        throw error
    }
}

module.exports = {
    getAllTodos
}