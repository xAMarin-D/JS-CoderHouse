// Validador RUT
function validarRut(rut) {
  let regex = /^[0-9]+-[0-9kK]{1}$/;

  if (!regex.test(rut)) {
    return false;
  }

  let [numRut, digitoVerificador] = rut.split("-");
  let suma = 0;
  let multiplicador = 2;

  for (let i = numRut.length - 1; i >= 0; i--) {
    suma += parseInt(numRut[i]) * multiplicador;
    multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
  }

  let resultado = 11 - (suma % 11);
  let dv =
    resultado === 11 ? "0" : resultado === 10 ? "K" : resultado.toString();

  return dv.toUpperCase() === digitoVerificador.toUpperCase();
}

// Evento de envío del formulario
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    let campos = ["nombre", "apellido", "edad", "rut", "email", "contrasena"];

    for (let campo of campos) {
      let valor = document.getElementById(campo).value.trim();

      if (valor === "") {
        alert(`El campo ${campo} está vacío. Por favor, rellénalo.`);
        event.preventDefault();
        return;
      }
    }

    let rutValue = document.getElementById("rut").value.trim();
    if (!validarRut(rutValue)) {
      alert(
        "El RUT no es válido, recuerda poner el guión y el dígito verificador"
      );
      event.preventDefault();
      return;
    }
    event.preventDefault();
    window.location.href = "html/products.html";
    alert("El formulario está listo para ser enviado. ¡Todo está joya!");
  });

let productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción del producto 1.",
    precio: 20.0,
    imagen: "../media/media1.png",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción del producto 2.",
    precio: 25.0,
    imagen: "../media/media2.png",
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Descripción del producto 3.",
    precio: 30.0,
    imagen: "../media/media3.png",
  },
  // Agrega más productos según sea necesario
];

function agregarAlCarro(indice) {
  // Aquí puedes agregar la lógica para agregar al carrito
  // Por ahora, solo mostraremos un mensaje de ejemplo
  alert("Producto añadido al carrito: " + productos[indice].nombre);
}

// Función para generar el HTML de un producto
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
              <p class="card-text">Precio: $${productos[indice].precio.toFixed(
                2
              )}</p>
              <button class="btn btn-primary" onclick="agregarAlCarro(${indice})">Comprar</button>
          </div>
      </div>
  </div>
`;
}
