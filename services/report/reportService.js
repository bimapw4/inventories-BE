const reportRepo = require('../../repositories/report/reportRepo');

const reportService = {
  async getInventoryValue() {
    const total = await reportRepo.getTotalInventoryValue();
    return { total_inventory_value: total };
  },

  async getLowStock(query) {
    const threshold = parseInt(query.stock) || 5;
    const result = await reportRepo.getLowStockProducts(threshold);
    return result;
  },

  async getProductHistory(productId) {
    if (!productId) throw new Error('ID produk harus diisi');
    return await productRepo.getProductHistory(productId);
  }

};

module.exports = reportService;
