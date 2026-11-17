// Kapitel 9, Abschnitt 9.2 – Objekte sind Verweise
// Ausführen: node 09-02-10_objekte-sind-verweise.js

function feiereGeburtstag(person) {
  person.alter += 1;
}

const anna = { name: "Anna", alter: 34 };
feiereGeburtstag(anna);

console.log(anna.alter);

// Ausgabe:
// 35
