// Kapitel 9, Abschnitt 9.4 – Keine Arrow Functions als Methoden
// Ausführen: node 09-04-06_keine-arrow-functions-als-methoden.js

const fahrrad = {
  besitzer: "Ben",
  zeigeBesitzer: () => {
    console.log("Besitzer: " + this.besitzer);
  }
};

fahrrad.zeigeBesitzer();

// Ausgabe:
// Besitzer: undefined
