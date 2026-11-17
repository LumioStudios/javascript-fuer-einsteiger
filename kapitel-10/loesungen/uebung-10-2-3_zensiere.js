// Lösung zu Übung 10.2 – Textwerkzeuge
// Ausführen im Ordner kapitel-10: node loesungen/uebung-10-2-3_zensiere.js

function zensiere(text, wort) {
  let sterne = "";

  for (let i = 0; i < wort.length; i++) {
    sterne += "*";
  }

  return text.replaceAll(wort, sterne);
}

const satz = "Das ist doof, echt doof.";

console.log(zensiere(satz, "doof"));
console.log(zensiere(satz, "echt"));
console.log(zensiere(satz, "Doof"));

// Ausgabe:
// Das ist ****, echt ****.
// Das ist doof, **** doof.
// Das ist doof, echt doof.
