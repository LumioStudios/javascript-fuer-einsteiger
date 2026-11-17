// Kapitel 14.3 – die korrigierte Fassung
// Starten mit: node noten-korrigiert.js

function berechneDurchschnitt(noten) {
  let summe = 0;

  for (let i = 0; i < noten.length; i++) {
    summe += noten[i];
  }

  return summe / noten.length;
}

console.log(berechneDurchschnitt([2, 3, 1]));
