// Kapitel 10.2: Wichtige String-Methoden
// Ausschneiden: slice
// Ausführen im Ordner kapitel-10: node beispiele/10-2-08_ausschneiden-slice.js

const email = "anna@beispiel.de";
const positionAt = email.indexOf("@");

const benutzer = email.slice(0, positionAt);
const domain = email.slice(positionAt + 1);

console.log(benutzer);
console.log(domain);

// Ausgabe:
// anna
// beispiel.de
