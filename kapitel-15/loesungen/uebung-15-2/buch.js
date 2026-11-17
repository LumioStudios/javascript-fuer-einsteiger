// Übung 15.2 – Hin und zurück
// Ausführen: node buch.js

const buch = {
  titel: "Gemüse im Garten",
  autor: "Lea Berg",
  seiten: 180,
  gelesen: false,
  kapitel: ["Der Boden", "Aussaat", "Ernte"],
  beschreibe() {
    return `${this.titel} von ${this.autor}`;
  }
};

console.log(buch.beschreibe());

// Teil 1: kompakt und eingerückt
const kompakt = JSON.stringify(buch);
console.log(kompakt);
console.log(JSON.stringify(buch, null, 2));

// Teil 2: Länge
console.log(kompakt.length);

// Teil 3: zurückwandeln
const kopie = JSON.parse(kompakt);
console.log(kopie.kapitel[1]);

// Teil 4: Was ist mit der Methode?
console.log(typeof kopie.beschreibe);
