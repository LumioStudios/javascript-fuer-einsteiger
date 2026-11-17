// Kapitel 10.1: Template Literals
// Ausdrücke in den Platzhaltern
// Ausführen im Ordner kapitel-10: node beispiele/10-1-03_ausdruecke-in-den-platzhaltern.js

const person = { name: "Ben", alter: 41 };

function verdopple(zahl) {
  return zahl * 2;
}

console.log(`${person.name} ist ${person.alter}.`);
console.log(`Doppelt: ${verdopple(person.alter)}`);

// Ausgabe:
// Ben ist 41.
// Doppelt: 82
