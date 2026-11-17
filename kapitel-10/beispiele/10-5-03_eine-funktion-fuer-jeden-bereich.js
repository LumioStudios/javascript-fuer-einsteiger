// Kapitel 10.5: Zufallszahlen erzeugen
// Eine Funktion für jeden Bereich
// Ausführen im Ordner kapitel-10: node beispiele/10-5-03_eine-funktion-fuer-jeden-bereich.js

function zufallsZahl(min, max) {
  const anzahl = max - min + 1;
  return Math.floor(Math.random() * anzahl) + min;
}

console.log(zufallsZahl(1, 100));
console.log(zufallsZahl(10, 20));
console.log(zufallsZahl(1, 6));

// Ausgabe (Beispiel):
// 57
// 13
// 3
