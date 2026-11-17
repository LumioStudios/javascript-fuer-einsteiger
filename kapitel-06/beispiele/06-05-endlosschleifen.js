// Kapitel 6.5 – Endlosschleifen erkennen
// ACHTUNG: Die fehlerhaften Schleifen sind auskommentiert.
// Entfernst du die Kommentarzeichen, läuft die Schleife
// endlos. In Node.js beendest du sie mit Strg + C.

// Ursache 1: Die Veränderung fehlt
// let zaehler = 1;
// while (zaehler <= 5) {
//   console.log(zaehler);
//   // Hier fehlt zaehler++
// }

// Ursache 2: Die falsche Richtung (richtig wäre i--)
// for (let i = 10; i > 0; i++) {
//   console.log(i);
// }

// Ursache 3: Das Ziel wird übersprungen (1, 3, 5, …)
// for (let i = 1; i !== 10; i += 2) {
//   console.log(i);
// }

// Kommazahlen sind nicht immer exakt:
console.log(0.1 + 0.2);

// Ursache 4: continue überspringt die Veränderung
// let etage = 10;
// while (etage <= 15) {
//   if (etage === 13) {
//     continue;
//   }
//   console.log("Etage", etage);
//   etage++;
// }
