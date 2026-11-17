// Kapitel 10.6: Datum und Uhrzeit mit Date – die Grundlagen
// Mit Daten rechnen
// Ausführen im Ordner kapitel-10: node beispiele/10-6-09_mit-daten-rechnen.js

const heute = new Date(2026, 10, 13);
const weihnachten = new Date(2026, 11, 24);

const differenz = weihnachten - heute;
const msProTag = 1000 * 60 * 60 * 24;
const tage = Math.round(differenz / msProTag);

console.log(differenz);
console.log(`Noch ${tage} Tage bis Weihnachten.`);

// Ausgabe:
// 3542400000
// Noch 41 Tage bis Weihnachten.
