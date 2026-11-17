// Übung 14.3 – Detektivarbeit mit console.log
// Enthält ABSICHTLICH zwei Fehler.
// Erwartet wird 3. Starten mit: node uebung-14-3.js

function zaehleLangeWoerter(satz) {
  const woerter = satz.split(" ");
  let anzahl = 0;

  for (let i = 0; i < woerter.length; i++) {
    const wort = woerter[1];
    if (wort.length > 4) {
      anzahl + 1;
    }
  }
  return anzahl;
}

const satz = "Heute lernen wir das Debuggen";
console.log(zaehleLangeWoerter(satz));
