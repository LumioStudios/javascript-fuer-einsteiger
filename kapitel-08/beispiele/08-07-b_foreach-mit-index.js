// Kapitel 8.7 – forEach – ein erster Blick

const gaeste = ["Anna", "Ben", "Clara"];

gaeste.forEach((gast, index) => {
  console.log("Platz " + (index + 1) + ": " + gast);
});
