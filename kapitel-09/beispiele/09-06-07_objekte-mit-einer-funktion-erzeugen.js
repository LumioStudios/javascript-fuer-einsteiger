// Kapitel 9, Abschnitt 9.6 – Objekte mit einer Funktion erzeugen
// Ausführen: node 09-06-07_objekte-mit-einer-funktion-erzeugen.js

function erstelleProdukt(name, preis) {
  return { name, preis, vorraetig: true };
}

console.log(erstelleProdukt("Kakao", 4.29));

// Ausgabe:
// { name: 'Kakao', preis: 4.29, vorraetig: true }
