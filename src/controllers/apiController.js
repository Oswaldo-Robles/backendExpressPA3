const fs = require('fs');
const path = require('path');

const rutaPizza = path.join(__dirname, '../data/pizzas.json');
const pizza = JSON.parse(fs.readFileSync(rutaPizza, 'utf-8'));
const rutadetallePizza = path.join(__dirname, '../data/detallePizza.json');
const detallePizza = JSON.parse(fs.readFileSync(rutadetallePizza, 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.send(`<h1>Hola Mundo desde Express</h1>`);
    },


    pizzaList: (req, res) => {

        if (!pizza || pizza.length === 0) {
            return res.status(404).json({
                "info": {
                    "status": 404,
                    "message": "No se encontraron pizzas disponibles"
                }
            });
        }

        const response = {
            "info": {
                "Cantidad": pizza.length,
                "status": 200,
                "url": "http://localhost:3000/pizzaLista"
            },
            "results": pizza
        }
        res.json(response);
    },


    detallePizza: (req, res) => {
        const pizzas = detallePizza;
        const id = parseInt(req.params.id);
        const pizza = pizzas.find(p => p.id === id);

        if (!pizza) {
            return res.status(404).json({
                "info": {
                    "status": 404,
                    "message": "Pizza no encontrada"
                }
            });
        }

        const response = {
            "info": {
                "status": 200,
                "url": "http://localhost:3000/products"
            },
            "results": pizza
        }
        res.json(response);
    }

}