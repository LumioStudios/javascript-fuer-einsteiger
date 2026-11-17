// Kapitel 9, Abschnitt 9.2 – Gibt es diese Eigenschaft?
// Ausführen: node 09-02-06_gibt-es-diese-eigenschaft.js

const person = { name: "Anna", alter: 34 };

console.log("alter" in person);
console.log("beruf" in person);

// Ausgabe:
// true
// false
