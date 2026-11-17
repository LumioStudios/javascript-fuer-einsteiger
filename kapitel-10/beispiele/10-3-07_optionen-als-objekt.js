// Kapitel 10.3: Zahlen formatieren
// Optionen als Objekt
// Ausführen im Ordner kapitel-10: node beispiele/10-3-07_optionen-als-objekt.js

const anteil = 0.256;

const prozent = anteil.toLocaleString("de-DE", {
  style: "percent"
});

console.log(prozent);

// Ausgabe:
// 26 %
