// Fehler 3: = statt ===
// Starten mit: node 03-zuweisung-statt-vergleich.js

let punkte = 3;

if (punkte = 10) {
  console.log("Gewonnen!");
}
console.log(punkte);

// Lösung: if (punkte === 10) { … }
