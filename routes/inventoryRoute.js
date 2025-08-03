const productController = require('../controller/inventory/productController');
const transactionController = require('../controller/transaction/transactionController');
const reportController = require('../controller/report/reportController')

const inventoryRoute = async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (req.method === 'POST' && pathname === '/products') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => productController.create(req, res, body));

  } else if (req.method === 'GET' && pathname.startsWith('/products')) {
    await productController.list(req, res);

  } else if (req.method === 'PUT' && pathname.startsWith('/products/')) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => productController.update(req, res, body));

  } else if (req.method === 'POST' && pathname === '/transactions') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => transactionController.create(req, res, body));

  } else if (req.method === 'GET' && pathname === '/reports/inventory') {
    await reportController.inventoryValue(req, res);
  } else if (req.method === 'GET' && pathname === '/reports/low-stock') {
    await reportController.lowStock(req, res);
  } else if (req.method === 'GET' && pathname.match(/^\/products\/\d+\/history$/)) {
    await reportController.lowStock(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
};

module.exports = inventoryRoute;
