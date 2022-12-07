let formulario = document.getElementById("formulario");

function validateCampos() {
  let inputText = document.querySelectorAll("input[type=text]");
  let validateText = true;
  for (let input of inputText) {
    if (input.value.trim() === "") {
      validateText = false;
    }
    return validateText;
  }
}
function validateRadio() {
  // Obtener el elemento seleccionado en los campos de radio
  let selected = document.querySelector("input[type=radio]:checked");

  // Comprobar si no se ha seleccionado ningún elemento
  if (!selected) {
    // Devolver falso si no se ha seleccionado ningún elemento
    return false;
  }

  // Devolver verdadero si se ha seleccionado un elemento
  return true;
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let camposValid = validateCampos()
  let radioValid = validateRadio()

  if (camposValid && radioValid) {
    alert("Enviado");
  } else {
    alert('Rellena el puto formulario')
  }
});
