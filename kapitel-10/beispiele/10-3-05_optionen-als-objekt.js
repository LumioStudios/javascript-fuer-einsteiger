// Kapitel 10.3: Zahlen formatieren
// Optionen als Objekt
// Ausführen im Ordner kapitel-10: node beispiele/10-3-05_optionen-als-objekt.js

const preis = 4.5;

const text = preis.toLocaleString("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

console.log(text);

// Ausgabe:
// 4,50
