class Palabras {
  constructor() {
    this.listaPalabras = [];
    this.cantidadPalabras = 5;
  }

  async cargarPalabrasDesdeJSON() {
    try {
      const response = await fetch("palabras.json");
      const data = await response.json();
      const palabrasDisponibles = data.palabras;

      for (let i = 0; i < this.cantidadPalabras; i++) {
        const indiceAleatorio = Math.floor(
          Math.random() * palabrasDisponibles.length
        );
        const palabraSeleccionada = palabrasDisponibles.splice(
          indiceAleatorio,
          1
        )[0];
        this.listaPalabras.push(palabraSeleccionada);
      }
    } catch (error) {
      console.error(
        "Error al cargar las palabras desde el archivo JSON:",
        error
      );
    }
  }
}