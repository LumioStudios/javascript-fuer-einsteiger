// Kapitel 7, Abschnitt 7.5: Standardwert: Mehrwertsteuer

function berechneBrutto(netto, steuersatz = 19) {
  return netto + netto * steuersatz / 100;
}

console.log(berechneBrutto(100));
console.log(berechneBrutto(100, 7));
