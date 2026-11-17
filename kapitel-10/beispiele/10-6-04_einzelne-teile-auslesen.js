// Kapitel 10.6: Datum und Uhrzeit mit Date – die Grundlagen
// Einzelne Teile auslesen
// Ausführen im Ordner kapitel-10: node beispiele/10-6-04_einzelne-teile-auslesen.js

const datum = new Date(2026, 10, 13, 17, 50);

console.log(datum.getFullYear());
console.log(datum.getMonth());
console.log(datum.getDate());
console.log(datum.getDay());
console.log(datum.getHours());
console.log(datum.getMinutes());

// Ausgabe:
// 2026
// 10
// 13
// 5
// 17
// 50
