// Kapitel 7, typischer Fehler 2: console.log statt return
// Dieser Code ist absichtlich fehlerhaft.

function addiere(zahl1, zahl2) {
  console.log(zahl1 + zahl2);
}

const doppelt = addiere(2, 3) * 2;
console.log(doppelt);
