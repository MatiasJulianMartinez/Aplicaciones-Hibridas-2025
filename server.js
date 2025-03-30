const ProductManager = require("./ProductManager.js"); // Importo la clase ProductManager
const http = require("http"); 
const url = require("url"); 

const port = 3000; 
const admin = new ProductManager(); 

const server = http.createServer(async (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const pathname = parsedUrl.pathname; 
  let body = ""; 
  let status = 200; 
  let content = "text/html"; 

  console.log(`Petición: ${request.method} ${pathname}`); 

  if (pathname === "/") {
    // Ruta raíz: devuelve un mensaje de bienvenida
    body = "<h1>Bienvenido al Servidor Web</h1>";
  
  } else if (pathname === "/productos") {
    // Ruta para obtener todos los productos
    content = "application/json";
    try {
      const products = await admin.getProducts(); 
      body = JSON.stringify(products, null, 2); 
    } catch (error) {
      status = 500;
      body = JSON.stringify({ error: "Error al obtener los productos" }); 
    }

  } else if (pathname.startsWith("/productos/")) {
    // Ruta para obtener un producto por su ID
    content = "application/json";
    const id = pathname.split("/")[2]; 

    try {
      const product = await admin.getProductById(id); 
      if (product === "Not found") {
        status = 404;
        body = JSON.stringify({ error: "Producto no encontrado" });
      } else {
        body = JSON.stringify(product, null, 2); 
      }
    } catch (error) {
      status = 500;
      body = JSON.stringify({ error: "Error al obtener el producto" }); 
    }

  } else {
    // Ruta no encontrada: devuelve un error 404
    status = 404;
    body = "<h1>404 Not Found</h1>";
  }

  response.writeHead(status, { "Content-Type": content });
  response.end(body); 
});

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`); 
});
