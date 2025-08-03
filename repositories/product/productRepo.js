const db = require('../../bootstrap/db');

const productRepo = {
  async insertProduct({ id, name, price, stock, categoryId, supplierId }) {
    const query = `
      INSERT INTO products (id, name, price, stock, category_id, supplier_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    await db.execute(query, [id, name, price, stock, categoryId, supplierId]);
  },

    async getAll({ category, offset = 0, limit = 10 }) {
        offset = Number(offset);
        limit = Number(limit);

        let query = `
            SELECT p.id, p.name, p.price, p.stock, c.name AS category, s.name AS supplier
            FROM products p
            LEFT JOIN categories c ON p.category_id = c.id
            LEFT JOIN suppliers s ON p.supplier_id = s.id
        `;

        const params = [];

        if (category && category.trim() !== '') {
            query += ` WHERE c.name LIKE ?`;
            params.push(`%${category}%`);
        }

        query += ` ORDER BY p.id DESC LIMIT ${limit} OFFSET ${offset}`;

        const [rows] = await db.execute(query, params);
        return rows;
    },

    async update(id, { name, price, stock, categoryId, supplierId }) {
        const query = `
            UPDATE products 
            SET name = ?, price = ?, stock = ?, category_id = ?, supplier_id = ?
            WHERE id = ?
        `;
        await db.execute(query, [name, price, stock, categoryId, supplierId, id]);
    },

    async getByCategory(category) {
        const query = `
            SELECT p.id, p.name, p.price, p.stock, c.name AS category
            FROM products p
            JOIN categories c ON p.category_id = c.id
            WHERE c.name LIKE ?
            ORDER BY p.name
        `;
        const [rows] = await db.execute(query, [`%${category}%`]);
        return rows;
    }
};

module.exports = productRepo;
