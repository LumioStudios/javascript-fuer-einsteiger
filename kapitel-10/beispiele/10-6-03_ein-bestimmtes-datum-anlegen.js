// Kapitel 10.6: Datum und Uhrzeit mit Date – die Grundlagen
// Ein bestimmtes Datum anlegen
// Ausführen im Ordner kapitel-10: node beispiele/10-6-03_ein-bestimmtes-datum-anlegen.js

const termin = new Date("2026-12-24T18:00:00");

console.log(termin.toLocaleString("de-DE"));

// Ausgabe:
// 24.12.2026, 18:00:00
