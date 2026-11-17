// Lösung zu Übung 14.1 – alle vier Teile korrigiert
// Starten mit: node loesung-14-1.js

// a) Logikfehler: 19 % aufschlagen
const netto = 100;
const brutto = netto + netto * 19 / 100;
console.log(`Brutto: ${brutto} €`);

// b) Syntaxfehler: Anführungszeichen ergänzt
const stadt = "Frankfurt";
console.log(stadt);

// c) Laufzeitfehler: length statt lenght
const namen = ["Anna", "Ben"];
console.log(namen.length.toString());

// d) Logikfehler: >= statt >
let alter = 18;
if (alter >= 18) {
  console.log("Volljährig");
} else {
  console.log("Minderjährig");
}
