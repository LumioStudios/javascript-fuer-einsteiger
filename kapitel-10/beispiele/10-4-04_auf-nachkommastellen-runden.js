// Kapitel 10.4: Das Math-Objekt
// Auf Nachkommastellen runden
// Ausführen im Ordner kapitel-10: node beispiele/10-4-04_auf-nachkommastellen-runden.js

const wert = 3.14159;

const gerundet = Math.round(wert * 100) / 100;

console.log(gerundet);
console.log(typeof gerundet);

// Ausgabe:
// 3.14
// number
