// Lösung zu Übung 14.3
// Starten mit: node loesung-14-3.js

function zaehleLangeWoerter(satz) {
  const woerter = satz.split(" ");
  let anzahl = 0;

  for (let i = 0; i < woerter.length; i++) {
    const wort = woerter[i];   // i statt 1
    if (wort.length > 4) {
      anzahl++;                // statt anzahl + 1
    }
  }
  return anzahl;
}

const satz = "Heute lernen wir das Debuggen";
console.log(zaehleLangeWoerter(satz));
