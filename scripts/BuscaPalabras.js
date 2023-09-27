/*
Aqui se empezará a implementar dos algoritmos de grafos para buscar los vecinos de cada ultima letra
agregada al mapeo del tablero. Y uniendo la ultima letra a cada vecino se corrobora si hay
match en las palabras con un algoritmo de arbol.

Resumidamente a cada paso del algoritmo BFS buscara en el grafo GAD
*/

function BFS(){//Breadth First Search. Realiza una busqueda con BFS en el GAD.

}

function GAD(){//Grafo Acíclico Dirigido. Crea una representación del GAD en un array a partir de la lista de palabras

    GAD_map = {
        "0":  [0, R, G, F, M, C, I, A, E, O, T, S],
        "1":  [R, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0],
        "2":  [G, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "3":  [F, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "4":  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "5":  [C, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "6":  [I, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "7":  [A, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "8":  [E, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        "9":  [O, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0],
        "10": [T, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        "11": [S, 0, 0, 0, 0, 0, 0, 0, 2_3, 0, 0, 0]
        //la opcion de represantar el grafo de esta manera genera el inconveniente
        //de almacenar varios valores cuando por ejemplo la letra E tiene como sucesora a la letra S al formar una palabra
        //más de una vez. MESA, FRESA... MESA contiene E en la segunda letra siguiendo la S. Su peso en el mapa es (E:S=2)
        //Pero FRESA cotiene E en la tercer letra su peso es (E:S=3). Si esta situación se repetite el mapa se vuelve mas 
        //dificil de manejar, aunque no lo descarto aun como opción
    }

    GAD_map_2 = {
        "0":  [0,  1,   2,  3, 4, 5, 6, 7, 8, 9, 10, 11],
        "1":  [R, 'I', 'O', 0, 0, 0, 0, 0, 0, 0,  0,  0],
        "2":  [G, 'A', 'T', 0, 0, 0, 0, 0, 0, 0,  0,  0],
        "3":  [F, 'R', 'E', 0, 0, 0, 0, 0, 0, 0,  0,  0],
        "4":  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "5":  [C, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "6":  [I, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "7":  [A, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "8":  [E, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "9":  [O, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "10": [T, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "11": [S, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

}