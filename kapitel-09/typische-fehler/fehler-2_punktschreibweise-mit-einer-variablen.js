// Kapitel 9 – Typischer Fehler 2: Punktschreibweise mit einer Variablen
// Dieses Beispiel erzeugt absichtlich einen Fehler.
// Ausführen: node fehler-2_punktschreibweise-mit-einer-variablen.js

const person = { name: "Anna", alter: 34 };
const feld = "alter";

console.log(person.feld);

// Ausgabe:
// undefined
