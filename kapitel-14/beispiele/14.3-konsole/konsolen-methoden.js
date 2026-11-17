// Kapitel 14.3 – console.table, console.warn,
// console.error
// Starten mit: node konsolen-methoden.js
// oder in der Browser-Konsole einfügen.

const artikel = [
  { name: "Brot", preis: 2.5, menge: 1 },
  { name: "Milch", preis: 1.2, menge: 2 },
  { name: "Äpfel", preis: 0.6, menge: 6 }
];

console.table(artikel);

console.log("Programm gestartet");
console.warn("Kein Kurs gewählt, nehme Standard");
console.error("Element #ausgabe nicht gefunden");
