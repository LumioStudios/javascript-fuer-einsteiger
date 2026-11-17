// Kapitel 10.6: Datum und Uhrzeit mit Date – die Grundlagen
// Datum und Uhrzeit formatieren
// Ausführen im Ordner kapitel-10: node beispiele/10-6-07_datum-und-uhrzeit-formatieren.js

const datum = new Date(2026, 10, 13, 17, 50);

const langesDatum = datum.toLocaleDateString("de-DE", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

const uhrzeit = datum.toLocaleTimeString("de-DE", {
  hour: "2-digit",
  minute: "2-digit"
});

console.log(langesDatum);
console.log(`${uhrzeit} Uhr`);

// Ausgabe:
// Freitag, 13. November 2026
// 17:50 Uhr
