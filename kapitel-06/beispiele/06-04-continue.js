// Kapitel 6.4 – continue: diese Runde überspringen
for (let etage = 10; etage <= 15; etage++) {
  if (etage === 13) {
    continue; // 13 überspringen
  }

  console.log("Etage", etage);
}
