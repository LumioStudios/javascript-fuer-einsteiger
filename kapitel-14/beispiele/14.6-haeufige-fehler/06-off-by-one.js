// Fehler 6: Eins zu viel oder zu wenig
// Starten mit: node 06-off-by-one.js

const farben = ["rot", "grün", "blau"];

for (let i = 1; i <= farben.length; i++) {
  console.log(farben[i]);
}

// Lösung:
// for (let i = 0; i < farben.length; i++) { … }
// oder einfacher:
// for (const farbe of farben) { … }
