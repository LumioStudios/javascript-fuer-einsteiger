// Kapitel 3.3 – Regeln für Variablennamen

// Erlaubte Namen
const alter = 38;
const spieler2 = "Tom";
const _intern = true;

console.log(alter, spieler2, _intern);

// FEHLER: Name beginnt mit einer Ziffer
// const 2spieler = "Tom";

// FEHLER: Bindestrich wird als Minus gelesen
// const vor-name = "Lena";

// FEHLER: let ist ein reserviertes Wort
// const let = 5;

console.log();

// camelCase
const benutzerName = "Lena";
const anzahlArtikel = 3;
const istAngemeldet = true;

console.log(benutzerName, anzahlArtikel, istAngemeldet);

console.log();

// Schwer zu verstehen
const a = 19.99;
const b = 3;
const c = a * b;
console.log(c);

// Sofort verständlich
const einzelPreis = 19.99;
const menge = 3;
const gesamtPreis = einzelPreis * menge;
console.log(gesamtPreis);
