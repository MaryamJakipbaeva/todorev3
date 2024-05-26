const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: '',
    port: 5432,
});

// Routes
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Todo App backend!" });
});

app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/tasks', async (req, res) => {
    const { description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO task (description) VALUES ($1) RETURNING *',
            [description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
