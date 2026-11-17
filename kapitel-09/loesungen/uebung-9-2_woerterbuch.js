// Kapitel 9 – Lösung zu Übung 9.2: Wörterbuch
// Ausführen: node uebung-9-2_woerterbuch.js

const woerterbuch = {
  hund: "dog",
  katze: "cat",
  haus: "house"
};

function uebersetze(wort) {
  if (wort in woerterbuch) {
    return woerterbuch[wort];
  }

  return "(unbekannt)";
}

function lerneWort(deutsch, englisch) {
  woerterbuch[deutsch] = englisch;
}

console.log(uebersetze("katze"));
console.log(uebersetze("baum"));

lerneWort("baum", "tree");
lerneWort("buch", "book");
console.log(uebersetze("baum"));

const anzahl = Object.keys(woerterbuch).length;
console.log("Bekannte Wörter: " + anzahl);

// Ausgabe:
// cat
// (unbekannt)
// tree
// Bekannte Wörter: 5
