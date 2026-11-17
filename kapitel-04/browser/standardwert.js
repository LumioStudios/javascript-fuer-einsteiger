// Kapitel 4.5 – Standardwert mit prompt und ||
// Nur im Browser lauffähig, nicht mit Node.js

// Leere Eingabe oder Abbrechen ergibt "Gast"
const name = prompt("Wie heißt du?") || "Gast";
console.log("Hallo,", name);
