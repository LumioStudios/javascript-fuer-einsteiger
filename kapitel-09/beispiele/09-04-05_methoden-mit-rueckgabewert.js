// Kapitel 9, Abschnitt 9.4 – Methoden mit Rückgabewert
// Ausführen: node 09-04-05_methoden-mit-rueckgabewert.js

const rechteck = {
  breite: 4,
  hoehe: 3,
  flaeche() {
    return this.breite * this.hoehe;
  },
  umfang() {
    return 2 * (this.breite + this.hoehe);
  }
};

console.log("Fläche: " + rechteck.flaeche());
console.log("Umfang: " + rechteck.umfang());

// Ausgabe:
// Fläche: 12
// Umfang: 14
