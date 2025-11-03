//const fs = require('fs');
//const path = require('path');

//const rutaArchivo = path.join(__dirname, '../data/productos.json');
//const products = JSON.parse(fs.readFileSync(rutaArchivo,'utf-8'));

module.exports = {
    index: (req, res) => {
        res.send(`<h1>Hola Mundo desde Express</h1>`);
    },
    
    /*
    productList: (req, res) => {
        const response = {
            "info": {
                "Cantidad": products.length,
                "status": 200,
                "url": "http://localhost:3000/products"
            },
            "results": products
        }
        res.json(response);
    }
        */
        
}