const test = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');
test('GET /health responde ok', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}/health`);
  const body = await res.json();
  server.close();
  assert.strictEqual(res.status, 200);
  assert.strictEqual(body.status, 'ok');
});
