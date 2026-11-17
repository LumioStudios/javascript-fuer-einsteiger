// Kapitel 10.2: Wichtige String-Methoden
// Suchen in Texten
// Ausführen im Ordner kapitel-10: node beispiele/10-2-06_suchen-in-texten.js

const email = "anna@beispiel.de";

console.log(email.includes("@"));
console.log(email.startsWith("anna"));
console.log(email.endsWith(".com"));
console.log(email.indexOf("@"));
console.log(email.indexOf("#"));

// Ausgabe:
// true
// true
// false
// 4
// -1
