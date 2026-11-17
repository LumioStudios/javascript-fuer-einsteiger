// Kapitel 9 – Lösung zu Übung 9.4: Klassenliste
// Ausführen: node uebung-9-4_klassenliste_teil-1-3.js

const schueler = [
  { name: "Lena", note: 2 },
  { name: "Tim", note: 4 },
  { name: "Sara", note: 1 },
  { name: "Jonas", note: 3 },
  { name: "Mia", note: 2 }
];

// 1. Alle ausgeben
for (const person of schueler) {
  console.log(person.name + ": " + person.note);
}

// 2. Durchschnitt
let summe = 0;

for (const person of schueler) {
  summe += person.note;
}

console.log("Durchschnitt: " + summe / schueler.length);

// 3. Note 2 oder besser
const gute = [];

for (const person of schueler) {
  if (person.note <= 2) {
    gute.push(person.name);
  }
}

console.log("Note 2 oder besser:", gute);

// Ausgabe:
// Lena: 2
// Tim: 4
// Sara: 1
// Jonas: 3
// Mia: 2
// Durchschnitt: 2.4
// Note 2 oder besser: [ 'Lena', 'Sara', 'Mia' ]
