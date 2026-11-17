// Lösung zu Übung 10.3 – Preisrechner
// Ausführen im Ordner kapitel-10: node loesungen/uebung-10-3_preisrechner.js

function berechneBrutto(netto) {
  return netto * 1.19;
}

function alsEuro(betrag) {
  return betrag.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR"
  });
}

function zeigeRechnung(netto) {
  const brutto = berechneBrutto(netto);
  const steuer = brutto - netto;

  console.log(`Netto:      ${alsEuro(netto)}`);
  console.log(`MwSt. 19 %: ${alsEuro(steuer)}`);
  console.log(`Brutto:     ${alsEuro(brutto)}`);
  console.log("");
}

zeigeRechnung(84.03);
zeigeRechnung(9.99);
zeigeRechnung(1250);

// Ausgabe:
// Netto:      84,03 €
// MwSt. 19 %: 15,97 €
// Brutto:     100,00 €
//
// Netto:      9,99 €
// MwSt. 19 %: 1,90 €
// Brutto:     11,89 €
//
// Netto:      1.250,00 €
// MwSt. 19 %: 237,50 €
// Brutto:     1.487,50 €
