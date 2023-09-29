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
    } catch (error) {
      console.error("Error al cargar el GAD", error);
    }
  }

  async buscarEnGAD(valor) {
    try {
      console.log(valor);
      const coordenadasEncontradas = [];

      for (let letra of valor) {
        letra = letra.toLowerCase();

        for (let y = 0; y < this.filasGAD; y++) {
          for (let x = 0; x < this.columnasGAD; x++) {
            const elementoGAD = this.GAD[x][y];

            if (elementoGAD !== null && elementoGAD.toLowerCase() === letra) {
              coordenadasEncontradas.push({ x, y });
            }
          }
        }
      }
      //console.log(coordenadasEncontradas);
      return coordenadasEncontradas;
    } catch (error) {
      console.error("Problema al buscar en GAD: ", error);
    }
  }

  async BFS(x, y) {
    try {
      //console.log(this.GAD);
      const cola = [];
      const visitado = new Set();
      cola.push({ x, y });
      while (cola.length > 0) {
        const { x, y } = cola.shift();
        if (x >= 0 && x < tablero.columnas && y >= 0 && y < tablero.filas ) {
          const valor = [];
          visitado.add(`${x},${y}`);
          if (
            x - 1 >= 0 &&
            tablero.tablero[x - 1][y] !== null &&
            tablero.tablero[x - 1][y] != undefined
          ) {
            valor.push(tablero.tablero[x - 1][y]);
            if (x - 1 >= 0 && !visitado.has(`${x - 1},${y}`)) {
              const newX = x - 1;
              const newY = y;
              cola.push({ x: newX, y: newY });
              visitado.add(`${newX},${newY}`);
              console.log(visitado);
            }
          }
          if (
            y + 1 >= 0 &&
            tablero.tablero[x][y + 1] !== null &&
            tablero.tablero[x][y + 1] != undefined && !visitado.has(`${x},${y + 1}`)
          ) {
            valor.push(tablero.tablero[x][y + 1]);
            if (y + 1 >= 0 && !visitado.has(`${x},${y + 1}`)) {
              const newX = x;
              const newY = y + 1;
              cola.push({ x: newX, y: newY });
              visitado.add(`${newX},${newY}`);
              console.log("en y+: ", visitado);
            }
          }
          if (
            x + 1 < tablero.columnas &&
            tablero.tablero[x + 1][y] !== null &&
            tablero.tablero[x + 1][y] != undefined && !visitado.has(`${x + 1},${y}`)
          ) {
            valor.push(tablero.tablero[x + 1][y]);
            if (x + 1 >= 0 && !visitado.has(`${x + 1},${y}`)) {
              const newX = x + 1;
              const newY = y;
              cola.push({ x: newX, y: newY });
              visitado.add(`${newX},${newY}`);
              console.log(visitado);
            }
          }
          if (
            y - 1 >= 0 &&
            tablero.tablero[x][y - 1] !== null &&
            tablero.tablero[x][y - 1] != undefined && !visitado.has(`${x},${y - 1}`)
          ) {
            valor.push(tablero.tablero[x][y - 1]);
            if (y - 1 >= 0 && !visitado.has(`${x},${y - 1}`)) {
              const newX = x;
              const newY = y - 1;
              cola.push({ x: newX, y: newY });
              visitado.add(`${newX},${newY}`);
              console.log(visitado);
            }
          }
          if (valor.length !== 0) {
            this.buscarEnGAD(valor);
          }
        }
      }
    } catch (error) {
      console.error("Error al recorrer el algoritmo BFS:", error);
    }
  }
}
