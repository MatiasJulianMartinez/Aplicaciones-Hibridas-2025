const fs = require("fs/promises");
const crypto = require("crypto"); 

const path = "./products.json";

class ProductManager {
  constructor() {
    this.products = [];
  }

  randomID() {
    return crypto.randomUUID();
  }

  // Post: Porque esta función agrega un nuevo producto al archivo products.json.
  async setProduct(product) {
    try {
      const products = await this.getProducts(); 
      product.id = this.randomID(); 
      products.push(product); 

      const data = JSON.stringify(products, null, 2);
      await fs.writeFile(path, data); 
      return product.id;
    } catch (error) {
      console.error("Error al guardar el producto", error);
    }
  }

  // Get: Porque esta función obtiene todos los productos del archivo products.json.
  async getProducts() {
    try {
      const data = await fs.readFile(path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return []; 
    }
  }

  // BUSCAR
  async getProductById(id) {
    const products = await this.getProducts(); 
    const product = products.find((item) => item.id === id);
    return product ? product : "Not found";
  }
}

module.exports = ProductManager;
