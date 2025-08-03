const db = require('../../bootstrap/db');

const transactionRepo = {
  async create({ productId, quantity, type, customerId }) {
    const query = `
      INSERT INTO transactions (product_id, quantity, type, customer_id)
      VALUES (?, ?, ?, ?)
    `;
    await db.execute(query, [productId, quantity, type, customerId || null]);
  },

  async updateStock(productId, qty, type) {
    const multiplier = type === 'purchase' ? 1 : -1;
    const updateQuery = `UPDATE products SET stock = stock + ? WHERE id = ?`;
    await db.execute(updateQuery, [qty * multiplier, productId]);
  },
};

module.exports = transactionRepo;
