const ProductManager = require("./ProductManager.js");
const manager = new ProductManager();

async function main() {
  // Leer productos antes de agregar nuevos
  const products = await manager.getProducts();
  console.log("Productos iniciales:", products);

  // Guardar nuevos productos
  const p1 = { name: "Monitor", description: "Monitor Asus" };
  const p2 = { name: "Teclado Redragon", description: "Redragon Kumara RGB" };
  const p3 = { name: "Mouse Logitech", description: "Mouse Logitech G502" };

  await manager.setProduct(p1);
  await manager.setProduct(p2);
  await manager.setProduct(p3);

  // Leer productos actualizados
  const updatedProducts = await manager.getProducts();
  console.log("Productos actualizados:", updatedProducts);
}

main();
