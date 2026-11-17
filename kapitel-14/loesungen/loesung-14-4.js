// Lösung zu Übung 14.4
// Die strengere Bedingung (über 100) steht jetzt zuerst.

const preise = [20, 45, 80, 120];
const button = document.querySelector("#rechnen");
const ausgabe = document.querySelector("#ausgabe");

function berechneRabatte(liste) {
  const ergebnis = [];

  for (const preis of liste) {
    let rabatt = 0;
    if (preis > 100) {
      rabatt = 20;
    } else if (preis > 50) {
      rabatt = 10;
    }
    ergebnis.push(preis - preis * rabatt / 100);
  }
  return ergebnis;
}

button.addEventListener("click", () => {
  const neuePreise = berechneRabatte(preise);
  ausgabe.textContent = neuePreise.join(", ");
});
