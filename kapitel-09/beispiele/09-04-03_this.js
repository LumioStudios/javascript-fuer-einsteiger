// Kapitel 9, Abschnitt 9.4 – Auf das eigene Objekt zugreifen: this
// Ausführen: node 09-04-03_this.js

const hund = {
  name: "Bello",
  vorstellen() {
    console.log("Ich bin " + this.name + ".");
  }
};

hund.vorstellen();

// Ausgabe:
// Ich bin Bello.
