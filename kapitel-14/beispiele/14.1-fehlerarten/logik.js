// Kapitel 14.1 – Logikfehler
// Enthält ABSICHTLICH einen Fehler: Punkt vor Strich.
// Starten mit: node logik.js

function berechneDurchschnitt(a, b) {
  return a + b / 2;
}

console.log(berechneDurchschnitt(2, 4));

// Richtig wäre:
// return (a + b) / 2;
