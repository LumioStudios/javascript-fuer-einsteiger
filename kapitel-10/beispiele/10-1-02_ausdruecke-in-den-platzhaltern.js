// Kapitel 10.1: Template Literals
// Ausdrücke in den Platzhaltern
// Ausführen im Ordner kapitel-10: node beispiele/10-1-02_ausdruecke-in-den-platzhaltern.js

const preis = 4.5;
const menge = 3;
const vorraetig = true;

console.log(`${menge} Stück: ${preis * menge} Euro`);
console.log(`Status: ${vorraetig ? "da" : "aus"}`);

// Ausgabe:
// 3 Stück: 13.5 Euro
// Status: da
