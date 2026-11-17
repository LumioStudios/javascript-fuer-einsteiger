// Kapitel 7, Abschnitt 7.6: Funktionsausdruck vor der Definition aufrufen
// Achtung: Dieses Beispiel endet absichtlich mit einem Fehler.

console.log(halbiere(10));

const halbiere = function (zahl) {
  return zahl / 2;
};
