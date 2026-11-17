// Lösung zu Kapitel 7, Übung 7.3 – Schaltjahre

function istSchaltjahr(jahr) {
  if (jahr % 400 === 0) {
    return true;
  }

  if (jahr % 100 === 0) {
    return false;
  }

  return jahr % 4 === 0;
}

console.log("1900:", istSchaltjahr(1900));
console.log("2000:", istSchaltjahr(2000));
console.log("2024:", istSchaltjahr(2024));
console.log("2026:", istSchaltjahr(2026));

let anzahl = 0;

for (let jahr = 2000; jahr <= 2100; jahr++) {
  if (istSchaltjahr(jahr)) {
    anzahl++;
  }
}

console.log("Schaltjahre 2000–2100:", anzahl);
