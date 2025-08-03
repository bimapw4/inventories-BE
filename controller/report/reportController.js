const reportService = require('../../services/report/reportService');

const reportController = {
  async inventoryValue(req, res) {
    try {
      const result = await reportService.getInventoryValue();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  },

  async lowStock(req, res) {
    try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const query = Object.fromEntries(url.searchParams.entries());
        const result = await reportService.getLowStock(query);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
    }
  },

  async history(req, res) {
    try {
        const id = req.url.split('/')[2];
        const result = await productService.getProductHistory(id);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
    }
  }
};

module.exports = reportController;