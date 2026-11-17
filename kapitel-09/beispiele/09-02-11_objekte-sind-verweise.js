// Kapitel 9, Abschnitt 9.2 – Objekte sind Verweise
// Ausführen: node 09-02-11_objekte-sind-verweise.js

const a = { farbe: "Rot" };
const b = { farbe: "Rot" };
const c = a;

console.log(a === b);
console.log(a === c);

// Ausgabe:
// false
// true
