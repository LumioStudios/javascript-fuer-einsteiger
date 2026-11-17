// Kapitel 7, Abschnitt 7.6: Funktionen weitergeben

function wendeAn(zahl, aktion) {
  return aktion(zahl);
}

const verdopple = (zahl) => zahl * 2;

console.log(wendeAn(5, verdopple));
console.log(wendeAn(5, (zahl) => zahl + 100));
