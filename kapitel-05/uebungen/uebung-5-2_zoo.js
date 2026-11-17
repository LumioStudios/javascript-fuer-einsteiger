// Übung 5.2 – Eintritt im Zoo
// Teste mit 5, 6, 17, 18, 64 und 65.

const alter = 17;
let preis;

if (alter < 6) {
  preis = 0;
} else if (alter < 18) {
  preis = 6;
} else if (alter < 65) {
  preis = 14;
} else {
  preis = 9;
}

console.log("Eintritt:", preis, "Euro");
