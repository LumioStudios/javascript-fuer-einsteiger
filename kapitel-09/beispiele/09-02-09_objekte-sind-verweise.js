// Kapitel 9, Abschnitt 9.2 – Objekte sind Verweise
// Ausführen: node 09-02-09_objekte-sind-verweise.js

const original = { farbe: "Rot" };
const zweiterName = original;

zweiterName.farbe = "Blau";

console.log(original.farbe);

// Ausgabe:
// Blau
