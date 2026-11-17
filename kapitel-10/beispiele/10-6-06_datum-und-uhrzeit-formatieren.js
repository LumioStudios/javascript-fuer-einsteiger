// Kapitel 10.6: Datum und Uhrzeit mit Date – die Grundlagen
// Datum und Uhrzeit formatieren
// Ausführen im Ordner kapitel-10: node beispiele/10-6-06_datum-und-uhrzeit-formatieren.js

const datum = new Date(2026, 10, 13, 17, 50);

console.log(datum.toLocaleDateString("de-DE"));
console.log(datum.toLocaleTimeString("de-DE"));
console.log(datum.toLocaleString("de-DE"));

// Ausgabe:
// 13.11.2026
// 17:50:00
// 13.11.2026, 17:50:00
