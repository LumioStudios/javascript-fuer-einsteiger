// Kapitel 9, Abschnitt 9.3 – Der Schlüssel steht in einer Variablen
// Ausführen: node 09-03-03_schluessel-in-variable.js

function zeigeFeld(objekt, feld) {
  if (feld in objekt) {
    console.log(feld + ": " + objekt[feld]);
  } else {
    console.log("Das Feld " + feld + " gibt es nicht.");
  }
}

const auto = { marke: "Opel", farbe: "Grau" };

zeigeFeld(auto, "farbe");
zeigeFeld(auto, "baujahr");

// Ausgabe:
// farbe: Grau
// Das Feld baujahr gibt es nicht.
