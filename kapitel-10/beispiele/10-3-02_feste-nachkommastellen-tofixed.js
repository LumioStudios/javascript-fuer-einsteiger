// Kapitel 10.3: Zahlen formatieren
// Feste Nachkommastellen: toFixed
// Ausführen im Ordner kapitel-10: node beispiele/10-3-02_feste-nachkommastellen-tofixed.js

const preis = 19.999;

console.log(preis.toFixed(2));
console.log((0.1 + 0.2).toFixed(2));
console.log((7).toFixed(2));
console.log((2.5).toFixed(0));

// Ausgabe:
// 20.00
// 0.30
// 7.00
// 3
