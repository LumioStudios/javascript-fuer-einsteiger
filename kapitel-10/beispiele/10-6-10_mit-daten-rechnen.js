// Kapitel 10.6: Datum und Uhrzeit mit Date – die Grundlagen
// Mit Daten rechnen
// Ausführen im Ordner kapitel-10: node beispiele/10-6-10_mit-daten-rechnen.js

const start = Date.now();

let summe = 0;
for (let i = 0; i < 10000000; i++) {
  summe += i;
}

const dauer = Date.now() - start;

console.log(`Zehn Millionen Durchläufe: ${dauer} ms`);

// Ausgabe (Beispiel):
// Zehn Millionen Durchläufe: 12 ms
