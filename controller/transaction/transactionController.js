const transactionService = require('../../services/transaction/transactionService');

const transactionController = {
  async create(req, res, body) {
    try {
      const data = JSON.parse(body);
      const result = await transactionService.createTransaction(data);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  }
};

module.exports = transactionController;
