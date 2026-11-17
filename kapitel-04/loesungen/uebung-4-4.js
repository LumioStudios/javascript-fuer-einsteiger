// Lösung zu Übung 4.4 – Der Freizeitpark
// Ausführen: node uebung-4-4.js
// Ändere die Werte, um andere Fälle zu testen.

const groesse = 150;
const alter = 12;
const hatGeburtstag = false;
const hatJahreskarte = true;

const darfFahren = groesse >= 140 && alter >= 10;
const faehrtKostenlos =
  hatGeburtstag || hatJahreskarte;

console.log("Darf fahren:", darfFahren);
console.log("Kostenlos:", faehrtKostenlos);

// Darf fahren, muss aber zahlen
const mussZahlen = darfFahren && !faehrtKostenlos;
console.log("Muss zahlen:", mussZahlen);
