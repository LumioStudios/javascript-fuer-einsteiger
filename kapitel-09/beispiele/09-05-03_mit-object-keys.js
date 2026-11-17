// Kapitel 9, Abschnitt 9.5 – Mit Object.keys
// Ausführen: node 09-05-03_mit-object-keys.js

const punkte = { anna: 12, ben: 9, clara: 15 };

for (const name of Object.keys(punkte)) {
  console.log(name + " hat " + punkte[name] + " Punkte.");
}

// Ausgabe:
// anna hat 12 Punkte.
// ben hat 9 Punkte.
// clara hat 15 Punkte.
