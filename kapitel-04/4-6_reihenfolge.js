// Kapitel 4.6 – Reihenfolge der Auswertung
// Ausführen: node 4-6_reihenfolge.js

// --- Punkt vor Strich ---
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);

// --- Rangfolge: Vergleich, dann UND, dann Zuweisung ---
const alter = 20;
const hatTicket = true;

const darfRein = alter >= 18 && hatTicket;
console.log("Darf rein:", darfRein);

// --- UND vor ODER ---
console.log(true || false && false);
console.log((true || false) && false);

// --- Von links nach rechts ---
console.log(10 - 4 - 3);
console.log(100 / 10 / 2);

// Verkettung von links nach rechts
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);

// Klammern bei Ausgaben
const a = 5;
const b = 3;

console.log("Summe: " + a + b);
console.log("Summe: " + (a + b));
