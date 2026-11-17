// Kapitel 10.3: Zahlen formatieren
// Zahlen aus Texten lesen: parseInt und parseFloat
// Ausführen im Ordner kapitel-10: node beispiele/10-3-09_zahlen-aus-texten-lesen-parseint-und.js

console.log(Number("42px"));
console.log(parseInt("42px"));
console.log(parseFloat("3.75 kg"));
console.log(parseInt("3.75 kg"));
console.log(parseInt("Preis: 5"));

// Ausgabe:
// NaN
// 42
// 3.75
// 3
// NaN
