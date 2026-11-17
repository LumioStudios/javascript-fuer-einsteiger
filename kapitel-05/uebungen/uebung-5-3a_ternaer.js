// Übung 5.3 – Umbauen: if/else zum ternären Operator

const istFormell = true;
const anrede = istFormell ? "Sie" : "du";

const bestellWert = 35;
const versand = bestellWert >= 50 ? 0 : 4.95;

console.log("Anrede:", anrede);
console.log("Versand:", versand);
