// Kapitel 6.3 – Die while-Schleife
// Tipp: Setze erspartes auf 250 und vergleiche.
let erspartes = 50;
let wochen = 0;

while (erspartes < 200) {
  erspartes += 15;
  wochen++;
}

console.log("Wochen:", wochen);
console.log("Erspartes:", erspartes, "Euro");
