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

  async buscarEnGAD(valor, x, y) {
    try {
      const letraInicial = tablero.tablero[x][y].toLowerCase();

      for (let indexX = 0; indexX < this.filasGAD; indexX++) {
        for (let indexY = 0; indexY < this.columnasGAD; indexY++) {
          if (this.GAD[indexX][indexY] == letraInicial) {
            if (
              indexX - 1 >= 0 &&
              this.GAD[indexX - 1][indexY] != undefined &&
              typeof this.GAD[indexX - 1][indexY] === "string" 
            ) {
              valor.forEach(setXY => {
                if (tablero.tablero[setXY.x][setXY.y].toLowerCase() === this.GAD[indexX - 1][indexY]) {
                  console.log("aqui")//bfs(setXY.x, setXY.y)  aqui retomo mañana.!!!!!!!!!!
                }
              });
            }
            if (
              indexX + 1 <= this.filasGAD &&
              this.GAD[indexX + 1][indexY] != undefined &&
              typeof this.GAD[indexX + 1][indexY] === "string"
            ) {
              valor.forEach(setXY => {
                if (tablero.tablero[setXY.x][setXY.y].toLowerCase() === this.GAD[indexX + 1][indexY]) {
                  console.log("match")
                }
              });
            }
          }
        }
      }
    } catch (error) {
      console.error("Problema al buscar en GAD: ", error);
    }
  }

  async BFS(x, y) {
    //entra valor x,y / 2,1 = "R"
    try {
      const cola = [];
      const visitado = new Set();
      cola.push({ x, y }); //entra 2,1 a la cola
      while (cola.length > 0) {
        //si hay elemento en cola hace...
        const valor = [];
        const { x, y } = cola.shift(); //toma elemento en cola, 2,1 en este caso
        visitado.add(`${x}, ${y}`); //agrega 2,1 a visitado
        //comienza a verificar vecinos
        if (
          y - 1 >= 0 &&
          tablero.tablero[x][y - 1] !== null &&
          tablero.tablero[x][y - 1] != undefined &&
          !visitado.has(`${x}, ${y - 1}`) //verifica que y:1-1 >=0, que tablero[2][0] no sea nulo ni indefinido y que 2,0 no haya sido visitado, entonces si cumple hace...
        ) {
          valor.push({ x, y: y - 1 }); // agrega "L" a valor, 2,0="L"
          //cola.push({ x, y: y - 1 }); //agrega 2,0 a la cola
        }
        if (
          x + 1 < tablero.columnas &&
          tablero.tablero[x + 1][y] !== null &&
          tablero.tablero[x + 1][y] != undefined &&
          !visitado.has(`${x + 1}, ${y}`) //verifica 3,1 = "I" y hace...
        ) {
          valor.push({ x: x + 1, y }); // agrega "I" a valor
          //cola.push({ x: x + 1, y }); // agrega 3,1 a la cola
        }
        if (
          y + 1 < tablero.filas &&
          tablero.tablero[x][y + 1] !== null &&
          tablero.tablero[x][y + 1] != undefined &&
          !visitado.has(`${x}, ${y + 1}`) //no verifica para 2,2. Es nulo
        ) {
          valor.push({ x, y: y + 1 });
          //cola.push({ x, y: y + 1 });
        }
        if (
          x - 1 >= 0 &&
          tablero.tablero[x - 1][y] !== null &&
          tablero.tablero[x - 1][y] != undefined &&
          !visitado.has(`${x - 1}. ${y}`) //no verifica para 1,1, es nulo
        ) {
          valor.push({ x: x - 1, y });
          //cola.push({ x: x - 1, y });
        }
        if (valor.length !== 0) {
          this.buscarEnGAD(valor, x, y);
        }
      }
    } catch (error) {
      console.log("Error en el algoritmo BFS: ", error);
    }
  }
}
