// Kapitel 7, Abschnitt 7.7: Parameter sind Kopien

function erhoehe(betrag) {
  betrag = betrag + 10;
  return betrag;
}

const preis = 100;
const neuerPreis = erhoehe(preis);

console.log(preis, neuerPreis);
