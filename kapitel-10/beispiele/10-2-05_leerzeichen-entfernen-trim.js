// Kapitel 10.2: Wichtige String-Methoden
// Leerzeichen entfernen: trim
// Ausführen im Ordner kapitel-10: node beispiele/10-2-05_leerzeichen-entfernen-trim.js

const eingabe = "   Anna Schmidt  ";

console.log(`[${eingabe}]`);
console.log(`[${eingabe.trim()}]`);
console.log(eingabe.trim().length);

// Ausgabe:
// [   Anna Schmidt  ]
// [Anna Schmidt]
// 12
