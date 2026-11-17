// Lösung zu Übung 6.5, Zusatzaufgabe
// Einmaleins mit Kopfzeile und Zeilennummern
const groesse = 5;

// Kopfzeile mit den Spaltennummern
let kopf = "   x |";

for (let spalte = 1; spalte <= groesse; spalte++) {
  kopf += spalte < 10 ? "   " : "  ";
  kopf += spalte;
}

console.log(kopf);

// Trennlinie: vier Striche pro Spalte
let linie = "-----+";

for (let spalte = 1; spalte <= groesse; spalte++) {
  linie += "----";
}

console.log(linie);

// Die Zeilen mit Zeilennummer
for (let zeile = 1; zeile <= groesse; zeile++) {
  let text = zeile < 10 ? "   " : "  ";
  text += zeile + " |";

  for (let spalte = 1; spalte <= groesse; spalte++) {
    const produkt = zeile * spalte;

    if (produkt < 10) {
      text += "   ";
    } else if (produkt < 100) {
      text += "  ";
    } else {
      text += " ";
    }

    text += produkt;
  }

  console.log(text);
}
