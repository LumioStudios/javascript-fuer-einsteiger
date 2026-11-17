// Kapitel 14.2 – „is not a function“
// Starten mit: node kein-function.js

const preis = "4.5";

// Falsch: Strings haben keine Methode toFixed.
// console.log(preis.toFixed(2));

// Richtig: erst umwandeln, dann formatieren
console.log(Number(preis).toFixed(2));
