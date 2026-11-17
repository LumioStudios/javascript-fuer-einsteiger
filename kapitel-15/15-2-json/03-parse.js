// 15.2 Vom Text zum Objekt: JSON.parse
// Ausführen: node 03-parse.js

// Außen einfache Anführungszeichen, weil der
// JSON-Text selbst doppelte enthält
const text = '{"name":"Ben","punkte":120}';

const kunde = JSON.parse(text);

console.log(typeof kunde);
console.log(kunde.name);
console.log(kunde.punkte + 30);
