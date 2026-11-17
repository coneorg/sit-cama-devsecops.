const express = require('express');
const { Pool } = require('pg');

const router = express.Router();
const pool = new Pool();

router.get('/pacientes', async (req, res) => {
  const sql = "SELECT * FROM pacientes WHERE cedula = '" + req.query.cedula + "'";
  const result = await pool.query(sql);
  res.json(result.rows);
});

module.exports = router;
