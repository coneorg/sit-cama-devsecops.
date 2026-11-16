const express = require('express');
const app = express();
app.disable('x-powered-by');
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
module.exports = app;
