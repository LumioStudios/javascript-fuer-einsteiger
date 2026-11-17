// Kapitel 10.4: Das Math-Objekt
// Runden auf ganze Zahlen
// Ausführen im Ordner kapitel-10: node beispiele/10-4-03_runden-auf-ganze-zahlen.js

const personen = 23;
const plaetzeProAuto = 5;

const autos = Math.ceil(personen / plaetzeProAuto);

console.log(`Wir brauchen ${autos} Autos.`);

// Ausgabe:
// Wir brauchen 5 Autos.
