const MARGEN_TABLERO = 20;
let regulador_velocidad_teclas = 0;
let letra;

function setup() {
  let canvas = createCanvas(900, 700);
  canvas.parent("juego");
  tablero = new Tablero();
  palabras = new Palabras();
  palabras.cargarPalabrasDesdeJSON().then(() => {
    console.log(palabras);
    bolsa = new Bolsa(palabras);
    letra = new Letra();
    resizeCanvas(
      tablero.ancho + MARGEN_TABLERO * 2,
      tablero.alto + MARGEN_TABLERO * 2
    );
  });
}

function draw() {
  background("#224");
  tablero.dibujar();
  if (letra) {
    letra.dibujar();
  }
  keyEventsLetras();
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
    console.log(tablero.tablero)
    letra.crearNuevaLetra();
  }
}
