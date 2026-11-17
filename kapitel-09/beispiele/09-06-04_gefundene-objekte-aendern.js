// Kapitel 9, Abschnitt 9.6 – Gefundene Objekte ändern
// Ausführen: node 09-06-04_gefundene-objekte-aendern.js

const produkte = [
  { name: "Kaffee", preis: 6.49 },
  { name: "Tee", preis: 3.99 }
];

const kaffee = produkte.find((p) => p.name === "Kaffee");

if (kaffee !== undefined) {
  kaffee.preis = 5.99; // Sonderangebot
}

console.log(produkte[0]);

// Ausgabe:
// { name: 'Kaffee', preis: 5.99 }
