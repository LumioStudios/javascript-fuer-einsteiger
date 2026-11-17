// Kapitel 10.4: Das Math-Objekt
// Größter und kleinster Wert: Math.max und Math.min
// Ausführen im Ordner kapitel-10: node beispiele/10-4-06_groesster-und-kleinster-wert-math-max-und.js

const temperaturen = [12, 18, 9, 21, 15];

console.log(Math.max(...temperaturen));
console.log(Math.min(...temperaturen));

// Ausgabe:
// 21
// 9
