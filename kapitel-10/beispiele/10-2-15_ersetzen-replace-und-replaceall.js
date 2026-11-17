// Kapitel 10.2: Wichtige String-Methoden
// Ersetzen: replace und replaceAll
// Ausführen im Ordner kapitel-10: node beispiele/10-2-15_ersetzen-replace-und-replaceall.js

const eingabe = "12,5";

console.log(Number(eingabe));
console.log(Number(eingabe.replace(",", ".")));

// Ausgabe:
// NaN
// 12.5
