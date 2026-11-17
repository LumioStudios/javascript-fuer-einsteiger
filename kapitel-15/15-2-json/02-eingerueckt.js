// 15.2 Schön eingerückt ausgeben
// Ausführen: node 02-eingerueckt.js

const kunde = { name: "Ben", punkte: 120 };

// null ist ein Platzhalter, 2 = zwei Leerzeichen
console.log(JSON.stringify(kunde, null, 2));
