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
    Swal.fire({
      icon: "success",
      title: "El formulario se llenado exitosamente!",
      showConfirmButton: false,
      timer: 1500,
    });
  });
