// Kapitel 9, Abschnitt 9.7 – Schritt 1: Kontakte erzeugen und anzeigen
// Ausführen: node 09-07-01_kontakt-erzeugen-und-anzeigen.js

function erstelleKontakt(name, telefon, stadt) {
  return { name, telefon, stadt };
}

function zeigeKontakt(kontakt) {
  console.log(kontakt.name);
  console.log("  Telefon: " + kontakt.telefon);
  console.log("  Stadt:   " + kontakt.stadt);
}

const ben = erstelleKontakt(
  "Ben", "0170 1234567", "Mainz"
);
zeigeKontakt(ben);

// Ausgabe:
// Ben
//   Telefon: 0170 1234567
//   Stadt:   Mainz
