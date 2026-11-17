// 15.2 Vom Objekt zum Text: JSON.stringify
// Ausführen: node 01-stringify.js

const kunde = {
  name: "Ben",
  punkte: 120,
  aktiv: true
};

const text = JSON.stringify(kunde);

console.log(text);
console.log(typeof text);

// Arrays von Objekten funktionieren genauso
const einkauf = [
  { name: "Brot", menge: 1 },
  { name: "Milch", menge: 2 }
];

console.log(JSON.stringify(einkauf));
