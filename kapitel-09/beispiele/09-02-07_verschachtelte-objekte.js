// Kapitel 9, Abschnitt 9.2 – Verschachtelte Objekte
// Ausführen: node 09-02-07_verschachtelte-objekte.js

const kunde = {
  name: "Ben Krüger",
  adresse: {
    strasse: "Hauptstraße 5",
    ort: "Mainz"
  },
  bestellungen: [1021, 1047]
};

console.log(kunde.adresse.ort);
console.log(kunde.bestellungen[0]);

// Ausgabe:
// Mainz
// 1021
