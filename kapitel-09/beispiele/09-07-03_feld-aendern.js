// Kapitel 9, Abschnitt 9.7 – Schritt 5: Ein Feld ändern
// Ausführen: node 09-07-03_feld-aendern.js

function aendereFeld(kontakt, feld, neuerWert) {
  if (!(feld in kontakt) || feld === "name") {
    console.log("Dieses Feld kann nicht geändert werden.");
    return;
  }

  kontakt[feld] = neuerWert;
  console.log(kontakt.name + ": " + feld + " geändert.");
}

const anna = {
  name: "Anna",
  telefon: "0151",
  stadt: "Köln"
};
aendereFeld(anna, "stadt", "Bonn");
aendereFeld(anna, "alter", "34");
console.log(anna);

// Ausgabe:
// Anna: stadt geändert.
// Dieses Feld kann nicht geändert werden.
// { name: 'Anna', telefon: '0151', stadt: 'Bonn' }
