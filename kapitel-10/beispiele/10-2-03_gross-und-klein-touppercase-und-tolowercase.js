// Kapitel 10.2: Wichtige String-Methoden
// Groß und klein: toUpperCase und toLowerCase
// Ausführen im Ordner kapitel-10: node beispiele/10-2-03_gross-und-klein-touppercase-und-tolowercase.js

const eingabe = "KÖLN";
const stadt = "Köln";

console.log(eingabe === stadt);
console.log(
  eingabe.toLowerCase() === stadt.toLowerCase()
);

// Ausgabe:
// false
// true
