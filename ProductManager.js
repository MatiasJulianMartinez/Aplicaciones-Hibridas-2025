const fs = require("fs/promises");
const path = "./products.json";

class ProductManager {
  products = [];
  constructor(products = []) {
    this.products = products;
  }
  randomID() {
    return crypto.randomUUID();
  }


  // GUARDAR
  async setProduct(product) {
    try {
      await this.getProducts();
      product.id = this.randomID();
      this.products.push(product);

      const data = JSON.stringify(this.products, null, 2);
      await fs.writeFile(path, data);
      return product.id;
    } catch (error) {
      console.error("Error al guardar el producto", error);
    }
  }

  // LEER
  async getProducts() {
    try {
      const data = await fs.readFile(path, "utf-8");
      this.products = JSON.parse(data);
    } catch (error) {
      console.error("Error al leer el archivo", error);
    }
  }

  //BUSCAR

  async getProductById(id) {
    await this.getProducts();
    const product = this.products.find((item) => item.id === id);
    return product ? product : "Not found";
  }
}

module.exports = ProductManager;
