// Fehler 10: die korrigierte Fassung
// Starten mit: node 10-gueltigkeitsbereich-korrigiert.js

const preis = 80;
let versand;

if (preis > 50) {
  versand = 0;
} else {
  versand = 4.9;
}

console.log(versand);
