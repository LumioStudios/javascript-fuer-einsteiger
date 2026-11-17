// Lösung zu Übung 8.4 – Kontobewegungen

const buchungen = [250, -40, -12.5, 1200, -680, -35];

// 1. Kontostand
let kontostand = 0;

for (const betrag of buchungen) {
  kontostand += betrag;
}

console.log("Kontostand:", kontostand);

// 2. Alle Ausgaben einsammeln
const ausgaben = [];

for (const betrag of buchungen) {
  if (betrag < 0) {
    ausgaben.push(betrag);
  }
}

console.log("Ausgaben:", ausgaben);

// 3. Erste große Ausgabe
const grosse = buchungen.find((betrag) => betrag < -100);

if (grosse === undefined) {
  console.log("Keine Ausgabe über 100 Euro.");
} else {
  console.log("Erste große Ausgabe:", grosse);
}

// 4. Einnahmen und Ausgaben getrennt
function teileBuchungen(buchungen) {
  let einnahmen = 0;
  let ausgaben = 0;

  for (const betrag of buchungen) {
    if (betrag > 0) {
      einnahmen += betrag;
    } else {
      ausgaben += betrag;
    }
  }

  return [einnahmen, ausgaben];
}

const ergebnis = teileBuchungen(buchungen);

console.log("Einnahmen:", ergebnis[0]);
console.log("Ausgaben:", ergebnis[1]);
