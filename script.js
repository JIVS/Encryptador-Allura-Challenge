// Función para encriptar el texto de entrada utilizando un cifrado de sustitución
function encriptarTexto() {
  var textoEntrada = document.getElementById("texto-entrada").value;

  // Encriptar utilizando un cifrado de sustitución (implementación de ejemplo)
  var textoEncriptado = sustitucionEncriptar(textoEntrada);

  document.getElementById("texto-salida").value = textoEncriptado;
}

// Función para desencriptar el texto encriptado utilizando un cifrado de sustitución
function desencriptarTexto() {
  var textoEncriptado = document.getElementById("texto-salida").value;

  // Desencriptar utilizando un cifrado de sustitución (implementación de ejemplo)
  var textoDesencriptado = sustitucionDesencriptar(textoEncriptado);

  document.getElementById("texto-salida").value = textoDesencriptado;
}

// Función para copiar el texto en la caja de salida al portapapeles
function copiarTexto() {
  var textoSalida = document.getElementById("texto-salida");
  textoSalida.select();
  document.execCommand("copy");
  alert("¡Texto copiado al portapapeles!");
}

// Event listeners para los botones
document.getElementById("boton-encriptar").addEventListener("click", encriptarTexto);
document.getElementById("boton-desencriptar").addEventListener("click", desencriptarTexto);
document.getElementById("boton-copiar").addEventListener("click", copiarTexto);

// Función de ejemplo para encriptar mediante un cifrado de sustitución
function sustitucionEncriptar(texto) {
  var sustituciones = {
    "a": "ABCD",
    "e": "EFGH",
    "i": "IJKL",
    "o": "MNOP",
    "u": "QRST"
  };

  var textoEncriptado = "";
  for (var i = 0; i < texto.length; i++) {
    var caracter = texto[i].toLowerCase();
    if (sustituciones.hasOwnProperty(caracter)) {
      textoEncriptado += sustituciones[caracter];
    } else {
      textoEncriptado += texto[i];
    }
  }
  return textoEncriptado;
}

// Función de ejemplo para desencriptar mediante un cifrado de sustitución
function sustitucionDesencriptar(textoEncriptado) {
  var sustituciones = {
    "abcd": "a",
    "efgh": "e",
    "ijkl": "i",
    "mnop": "o",
    "qrst": "u"
  };

  var textoDesencriptado = "";
  for (var i = 0; i < textoEncriptado.length; i += 4) {
    var sustitucion = textoEncriptado.substr(i, 4);
    if (sustituciones.hasOwnProperty(sustitucion)) {
      textoDesencriptado += sustituciones[sustitucion];
    } else {
      textoDesencriptado += textoEncriptado.substr(i, 4);
    }
  }
  return textoDesencriptado;
}
