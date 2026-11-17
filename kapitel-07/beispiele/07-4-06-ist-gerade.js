// Kapitel 7, Abschnitt 7.4: Funktionen, die Ja oder Nein sagen

function istGerade(zahl) {
  return zahl % 2 === 0;
}

console.log(istGerade(4));
console.log(istGerade(7));

if (istGerade(10)) {
  console.log("10 ist gerade.");
}
