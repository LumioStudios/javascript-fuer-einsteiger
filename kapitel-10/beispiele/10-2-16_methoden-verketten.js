// Kapitel 10.2: Wichtige String-Methoden
// Methoden verketten
// Ausführen im Ordner kapitel-10: node beispiele/10-2-16_methoden-verketten.js

const eingabe = "  Frankfurt am Main ";

const kennung = eingabe
  .trim()
  .toLowerCase()
  .replaceAll(" ", "-");

console.log(kennung);

// Ausgabe:
// frankfurt-am-main
