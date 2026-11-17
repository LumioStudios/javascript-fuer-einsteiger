// Lösung zu Übung 8.2 – Notenstatistik

const noten = [2, 1, 3, 2, 4, 1, 2];

function berechneDurchschnitt(zahlen) {
  let summe = 0;

  for (const zahl of zahlen) {
    summe += zahl;
  }

  return summe / zahlen.length;
}

function findeBeste(zahlen) {
  let beste = zahlen[0];

  for (const zahl of zahlen) {
    if (zahl < beste) {
      beste = zahl;
    }
  }

  return beste;
}

let anzahlBesser = 0;

for (const note of noten) {
  if (note < 3) {
    anzahlBesser++;
  }
}

console.log("Durchschnitt:", berechneDurchschnitt(noten));
console.log("Beste Note:", findeBeste(noten));
console.log("Besser als 3:", anzahlBesser);

// Durchschnitt auf zwei Nachkommastellen runden
const durchschnitt = berechneDurchschnitt(noten);
console.log(Math.round(durchschnitt * 100) / 100);
