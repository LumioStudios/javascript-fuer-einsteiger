// Kapitel 9, Abschnitt 9.4 – Methoden – Funktionen in Objekten
// Ausführen: node 09-04-01_methode-anlegen.js

const hund = {
  name: "Bello",
  bellen: function () {
    console.log("Wuff!");
  }
};

hund.bellen();

// Ausgabe:
// Wuff!
