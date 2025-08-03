const productService = require('../../services/inventory/productService');

const productController = {
    async create(req, res, body) {
        try {
        const data = JSON.parse(body);
        const result = await productService.addProduct(data);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
        } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
        }
    },

    async list(req, res) {
        try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const query = Object.fromEntries(url.searchParams.entries());

        console.log(query)

        const result = await productService.getAllProducts(query);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
        } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
        }
    },    

    async update(req, res, body) {
        try {
            const id = req.url.split('/')[2];
            const data = JSON.parse(body);

            const result = await productService.updateProduct(id, data);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
        } catch (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
    }

};

module.exports = productController;
