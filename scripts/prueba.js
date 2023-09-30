/*
  0 1 2 3 4 5 6
0 - - L A G - -
1 - - R I O - -
2 - - - - - - -
ultima letra agregada: R

*/

async function BFS(x, y) {
  //entra valor x,y / 2,1 = "R"
  try {
    const cola = [];
    const visitado = new Set();
    const valor = [];
    cola.push({ x, y }); //entra 2,1 a la cola
    while (cola.length > 0) {
      //si hay elemento en cola hace...
      const { x, y } = cola.shift(); //toma elemento en cola, 2,1 en este caso
      visitado.add(`${x}, ${y}`); //agrega 2,1 a visitado
      //comienza a verificar vecinos
      if (
        y - 1 >= 0 &&
        tablero.tablero[x][y - 1] !== null &&
        tablero.tablero[x][y - 1] != undefined &&
        !visitado.has(`${x}, ${y - 1}`) //verifica que y:1-1 >=0, que tablero[2][0] no sea nulo ni indefinido y que 2,0 no haya sido visitado, entonces si cumple hace...
      ) {
        valor.push(tablero.tablero[x][y - 1]); // agrega "L" a valor, 2,0="L"
        cola.push(`${x}, ${y - 1}`); //agrega 2,0 a la cola
      }
      if (
        x + 1 < tablero.columnas &&
        tablero.tablero[x + 1][y] !== null &&
        tablero.tablero[x + 1][y] != undefined &&
        !visitado.has(`${x + 1}, ${y}`) //verifica 3,1 = "I" y hace...
      ) {
        valor.push(tablero.tablero[x + 1][y]); // agrega "I" a valor
        cola.push(`${x + 1}, ${y}`); // agrega 3,1 a la cola
      }
      if (
        y + 1 < tablero.filas &&
        tablero.tablero[x][y + 1] !== null &&
        tablero.tablero[x][y + 1] != undefined &&
        !visitado.has(`${x}, ${y + 1}`) //no verifica para 2,2. Es nulo
      ) {
        valor.push(tablero.tablero[x][y + 1]);
        cola.push(`${x}, ${y + 1}`);
      }
      if (
        x - 1 >= 0 &&
        tablero.tablero[x - 1][y] !== null &&
        tablero.tablero[x - 1][y] != undefined &&
        !visitado.has(`${x - 1}. ${y}`) //no verifica para 1,1, es nulo
      ) {
        valor.push(tablero.tablero[x - 1][y]);
        cola.push(`${x - 1}, ${y}`);
      }
    }
    if (valor.length !== 0) {
      this.buscarEnGAD(valor);
    }
  } catch (error) {
    console.log(error);
  }
}
