// Kapitel 9, Abschnitt 9.5 – Mit Object.keys
// Ausführen: node 09-05-02_mit-object-keys.js

const person = {
  name: "Anna",
  alter: 34,
  wohnort: "Köln"
};

const schluessel = Object.keys(person);

console.log(schluessel);
console.log("Anzahl Angaben: " + schluessel.length);

// Ausgabe:
// [ 'name', 'alter', 'wohnort' ]
// Anzahl Angaben: 3
