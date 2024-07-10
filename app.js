let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let valorInput = document.querySelector("#valorUsuario");
let btnNuevoJuego = document.querySelector("#reiniciar");
let listaNumerosSorteados = [];


let intentos = 1;
asignarTexto("h1", "El juego del número secreto");
asignarTexto("p", "Indica un número del 1 al 10");

function asignarTexto(elemento, texto) {
  let element = document.querySelector(elemento);
  element.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;

  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTexto("p", "Ya se han sorteado todos los números disponibles");
  } else {
    if (listaNumerosSorteados.includes(numeroSecreto)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroSecreto);
      return numeroSecreto;
    }
  }
}

function verificarIntento() {
  let numeroUsuario = parseInt(valorInput.value);

  if (numeroSecreto === numeroUsuario) {
    asignarTexto(
      "p",
      `Acertaste el número secreto en ${intentos} ${
        intentos > 1 ? "veces" : "vez"
      }`
    );
    document.querySelector("#reiniciar").removeAttribute("disabled");
  } else {
    if (numeroSecreto < numeroUsuario) {
      asignarTexto("p", "El número secreto es menor");
    } else {
      asignarTexto("p", "El número secreto es mayor");
    }

    limpiarInput();
    valorInput.focus();
  }
  intentos++;
}

function mensajesIniciales() {
  asignarTexto("h1", "Juego del número secreto");
  asignarTexto("p", `Indica un número del 1 al ${numeroMaximo}`);
}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarInput();
  //Indicar mensaje de intervalo de números
  mensajesIniciales();
  //Generar el número aleatorio
  numeroSecreto = generarNumeroSecreto();
  //Deshabilitar el botón de nuevo juego
  btnNuevoJuego.setAttribute("disabled", "true");
  //Reinicializar el número de intentos
  intentos = 1;
}

function limpiarInput() {
  valorInput.value = "";
}
