function prueba() {
  for (var i = 1; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}
console.log(prueba())
prueba();
