class Letra {
  constructor() {
    this.posicion = createVector(3, 9);
    this.bolsa = bolsa;
    this.letra = this.bolsa.obtenerLetraAleatoria();
  }

  moverDerecha() {
    if (this.posicion.x < 6) {
      this.posicion.x++;
    }
  }

  moverIzquierda() {
    if (this.posicion.x > 0) {
      this.posicion.x--;
    }
  }

  moverArriba(tablero) {
    let nuevaPosicion = createVector(this.posicion.x, this.posicion.y - 1);

    while (
      tablero.esPosicionValida(nuevaPosicion) &&
      !tablero.hayLetraEnPosicion(nuevaPosicion)
    ) {
      this.posicion = nuevaPosicion;
      nuevaPosicion = createVector(this.posicion.x, this.posicion.y - 1);
    }
  }

  crearNuevaLetra() {
    this.posicion = createVector(3, 9);
    this.disparada = false;
    this.letra = this.bolsa.obtenerLetraAleatoria();
  }

  dibujar() {
    push();
    fill("#AA284B");
    let coord = tablero.coordenada(this.posicion.x, this.posicion.y);
    rect(
      coord.x + 3,
      coord.y + 3,
      tablero.lado_celda - 6,
      tablero.lado_celda - 6,
      8
    );
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(
      this.letra,
      coord.x + tablero.lado_celda / 2,
      coord.y + tablero.lado_celda / 2
    );
    pop();
  }
}
