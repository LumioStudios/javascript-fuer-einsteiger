// Kapitel 7, typischer Fehler 4: Eine lokale Variable außerhalb verwenden
// Dieser Code ist absichtlich fehlerhaft.

function berechneSumme(zahl1, zahl2) {
  const summe = zahl1 + zahl2;
}

berechneSumme(4, 5);
console.log(summe);
