// Lösung zu Übung 4.5 – Der Zahlenvergleich im Browser
// Nur im Browser lauffähig, nicht mit Node.js

// Name mit Standardwert
const name = prompt("Wie heißt du?") || "Gast";
console.log("Hallo,", name);

// Eingaben direkt in Zahlen umwandeln
const zahl1 = Number(prompt("Erste Zahl:"));
const zahl2 = Number(prompt("Zweite Zahl:"));

console.log("Größer:", zahl1 > zahl2);
console.log("Kleiner:", zahl1 < zahl2);
console.log("Gleich:", zahl1 === zahl2);

// Beide Eingaben gültig?
const beideGueltig =
  !Number.isNaN(zahl1) && !Number.isNaN(zahl2);
console.log("Beide gültig:", beideGueltig);
