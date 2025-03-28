const fs = require("fs");
const path = './productos.json';


class ProductManager {
    constructor() {
        this.products = [];
        
    }

    addProduct(producto) {
        // Valido que todos los campos sean obligatorios
        if (!producto.titulo || !producto.descripcion|| !producto.precio|| !producto.stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        
        // Definir el id único
        let proximoId;
        if (this.products.length === 0) {
            proximoId = 1; // Si no hay productos en el array el primer producto sera 1
        } else {
            proximoId = this.products[this.products.length - 1].id + 1; 
        }

        // Asigno el id al producto
        producto.id = proximoId;

        // Agregar el producto al array
        this.products.push(producto);
        console.log("Producto agregado:", producto);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }
        console.log("Not found");
    }
}

module.exports = ProductManager; // Exporto con CommonJS
