class Tablero {
  constructor() {
    this.columnas = 7;
    this.filas = 10;
    this.lado_celda = 60;
    this.ancho = this.columnas * this.lado_celda;
    this.alto = this.filas * this.lado_celda;
    this.posicion = createVector(MARGEN_TABLERO, MARGEN_TABLERO);
    this.tablero = [];
    this.inicializarTablero();
  }

  inicializarTablero() {
    for (let columna = 0; columna < this.columnas; columna++) {
      this.tablero[columna] = [];
      for (let fila = 0; fila < this.filas; fila++) {
        this.tablero[columna][fila] = null;
      }
    }
  }

  esPosicionValida(posicion) {
    return (
      posicion.x >= 0 &&
      posicion.x < this.columnas &&
      posicion.y >= 0 &&
      posicion.y < this.filas
    );
  }

  hayLetraEnPosicion(posicion) {
    if (!this.esPosicionValida(posicion)) {
      return false;
    }

    return this.tablero[posicion.x][posicion.y] !== null;
  }

  coordenada(x, y) {
    return createVector(x, y).mult(this.lado_celda).add(this.posicion);
  }

  dibujar() {
    push();
    noStroke();
    for (let columna = 0; columna < this.columnas; columna++) {
      for (let fila = 0; fila < this.filas; fila++) {
        if ((columna + fila) % 2 == 0) {
          fill("black");
        } else {
          fill("#003");
        }
        let c = this.coordenada(columna, fila);
        rect(c.x, c.y, this.lado_celda);
      }
    }
    pop();
  }
}
