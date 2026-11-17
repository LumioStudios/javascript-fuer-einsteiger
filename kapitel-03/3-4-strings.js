// Kapitel 3.4 – Strings (Texte)

const begruessung = "Guten Tag!";
const stadt = "Frankfurt am Main";
const leer = "";

console.log(begruessung);
console.log(stadt);
console.log(leer);

// Zahl und Text sehen in der Ausgabe gleich aus
const zahl = 42;
const text = "42";

console.log(zahl);
console.log(text);

console.log();

// Einfache und doppelte Anführungszeichen
console.log("Richtig");
console.log('Auch erlaubt');

// FEHLER: Anführungszeichen beendet den String
// const kaputt = "Sie sagte: "Hallo"";

// Anführungszeichen im Text mit Backslash
const satz = "Sie sagte: \"Hallo\"";
console.log(satz);

console.log();

// Escape-Sequenzen
console.log("Erste Zeile\nZweite Zeile");
console.log("Name:\tLena");
console.log("C:\\Benutzer\\lena");

console.log();

// Texte verbinden
const vorname = "Lena";
const nachname = "Berger";
const ganzerName = vorname + " " + nachname;

console.log(ganzerName);
