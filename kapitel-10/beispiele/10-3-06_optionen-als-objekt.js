// Kapitel 10.3: Zahlen formatieren
// Optionen als Objekt
// Ausführen im Ordner kapitel-10: node beispiele/10-3-06_optionen-als-objekt.js

const preis = 1299.9;

const euro = preis.toLocaleString("de-DE", {
  style: "currency",
  currency: "EUR"
});

console.log(euro);

// Ausgabe:
// 1.299,90 €
