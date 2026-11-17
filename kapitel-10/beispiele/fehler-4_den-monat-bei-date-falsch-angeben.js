// Kapitel 10 – Typische Fehler 4
// Den Monat bei `Date` falsch angeben
// ACHTUNG: Dieses Beispiel ist absichtlich fehlerhaft.
// Ausführen im Ordner kapitel-10: node beispiele/fehler-4_den-monat-bei-date-falsch-angeben.js

const termin = new Date(2026, 5, 1);

console.log(termin.toLocaleDateString("de-DE"));

// Ausgabe:
// 1.6.2026
