const router = require('express').Router();
const Product = require('../../models/product.model');

router.get('/', (req, res) => {
    Product.find()
        .then((products) => res.json(products))
        .catch(err => res.json({ error: err.message }));

});

// GET /api/products/:PRECIO
// Recuperar todos los productos mayores del precio que recibimos en la URL

module.exports = router;