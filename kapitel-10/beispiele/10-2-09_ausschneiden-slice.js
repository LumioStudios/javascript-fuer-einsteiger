// Kapitel 10.2: Wichtige String-Methoden
// Ausschneiden: slice
// Ausführen im Ordner kapitel-10: node beispiele/10-2-09_ausschneiden-slice.js

function grossAnfang(wort) {
  const erster = wort.slice(0, 1).toUpperCase();
  return erster + wort.slice(1);
}

console.log(grossAnfang("frankfurt"));
console.log(grossAnfang(""));

// Ausgabe:
// Frankfurt
