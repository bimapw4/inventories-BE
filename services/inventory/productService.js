const productRepo = require('../../repositories/product/productRepo');

const productService = {
    async addProduct(data) {
        const { id, name, price, stock, categoryId, supplierId } = data;

        if (!id || !name || price == null || stock == null || !categoryId || !supplierId) {
        throw new Error('Semua field produk wajib diisi.');
        }

        if (price < 0 || stock < 0) {
        throw new Error('Harga dan stok tidak boleh negatif.');
        }

        await productRepo.insertProduct({ id, name, price, stock, categoryId, supplierId });

        return { success: true, message: 'Produk berhasil ditambahkan.' };
    },

    async getAllProducts(query) {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const offset = (page - 1) * limit;
        const category = query.category || null;

        const products = await productRepo.getAll({ category, offset, limit });
        return { page, limit, products };
    },

    async getProductsByCategory(category) {
        if (!category) throw new Error('Kategori harus diisi');
        return await productRepo.getByCategory(category);
    },

    async updateProduct(id, data) {
        if (!id || !data) throw new Error('Data tidak lengkap');
        console.log(data.name)
        await productRepo.update(id, data);
        return { success: true, message: 'Produk berhasil diperbarui' };
    },
};

module.exports = productService;
