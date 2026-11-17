// Fehler 10: Variable außerhalb ihres Blocks
// Starten mit: node 10-gueltigkeitsbereich.js

const preis = 80;

if (preis > 50) {
  let versand = 0;
} else {
  let versand = 4.9;
}

console.log(versand);
