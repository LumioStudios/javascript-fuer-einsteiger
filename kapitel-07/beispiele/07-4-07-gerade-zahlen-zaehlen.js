// Kapitel 7, Abschnitt 7.4: Gerade Zahlen zählen
// Hilfsfunktion aus dem vorherigen Beispiel:

function istGerade(zahl) {
  return zahl % 2 === 0;
}

let anzahl = 0;

for (let zahl = 1; zahl <= 20; zahl++) {
  if (istGerade(zahl)) {
    anzahl++;
  }
}

console.log("Gerade Zahlen:", anzahl);
