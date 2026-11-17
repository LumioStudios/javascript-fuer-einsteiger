// Kapitel 10.2: Wichtige String-Methoden
// Zerlegen und zusammensetzen: split und join
// Ausführen im Ordner kapitel-10: node beispiele/10-2-10_zerlegen-und-zusammensetzen-split-und-join.js

const liste = "Äpfel, Birnen, Bananen";
const teile = liste.split(", ");

console.log(teile);
console.log(teile.length);

// Ausgabe:
// [ 'Äpfel', 'Birnen', 'Bananen' ]
// 3
