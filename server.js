const http = require('http');
const inventoryRoute = require('./routes/inventoryRoute');

const PORT = 3000;

const server = http.createServer((req, res) => {
  inventoryRoute(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
