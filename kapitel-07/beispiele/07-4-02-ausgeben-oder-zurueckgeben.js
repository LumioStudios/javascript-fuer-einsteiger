// Kapitel 7, Abschnitt 7.4: Ausgeben oder zurückgeben?

function zeigeDoppelt(zahl) {
  console.log(zahl * 2);
}

function verdopple(zahl) {
  return zahl * 2;
}

const ergebnisEins = zeigeDoppelt(5);
const ergebnisZwei = verdopple(5);

console.log("Eins:", ergebnisEins);
console.log("Zwei:", ergebnisZwei);
