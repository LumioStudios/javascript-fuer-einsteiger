// Kapitel 9, Abschnitt 9.5 – Mit for…in
// Ausführen: node 09-05-01_mit-for-in.js

const person = {
  name: "Anna",
  alter: 34,
  wohnort: "Köln"
};

for (const schluessel in person) {
  console.log(schluessel + ": " + person[schluessel]);
}

// Ausgabe:
// name: Anna
// alter: 34
// wohnort: Köln
