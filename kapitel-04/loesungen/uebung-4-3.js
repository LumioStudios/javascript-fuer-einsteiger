// Lösung zu Übung 4.3 – Ein Sparschwein
// Ausführen: node uebung-4-3.js

let kontoStand = 100;
let anzahlBuchungen = 0;

// 1. Einzahlung
kontoStand += 50;
anzahlBuchungen++;
console.log("Nach Einzahlung:", kontoStand);

// 2. Buchkauf
kontoStand -= 25;
anzahlBuchungen++;
console.log("Nach Buchkauf:", kontoStand);

// 3. Verdopplung
kontoStand *= 2;
anzahlBuchungen++;
console.log("Nach Verdopplung:", kontoStand);

// 4. Gerecht teilen
kontoStand /= 2;
anzahlBuchungen++;
console.log("Nach Teilen:", kontoStand);

console.log("Buchungen:", anzahlBuchungen);
