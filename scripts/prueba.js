//const vocales = ['A', 'E', 'I', 'O', 'U'];

function clasificarLetras(palabras) {
  let vocalesEncontradas = [];
  let consonantesEncontradas = [];

  palabras.forEach((palabra) => {
    if (typeof palabra !== "string") {
      console.warn(
        `El elemento "${palabra}" no es una cadena de texto y será ignorado.`
      );
      return;
    }
    const letrasPalabra = palabra.toUpperCase().split("");

    letrasPalabra.forEach((letra) => {
      if (vocales.includes(letra)) {
        vocalesEncontradas.push(letra);
      } else if (letra.match(/[A-Z]/i)) {
        consonantesEncontradas.push(letra);
      }
    });
  });

  console.log("Vocales encontradas:", vocalesEncontradas);
  console.log("Consonantes encontradas:", consonantesEncontradas);
}

// Ejemplo de uso:
const palabras = ["Hola", "Mundo", "123", "OpenAI"];



//console.log(palabras)
//clasificarLetras(palabras);
