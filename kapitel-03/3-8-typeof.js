// Kapitel 3.8 – Den Datentyp prüfen mit typeof

console.log(typeof 42);
console.log(typeof "42");

console.log();

// Alle Datentypen auf einen Blick
console.log(typeof "Hallo");
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // historischer Fehler

console.log();

// typeof mit Variablen
const preis = 9.99;
const artikel = "Kaffeebecher";
const istVorraetig = true;
let rabatt;

console.log(typeof preis);
console.log(typeof artikel);
console.log(typeof istVorraetig);
console.log(typeof rabatt);
