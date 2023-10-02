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
    //console.log(this.GAD);
    try {
      const letraInicial = tablero.tablero[x][y].toLowerCase();
      const setXYaBFS = [];
      for (let indexX = 0; indexX < this.filasGAD; indexX++) {
        for (let indexY = 0; indexY < this.columnasGAD; indexY++) {
          if (this.GAD[indexX][indexY] == letraInicial) {
            //recorre el GAD buscando letraInicial (la ultima ficha en caer al tablero)
            if (
              //mira una letra antes y una despues de la encontrada en GAD
              indexX - 1 >= 0 &&
              this.GAD[indexX - 1][indexY] != undefined &&
              typeof this.GAD[indexX - 1][indexY] === "string"
            ) {
              valor.forEach((setXY) => {
                //mira si los vecinos de la letra inicial EN EL TABLERO, son iguales a los vecinos de la letraInicial encontrada en GAD
                if (
                  tablero.tablero[setXY.x][setXY.y].toLowerCase() ===
                  this.GAD[indexX - 1][indexY]
                ) {
                  setXYaBFS.push([
                    { x: setXY.x, y: setXY.y },
                    { i: indexX - 1, j: indexY },
                  ]); //Si hay coincidencia guarda los vecinos de la letrainicial del tablero en un arreglo para devolverlos a BFS (posible solucion a seguir el hilo de la misma palabra, pasar tambien indexX -1, indexY junto con el setXY.x setXY.y)
                }
              });
            }
            if (
              //repite lo de arriba pero mirando al vecino de abajo en GAD
              indexX + 1 <= this.filasGAD &&
              this.GAD[indexX + 1][indexY] !== undefined &&
              typeof this.GAD[indexX + 1][indexY] === "string"
            ) {
              valor.forEach((setXY) => {
                if (
                  tablero.tablero[setXY.x][setXY.y].toLowerCase() ===
                  this.GAD[indexX + 1][indexY]
                ) {
                  setXYaBFS.push([
                    { x: setXY.x, y: setXY.y },
                    { i: indexX + 1, j: indexY },
                  ]);
                }
              });
            }
          }
        }
      }
      if (setXYaBFS.length != 0) {
        //si se encontraron coincidencias entre los vecinos de la letraInicial, en el tablero y en el GAD, retornará el set {setXY.x, setXY.y} guardados en setXYaBFS
        return setXYaBFS;
      }
    } catch (error) {
      console.error("Problema al buscar en GAD: ", error);
    }
  }

  async BFS(x, y) {
    //entra valor x,y / 2,1 = "R"
    try {
      const palabra = [];
      const cola = [];
      const visitado = new Set();

      for (let i = 0; i < this.filasGAD; i++) {
        palabra[i] = [];
        for (let j = 0; j < this.columnasGAD; j++) {
          palabra[i][j] = null;
        }
      }

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
        const res = await this.buscarEnGAD(valor, x, y);
        if (res) {
          //Si encontró que los vecinos coinciden para formar una palabra
          //console.log(res);
          res.forEach((resXY) => {
            cola.push({ x: resXY[0].x, y: resXY[0].y });
          });

          

          res.forEach((setPalCor) => {
            palabra[setPalCor[1].i][setPalCor[1].j] =
              tablero.tablero[setPalCor[0].x][setPalCor[0].y];
            console.log(palabra);
          });
        }
      }
    } catch (error) {
      console.error("Error en el algoritmo BFS: ", error);
    }
  }
}
