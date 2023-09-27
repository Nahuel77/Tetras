/*
Aqui se empezará a implementar dos algoritmos de grafos para buscar los vecinos de cada ultima letra
agregada al mapeo del tablero. Y uniendo la ultima letra a cada vecino se corrobora si hay
match en las palabras con un algoritmo de arbol.

Resumidamente a cada paso del algoritmo BFS buscara en el grafo GAD
*/

class BuscaPalabras {
  constructor(palabras) {
    this.columnasGAD;
    this.numeroDePalabras; //opcional
  }

  async buscarPalabraMasLarga(palabras) {
    let palabraMasLarga = "";
    try {
      palabras.listaPalabras.forEach((palabra) => {
        if (palabra.length > palabraMasLarga.length) {
          palabraMasLarga = palabra;
        }
      });
      this.columnasGAD = palabraMasLarga.length;
    } catch (error) {
      console.error(
        "Error al cargar la lista de palabras desde el objeto palabra",
        error
      );
    }
  }
  
}

function BFS() {
  //Breadth First Search. Realiza una busqueda con BFS en el GAD.
}

function GAD() {
  //Grafo Acíclico Dirigido. Crea una representación del GAD en un array a partir de la lista de palabras
  /*
  GAD_map_ejemplo = {
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    1: [R, "I", "O", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    2: [G, "A", "T", "O", 0, 0, 0, 0, 0, 0, 0, 0],
    3: [F, "R", "E", "S", "A", 0, 0, 0, 0, 0, 0, 0],
    4: [M, "E", "S", "A", 0, 0, 0, 0, 0, 0, 0, 0],
    5: [C, "E", "R", "E", "Z", "A", 0, 0, 0, 0, 0, 0],
  };*/
}
