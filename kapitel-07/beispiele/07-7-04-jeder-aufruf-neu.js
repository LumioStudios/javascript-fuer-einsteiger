// Kapitel 7, Abschnitt 7.7: Jeder Aufruf fängt von vorn an

function zaehle() {
  let zaehler = 0;
  zaehler++;
  return zaehler;
}

console.log(zaehle());
console.log(zaehle());
console.log(zaehle());
