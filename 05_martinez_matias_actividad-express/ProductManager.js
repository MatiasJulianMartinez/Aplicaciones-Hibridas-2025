import fs from 'fs/promises';

const path = './products.json';

class ProductManager {
  products = [];

  constructor(products = []) {
    this.products = products;
  }

  async setProduct(product) {
    try {
      const products = await this.getProducts(); // cargo los productos existentes

      // Obtengo el último ID usado
      const lastId = products.length > 0 ? products[products.length - 1].id : 0;
      product.id = lastId + 1;

      products.push(product);

      const data = JSON.stringify(products, null, 2);
      await fs.writeFile(path, data);

      return product.id;
    } catch (error) {
      console.error('Error al guardar el producto', error);
    }
  }

  async getProducts() {
    try {
      const data = await fs.readFile(path, 'utf-8');
      this.products = JSON.parse(data);
      return this.products;
    } catch (error) {
      console.error('No se pudo leer el archivo de productos');
      return [];
    }
  }

  async getProductById(id) {
    const list = await this.getProducts();
    const product = list.find(item => item.id === parseInt(id)); // comparar como número
    return product ? product : { error: 'Producto no encontrado' };
  }
}

export default ProductManager;
