// Kapitel 9 – Lösung zu Übung 9.1: Steckbrief
// Ausführen: node uebung-9-1_steckbrief.js

const haustier = {
  name: "Bello",
  art: "Hund",
  alter: 5
};

// 1. Satz ausgeben
console.log(haustier.name + " ist ein " + haustier.art +
  " und " + haustier.alter + " Jahre alt.");

// 2. Geburtstag
haustier.alter += 1;

// 3. Neue Eigenschaft
haustier.lieblingsfutter = "Leberwurst";

// 4. Alle Eigenschaften ausgeben
for (const schluessel in haustier) {
  console.log(schluessel + ": " + haustier[schluessel]);
}

// Ausgabe:
// Bello ist ein Hund und 5 Jahre alt.
// name: Bello
// art: Hund
// alter: 6
// lieblingsfutter: Leberwurst
