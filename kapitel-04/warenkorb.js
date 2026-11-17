// Kapitel 4 – Alles zusammen: Ein kleiner Warenkorb
// Ausführen: node warenkorb.js

// Preise in Euro
const preisTasse = 4;
const preisTeller = 4;

// Warenkorb füllen
let summe = 0;
summe += preisTasse * 3;
summe += preisTeller * 2;

// Ab 20 Euro gibt es 10 Prozent Rabatt
const hatRabatt = summe >= 20;
const rabatt = summe / 10;

console.log("Summe:", summe);
console.log("Rabatt möglich:", hatRabatt);
console.log("Endpreis:", summe - rabatt);
