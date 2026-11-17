// Kapitel 10.3: Zahlen formatieren
// Optionen als Objekt
// Ausführen im Ordner kapitel-10: node beispiele/10-3-08_optionen-als-objekt.js

function alsEuro(betrag) {
  return betrag.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR"
  });
}

console.log(alsEuro(0.1 + 0.2));
console.log(alsEuro(19));
console.log(alsEuro(10.780000000000001));

// Ausgabe:
// 0,30 €
// 19,00 €
// 10,78 €
