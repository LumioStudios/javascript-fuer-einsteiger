// Kapitel 5.1 – Der Warenkorb aus Kapitel 4
// Rabatt nur ab 20 Euro. Teste auch mit summe = 18.

const summe = 30;
let endPreis = summe;

if (summe >= 20) {
  endPreis = summe - summe / 10;
  console.log("10 % Rabatt abgezogen.");
}

console.log("Endpreis:", endPreis);
