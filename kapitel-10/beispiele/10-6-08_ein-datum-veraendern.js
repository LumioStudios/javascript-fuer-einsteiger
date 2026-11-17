// Kapitel 10.6: Datum und Uhrzeit mit Date – die Grundlagen
// Ein Datum verändern
// Ausführen im Ordner kapitel-10: node beispiele/10-6-08_ein-datum-veraendern.js

const start = new Date(2026, 11, 28);
const spaeter = new Date(start); // Kopie

spaeter.setDate(spaeter.getDate() + 7);

console.log(start.toLocaleDateString("de-DE"));
console.log(spaeter.toLocaleDateString("de-DE"));

// Ausgabe:
// 28.12.2026
// 4.1.2027
