// Kapitel 9, Abschnitt 9.6 – Objekte mit einer Funktion erzeugen
// Ausführen: node 09-06-06_objekte-mit-einer-funktion-erzeugen.js

function erstelleProdukt(name, preis) {
  return {
    name: name,
    preis: preis,
    vorraetig: true
  };
}

const sortiment = [];
sortiment.push(erstelleProdukt("Kaffee", 6.49));
sortiment.push(erstelleProdukt("Tee", 3.99));

console.log(sortiment);

// Ausgabe:
// [
//   { name: 'Kaffee', preis: 6.49, vorraetig: true },
//   { name: 'Tee', preis: 3.99, vorraetig: true }
// ]
