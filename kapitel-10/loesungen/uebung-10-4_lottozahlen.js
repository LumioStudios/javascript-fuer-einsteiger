// Lösung zu Übung 10.4 – Lottozahlen
// Ausführen im Ordner kapitel-10: node loesungen/uebung-10-4_lottozahlen.js

function zufallsZahl(min, max) {
  const anzahl = max - min + 1;
  return Math.floor(Math.random() * anzahl) + min;
}

function zieheLottozahlen() {
  const zahlen = [];

  while (zahlen.length < 6) {
    const zahl = zufallsZahl(1, 49);

    if (!zahlen.includes(zahl)) {
      zahlen.push(zahl);
    }
  }

  return zahlen;
}

const lotto = zieheLottozahlen();

console.log(`Lottozahlen: ${lotto.join(", ")}`);
console.log(`Größte Zahl: ${Math.max(...lotto)}`);
console.log(`Kleinste Zahl: ${Math.min(...lotto)}`);

// Ausgabe (Beispiel):
// Lottozahlen: 31, 7, 48, 22, 13, 40
// Größte Zahl: 48
// Kleinste Zahl: 7
