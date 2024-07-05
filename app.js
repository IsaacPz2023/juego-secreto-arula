let numeroSecreto = 0;
let contadorIntento = 0;
let numeroSorteados = [];
let maximoIntento = 10;
condicionesIniciales();

function verificarIntento() {
  let inputUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === inputUsuario) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${contadorIntento} ${
        contadorIntento === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("intentar").setAttribute("disabled", "true");
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    numeroSecreto > inputUsuario
      ? asignarTextoElemento("p", "El número secreto es mayor")
      : asignarTextoElemento("p", "El número secreto es menor");
    contadorIntento++;
    limpiarCaja();
  }
}

function asignarTextoElemento(etiqueta, texto) {
  let elemento = document.querySelector(etiqueta);
  elemento.innerHTML = texto;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function reiniciarJuego() {
  limpiarCaja();
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  document.getElementById("intentar").removeAttribute("disabled");
}

function condicionesIniciales() {
  numeroSecreto = generarNumeroSecreto();
  contadorIntento = 1;
  verificarNumeroSorteados();
}

function verificarNumeroSorteados() {
  console.log(numeroSorteados);
  if (numeroSorteados.length === maximoIntento) {
    asignarTextoElemento("p", "Ya se sortearon todos los número posibles");
    document.getElementById("intentar").setAttribute("disabled", "true");
    
  } else {
    if (numeroSorteados.includes(numeroSecreto)) {
      condicionesIniciales();
    } else {
      numeroSorteados.push(numeroSecreto);
    }
  }
}

asignarTextoElemento("h1", "Juego del número secreto");

asignarTextoElemento("p", "Indica un número del 1 al 10");
