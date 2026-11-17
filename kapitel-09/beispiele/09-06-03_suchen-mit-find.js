// Kapitel 9, Abschnitt 9.6 – Suchen mit find
// Ausführen: node 09-06-03_suchen-mit-find.js

const produkte = [
  { name: "Kaffee", preis: 6.49 },
  { name: "Tee", preis: 3.99 },
  { name: "Kakao", preis: 4.29 }
];

const tee = produkte.find((p) => p.name === "Tee");

console.log(tee);
console.log("Tee kostet " + tee.preis + " Euro.");

// Ausgabe:
// { name: 'Tee', preis: 3.99 }
// Tee kostet 3.99 Euro.
