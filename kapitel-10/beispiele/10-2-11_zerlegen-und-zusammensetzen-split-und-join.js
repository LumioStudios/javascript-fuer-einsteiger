// Kapitel 10.2: Wichtige String-Methoden
// Zerlegen und zusammensetzen: split und join
// Ausführen im Ordner kapitel-10: node beispiele/10-2-11_zerlegen-und-zusammensetzen-split-und-join.js

const satz = "Heute lerne ich JavaScript";
const woerter = satz.split(" ");

console.log(`${woerter.length} Wörter`);
console.log(`Erstes Wort: ${woerter[0]}`);

// Ausgabe:
// 4 Wörter
// Erstes Wort: Heute
