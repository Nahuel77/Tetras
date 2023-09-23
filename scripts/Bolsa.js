const vocales = ["A", "E", "I", "O", "U"];

class Bolsa {
  constructor(palabras) {
    this.vocal = [];
    this.consonante = [];
    this.clasificarLetras(palabras.listaPalabras);
  }

  clasificarLetras(palabras) {
    palabras.forEach((palabra) => {
      const letrasPalabra = palabra.toUpperCase().split("");

      letrasPalabra.forEach((letra) => {
        if (vocales.includes(letra)) {
          this.vocal.push(letra);
        } else if (letra.match(/[A-Z]/i)) {
          this.consonante.push(letra);
        }
      });
    });
  }

  obtenerLetraAleatoria() {
    const lista = Math.random() < 0.5 ? this.vocal : this.consonante;
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const letraAleatoria = lista[indiceAleatorio];
    lista.splice(indiceAleatorio, 1);

    return letraAleatoria;
  }
}
