// Kapitel 10.6: Datum und Uhrzeit mit Date – die Grundlagen
// Einzelne Teile auslesen
// Ausführen im Ordner kapitel-10: node beispiele/10-6-05_einzelne-teile-auslesen.js

const wochentage = [
  "Sonntag", "Montag", "Dienstag", "Mittwoch",
  "Donnerstag", "Freitag", "Samstag"
];

const datum = new Date(2026, 10, 13);
const tag = wochentage[datum.getDay()];

console.log(`Der 13.11.2026 ist ein ${tag}.`);

// Ausgabe:
// Der 13.11.2026 ist ein Freitag.
