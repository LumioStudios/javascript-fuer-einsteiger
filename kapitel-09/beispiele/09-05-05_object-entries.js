// Kapitel 9, Abschnitt 9.5 – Schlüssel und Wert zusammen: Object.entries
// Ausführen: node 09-05-05_object-entries.js

const punkte = { anna: 12, ben: 9 };

for (const eintrag of Object.entries(punkte)) {
  console.log(eintrag);
  console.log(eintrag[0] + " -> " + eintrag[1]);
}

// Ausgabe:
// [ 'anna', 12 ]
// anna -> 12
// [ 'ben', 9 ]
// ben -> 9
