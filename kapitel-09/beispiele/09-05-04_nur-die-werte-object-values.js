// Kapitel 9, Abschnitt 9.5 – Nur die Werte: Object.values
// Ausführen: node 09-05-04_nur-die-werte-object-values.js

const punkte = { anna: 12, ben: 9, clara: 15 };
let gesamt = 0;

for (const wert of Object.values(punkte)) {
  gesamt += wert;
}

console.log(Object.values(punkte));
console.log("Gesamt: " + gesamt);

// Ausgabe:
// [ 12, 9, 15 ]
// Gesamt: 36
