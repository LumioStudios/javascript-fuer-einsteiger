const preise = [20, 45, 80, 120];
const button = document.querySelector("#rechnen");
const ausgabe = document.querySelector("#ausgabe");

function berechneRabatte(liste) {
  const ergebnis = [];

  for (const preis of liste) {
    let rabatt = 0;
    if (preis > 50) {
      rabatt = 10;
    } else if (preis > 100) {
      rabatt = 20;
    }
    ergebnis.push(preis - preis * rabatt / 100);
  }
  return ergebnis;
}

button.addEventListener("click", () => {
  const neuePreise = berechneRabatte(preise);
  ausgabe.textContent = neuePreise.join(", ");
});

// Übung 14.4 – Mit dem Debugger durch eine Schleife
// Enthält ABSICHTLICH einen Fehler.
// Erwartet wird „20, 45, 72, 96“.
// Setze im Reiter Quellen einen Haltepunkt in Zeile 15.
