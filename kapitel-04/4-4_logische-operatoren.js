// Kapitel 4.4 – Logische Operatoren
// Ausführen: node 4-4_logische-operatoren.js

// --- UND: && ---
const alter = 20;
const hatTicket = true;

const darfRein = alter >= 18 && hatTicket;
console.log("Darf rein:", darfRein);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// --- ODER: || ---
const istSchueler = false;
const istRentner = true;

const bekommtRabatt = istSchueler || istRentner;
console.log("Rabatt:", bekommtRabatt);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// --- NICHT: ! ---
const istAngemeldet = false;

console.log(!istAngemeldet);
console.log(!true);

// --- Mehrere Bedingungen kombinieren ---
const temperatur = 22;

const istAngenehm =
  temperatur >= 18 && temperatur <= 25;

console.log("Angenehm:", istAngenehm);
