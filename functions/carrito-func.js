// carrito-func.js
document.addEventListener("DOMContentLoaded", function () {
  cargarCarritoDesdeLocalStorage();
  mostrarCarrito();
});

function mostrarCarrito() {
  let carritoContainer = document.getElementById("carrito-container");

  carritoContainer.innerHTML = ""; // Limpiar contenido actual

  if (carrito.length === 0) {
    carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
  } else {
    let total = 0;

    carrito.forEach((producto, indice) => {
      carritoContainer.innerHTML += generarHTMLCarrito(producto, indice);
      total += producto.precio; // Sumar el precio de cada producto al total
    });

    // Calcula el IVA (3% del total)
    let iva = total * 0.03;

    // Calcula el total más el IVA
    let totalConIva = total + iva;

    // Actualiza los elementos HTML
    document.getElementById("total").textContent = total.toFixed(2); // Muestra el total con dos decimales
    document.getElementById("iva").textContent = iva.toFixed(2); // Muestra el IVA con dos decimales
    document.getElementById("total-con-iva").textContent =
      totalConIva.toFixed(2); // Muestra el total más IVA
  }
}

function generarHTMLCarrito(producto, indice) {
  return `
            <div class="card mb-2">
                <div class="card-body">
                    <button type="button" class="close" aria-label="Close" onclick="eliminarDelCarrito(${indice})">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 class="card-title">${producto.nombre}</h5>
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-thumbnail">
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                </div>
            </div>
        `;
}

function eliminarDelCarrito(indice) {
  // Obtén el nombre del producto antes de eliminarlo
  const nombreProducto = carrito[indice].nombre;

  // Elimina el producto en el índice proporcionado
  carrito.splice(indice, 1);

  // Muestra un Sweet Alert indicando que el producto ha sido eliminado
  Swal.fire({
    icon: "success",
    title: `Producto eliminado: ${nombreProducto}`,
    showConfirmButton: false,
    timer: 1500,
  });

  mostrarCarrito();
  guardarCarritoEnLocalStorage();
}
