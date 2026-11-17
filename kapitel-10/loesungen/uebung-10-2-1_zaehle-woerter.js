// Lösung zu Übung 10.2 – Textwerkzeuge
// Ausführen im Ordner kapitel-10: node loesungen/uebung-10-2-1_zaehle-woerter.js

function zaehleWoerter(satz) {
  const bereinigt = satz.trim();

  if (bereinigt === "") {
    return 0;
  }

  return bereinigt.split(" ").length;
}

console.log(zaehleWoerter("Heute lerne ich JavaScript"));
console.log(zaehleWoerter("   Hallo Welt  "));
console.log(zaehleWoerter("Hallo"));
console.log(zaehleWoerter("   "));

// Ausgabe:
// 4
// 2
// 1
// 0
