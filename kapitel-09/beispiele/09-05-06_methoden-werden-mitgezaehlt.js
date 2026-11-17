// Kapitel 9, Abschnitt 9.5 – Methoden werden mitgezählt
// Ausführen: node 09-05-06_methoden-werden-mitgezaehlt.js

const hund = {
  name: "Bello",
  bellen() {
    console.log("Wuff!");
  }
};

console.log(Object.keys(hund));

// Ausgabe:
// [ 'name', 'bellen' ]
