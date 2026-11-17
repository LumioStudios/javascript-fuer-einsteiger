// Lösung zu Übung 14.2 – vier Programme, die je einen
// bestimmten Fehler auslösen.
// Jeder Teil steht in try/catch, damit alle vier
// nacheinander laufen. Teil 4 ist ein Syntaxfehler und
// steht deshalb nur als Kommentar da.
// Starten mit: node loesung-14-2.js

// 1. ReferenceError: berechnePreis is not defined
try {
  function berechnepreis(netto) {
    return netto * 1.19;
  }
  console.log(berechnePreis(100));
} catch (fehler) {
  console.log(`1. ${fehler.name}: ${fehler.message}`);
}

// 2. TypeError: Cannot read properties of undefined
try {
  const kunden = [];
  console.log(kunden[0].name);
} catch (fehler) {
  console.log(`2. ${fehler.name}: ${fehler.message}`);
}

// 3. TypeError: kunden.push is not a function
try {
  const kunden = {};
  kunden.push("Anna");
} catch (fehler) {
  console.log(`3. ${fehler.name}: ${fehler.message}`);
}

// 4. SyntaxError: Unexpected token '}'
// if (true) {
//   console.log("Hallo");
// }}
