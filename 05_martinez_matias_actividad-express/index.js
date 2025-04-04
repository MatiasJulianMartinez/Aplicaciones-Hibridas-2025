import chalk from "chalk";
import express from "express";
import ProductManager from "./ProductManager.js";

const port = 5000;
const app = express();
let count = 0;
const admProduct = new ProductManager();

app.use(express.json());

app.get('/', (req, res) => {
    count++;
    console.log(`Cliente ${count} conectado`);
    res.send('Hola desde Express - Productos');
});

// GET /api/products - Lista de productos
app.get('/api/products', async (req, res) => {
    console.log('GET Productos');
    const productos = await admProduct.getProducts();
    res.json(productos);
});

// GET /api/products/:id - Producto por ID
app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const producto = await admProduct.getProductById(id);
    
    if (producto && Object.keys(producto).length > 0) {
        res.json(producto);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});



app.listen(port, () => {
    console.log(chalk.green(`Servidor corriendo en http://localhost:${port}`));
});
