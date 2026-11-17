// Kapitel 9, Abschnitt 9.3 – Der Schlüssel ist kein gültiger Name
// Ausführen: node 09-03-04_sonderzeichen-im-schluessel.js

const kontakt = {
  name: "Clara",
  "e-mail": "clara@beispiel.de",
  "lieblings farbe": "Grün"
};

console.log(kontakt["e-mail"]);
console.log(kontakt["lieblings farbe"]);

// Ausgabe:
// clara@beispiel.de
// Grün
