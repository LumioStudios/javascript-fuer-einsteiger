// Lösung zu Übung 3.5 – Ein kleiner Rechner im Browser
// Nur im Browser ausführbar (prompt fehlt in Node.js)

const eingabe1 = prompt("Erste Zahl:");
const eingabe2 = prompt("Zweite Zahl:");

// Eingaben und ihr Datentyp
console.log("Eingabe 1:", eingabe1, typeof eingabe1);
console.log("Eingabe 2:", eingabe2, typeof eingabe2);

// Ohne Umwandlung
console.log("Ohne Number():", eingabe1 + eingabe2);

// Mit Umwandlung
const summe = Number(eingabe1) + Number(eingabe2);
console.log("Mit Number():", summe);
