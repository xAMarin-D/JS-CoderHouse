// prd-func.js
let productos = [
  {
    id: 1,
    nombre: "Corta viento Nike",
    descripcion: "Color: Blanco",
    precio: 20.0,
    imagen: "../media/media1.png",
  },
  {
    id: 2,
    nombre: "Polera CMP",
    descripcion: "Color: Celeste",
    precio: 15.0,
    imagen: "../media/media2.png",
  },
  {
    id: 3,
    nombre: "Polera Polo",
    descripcion: "Color Rojo",
    precio: 30.0,
    imagen: "../media/media3.png",
  },
  {
    id: 4,
    nombre: "Mochila Gris",
    descripcion: "Color: Gris",
    precio: 45.0,
    imagen: "../media/media4.png",
  },
  {
    id: 5,
    nombre: "Cama King",
    descripcion: "Color: Gris",
    precio: 99.99,
    imagen: "../media/media5.png",
  },
  {
    id: 6,
    nombre: "Zapatilla Puma",
    descripcion: "Color: Negro",
    precio: 30.0,
    imagen: "../media/media6.png",
  },
  // Agrega más productos según sea necesario
];

function agregarAlCarro(indice) {
  Swal.fire({
    icon: "success",
    title: "Producto añadido al carrito: " + productos[indice].nombre,
    showConfirmButton: false,
    timer: 1500,
  });
}

function generarHTMLProducto(indice) {
  return `
      <!-- Producto ${indice + 1} -->
      <div class="col">
          <div class="card">
              <img src="${
                productos[indice].imagen
              }" class="card-img-top" alt="Producto ${indice + 1}" />
              <div class="card-body">
                  <h5 class="card-title">${productos[indice].nombre}</h5>
                  <p class="card-text">${productos[indice].descripcion}</p>
                  <p class="card-text">Precio: $${productos[
                    indice
                  ].precio.toFixed(3)}</p>
                  <button class="btn btn-primary" onclick="agregarAlCarro(${indice})">Comprar</button>
              </div>
          </div>
      </div>
    `;
}
