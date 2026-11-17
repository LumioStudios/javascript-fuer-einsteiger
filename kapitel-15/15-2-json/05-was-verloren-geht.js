// 15.2 Was beim Einpacken verloren geht
// Ausführen: node 05-was-verloren-geht.js

const daten = {
  name: "Anna",
  spitzname: undefined,
  gruss() {
    return "Hallo!";
  },
  ergebnis: 0 / 0,
  erstellt: new Date("2026-05-01T10:00:00Z")
};

console.log(JSON.stringify(daten, null, 2));

// Nach dem Zurückwandeln ist das Datum ein String
const kopie = JSON.parse(JSON.stringify(daten));
console.log(typeof kopie.erstellt);
