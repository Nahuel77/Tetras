class BuscaPalabras {
  constructor(palabras) {
    this.columnasGAD;
    this.filasGAD = palabras.cantidadPalabras;
    this.GAD = [];
  }

  async buscarPalabraMasLarga(palabras) {
    let palabraMasLarga = "";
    try {
      palabras.listaPalabras.forEach((palabra) => {
        if (palabra.length > palabraMasLarga.length) {
          palabraMasLarga = palabra;
        }
      });
      this.columnasGAD = palabraMasLarga.length - 1;
    } catch (error) {
      console.error(
        "Error al cargar la lista de palabras desde el objeto palabra",
        error
      );
    }
  }

  async createGAD() {
    try {
      for (let columna = 0; columna <= this.columnasGAD; columna++) {
        this.GAD[columna] = [];
        for (let fila = 0; fila < this.filasGAD; fila++) {
          this.GAD[columna][fila] = null;
        }
      }
    } catch (error) {
      console.error("Error al crear GAD", error);
    }
  }

  async cargarGAD(palabras) {
    try {
      palabras.listaPalabras.forEach((palabra, i) => {
        for (let columna = 0; columna < palabra.length; columna++) {
          this.GAD[columna][i] = palabra[columna];
        }
      });
      //console.log(this.GAD);
    } catch (error) {
      console.error("Error al cargar el GAD", error);
    }
  }

  buscarEnGAD(x, y) {}

  async BFS(x, y) {
    try {
      const cola = [];
      cola.push({ x, y });
      while (cola.length > 0) {
        const { x, y } = cola.shift();
        if (x >= 0 && x < tablero.columnas && y >= 0 && y < tablero.filas) {
          const valor = [];
          if (
            x - 1 >= 0 &&
            tablero.tablero[x - 1][y] !== null &&
            tablero.tablero[x - 1][y] != undefined
          ) {
            valor.push(tablero.tablero[x - 1][y]);
          }
          if (
            y - 1 >= 0 &&
            tablero.tablero[x][y - 1] !== null &&
            tablero.tablero[x][y - 1] != undefined
          ) {
            valor.push(tablero.tablero[x][y - 1]);
          }
          if (
            x + 1 < tablero.columnas &&
            tablero.tablero[x + 1][y] !== null &&
            tablero.tablero[x + 1][y] != undefined
          ) {
            valor.push(tablero.tablero[x + 1][y]);
          }
          if(valor.length!=0){
            console.log(valor);
          }
        }
      }
    } catch (error) {
      console.error("Error al recorrer el algoritmo BFS:", error);
    }
  }
}
