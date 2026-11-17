// Kapitel 9, Abschnitt 9.2 – Löschen
// Ausführen: node 09-02-05_loeschen.js

const person = {
  name: "Anna",
  alter: 34,
  wohnort: "Köln"
};

delete person.wohnort;

console.log(person);
console.log(person.wohnort);

// Ausgabe:
// { name: 'Anna', alter: 34 }
// undefined
