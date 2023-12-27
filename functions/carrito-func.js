document.addEventListener("DOMContentLoaded", function () {
  cargarCarritoDesdeLocalStorage();
  mostrarCarrito();
});

function mostrarCarrito() {
  let carritoContainer = document.getElementById("carrito-container");

  carritoContainer.innerHTML = "";

  if (carrito.length === 0) {
    carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
  } else {
    let total = 0;

    carrito.forEach((producto, indice) => {
      carritoContainer.innerHTML += generarHTMLCarrito(producto, indice);
      total += producto.precio;
    });

    let iva = total * 0.03;

    let totalConIva = total + iva;

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("iva").textContent = iva.toFixed(2);
    document.getElementById("total-con-iva").textContent =
      totalConIva.toFixed(2);
  }
}

function generarHTMLCarrito(producto, indice) {
  return `
    <div class="card mb-2">
      <div class="card-body position-relative">
        <h5 class="card-title">${producto.nombre}</h5>
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-thumbnail">
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">Precio: $${producto.precio}</p>
        <button type="button" class="btn btn-danger position-absolute top-0 end-0 m-2" onclick="eliminarDelCarrito(${indice})">
          Eliminar <span class="ms-1" aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  `;
}

function eliminarDelCarrito(indice) {
  const nombreProducto = carrito[indice].nombre;

  carrito.splice(indice, 1);

  Swal.fire({
    icon: "success",
    title: `Producto eliminado: ${nombreProducto}`,
    showConfirmButton: false,
    timer: 1500,
  });

  mostrarCarrito();
  guardarCarritoEnLocalStorage();
  actualizarContadorCarrito();
}
