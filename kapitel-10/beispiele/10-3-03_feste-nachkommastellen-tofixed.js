// Kapitel 10.3: Zahlen formatieren
// Feste Nachkommastellen: toFixed
// Ausführen im Ordner kapitel-10: node beispiele/10-3-03_feste-nachkommastellen-tofixed.js

const betrag = (4.5).toFixed(2);

console.log(typeof betrag);
console.log(betrag + 1);
console.log(Number(betrag) + 1);

// Ausgabe:
// string
// 4.501
// 5.5
