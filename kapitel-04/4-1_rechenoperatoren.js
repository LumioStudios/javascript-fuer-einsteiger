// Kapitel 4.1 – Rechenoperatoren
// Ausführen: node 4-1_rechenoperatoren.js

// --- Die Grundrechenarten ---
const a = 17;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// --- Der Rest-Operator % ---
console.log(17 % 5);
console.log(10 % 3);
console.log(10 % 2);
console.log(4 % 7);

// Gerade oder ungerade?
console.log(8 % 2);
console.log(7 % 2);

// Minuten in Stunden und Minuten aufteilen
const gesamtMinuten = 125;

const restMinuten = gesamtMinuten % 60;
const stunden = (gesamtMinuten - restMinuten) / 60;

console.log(stunden, "Std.", restMinuten, "Min.");

// --- Der Potenz-Operator ** ---
console.log(2 ** 3);
console.log(10 ** 2);
console.log(2 ** 10);

// --- Plus mit Texten ---
console.log(5 + 3);
console.log("5" + 3);
console.log(5 + "3");
console.log("Hallo" + 5);

// Andere Rechenoperatoren wandeln in Zahlen um
console.log("10" - 3);
console.log("10" * "2");
console.log("Apfel" - 1);

// --- Verkettung in der Praxis ---
const vorname = "Lena";
const alter = 28;

const satz = vorname + " ist " + alter + " Jahre alt.";
console.log(satz);
