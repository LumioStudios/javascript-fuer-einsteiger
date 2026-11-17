// Kapitel 4 – Typische Fehler
// Ausführen: node typische-fehler.js

// --- Fehler 1: = statt === ---
let alter = 16;
console.log(alter = 18); // Zuweisung, kein Vergleich!
console.log(alter);      // alter wurde verändert

// Richtig: mit === vergleichen
alter = 16;
console.log(alter === 18);
console.log(alter);

// --- Fehler 2: Zahlen und Texte mit + verbinden ---
const a = 5;
const b = 3;

console.log("Summe: " + a + b);   // falsch: 53
console.log("Summe: " + (a + b)); // richtig: 8

// --- Fehler 3: == statt === ---
console.log(0 == "");  // true – überraschend
console.log(0 === ""); // false – wie erwartet

// --- Fehler 4: Auf NaN mit === prüfen ---
const wert = Number("abc");

console.log(wert === NaN);       // immer false
console.log(Number.isNaN(wert)); // richtig: true
