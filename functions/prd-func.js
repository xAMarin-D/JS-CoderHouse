let productos = [
  {
    id: 1,
    nombre: "Corta viento Nike",
    descripcion: "Color: Blanco",
    precio: 20000,
    imagen: "../media/media1.png",
  },
  {
    id: 2,
    nombre: "Polera CMP",
    descripcion: "Color: Celeste",
    precio: 15000,
    imagen: "../media/media2.png",
  },
  {
    id: 3,
    nombre: "Polera Polo",
    descripcion: "Color Rojo",
    precio: 30000,
    imagen: "../media/media3.png",
  },
  {
    id: 4,
    nombre: "Mochila Gris",
    descripcion: "Color: Gris",
    precio: 45000,
    imagen: "../media/media4.png",
  },
  {
    id: 5,
    nombre: "Cama King",
    descripcion: "Color: Gris",
    precio: 8000,
    imagen: "../media/media5.png",
  },
  {
    id: 6,
    nombre: "Zapatilla Puma",
    descripcion: "Color: Negro",
    precio: 30000,
    imagen: "../media/media6.png",
  },
];

let carrito = [];

function agregarAlCarro(indice) {
  carrito.push(productos[indice]);
  mostrarCarrito();
  Swal.fire({
    icon: "success",
    title: "Producto añadido al carrito: " + productos[indice].nombre,
    showConfirmButton: false,
    timer: 1500,
  });
}

function mostrarCarrito() {
  let carritoContainer = document.getElementById("carrito-container");
  let carritoColumna = document.getElementById("carrito-columna");
  let totalContainer = document.getElementById("total");
  let ivaContainer = document.getElementById("iva");
  let totalConIvaContainer = document.getElementById("total-con-iva");

  carritoContainer.innerHTML = ""; // Limpia el contenido actual

  if (carrito.length === 0) {
    carritoColumna.style.display = "none"; // Oculta la columna del carrito si está vacío
  } else {
    carritoColumna.style.display = "block"; // Muestra la columna del carrito
    let total = 0;

    carrito.forEach((producto) => {
      carritoContainer.innerHTML += generarHTMLCarrito(producto);
      total += producto.precio; // Suma el precio de cada producto al total
    });

    // Calcula el IVA (3% del total)
    let iva = total * 0.03;

    // Calcula el total más el IVA
    let totalConIva = total + iva;

    // Actualiza los elementos HTML
    totalContainer.textContent = total.toFixed(2); // Muestra el total con dos decimales
    ivaContainer.textContent = iva.toFixed(2); // Muestra el IVA con dos decimales
    totalConIvaContainer.textContent = totalConIva.toFixed(2); // Muestra el total más IVA
  }
}

function generarHTMLCarrito(producto) {
  return `
      <div class="card mb-2">
          <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <p class="card-text">Precio: $${producto.precio}</p>
          </div>
      </div>
  `;
}

//Log para validar el carrito
function verCarrito() {
  console.log(carrito);
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
