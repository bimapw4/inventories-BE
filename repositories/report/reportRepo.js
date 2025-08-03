const db = require('../../bootstrap/db');

const reportRepo = {
  async getTotalInventoryValue() {
    const query = `SELECT SUM(price * stock) AS total FROM products`;
    const [rows] = await db.execute(query);
    return rows[0].total || 0;
  },


  async getLowStockProducts(threshold = 5) {
    const query = `
        SELECT p.id, p.name, p.stock, c.name AS category
        FROM products p
        LEFT JOIN categories c ON p.category_id = c.id
        WHERE p.stock <= ?
        ORDER BY p.stock ASC
    `;
    const [rows] = await db.execute(query, [threshold]);
    return rows;
  },

  async getProductHistory(productId) {
    const query = `
        SELECT t.id, t.quantity, t.type, t.customer_id, t.created_at
        FROM transactions t
        WHERE t.product_id = ?
        ORDER BY t.created_at DESC
    `;
    const [rows] = await db.execute(query, [productId]);
    return rows;
  }
};

module.exports = reportRepo;
