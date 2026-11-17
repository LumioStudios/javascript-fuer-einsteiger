// Kapitel 9, Abschnitt 9.6 – Arrays von Objekten
// Ausführen: node 09-06-01_arrays-von-objekten.js

const produkte = [
  { name: "Kaffee", preis: 6.49, vorraetig: true },
  { name: "Tee", preis: 3.99, vorraetig: false },
  { name: "Kakao", preis: 4.29, vorraetig: true }
];

console.log(produkte.length);
console.log(produkte[1]);
console.log(produkte[1].name);

// Ausgabe:
// 3
// { name: 'Tee', preis: 3.99, vorraetig: false }
// Tee
