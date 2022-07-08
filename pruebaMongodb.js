const mongoose = require('mongoose');

const Product = require('./models/product.model');

mongoose.connect('mongodb://127.0.0.1:27017/tienda_online');

// podemos Crear productos

(async () => {

    /*   const product = await Product.create({
          name: 'thermomix',
          description: 'Cocina muchas cosicas',
          price: 990,
          stock: 10,
          departmen: 'cocina',
          available: true
      })
  
      console.log(product); */

    const products = await Product.find({
        department: 'cocina',
        price: {}
    });

    console.log(products);

})();



