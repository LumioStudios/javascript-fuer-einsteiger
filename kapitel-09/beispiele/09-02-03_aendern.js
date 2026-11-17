// Kapitel 9, Abschnitt 9.2 – Ändern
// Ausführen: node 09-02-03_aendern.js

const person = { name: "Anna", alter: 34 };

person.alter = 35; // Anna hatte Geburtstag
person.alter += 1; // und noch einmal

console.log(person);

// Ausgabe:
// { name: 'Anna', alter: 36 }
