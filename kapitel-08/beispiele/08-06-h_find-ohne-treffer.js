// Kapitel 8.6 – Suchen: includes, indexOf, find

const preise = [2.99, 0.79, 1.29];

const teuer = preise.find((preis) => preis > 5);

if (teuer === undefined) {
  console.log("Nichts über 5 Euro.");
} else {
  console.log("Gefunden: " + teuer);
}
