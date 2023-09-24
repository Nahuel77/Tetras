const MARGEN_TABLERO = 20;
let regulador_velocidad_teclas = 0;
let letra;

function mostrarPalabrasEnMarcador(palabras) {
  const marcador = document.getElementById("marcador");
  const listaPalabras = document.getElementById("listaPalabras");

  listaPalabras.innerHTML = "";

  palabras.forEach((palabra) => {
    const li = document.createElement("li");
    li.textContent = palabra;
    listaPalabras.appendChild(li);
  });

  marcador.appendChild(listaPalabras);
}

async function setup() {
  let canvas = createCanvas(900, 700);
  canvas.parent("juego");
  tablero = new Tablero();
  palabras = new Palabras();

  await palabras.cargarPalabrasDesdeJSON();
  console.log(palabras);

  bolsa = new Bolsa(palabras);
  letra = new Letra();
  resizeCanvas(
    tablero.ancho + MARGEN_TABLERO * 2,
    tablero.alto + MARGEN_TABLERO * 2
  );
  mostrarPalabrasEnMarcador(palabras.listaPalabras);
}

function draw() {
  background("#224");
  tablero.dibujar();
  if (letra) {
    letra.dibujar();
  }
  keyEventsLetras();
  tablero.actualizarTablero();
}

function keyEventsLetras() {
  if (millis() - regulador_velocidad_teclas < 100) {
    return;
  }
  regulador_velocidad_teclas = millis();
  if (keyIsDown(RIGHT_ARROW)) {
    letra.moverDerecha();
  }
  if (keyIsDown(LEFT_ARROW)) {
    letra.moverIzquierda();
  }
  if (keyIsDown(32)) {
    letra.moverArriba(tablero);
    tablero.memorizarTablero(letra.posicion.x, letra.posicion.y, letra.letra);
    console.log(tablero.tablero);
    letra.crearNuevaLetra();
  }
}
