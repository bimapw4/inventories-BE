const transactionRepo = require('../../repositories/transaction/transactionRepo');

const transactionService = {
  async createTransaction(data) {
    const { productId, quantity, type, customerId } = data;

    if (!productId || !quantity || !type) {
      throw new Error('Field wajib tidak lengkap');
    }

    if (!['sale', 'purchase'].includes(type)) {
      throw new Error('Tipe transaksi harus "sale" atau "purchase"');
    }

    if (quantity <= 0) {
      throw new Error('Jumlah harus positif');
    }

    await transactionRepo.create({ productId, quantity, type, customerId });
    await transactionRepo.updateStock(productId, quantity, type);

    return { success: true, message: 'Transaksi berhasil' };
  }
};

module.exports = transactionService;
