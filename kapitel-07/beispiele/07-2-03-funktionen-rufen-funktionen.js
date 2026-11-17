// Kapitel 7, Abschnitt 7.2: Funktionen rufen Funktionen auf

function zeigeTrennlinie() {
  console.log("----------");
}

function zeigeKopf() {
  zeigeTrennlinie();
  console.log("Mein Programm");
  zeigeTrennlinie();
}

zeigeKopf();
