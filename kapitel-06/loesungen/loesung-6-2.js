// Lösung zu Übung 6.2 – Gerade Summe

// Variante 1: Jede Zahl prüfen
let summe1 = 0;

for (let zahl = 1; zahl <= 50; zahl++) {
  if (zahl % 2 === 0) {
    summe1 += zahl;
  }
}

console.log("Summe (Variante 1):", summe1);

// Variante 2: In Zweierschritten zählen
let summe2 = 0;

for (let zahl = 2; zahl <= 50; zahl += 2) {
  summe2 += zahl;
}

console.log("Summe (Variante 2):", summe2);
