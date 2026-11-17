// Kapitel 4.3 – Vergleichsoperatoren
// Ausführen: node 4-3_vergleichsoperatoren.js

// --- Größer und kleiner ---
let alter = 18;

console.log(alter > 18);
console.log(alter >= 18);
console.log(alter < 18);
console.log(alter <= 18);

// Ergebnis in einer Variablen speichern
alter = 16;
const istVolljaehrig = alter >= 18;

console.log("Volljährig:", istVolljaehrig);

// --- Gleich und ungleich mit === und !== ---
const passwort = "geheim123";

console.log(passwort === "geheim123");
console.log(passwort === "Geheim123");
console.log(passwort !== "geheim123");

console.log(5 === 5);
console.log(5 === "5");

// --- Lose Gleichheit mit == (nicht verwenden!) ---
console.log(5 == "5");
console.log(0 == false);
console.log(0 == "");

console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");

// --- Ein Sonderfall: NaN ---
console.log(NaN === NaN);

const eingabe = Number("zwölf");

console.log(eingabe);
console.log(Number.isNaN(eingabe));
console.log(Number.isNaN(12));

// --- Texte vergleichen ---
console.log("Apfel" < "Birne");
console.log("Anna" < "Andreas");

console.log("Zebra" < "apfel");
console.log("10" < "9");
console.log(10 < 9);
