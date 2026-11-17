// Kapitel 9, Abschnitt 9.4 – Methoden, die Daten ändern
// Ausführen: node 09-04-04_methoden-die-daten-aendern.js

const konto = {
  inhaber: "Anna",
  stand: 100,
  einzahlen(betrag) {
    this.stand += betrag;
  },
  abheben(betrag) {
    if (betrag > this.stand) {
      console.log("Nicht genug Geld!");
      return;
    }
    this.stand -= betrag;
  }
};

konto.einzahlen(50);
konto.abheben(500);
konto.abheben(30);
console.log("Kontostand: " + konto.stand);

// Ausgabe:
// Nicht genug Geld!
// Kontostand: 120
