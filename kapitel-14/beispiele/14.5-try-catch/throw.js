// Kapitel 14.5 – Fehler selbst auslösen mit throw
// Starten mit: node throw.js

function berechneDurchschnitt(noten) {
  if (noten.length === 0) {
    throw new Error("Keine Noten übergeben.");
  }

  let summe = 0;
  for (const note of noten) {
    summe += note;
  }
  return summe / noten.length;
}

try {
  console.log(berechneDurchschnitt([2, 3, 1]));
  console.log(berechneDurchschnitt([]));
} catch (fehler) {
  console.log(`Fehler: ${fehler.message}`);
}
