const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const pool = new Pool({
  user: 'your_database_user',
  host: 'localhost',
  database: 'todo',
  password: 'your_database_password',
  port: 5432,
});

app.delete('/delete/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('DELETE FROM task WHERE id = $1', [id], (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ id: id });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
