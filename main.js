const ProductManager = require("./index.js"); // Importamos desde index.js

// Creo una instancia de Nuevo Producto para utilizar la clase
const nuevoProducto = new ProductManager();

// Agrego algunos productos de tecnologia
nuevoProducto.addProduct({
    titulo: "Teclado",
    descripcion: "Teclado Mecánico",
    precio: 25000,
    stock: 25
});

nuevoProducto.addProduct({
    titulo: "Mouse",
    descripcion: "Mouse Inalámbrico",
    precio: 10000,
    stock: 15
});

// Muestro todos los productos
console.log("Lista de productos:", nuevoProducto.getProducts());

// Busco por ID algun producto
console.log("Producto con ID 1:", nuevoProducto.getProductById(1));
console.log("Producto con ID 2:", nuevoProducto.getProductById(2)); 
console.log("Producto con ID 3:", nuevoProducto.getProductById(3)); // No existe
