// Kapitel 4.2 – Zuweisungsoperatoren
// Ausführen: node 4-2_zuweisungsoperatoren.js

// --- Die lange Schreibweise ---
let punkte = 10;
punkte = punkte + 5;
console.log(punkte);

// --- Rechnen und zuweisen in einem Schritt ---
// Startwert wieder auf 10 setzen
punkte = 10;

punkte += 5;
console.log(punkte);

punkte -= 3;
console.log(punkte);

punkte *= 2;
console.log(punkte);

punkte /= 4;
console.log(punkte);

// --- += mit Texten ---
let nachricht = "Hallo";
nachricht += ", ";
nachricht += "Welt";
nachricht += "!";

console.log(nachricht);

// --- Hoch- und runterzählen mit ++ und -- ---
let zaehler = 0;

zaehler++;
console.log(zaehler);

zaehler++;
zaehler++;
console.log(zaehler);

zaehler--;
console.log(zaehler);
