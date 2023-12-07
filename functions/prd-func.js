let productos;
let carrito = [];

async function cargarProductos() {
  try {
    const response = await fetch("../json-data/data.json");
    productos = await response.json();
    console.log("Productos cargados:", productos);
    cargarCarritoDesdeLocalStorage();
    mostrarProductos();
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarProductos);

function agregarAlCarro(indice) {
  carrito.push(productos[indice]);
  mostrarCarrito();
  guardarCarritoEnLocalStorage();
  Swal.fire({
    icon: "success",
    title: "Producto añadido al carrito: " + productos[indice].nombre,
    showConfirmButton: false,
    timer: 1500,
  });
}

function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    mostrarCarrito();
  }
}

function mostrarCarrito() {
  let carritoContainer = document.getElementById("carrito-container");
}

function mostrarProductos() {
  let container = document.getElementById("productos-container");
  // Genera el HTML para cada producto
  for (let i = 0; i < productos.length; i++) {
    container.innerHTML += generarHTMLProducto(i);
  }
}

function generarHTMLProducto(indice) {
  return `
    <!-- Producto ${indice + 1} -->
    <div class="col mb-4">
      <div class="card">
        <img src="${
          productos[indice].imagen
        }" class="card-img-top" alt="Producto ${indice + 1}" />
        <div class="card-body">
          <h5 class="card-title">${productos[indice].nombre}</h5>
          <p class="card-text">${productos[indice].descripcion}</p>
          <p class="card-text">Precio: $${productos[indice].precio}</p>
          <button class="btn btn-primary" onclick="agregarAlCarro(${indice})">Comprar</button>
        </div>
      </div>
    </div>
  `;
}
