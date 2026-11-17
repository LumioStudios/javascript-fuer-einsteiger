// Kapitel 14.3 – Fehlersuche mit console.log
// Enthält ABSICHTLICH einen Fehler: <= statt <.
// Starten mit: node noten.js

function berechneDurchschnitt(noten) {
  let summe = 0;

  for (let i = 0; i <= noten.length; i++) {
    console.log("i:", i, "Note:", noten[i],
      "Summe:", summe);
    summe += noten[i];
  }

  return summe / noten.length;
}

console.log(berechneDurchschnitt([2, 3, 1]));
