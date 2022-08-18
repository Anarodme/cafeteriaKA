function esNumero(dato) {
  var numeros = "^[0-9]+$";
  if (dato.match(numeros))
    return true;
  else
    return false;
}
function validaNombre() {
  var nomb = Formulario.nom.value;
  var tecla = window.event.keyCode;
  if (tecla == 13) {

    if (esNumero(nomb) || nomb == "" || nomb.charAt(0) == " ") {
      alert('Dato no válido')
      return true;
    }
    else {
      Formulario.ape.focus();
      return false;
    }
  }
}

function validaApe() {
  var apel = Formulario.ape.value;

  if (esNumero(apel) ||  apel == "" || apel.charAt(0) == " ") {
    alert("No se permiten espacios vacíos.")
  }
  else {
    Formulario.curso.focus();
  }
}

function validaCorreo() {
  var correo = document.getElementById('correo').value;
  arroba = correo.indexOf("@");
  punto = correo.lastIndexOf(".");
  extension = correo.split(".")[1];

  if (arroba < 1 || (punto - arroba < 2) || correo === "") {
    alert("El correo " + correo + " No es válido ");
  } else {
    if (extension.length > 3) {
      alert("El correo " + correo + " No es válido ");
      return;
    }
    alert("El correo " + correo + " Es válido ");
    Formulario.message.focus;
  }

}




