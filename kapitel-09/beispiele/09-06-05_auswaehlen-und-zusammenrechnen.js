// Kapitel 9, Abschnitt 9.6 – Auswählen und zusammenrechnen
// Ausführen: node 09-06-05_auswaehlen-und-zusammenrechnen.js

const produkte = [
  { name: "Kaffee", preis: 6.5, vorraetig: true },
  { name: "Tee", preis: 4, vorraetig: false },
  { name: "Kakao", preis: 4.5, vorraetig: true }
];

const lieferbar = [];
let summe = 0;

for (const produkt of produkte) {
  if (produkt.vorraetig) {
    lieferbar.push(produkt.name);
    summe += produkt.preis;
  }
}

console.log("Lieferbar:", lieferbar);
console.log("Alles zusammen: " + summe + " Euro");

// Ausgabe:
// Lieferbar: [ 'Kaffee', 'Kakao' ]
// Alles zusammen: 11 Euro
