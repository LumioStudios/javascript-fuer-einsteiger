// Kapitel 3.9 – Alles zusammen: Das Alter berechnen
// Nur im Browser ausführbar (prompt fehlt in Node.js)

// Aktuelles Jahr steht fest
const aktuellesJahr = 2026;

// Eingabe ist immer ein String
const eingabe = prompt("In welchem Jahr bist du geboren?");

// In eine Zahl umwandeln
const geburtsJahr = Number(eingabe);
const alter = aktuellesJahr - geburtsJahr;

console.log("Eingabe:", eingabe, typeof eingabe);
console.log("Umgewandelt:", geburtsJahr);
console.log("Du wirst dieses Jahr", alter);
