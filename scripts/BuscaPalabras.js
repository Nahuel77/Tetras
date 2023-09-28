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
      const visitado = new Set();
      cola.push({ x, y });
      while (cola.length > 0) {
        const { x, y } = cola.shift();
        if (
          x >= 0 &&
          x <= this.columnasGAD &&
          y >= 0 &&
          y < this.filasGAD &&
          !visitado.has(`${x}, ${y}`)
        ) {   
          visitado.add(`${x}, ${y}`);
          cola.push({ x: x - 1, y });
          cola.push({ x: x + 1, y });
          cola.push({ x, y: y - 1 });
          cola.push({ x, y: y + 1 });
          if (tablero.tablero[x][y]!== null) {
            const valor = [];
            valor.push(tablero.tablero[x][y]);
            console.log(valor);
          }
        }
      }
    } catch (error) {
      console.error("Error al recorrer el algoritmo BFS:", error);
    }
  }
}
