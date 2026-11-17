// Kapitel 9 – Lösung zu Übung 9.4: Klassenliste
// Ausführen: node uebung-9-4_klassenliste_teil-4.js

function findeBeste(liste) {
  let beste = liste[0];

  for (const person of liste) {
    if (person.note < beste.note) {
      beste = person;
    }
  }

  return beste;
}

const schueler = [
  { name: "Lena", note: 2 },
  { name: "Tim", note: 4 },
  { name: "Sara", note: 1 },
  { name: "Jonas", note: 3 },
  { name: "Mia", note: 2 }
];

const beste = findeBeste(schueler);
console.log("Beste Note: " + beste.name +
  " mit " + beste.note);

// Ausgabe:
// Beste Note: Sara mit 1
