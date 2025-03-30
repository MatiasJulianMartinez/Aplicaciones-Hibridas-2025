const ProductManager = require("./ProductManager.js");
const manager = new ProductManager();
//leer
const products = manager.getProducts();
console.log(products);

//guardar

const p1 = {
  id: 2,
  name: "Monitor",
  description: "Monitor Asus"
};

const p2 = {
    id: 3,
    name: "Teclado redragon",
    description: "Redragon Kumara RGB"
  };

  const p3 = {
    id: 4,
    name: "Mouse logitech",
    description: "Mouse Logitech G502"
  };
manager.setProduct(p1);
manager.setProduct(p2);
manager.setProduct(p3);