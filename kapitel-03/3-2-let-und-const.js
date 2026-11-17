// Kapitel 3.2 – let und const

// let: Der Wert darf sich ändern
let punkte = 0;
console.log("Start:", punkte);

punkte = 10;
console.log("Nach Runde 1:", punkte);

punkte = 25;
console.log("Nach Runde 2:", punkte);

console.log();

// let ohne Startwert
let ergebnis;
console.log(ergebnis);

ergebnis = 42;
console.log(ergebnis);

console.log();

// const: Der Wert bleibt fest
const geburtsJahr = 1990;
console.log(geburtsJahr);

// FEHLER: Assignment to constant variable
// geburtsJahr = 1991;

// FEHLER: Missing initializer in const declaration
// const stadt;

// FEHLER: Identifier 'punkte' has already been declared
// let punkte = 99;
