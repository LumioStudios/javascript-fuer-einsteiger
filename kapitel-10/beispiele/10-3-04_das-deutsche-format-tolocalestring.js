// Kapitel 10.3: Zahlen formatieren
// Das deutsche Format: toLocaleString
// Ausführen im Ordner kapitel-10: node beispiele/10-3-04_das-deutsche-format-tolocalestring.js

const betrag = 1234567.891;

console.log(betrag.toLocaleString("de-DE"));
console.log(betrag.toLocaleString("en-US"));

// Ausgabe:
// 1.234.567,891
// 1,234,567.891
